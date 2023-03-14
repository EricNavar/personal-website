import React from 'react';

import styled from '@emotion/styled';
import { Color } from '@jgleman/color-box';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Link, Typography } from '@mui/material';
import { FastAverageColor } from 'fast-average-color';

import { SpotifySongProps } from '../commonTypes';
import { SpotifySongSquare } from '../components/spotify-controller/SpotifySongSquare';
import { sortSongs } from '../util/sort-colors-songs';
import { getPlaylistDetails, getSongsFromPlaylist } from '../util/spotify-requests';

const SongContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
`;

const ColorifyButton = styled(LoadingButton)`
    margin-top: 12px;
    margin-bottom: 12px;
`;

const PlaylistArt = styled('img')`
    margin-right: 20px;
`;

const Details = styled('div')`
    display: flex;
    flex-wrap: wrap;
`;

const Header = styled(Link)`
    text-decoration: none;
`;

type PlaylistPageProps = {
    playlistId: string;
};

const PlaylistPage = (props: PlaylistPageProps) => {
    const [songs, setSongs] = React.useState<SpotifySongProps[]>([]);
    const [token, setToken] = React.useState('');
    const [totalPages, setTotalPages] = React.useState<null|number>(null);
    const [thumbnail, setThumbnail] = React.useState('');
    const [name, setName] = React.useState('');
    const [loading, setLoading] = React.useState<boolean>(false);
    // some songs may be null and they are later filtered out, so we need pagesRequested and can't just use the length of the songs array
    const [pagesRequested, setPagesRequested] = React.useState<number>(0);
    const limit = 100;

    const fetchPlaylistDetails = async () => {
        let data;
        if (!token) {
            return;
        }
        else if (token) {
            data = await getPlaylistDetails(token, props.playlistId);
            if (data) {
                setThumbnail(data.thumbnail);
                setName(data.name);
            }
        }
    };
    
    const fetchPlaylistSongs = async () => {
        let data;
        if (!token || totalPages !== null && totalPages <= pagesRequested) {
            return;
        }
        else if (token) {
            data = await getSongsFromPlaylist(token, props.playlistId, pagesRequested * limit);
            if (data) {
                if (!totalPages) {
                    setTotalPages(Math.ceil(data.totalSongs / 100));
                }
                setSongs([...songs, ...data.songs]);
                setPagesRequested((pagesRequested)=>pagesRequested+1);
            }
        }
    };

    React.useEffect(()=>{
        const storedToken = window.localStorage.getItem('token') || '';
        setToken(storedToken);
        fetchPlaylistDetails();
    });

    React.useEffect(() => {
        fetchPlaylistSongs();
    }, [token, pagesRequested]);

    const onClickColorify = async () => {
        setLoading(true);
        const fac = new FastAverageColor();
        const songsWithColors = await songs.map((song:SpotifySongProps) => {
            return fac.getColorAsync(song.thumbnail)
            .then(color => {
                return {
                    ...song,
                    averageColor: new Color(color.hex)
                };
            })
            .catch(e => {
                console.log(e);
                return song;
            });
        });
        Promise.all(songsWithColors).then(function(values) {
            const sortedSongs = sortSongs(values);
            setSongs(sortedSongs);
            setLoading(false);
        });
    };

    return (
        <div>
            <Header href='/colorify' variant='h3'>Colorify</Header>
            <Details>
                <PlaylistArt src={thumbnail}height="150px" width="150px"/>
                <div >
                    <Typography gutterBottom variant='h3'>{name}</Typography>
                    <Typography variant='body1'>{songs.length} songs</Typography>
                </div>            
            </Details>
            <ColorifyButton loading={loading} onClick={onClickColorify}>Colorify</ColorifyButton>

            <SongContainer>
                {songs && songs.map((item, index) => item && <SpotifySongSquare key={index} {...item} />)}
            </SongContainer>
        </div>
    );
};

export {PlaylistPage};
