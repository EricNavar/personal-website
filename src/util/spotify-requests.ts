import axios from 'axios';

import { parseSpotifyPlaylist, parseSpotifySong } from './spotify-helper';
import { SpotifySongProps } from '../commonTypes';


const getConfig = (token: string) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const getCurrentlyPlayingTrack = async (token: string) => {
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

export const getPlaylists = async (token: string, page: number) => {
    const limit = 50;
    const offset = page * limit;
    const url = `https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`;
    return axios.get(url, getConfig(token))
        .then(function (response) {
            return {
                playlists: response.data.items.map((playlist: any)=> 
                    parseSpotifyPlaylist(playlist)
                ),
                totalPlaylists: response.data.total
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

type getPlaylistDetailsResponse = {
    songs: SpotifySongProps[];
    totalSongs: number;
    name: string;
    thumbnail: string;
}
export const getPlaylistDetails = async (token: string, playlistId: string, offset: number) => {
    const limit = 100;
    const url = `https://api.spotify.com/v1/playlists/${playlistId}?limit=${limit}&offset=${offset}`;
    return axios.get(url, getConfig(token))
        .then(function (response) {
            const result: getPlaylistDetailsResponse = {
                songs: response.data.tracks.items
                    .filter((item: any) => item.track !== null)
                    .map((item: any) => parseSpotifySong(item.track)),
                totalSongs: response.data.tracks.total,
                name: response.data.name,
                thumbnail: response.data.images[0].url,
            };
            return result;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};
