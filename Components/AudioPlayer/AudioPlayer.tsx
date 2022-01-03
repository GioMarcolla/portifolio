import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode"
import { NextPage } from "next";
import { useEffect, useRef, useState } from 'react'
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, VolumeIcon } from "../Icons/Icons";
import { InfoIcon } from "@chakra-ui/icons";


interface Props { }

interface Song {
    id: number,
    name: string,
    artist: string,
    url: string,
    thumb: string
}

const playlist: Array<Song> = [{
    id: 0,
    name: 'Where have you been, my disco?',
    artist: 'IV of Spades',
    url: './songs/IV OF SPADES - Where Have You Been, My Disco.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 1,
    name: 'Shine On You Crazy Diamond',
    artist: 'Pink Floyd',
    url: './songs/Pink Floyd - Shine On You Crazy Diamond.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 2,
    name: '2 minutes to midnight',
    artist: 'Iron Maiden',
    url: './songs/Iron Maiden - 2 Minutes To Midnight.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 3,
    name: 'WWC',
    artist: 'The Main Squeeze',
    url: './songs/The Main Squeeze - WWC.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 4,
    name: 'Heal the world',
    artist: 'Micheal Jackson',
    url: '/songs/Michael Jackson - Heal The World.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 5,
    name: 'Circle of Life',
    artist: 'Elton John',
    url: '/songs/Elton John - Circle of Life.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 6,
    name: 'Voxifera',
    artist: 'ERA',
    url: './songs/ERA - Voxifera.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 7,
    name: 'Rylynn',
    artist: 'Andy McKee',
    url: './songs/Andy McKee - Rylynn.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 8,
    name: 'Hurt',
    artist: 'Johnny Cash',
    url: './songs/Johnny Cash - Hurt.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 9,
    name: 'Again',
    artist: 'Yui',
    url: './songs/YUI - Again.mp3',
    thumb: 'https://picsum.photos/500/500'
}, {
    id: 10,
    name: 'Damn!!',
    artist: 'Stamp',
    url: './songs/STAMP -  Damn!!.mp3',
    thumb: 'https://picsum.photos/500/500'
}]

const AudioPlayer: NextPage<Props> = () => {
    const [track, changeTrack] = useState(Math.floor(Math.random() * playlist.length))
    const [isPlaying, setPlaying] = useState(false)
    const [trackTime, setTrackTimer] = useState(0)

    const audioElement = useRef(new Audio(playlist[track].url))

    let updateTimer = () => {
        if (audioElement.current.ended) {
            if (track < playlist.length - 1) {
                changeTrack(track + 1)
            } else {
                changeTrack(0)
            }
        } else {
            setTrackTimer(trackTime + 0.1)
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(updateTimer, 100)
        }
    }

    const timerRef = useRef(setTimeout(updateTimer, 100))

    //Change track hook
    useEffect(() => {
        audioElement.current.pause()
        audioElement.current.src = playlist[track].url
        setTrackTimer(0)
        audioElement.current.currentTime = 0
        audioElement.current.play()

    }, [track])

    // Play pause hook
    useEffect(() => {
        if (isPlaying) {
            audioElement.current.pause()
        } else {
            audioElement.current.play()
        }
    }, [isPlaying])

    //Cleanup hook
    useEffect(() => {
        return () => {
            audioElement.current.pause()
            clearTimeout(timerRef.current)
        }
    }, [])

    let getTrackTime = () => {
        if (audioElement.current.duration) {
            const cMin = Math.floor(audioElement.current.currentTime / 60)
            const cMinText = cMin > 9 ? cMin.toString() : "0" + cMin.toString()
            const cSec = Math.floor(audioElement.current.currentTime % 60)
            const cSecText = cSec > 9 ? cSec.toString() : "0" + cSec.toString()
            const tMin = Math.floor(audioElement.current.duration / 60)
            const tMinText = tMin > 9 ? tMin.toString() : "0" + tMin.toString()
            const tSec = Math.floor(audioElement.current.duration % 60)
            const tSecText = tSec > 9 ? tSec.toString() : "0" + tSec.toString()
            return (cMinText + ":" + cSecText + " / " + tMinText + ":" + tSecText)
        } else {
            return "00:00 / 00:00"
        }
    }
    return (
        <Box
            display='flex'
            backgroundColor={useColorModeValue('red', 'bg.dark.200')}
            w='100%'
            p='0.5rem'
            borderRadius={'0.5rem'}
        >
            <Flex
                flexDir='column'
                p='1rem'
                pb={0}
                w='100%'
            >
                <Flex
                    flexDir='row'
                    pb='1rem'
                >
                    <Box borderRadius='50%' pr='1rem'>
                        <Image height='4rem' src={playlist[track].thumb} alt={playlist[track].artist + '' + playlist[track].name + ' album thumbnail.'} />
                    </Box>
                    <Box>
                        <Text fontSize='2xl'>{playlist[track].name}</Text>
                        <Text fontSize='1xl'>{playlist[track].artist}</Text>
                    </Box>
                </Flex>
                <Slider
                    aria-label='slider'
                    onChangeEnd={(val) => audioElement.current.currentTime = val}
                    onChange={(val) => audioElement.current.currentTime = val}
                    defaultValue={0}
                    min={0}
                    max={audioElement.current.duration || 0}
                    value={audioElement.current.currentTime}
                >
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='accent.dark.3' filter='url(#inset-shadow)'/>
                    </SliderTrack>
                    <SliderThumb boxSize={4} >
                        <Box />
                    </SliderThumb>
                </Slider>
                <Flex justifyContent={'space-between'} pt='1rem'>
                    <Box>
                        <Button bg='none' onClick={() => track >= 1 ? changeTrack(track - 1) : changeTrack(playlist.length - 1)} p={0}>
                            <PrevIcon />
                        </Button>
                        <Button bg='none' onClick={() => setPlaying(!isPlaying)} p={0}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </Button>
                        <Button bg='none' onClick={() => track < playlist.length - 1 ? changeTrack(track + 1) : changeTrack(0)} p={0}>
                            <NextIcon />
                        </Button>
                        <Button bg='none' p={0}>
                            <VolumeIcon />
                        </Button>
                    </Box>
                    <Box>
                        <Text fontSize='2xl' variant='industrial'>{getTrackTime()}</Text>
                    </Box>
                </Flex>
            </Flex>
            {/* Modal asking permission to play, use checkbox to verify */}
        </Box>
    )
}

export default AudioPlayer