import { Box, Flex, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { NextPage } from 'next'
import { LinkedInIcon, DiscordIcon, GitHubIcon } from '../Icons/Icons'

interface Props {
    routes: Array<string>;
}

const BaseMenu: NextPage<Props> = (props) => {
    const router = useRouter()

    return (
        <Box w='100%'>
            <Flex d='inline-flex'>
                {
                    props.routes.map((r: string, i: number) => {
                        const op = router.asPath === (r === 'home' ? '/' : ('/' + r)) ? 1 : 0
                        return (
                            <NextLink href={r === 'home' ? '/' : '/' + r} replace key={i}>
                                <Button 
                                    variant='oldVibe' 
                                    _before={{
                                        content: '" "',
                                        opacity: op,
                                        position: 'absolute',
                                        height: '5px',
                                        width: '5%',
                                        bg: '#DDDDE0',
                                        margin: 'auto',
                                        transform: 'skewX(-45deg)',
                                        bottom: "5%",
                                        right: "42%",
                                        zIndex: 2,
                                        filter: 'url(#inset-shadow)'
                                    }}
                                    _after={{
                                        content: '" "',
                                        position:'absolute',
                                        opacity: op,
                                        bottom: "5%",
                                        bg: 'linear-gradient(90deg, var(--chakra-colors-accent-dark-3) 78%, transparent 78%, transparent 90%, transparent 90%, var(--chakra-colors-accent-dark-3) 90%, var(--chakra-colors-accent-dark-3))',
                                        display: 'block',
                                        height: '5px',
                                        width: 'calc(98% - 1.8rem)',
                                        transform: 'skewX(-45deg)',
                                        marginLeft: '-1%',
                                        filter: 'url(#inset-shadow)',
                                    }}
                                >
                                    <Text variant='industrial'>{r}</Text>
                                </Button>
                            </NextLink>
                        )
                    })
                }
                <NextLink href={'/source' } replace >
                    <Button variant='oldVibe'>
                        <Text variant='industrial'>source</Text>
                    </Button>
                </NextLink>
            </Flex>
            <Flex d='inline-flex' float='right'>
                <NextLink href='https://www.linkedin.com/in/giomarcolla/'>
                    <Button variant='oldVibe' p='0.5em'>
                        <LinkedInIcon />
                    </Button>
                </NextLink>
                <NextLink href='https://discord.gg/8HFGMcsA'>
                    <Button variant='oldVibe' p='0.5em'>
                        <DiscordIcon />
                    </Button>
                </NextLink>
                <NextLink href='https://github.com/GioMarcolla/portifolio'>
                    <Button variant='oldVibe' p='0.5em'>
                        <GitHubIcon />
                    </Button>
                </NextLink>
            </Flex>
        </Box>
    )
}

export default BaseMenu