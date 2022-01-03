import { NextPage } from 'next'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/layout'

interface Props { }

const SkewedAlbum: NextPage<Props> = () => {
    const hoverShadow = useColorModeValue('0 0 8px #88BBEE', '0 0 8px var(--chakra-colors-accent-dark-3)')
    
    interface Section {
        id: number,
        name: string,
        url: string
    }

    const sections:Array<Section> = [{
        id: 0,
        name: 'Pets',
        url: ''
    }, {
        id: 1,
        name: 'Engineering',
        url: ''
    }, {
        id: 2,
        name: 'Teaching',
        url: ''
    }, {
        id: 3,
        name: 'Webdev',
        url: ''
    }]
    return (
        <Box
            display={{ base: 'none', md: 'flex' }}
            zIndex={1}
            pos="absolute"
            right={'1rem'}
            style={{ perspective: '70rem' }}
        >
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
                h='40vw'
                w='50vw'
                minH='470px'
                minW='30em'
                maxH='60vh'
                maxW='75vh'
                transform='rotateY(-15deg)'
            >
                {sections.map((section) => {
                    return <GridItem
                        key={'sa' + section.id}
                        colSpan={1}
                        rowSpan={1}
                        bg={'url(https://picsum.photos/id/'+ Math.floor(Math.random() * 100) +'/1000/1000)'}
                        bgSize='cover'
                        d='flex'
                        alignItems='end'
                        justifyContent='end'
                        _hover={{
                            boxShadow: hoverShadow
                        }}
                    >
                        <Text
                            fontSize='xl'
                            variant='industrial'
                            fontWeight='bold'
                            letterSpacing='2px'
                            mb='0.5rem'
                            color={useColorModeValue('accent.light', 'accent.dark')}
                            filter='url(#inset-shadow)'
                            style={{
                                textOrientation: 'upright',
                                writingMode: 'vertical-rl',
                            }}
                        >
                            {section.name}
                        </Text>
                    </GridItem>
                })}
            </Grid>
        </Box>
    )
}

export default SkewedAlbum