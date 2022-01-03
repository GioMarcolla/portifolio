import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import '@fontsource/press-start-2p'
import { NextPage } from 'next'
import { AppComponent } from 'next/dist/shared/lib/router/router'
import Fonts from '../Components/Fonts/Fonts'
import Effects from '../Components/Effects/Effects'

interface Props {
    Component: AppComponent, 
    pageProps: AppProps
}

const App: NextPage<Props> = (props) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Fonts />
            <Effects />
            <props.Component {...props.pageProps} />
        </ChakraProvider>
    )
}
export default App
