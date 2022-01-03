import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Heading, Flex, Text, Divider } from "@chakra-ui/layout"

const Footer = () => {
    return (
        <Box
            display='flex'
            bg={useColorModeValue('bg.light.200', 'bg.dark.200')}
            justifyContent='center'
            alignItems='center'
            px={{base: '5%', md: '10%'}}
            py='1rem'
        >
            <Flex>

                <Heading
                    fontSize='lg'
                    fontWeight='bold'
                >
                    
                </Heading>
            </Flex>
        </Box>
    )
}

export default Footer