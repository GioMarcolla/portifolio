import { NextPage } from 'next'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex } from '@chakra-ui/layout'
import TimelinePoint from '../TimelinePoint/TimelinePoint'


interface Props { }
interface Point {
    id: number,
    age: number,
    value: string,
    desc: string
}

const points: Array<Point> = [{
    id: 0,
    age: 16,
    value: 'Rotary Exchange',
    desc: 'Went to Salem, OH, USA as a Rotary Youth Embassador for 1 year attending Junior year in highschool.'
}, {
    id: 1,
    age: 17,
    value: 'Drafter',
    desc: 'Worked drafting 2D and 3D architectural design for a construction company.'
}, {
    id: 2,
    age: 20,
    value: 'College',
    desc: 'Worked drafting 2D and 3D architectural design for a construction company.'
}, {
    id: 3,
    age: 23,
    value: 'Engineering Intern - Medium Voltage Drives',
    desc: 'Worked refactoring C code and later, during the extended time, validating hardware readings'
}, {
    id: 4,
    age: 24,
    value: 'ESL Teacher',
    desc: 'Taught English to children aged 3 to 12.'
}, {
    id: 5,
    age: 24,
    value: 'Programming Teacher',
    desc: 'Design and taught programming courses for all ages.'
}, {
    id: 6,
    age: 26,
    value: 'Computer Engineer / STEAM Teacher',
    desc: 'Designed 3D printed parts, electronics and code for classes and events. Design and taught programming and engineering courses for all ages.'
}, {
    id: 7,
    age: 27,
    value: 'Computer Engineer / Program Lead',
    desc: 'Designed 3D printed parts, electronics and internal software used in classroom. Design programming and engineering courses for all ages. Manage teaching staff and classes. Assist advanced student with personal projects in all STEAM fields.'
}, {
    id: 8,
    age: 0,
    value: 'To come...',
    desc: ''
}]

const MyTimeline: NextPage<Props> = () => {
    return (
        <Box
            position='relative'
        >
            <Flex
                id='MyTimeline'
                top={0}
                left='10%'
                flexDir='column'
                alignItems='center'
                py='1rem'
                zIndex={2}
                w={{ base: '90%', md: '74%' }}
                m='auto'
            >
                {points.map((p) => {
                    return <TimelinePoint key={p.id} point={p} />
                })}
                <Box
                    pos='absolute'
                    textStyle='sd'
                    w='4px'
                    h='100%'
                    bg={useColorModeValue('#88BBEE', 'bg.dark.200')}
                    top='0'
                />
            </Flex >
        </Box>
    )
}

export default MyTimeline