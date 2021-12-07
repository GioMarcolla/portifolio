import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useEffect, useState } from 'react'

interface Props {}

interface Song {
    id: number,
    name: string,
    artist: string,
    url: string
}

const playlist: Array<Song> = [{
    id: 0,
    name: 'Where have you been, my disco?',
    artist: 'IV of Spades',
    url: ''
}, {
    id: 1,
    name: 'Crazy diamond',
    artist: 'Pink Floyd',
    url: ''
}, {
    id: 2,
    name: '2 minutes to midnight',
    artist: 'Iron Maiden',
    url: ''
}, {
    id: 3,
    name: 'WWC',
    artist: 'The Main Squeeze',
    url: ''
}, {
    id: 4,
    name: 'Heal the world',
    artist: 'Micheal Jackson',
    url: ''
}, {
    id: 5,
    name: 'Circle of Life',
    artist: 'Elton John',
    url: ''
}, {
    id: 6,
    name: 'Voxifera',
    artist: 'ERA',
    url: ''
}, {
    id: 7,
    name: 'Rylyn',
    artist: 'Andy McKee',
    url: ''
}, {
    id: 8,
    name: 'Hurt',
    artist: 'Johnny Cash',
    url: ''
}, {
    id: 9,
    name: 'Again',
    artist: 'Yui',
    url: ''
}, {
    id: 10,
    name: 'Damn!!',
    artist: 'Stamp',
    url: ''
}, {
    id: 11,
    name: 'Labios compartidos',
    artist: 'Maná',
    url: ''
}]

const AudioPlayer: NextPage<Props> = () => {
    const [track, changeTrack] = useState(Math.floor(Math.random() * playlist.length))
    let handleForward = () => {
        changeTrack
    }

    return (
        <Box>
            
        </Box>
    )
}

export default AudioPlayer