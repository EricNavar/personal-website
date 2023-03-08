import axios from 'axios';

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
                song: {
                    title: response.data.item?.name as string || '',
                    artists: response.data.item?.artists.map((artist:any) => artist.name) || '',
                    thumbnail: response.data.item?.album.images[1].url as string || ''
                }
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
    const url = `https://api.spotify.com/v1/search?q=${search}&limit=10`;
    axios.get(url, config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};
