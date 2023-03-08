import axios from 'axios';

import { parseSpotifySong } from './spotify-helper';

const getConfig = (token: string) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const getProfile = (token: string) => {
    const url = 'https://api.spotify.com/v1/me';
    axios.get(url, getConfig(token))
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

export const getCurrentlyPlayingTrack = async (token: string) => {
    console.log(token);
    const url = 'https://api.spotify.com/v1/me/player/currently-playing';
    return axios.get(url, getConfig(token))
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

export const searchSong = async (token: string, search: string) => {
    const url = `https://api.spotify.com/v1/search?q=${search}&limit=10&type=track`;
    return axios.get(url, getConfig(token))
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
