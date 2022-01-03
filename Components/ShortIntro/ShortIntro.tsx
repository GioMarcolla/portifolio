import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import SkewedAlbum from "../SkewedAlbum/SkewedAlbum"
import GridAlbum from "../GridAlbum/GridAlbum"
import dynamic from 'next/dynamic'
import { NextPage } from "next"

interface Props {}

const AudioPlayerNoSSR = dynamic(
    () => import("../AudioPlayer/AudioPlayer"), 
    {ssr: false}
)

const ShortIntro: NextPage<Props> = () => {
    return (
        <Box
            id='Intro'
            display='flex'
            flexDir='row'
            w={{ base: '100%', md: '90%' }}
            mx={{ base: '0', md: 'auto' }}
            pt={{ base: '1rem', md: '12rem' }}
            pb={{ base: '1rem', md: '8rem' }}
            pos='relative'
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
        >
            <Flex
                as={Flex}
                flexDir='column'
                position='relative'
                w={{ base: 'max-content', md: '47%' }}
                minW={{ base: 'unset', md: '643px' }}
                px={{ base: '5%', md: 0 }}
                // pb='2rem'
                mx={{ base: 'auto', md: '0' }}
                zIndex={2}
                h='100%'
                bg={useColorModeValue('linear-gradient(90deg, bg.light, bg.lightA, transparent)',
                    'linear-gradient(90deg, var(--chakra-colors-bg-dark-100), var(--chakra-colors-bg-dark-100), transparent)')}
            >
                <Heading
                    fontSize='6xl'
                    fontWeight='bold'
                    variant='industrial'
                    bg={useColorModeValue('black', 'white')}
                    backgroundClip='text'
                    filter='url(#inset-shadow)'
                    justifyContent='center'
                    lineHeight={1}
                >
                    GIOVANNI MARCOLLA
                </Heading>
                <Divider
                    mb={4}
                    // border='none'
                    opacity={1}
                    h='2px'
                    w='100%'
                    bg={{ base: useColorModeValue('accent.light', 'accent.dark'), md: useColorModeValue('linear-gradient(90deg, var(--chakra-colors-accent-light) 30%, var(--chakra-colors-accent-light) 30%, transparent 90%, transparent 92%)', 'linear-gradient(90deg, var(--chakra-colors-accent-dark), transparent 90%, transparent 92%)') }}
                />
                <Heading
                    fontSize={{ base: '2xl', md: '3xl' }}
                    lineHeight={1}
                    textAlign={{ base: 'center', md: 'justify' }}
                >
                    Engineer, Teacher, Pet Lover, Music Aficionado
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} pt='1rem' textAlign={'justify'}>
                    In this website you will find information about myself, both professional and personal.
                    This website is also an eternal beta, always been modified and improved. Found something broken? Just send me an email and I'll fix it a soon as possible.
                </Text>

                <Flex
                    w='100%'
                    m='auto'
                    mb={0}
                >
                   <AudioPlayerNoSSR />
                </Flex>
                {/* <Text fontSize={{ base: 'lg', md: 'xl' }}>Your time is valuable, give it to those who care.</Text>
                <Text fontSize={{ base: 'lg', md: 'xl' }}>The most important you can acquire is knowledge.</Text> */}
                {/* <Text fontSize={{ base: 'lg', md: 'xl' }}>Passing knowledge to others will forever bring you joy.</Text> */}
            </Flex>

            <SkewedAlbum />
            <GridAlbum />
        </Box>
    )
}

export default ShortIntro