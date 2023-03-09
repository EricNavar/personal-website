import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import PlayingIcon from '../../assets/icons/sound_200.gif';
import { SpotifySongProps } from '../../commonTypes';

const SongCard = styled('div')`
    border-radius: 8px;
    background: gray;
    display: flex;
    padding: 12px;
    margin-bottom: 12px;
`;

const SpotifySongSquare = (props: SpotifySongProps & {isCurrentlyPlaying?: boolean}) => {
    const handlePlayClick = () => {
        console.log('request to play', props.title);
    };

    return (
        <SongCard>
            <img src={props.thumbnail} height="64px" width="64px" />
            <div>
                <Typography variant='body1'>{props.title}</Typography>
                <Typography variant='body2'>{props.artists}</Typography>
            </div>
            {props.isCurrentlyPlaying ?
                <img height="24px" width="24px" src={PlayingIcon}/>
                : <button onClick={handlePlayClick}>Play</button>
            }
        </SongCard>
    );
};

export {SpotifySongSquare};
