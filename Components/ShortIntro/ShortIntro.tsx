import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import SkewedAlbum from "../SkewedAlbum/SkewedAlbum"
import GridAlbum from "../GridAlbum/GridAlbum"
import AudioPlayer from "../AudioPlayer/AudioPlayer"

const ShortIntro = () => {
    return (
        <Box
            id='Intro'
            display='flex'
            flexDir={{ base: 'column', md: 'row' }}
            w={{ base: '100%', md: '90%' }}
            mx={{ base: '0', md: 'auto' }}
            paddingBottom={{ base: '1rem', md: '8rem' }}
            pos='relative'
            h={{ base: 'auto', md: '100vh' }}
            alignItems={{ base: 'center', md: 'flex-end' }}
        >
            <Flex
                as={Flex}
                flexDir='column'
                position='relative'
                alignItems={{ base: 'center', md: 'flex-start' }}
                w={{ base: 'max-content', md: '48%' }}
                minW={{ base: 'unset', md: '30em' }}
                px={{ base: '5%', md: 0 }}
                py={{ base: 0, md: 8 }}
                mx={{ base: 'auto', md: '0' }}
                zIndex={2}
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
                    border='none'
                    h='2px'
                    w='98%'
                    bg={{ base: useColorModeValue('black', 'accent.dark.3'), md: useColorModeValue('black', 'linear-gradient(90deg, var(--chakra-colors-accent-dark-3), transparent 90%, transparent 92%)') }}
                />
                <Heading
                    fontSize={{ base: '2xl', md: '3xl' }}
                    lineHeight={1}
                    textAlign={{ base: 'center', md: 'start' }}
                >
                    Engineer, Teacher, Pet Lover, Music Aficionado
                </Heading>
                <Box
                    maxH='4rem'
                >
                    <AudioPlayer />
                </Box>
                {/* <Text fontSize={{ base: 'lg', md: 'xl' }}>Your time is valuable, give it to those who care.</Text>
                <Text fontSize={{ base: 'lg', md: 'xl' }}>The most important you can acquire is knowledge.</Text>
                <Text fontSize={{ base: 'lg', md: 'xl' }}>There is always something new and exiting to learn.</Text>
                <Text fontSize={{ base: 'lg', md: 'xl' }}>Passing knowledge to others will forever bring you joy.</Text> */}
            </Flex>
            <SkewedAlbum />
            <GridAlbum />
        </Box>
    )
}

export default ShortIntro