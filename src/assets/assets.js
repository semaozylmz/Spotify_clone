import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import install_icon from './install.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './songs/song1.mp3'
import song2 from  './songs/song2.mp3'
import song3 from  './songs/song3.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    install_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Top global hits of the week.",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 Turkey",
        image: img9,
        desc:"Turkey's most popular tracks.",
        bgColor:"#742a2a"
    },
    {   
        id:2,
        name: "Trending Turkey",
        image: img10,
        desc:"The hottest tracks from Turkey.",
        bgColor:"#22543d"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"The world’s top music trends.",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Unmissable chart-toppers.",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your daily dose of joy.",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Happiness",
        image: img1,
        file:song1,
        desc:"Feel the joy and let the good vibes flow with every beat.",
        duration:"3:00"
    },
    {
        id:1,
        name: "Sadness",
        image: img2,
        file:song2,
        desc:"Embrace the melancholy and let your heart find peace in the rhythm.",
        duration:"2:20"
    },
    {
        id:2,
        name: "Peace",
        image: img3,
        file:song3,
        desc:"A calming melody to help you find serenity and balance.",
        duration:"2:32"
    },
    {
        id:3,
        name: "Curiosity",
        image: img4,
        file:song1,
        desc:"A track that awakens your senses and sparks your desire to explore.",
        duration:"2:50"
    },
    {
        id:4,
        name: "Anxious",
        image: img5,
        file:song2,
        desc:"Let the music guide you through your worries and bring comfort to your soul.",
        duration:"3:10"
    },
    {
        id:5,
        name: "Tired",
        image: img14    ,
        file:song3,
        desc:"Unwind and relax with this soothing track, perfect for a restful moment.",
        duration:"2:45"
    },
    {
        id:6,
        name: "Nostalgia",
        image: img7,
        file:song1,
        desc:"A journey back in time, evoking memories of days gone by.",
        duration:"2:18"
    },
    {
        id:7,
        name: "Love",
        image: img12,
        file:song2,
        desc:"Feel the warmth and passion of love with every note.",
        duration:"2:35"
    }
]