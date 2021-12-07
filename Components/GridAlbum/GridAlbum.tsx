import { Img } from "@chakra-ui/image";
import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { NextPage } from "next";

interface Props { }

const GridAlbum: NextPage<Props> = () => {
    return (
        <Box
            display={{ base: 'block', md: 'none' }}
            mt='3rem'
            mb='0'
        >
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
            >
                <GridItem
                    display='flex'
                    alignItems='flex-end'
                    position='relative'
                >
                    <Img
                        src='https://picsum.photos/id/30/1000/1000'
                        filter='grayscale(90%)'
                    />
                    <Text
                        position='absolute'
                        zIndex={2}
                        right='0.5rem'
                        variant='industrial'
                        fontSize='xl'
                        fontWeight='bold'
                        color='accent.dark.3'
                        textShadow='1px 1px 1px black'
                    >
                        PETS
                    </Text>
                </GridItem>
                <GridItem
                    display='flex'
                    alignItems='flex-start'
                    position='relative'
                >
                    <Img
                        src='https://picsum.photos/id/40/1000/1000'
                        filter='grayscale(90%)'
                    />
                    <Text
                        position='absolute'
                        zIndex={2}
                        right='0.5rem'
                        variant='industrial'
                        fontSize='xl'
                        fontWeight='bold'
                        color='accent.dark.3'
                        textShadow='1px 1px 1px black'
                    >
                        ENGINEERING
                    </Text>
                </GridItem>
                <GridItem
                    display='flex'
                    alignItems='flex-end'
                    position='relative'
                >
                    <Img
                        src='https://picsum.photos/id/50/1000/1000'
                        filter='grayscale(90%)'
                    />
                    <Text
                        position='absolute'
                        zIndex={2}
                        right='0.5rem'
                        variant='industrial'
                        fontSize='xl'
                        fontWeight='bold'
                        color='accent.dark.3'
                        textShadow='1px 1px 1px black'
                    >
                        TEACHING
                    </Text>
                </GridItem>
                <GridItem
                    display='flex'
                    alignItems='flex-start'
                    position='relative'
                >
                    <Img
                        src='https://picsum.photos/id/60/1000/1000'
                        filter='grayscale(90%)'
                    />
                    <Text
                        position='absolute'
                        zIndex={2}
                        right='0.5rem'
                        variant='industrial'
                        fontSize='xl'
                        fontWeight='bold'
                        color='accent.dark.3'
                        textShadow='1px 1px 1px black'
                    >
                        WEBDEV
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default GridAlbum