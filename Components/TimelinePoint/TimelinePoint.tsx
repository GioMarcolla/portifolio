import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { NextPage } from "next";

interface Point {
    id: number,
    age: number,
    value: string,
    desc: string
}

interface Props {
    point: Point
}

const TimelinePoint: NextPage<Props> = (props) => {
    const p = props.point
    return (
        <Box
            display='flex'
            flexDir={p.id % 2 === 0 ? 'row' : 'row-reverse'}
            w='100%'
            my='1rem'
            alignItems='center'
            zIndex={3}
            scale={1}
            transition='transform ease-in-out 200ms'
            _hover={{
                transform: 'scale(1.05)'
            }}
        >
            <Box
                w='48%'
                p='1em'
                bg={useColorModeValue('#D0D0DD', 'bg.dark.200')}
                borderRadius='0.5em'
            >
                <Text fontWeight='bold' fontSize='lg'>{p.value}</Text>
                <Divider h='2px' bg={useColorModeValue('black', 'linear-gradient(90deg, var(--chakra-colors-accent-dark-3), transparent)')} border='none' />
                <Text>{p.desc}</Text>
            </Box>
            <Flex w='4%' alignItems='center' justifyContent='center'>
                <Text
                    fontWeight='bold'
                    fontSize='2xl'
                    color={useColorModeValue('black', 'accent.dark.3')}
                >
                    {'</>'}
                </Text>
            </Flex>
            <Box
                p='0.4em 0.6em'
                bg={useColorModeValue('#88BBEE', 'accent.dark.3')}
                borderRadius='0.3em'
            >
                <Text
                    variant='industrial'
                    fontWeight='bold'
                    color='white'
                    filter='url(#inset-shadow)'  
                >
                    {p.age !== 0 ? p.age + ' years old' : 'Future'}
                </Text>
            </Box>
        </Box>
    )
}

export default TimelinePoint