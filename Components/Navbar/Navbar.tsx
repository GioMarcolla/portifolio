import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Divider, Flex, Heading } from "@chakra-ui/layout"
import BaseMenu from "../BaseMenu/BaseMenu"
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import { useEffect, useState } from "react";


const Navbar = () => {
    const navBG = useColorModeValue('bg.lightA', 'bg.darkA.100')
    const routes = ['home', 'resume', 'work', 'contact']
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <Box
            bg={scrollY === 0 ? 'transparent' : navBG}
            borderBottom={scrollY === 0 ? 'none' : '1px solid var(--chakra-colors-bg-darkA-200)'}
            pos='fixed'
            w='100%'
            zIndex={99}
            style={{
                backdropFilter: 'blur(7px)'
            }}
        >
            <Flex
                py={2}
                pl={{ base: 4, md: 0 }}
                w={{ base: '100%', md: '90%' }}
                m='auto'
                justifyContent='center'
                alignItems='center'
            >

                <BaseMenu routes={routes} />
                <DropdownMenu />
            </Flex>
        </Box>
    )
}


export default Navbar
