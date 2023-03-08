import React from 'react';

import { Button, TextField, Typography } from '@mui/material';

import { SpotifySongProps } from '../commonTypes';
import { SpotifyLogin } from '../components/SpotifyLogin';
import { SpotifySong } from '../components/SpotifySong';
import { getCurrentlyPlayingTrack, searchSong } from '../util/spotify-requests';

const SpotifyController = () => {
    const [currentlyListeningTo, setCurrentlyListeningTo] = React.useState<SpotifySongProps|null>(null);
    const [isCurrentlyListening, setIsCurrentlyListening] = React.useState<boolean>(false);
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState<SpotifySongProps[]>([]);
    const [token, setToken] = React.useState('');
    
    const fetchCurrentlyListeningTo = async () => {
        const data = await getCurrentlyPlayingTrack(token);
        if (data) {
            setIsCurrentlyListening(data.isPlaying);
            const song = data.song;
            setCurrentlyListeningTo(song);
        }
    };

    React.useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token') || '';
    
        if (!token && hash) {
            console.log('token not found');
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')) || '';
            if (token) {
                token = token.split('=')[1];
            }
            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }
        fetchCurrentlyListeningTo();
        setToken(token);
    }, []);   

    const onChangeSearch = (event: any) => {
        event.preventDefault(); // is this necessary?
        setSearch(event.target.value);
    };

    const onSubmitSearch = async () => {
        const newSearch = search.trim();
        if (newSearch !== '') {
            const data = await searchSong(token, newSearch);
            setSearchResults(data);
        }
    };

    return (
        <div>
            <SpotifyLogin />
            {currentlyListeningTo && 
                <>
                    <Typography variant='body1'>Currently listening to:</Typography>
                    <SpotifySong {...currentlyListeningTo} isCurrentlyPlaying={isCurrentlyListening} />
                </>
            }
            <form>
                <TextField
                    value={search}
                    onChange={onChangeSearch}
                    size='small'
                />
                <Button onClick={onSubmitSearch}>Search</Button>
                {searchResults.map((item, index) => <SpotifySong key={index} {...item} />)}
            </form>
        </div>

    );
};

export {SpotifyController};
