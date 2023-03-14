import React from 'react';

import { Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SpotifyPlaylistProps } from '../../commonTypes';

const SongCard = styled('div')`
    background: gray;
    display: flex;
    margin-bottom: 12px;
`;

const TextContainer = styled('div')`
    padding: 8px;
`;

const SpotifyPlaylist = (props: SpotifyPlaylistProps) => {
    return (
        <SongCard>
            <img src={props.thumbnail} height="80px" width="80px" />
            <TextContainer>
                <Typography variant='body1'>{props.name}</Typography>
                <Link style={{marginRight: 16}} variant='body1' href={props.link}>Link</Link>
                <Link variant='body1' href={`/colorify/${props.id}`}>Colorify</Link>
            </TextContainer>
        </SongCard>
    );
};

export {SpotifyPlaylist};
