import { Button } from "@chakra-ui/button"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import NextLink from 'next/link'
import { Box, Link } from "@chakra-ui/layout"
import { NextPage } from "next"

interface Props {
    op: number,
    route: string
}

const MenuButton: NextPage<Props> = (props) => {
    const op = props.op
    const route = props.route
    const btGrad = useColorModeValue('linear-gradient(180deg, #707077, #D0D0DD)',
        'linear-gradient(180deg, #A0A0AA, #C0C0CC)')
    const btShadow = useColorModeValue('1px 1px 2px #FFF8', 'none')
    const underBg = useColorModeValue('linear-gradient(180deg, #F0F0FF, #F0F0FF, #A0A0AA)',
        'linear-gradient(180deg, #808088, #B0B0BB)')

    return (
        <Box>
            <NextLink href={route === 'home' ? '/' : '/' + route} replace >
                <Button
                    as={Link}
                    className='menuButton'
                    p='0.5em'
                    d='flex'
                    flexDir='column'
                    variant='oldVibe'
                    textShadow={btShadow}
                    bg={btGrad}
                    backgroundClip='text'
                    mt='3px'
                    filter='url(#inset-shadow)'
                    _hover={{
                        filter: useColorModeValue('contrast(50%)', 'contrast(0%)')
                    }}
                    _after={{
                        content: '" "',
                        background: underBg,
                        filter: 'url(#inset-shadow)',
                        display: 'block',
                        w: '100%',
                        h: '3px',
                        opacity: op,
                        borderRadius: '2px'
                    }}
                >
                    {route.toUpperCase()}
                </Button>
            </NextLink>
        </Box>
    )
}

export default MenuButton