import { NextPage } from 'next'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/layout'

interface Props { }

const SkewedAlbum: NextPage<Props> = () => {
    const hoverShadow = useColorModeValue('0 0 8px #88BBEE', '0 0 8px var(--chakra-colors-accent-dark-3)')

    return (
        <Box
            display={{ base: 'none', md: 'flex' }}
            // w='max-content'
            ml='auto'
            mr='1rem'
            style={{ perspective: '70rem' }}
        >
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
                h='40vw'
                w='40vw'
                minH='25em'
                minW='25em'
                maxH='60vh'
                maxW='60vh'
                gridAutoFlow='dense'
                transform='rotateY(-15deg)'
            >
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    bg='url(https://picsum.photos/id/70/1000/1000)'
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
                        color='accent.dark.3'
                        filter='url(#inset-shadow)'
                        style={{
                            textOrientation: 'upright',
                            writingMode: 'vertical-rl',
                        }}
                    >
                        PETS
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    bg='url(https://picsum.photos/id/40/1000/1000)'
                    bgSize='cover'
                    d='flex'
                    alignItems='end'
                    justifyContent='end'
                    _hover={{
                        boxShadow: hoverShadow
                    }}
                >
                    <Text
                        fontWeight='bold'
                        variant='industrial'
                        color='accent.dark.3'
                        fontSize='xl'
                        mr='0.5rem'
                        filter='url(#inset-shadow)'
                    >
                        ENGINEERING
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    bg='url(https://picsum.photos/id/50/1000/1000)'
                    bgSize='cover'
                    d='flex'
                    alignItems='end'
                    justifyContent='end'
                    _hover={{
                        boxShadow: hoverShadow
                    }}
                >
                    <Text
                        fontWeight='bold'
                        variant='industrial'
                        color='accent.dark.3'
                        fontSize='xl'
                        mr='0.5rem'
                        filter='url(#inset-shadow)'
                    >
                        TEACHING
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    bg='url(https://picsum.photos/id/60/1000/1000)'
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
                        color='accent.dark.3'
                        filter='url(#inset-shadow)'
                        style={{
                            textOrientation: 'upright',
                            writingMode: 'vertical-rl',
                        }}
                    >
                        WEBDEV
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default SkewedAlbum