import { IconButton } from "@chakra-ui/button"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { ArrowRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/layout"
import { chakra, shouldForwardProp } from "@chakra-ui/system"
import { motion } from 'framer-motion'


const ThemeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const toggleBG = useColorModeValue('bg.light.400', 'bg.dark.400')
    const toggleIcon = colorMode === "light" ? <SunIcon /> : <MoonIcon />
    const btColor = useColorModeValue('black', 'white')

    const StyledDiv = chakra(motion.div, {
        shouldForwardProp: prop => {
            return shouldForwardProp(prop) || prop === 'transition'
        }
    })

    return (
        <Box>
            <StyledDiv
                initial={{x: 40}}
                whileHover={{x: 0}}
                right={0}
                transition={{type: 'ease-in'}}
                bottom='50%'
                pos='fixed'
                display={{base: 'none', md: 'flex'}}
                borderLeftRadius={5}
                alignItems='center'
                overflow='hidden'
                bg={toggleBG}
                w='fit-content'
                h={20}
                zIndex={10}
                filter='url(#inset-shadow)'
            >
                <IconButton
                    aria-label="Open theme selector"
                    icon={<ArrowRightIcon color={btColor} />}
                    rounded={0}
                    bg='transparent'
                    m={0}
                    h="100%"
                    _hover={{
                        backgroundColor: toggleBG,
                        filter: 'contrast(120%)'
                    }}
                />
                <IconButton
                    h="100%"
                    rounded={0}
                    onClick={toggleColorMode}
                    aria-label="Change theme"
                    icon={toggleIcon}
                    bg='transparent'
                    m={0}
                    py={0}
                    color={btColor}
                    _hover={{
                        backgroundColor: toggleBG,
                        filter: 'contrast(120%)'
                    }}
                />
            </StyledDiv>
        </Box>
    )
}

export default ThemeToggler