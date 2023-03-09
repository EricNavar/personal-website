import React from 'react';

import { Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SpotifyPlaylistProps } from '../../commonTypes';

const SongCard = styled('div')`
    border-radius: 8px;
    background: gray;
    display: flex;
    margin-bottom: 12px;
`;

const SpotifyPlaylist = (props: SpotifyPlaylistProps) => {
    return (
        <SongCard>
            <img src={props.thumbnail} height="64px" width="64px" />
            <div>
                <Typography variant='body1'>{props.name}</Typography>
                <Link href={props.link}>link</Link><br/>
                <Link href={`/colorify/${props.id}`}>Colorify</Link>
            </div>
        </SongCard>
    );
};

export {SpotifyPlaylist};
