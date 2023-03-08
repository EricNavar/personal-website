export const parseSpotifySong = (spotifySong: any) => {
    if (spotifySong) {
        return {
            title: spotifySong.name as string || '',
            artists: spotifySong.artists.map((artist:any) => artist.name) || '',
            thumbnail: spotifySong.album.images[1].url as string || ''
        };
    }
    else return null;
};
