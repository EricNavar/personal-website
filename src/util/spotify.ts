import axios from 'axios';

import { parseSpotifySong } from './spotify-helper';

const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN}`
    }
};

export const getProfile = () => {
    const url = 'https://api.spotify.com/v1/me';
    axios.get(url, config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

export const getCurrentlyPlayingTrack = async () => {
    const url = 'https://api.spotify.com/v1/me/player/currently-playing';
    return axios.get(url, config)
        .then(function (response) {
            return {
                isPlaying: response.data.is_playing,
                song: parseSpotifySong(response.data.item)
            };
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

export const searchSong = async (search: string) => {
    const url = `https://api.spotify.com/v1/search?q=${search}&limit=10&type=track`;
    return axios.get(url, config)
        .then(function (response) {
            if (response.data.tracks.items) {
                return response.data.tracks.items.map((song:any)=>parseSpotifySong(song));
            }
            else return [];
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};
