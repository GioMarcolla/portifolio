import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Box, Divider, Link } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'

const DropdownMenu = () => {
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <Box bg='transparent'>
            <Menu>
                <MenuButton
                    as={IconButton}
                    display={{ base: 'flex', md: 'none' }}
                    aria-label='Open navigation'
                    icon={<HamburgerIcon />}
                    bg='transparent'
                    mr={2}
                    ml='auto'
                    alignSelf='center'
                />
                <MenuList bg={useColorModeValue('white', 'black')} display={{ base: 'grid', md: 'none' }}>
                    <NextLink href='/' replace>
                        <MenuItem as={Link} textDecor={router.asPath === '/' ? 'underline' : 'none'}>Home</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href='/work' replace>
                        <MenuItem as={Link} textDecor={router.asPath === '/work' ? 'underline' : 'none'}>Work</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href='/posts' replace>
                        <MenuItem as={Link} textDecor={router.asPath === '/posts' ? 'underline' : 'none'}>Posts</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href='/about' replace>
                        <MenuItem as={Link} textDecor={router.asPath === '/about' ? 'underline' : 'none'}>About Me</MenuItem>
                    </NextLink>
                    <Divider />
                    <NextLink href='#' passHref>
                        <MenuItem as={Link} >Source</MenuItem>
                    </NextLink>
                    <MenuItem as={Link} onClick={toggleColorMode}>
                        {'Toggle to ' + (colorMode === 'light' ? 'dark' : 'light') + ' mode'}
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default DropdownMenu