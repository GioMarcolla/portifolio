import { useColorModeValue } from "@chakra-ui/color-mode"
import { NextPage } from "next"

interface Props { }

const Effects: NextPage<Props> = () => {
    const iconStart = useColorModeValue('#D0D0DD', '#A0A0AA')
    const iconEnd = useColorModeValue('#909099', '#909099')
    return (
        <>
            <filter id='inset-shadow'>
                <feOffset
                    dx='1'
                    dy='1'
                />
                <feGaussianBlur
                    stdDeviation='1'
                    result='offset-blur'
                />
                <feComposite
                    operator='out'
                    in='SourceGraphic'
                    in2='offset-blur'
                    result='inverse'
                />
                <feFlood
                    floodColor='black'
                    floodOpacity='1'
                    result='color'
                />
                <feComposite
                    operator='in'
                    in='color'
                    in2='inverse'
                    result='shadow'
                />
                <feComposite
                    operator='over'
                    in='shadow'
                    in2='SourceGraphic'
                />
            </filter>
            <defs>
                <linearGradient id="grad1" x1="95%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{
                        stopColor: iconEnd,
                        stopOpacity: 1
                    }} />
                    <stop offset="100%" style={{
                        stopColor: iconStart,
                        stopOpacity: 1
                    }} />

                </linearGradient>
            </defs>
        </>
    )
}

export default Effects