import React from 'react';

import { Button, TextField, Typography } from '@mui/material';

import { SpotifySongProps } from '../commonTypes';
import { SpotifySong } from '../components/SpotifySong';
import { getCurrentlyPlayingTrack, searchSong } from '../util/spotify';

const SpotifyController = () => {
    const [currentlyListeningTo, setCurrentlyListeningTo] = React.useState<SpotifySongProps|null>({
        title: 'Out of Time',
        artists: ['The Weeknd'],
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png'
    });
    const [isCurrentlyListening, setIsCurrentlyListening] = React.useState<boolean>(false);
    const [search, setSearch] = React.useState('');
    
    const onChangeSearch = (event: any) => {
        event.preventDefault(); // is this necessary?
        setSearch(event.target.value);
    };

    const onSubmitSearch = () => {
        const newSearch = search.trim();
        if (newSearch !== '') {
            searchSong(search);
        }
    };

    React.useEffect(()=>{
        const fetchData = async () => {
            const data = await getCurrentlyPlayingTrack();
            if (data) {
                setIsCurrentlyListening(data.isPlaying);
                const song: SpotifySongProps = data.song;
                setCurrentlyListeningTo(song);
            }
        };
        fetchData();
    },[]);

    return (
        <div>
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
            </form>
        </div>

    );
};

export {SpotifyController};
