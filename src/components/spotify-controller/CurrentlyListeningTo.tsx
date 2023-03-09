import React from 'react';

import { styled, Typography } from '@mui/material';

import { SpotifySongProps } from '../../commonTypes';

const SongCard = styled('div')`
    border-radius: 8px;
    background: gray;
    display: flex;
    padding: 12px;
    margin-bottom: 12px;
`;

type CurrentlyListeningToProps = {
    isPlaying: boolean;
    song: SpotifySongProps;
};

const CurrentlyListeningTo = (props: CurrentlyListeningToProps) => {
    const {isPlaying, song} = props;

    return (
        <div>
            <Typography variant='body1'>
                {isPlaying ? 'Currently listening to' : 'Last listened to'}
            </Typography>
            <SongCard>
                <img src={song.thumbnail} height="64px" width="64px" />
                <div>
                    <Typography variant='body1' style={{fontSize:20}}>{song.title}</Typography>
                    <Typography variant='body2' style={{fontSize:16}}>{song.artists}</Typography>
                </div>
            </SongCard>
        </div>
    );
};

export {CurrentlyListeningTo};
