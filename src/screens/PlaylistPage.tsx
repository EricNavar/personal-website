import React from 'react';

import styled from '@emotion/styled';

import { SpotifySongProps } from '../commonTypes';
import { SpotifySongSquare } from '../components/spotify-controller/SpotifySongSquare';
import { getSongsFromPlaylist } from '../util/spotify-requests';
import { Typography } from '@mui/material';

const SongContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
`;

type PlaylistPageProps = {
    playlistId: string;
};

const PlaylistPage = (props: PlaylistPageProps) => {
    const [songs, setSongs] = React.useState<SpotifySongProps[]>([]);
    const [token, setToken] = React.useState('');

    const fetchSongs = async () => {
        let data;
        if (token) {
            data = await getSongsFromPlaylist(token, props.playlistId);
            if (data) {
                setSongs(data);
            }
        }
    };

    React.useEffect(()=>{
        const storedToken = window.localStorage.getItem('token') || '';
        setToken(storedToken);
    });

    React.useEffect(() => {
        fetchSongs();
    }, [token]);


    return (
        <div>
            <Typography variant='h3'>Playlist name</Typography>
            <Typography variant='body1'>{songs.length} songs</Typography>
            <br/>
            <SongContainer>
                {songs && songs.map((item, index) => <SpotifySongSquare key={index} {...item} />)}
            </SongContainer>
        </div>
    );
};

export {PlaylistPage};
