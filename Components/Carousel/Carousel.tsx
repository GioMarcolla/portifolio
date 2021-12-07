import { NextPage } from "next"
import { wrap } from "popmotion";
import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import styles from './Carousel.module.css'

const variants: Variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        }
    }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface Props {
    imgs: Array<string>
}

const Carousel: NextPage<Props> = (props) => {
    const [[page, direction], setPage] = useState([0, 0])
    const imageIndex = wrap(0, props.imgs.length, page)
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }
    const arrowColor = useColorModeValue('#F0F0FFBB', '#B0B0BBAA')
    const arrowHover = useColorModeValue('#F0F0FFCC', '#B0B0BBBB')

    return (
        <Box
            display='flex'
            justifyContent='start'
            alignItems='center'
            position='relative'
            borderRadius='0.5em'
            overflow='hidden'
            h='500px'
        >
            <AnimatePresence initial={true} custom={direction}>
                <motion.img
                    className={styles.carouselImg}
                    key={page}
                    src={props.imgs[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 50 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className={styles.prev} onClick={() => paginate(1)}>
                <ArrowBackIcon 
                    fontSize='80' 
                    color={arrowColor} 
                    filter='url(#inset-shadow)' 
                    _hover={{
                        color: arrowHover
                    }}
                />
            </div>
            <div className={styles.next} onClick={() => paginate(-1)}>
                <ArrowForwardIcon 
                    fontSize='80' 
                    color={arrowColor} 
                    filter='url(#inset-shadow)' 
                    _hover={{
                        color: arrowHover
                    }}
                />
            </div>
        </Box>
    )
}

export default Carousel