import Plyr from 'plyr';



export function plyrPlayer() {
    const players = Plyr.setup('.js-player',
        {
            fullscreen: { enabled: false, fallback: true, iosNative: false },
            hideControls: true,
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
        });
}