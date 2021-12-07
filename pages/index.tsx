import { ColorModeScript } from '@chakra-ui/color-mode'
import AboutMe from '../Components/AboutMe/AboutMe'
import MainLayout from '../Components/MainLayout/MainLayout'
import ShortIntro from '../Components/ShortIntro/ShortIntro'
import MyTimeline from '../Components/MyTimeline/MyTimeline'
import Head from 'next/head'
import theme from '../theme'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/layout'

const IndexPage: NextPage = () => {
    return (
        <Box>
            <Head>
                <meta lang='en' />
                <title>Giovanni Marcolla - Welcome to my Portifolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Giovanni Marcolla" />
                <meta name="description" content="Welome to my portifolio website. Get to know a little about me, my experiences and what I do." />
                <meta name="google-site-verification" content="tMwYJDSVA2MQOJpS-xyArgO06lHofG-eHycovJxKtNI" />
            </Head>
            <MainLayout>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <ShortIntro />
                <AboutMe />
                <MyTimeline />
            </MainLayout>
        </Box>
    )
}

export default IndexPage
