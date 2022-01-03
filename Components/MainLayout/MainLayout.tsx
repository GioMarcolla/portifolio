import { Box, Flex } from "@chakra-ui/layout"
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
import ThemeToggler from "../ThemeToggler/ThemeToggler"
import { NextPage } from 'next'
import { useColorModeValue } from "@chakra-ui/color-mode"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const MainLayout: NextPage<Props> = ({ children }) => {
    return (
        <Box bg={useColorModeValue('bg.light.100', 'bg.dark.100')}>
            <Navbar />
            <ThemeToggler />
            <Flex
                direction='column'
                justifyItems='center'
                m='auto'
                width='100%'
            >
                {children}
            </Flex>
            <Footer />
        </Box>
    )
}

export default MainLayout