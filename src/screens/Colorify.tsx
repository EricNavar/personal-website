import React from 'react';

import { Button, styled, TextField, Typography } from '@mui/material';

import { SpotifyPlaylistProps } from '../commonTypes';
import { SpotifyLogin } from '../components/spotify-controller/SpotifyLogin';
import { SpotifyPlaylist } from '../components/spotify-controller/SpotifyPlaylist';
import { getPlaylists } from '../util/spotify-requests';

const ScrollableArea = styled('div')`
    height: calc(100vh - 300px);
    overflow: scroll;
    padding-right: 15px;
`;

const Colorify = () => {
    const limit = 50; // playlists per request;
    const [search, setSearch] = React.useState('');
    const [token, setToken] = React.useState('');

    const [playlists, setPlaylists] = React.useState<SpotifyPlaylistProps[]>([]);
    const [filteredPlaylists, setFilteredPlaylists] = React.useState<SpotifyPlaylistProps[]>([]);
    const [totalPlaylists, setTotalPlaylists] = React.useState<number>(0);
    const [page, setPage] = React.useState<number>(0);
    const totalPages = Math.ceil(totalPlaylists / limit);

    const fetchPlaylists = async () => {
        let data;
        if (token) {
            data = await getPlaylists(token, page);
        }
        if (data) {
            setPlaylists(data.playlists);
            setTotalPlaylists(data.totalPlaylists);
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
        setToken(token);
    }, []);

    React.useEffect(() => {
        fetchPlaylists();
    }, [token, page]);

    const onChangeSearch = (event: any) => {
        event.preventDefault(); // is this necessary?
        setSearch(event.target.value);
    };

    const onSubmitSearch = async () => {
        setFilteredPlaylists(playlists.sort());
    };

    const onClickPage = (newPage: number) => {
        setPage(newPage);
    };

    console.log(playlists);

    return (
        <div>
            <Typography variant='h3'>Colorify</Typography>
            {!token && <SpotifyLogin />}
            {playlists.length > 0 &&
                <>
                    <form>
                        <TextField
                            value={search}
                            onChange={onChangeSearch}
                            size='small'
                            placeholder='Search your playlists'
                        />
                    </form>
                    <Button onClick={onSubmitSearch}>Search</Button>
                    <ScrollableArea>
                        {playlists.map((playlist, index) => <SpotifyPlaylist key={index} {...playlist}/>)}
                    </ScrollableArea>
                    {Array.from({length: totalPages}, (x, i) => i + 1).map((page: number, index: number) =>
                        <Button key={index} onClick={() => onClickPage(index)}>{index + 1}</Button>
                    )}
                </>
            }
        </div>

    );
};

export { Colorify };
