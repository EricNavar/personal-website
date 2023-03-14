import React from 'react';

import { Link } from '@mui/material';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = 'https://ericnavar.com/colorify/';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'app-remote-control',
    'streaming',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public',
    'user-follow-modify',
    'user-follow-read',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
    'user-library-modify',
    'user-library-read',
    'user-read-email',
    'user-read-private'
];

const createScopeString = () => {
    let result = '';
    scopes.forEach((scope)=>result = result + scope + '%20');
    return result.substring(0,result.length - 3);
};

const SpotifyLogin = () => {
    const authorizationEndpoint = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${createScopeString()}`;
    return (
        <Link variant='body1' href={authorizationEndpoint}>Login to Spotify</Link>
    );
};

export {SpotifyLogin};
