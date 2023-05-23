import useMediaQuery from '@mui/material/useMediaQuery';
import { motion, useMotionValue,useScroll } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TextTemplate from '@/components/Home/TextTemplate';
import Timeline from '../components/Home/Timeline';
import { useState, useEffect } from 'react';
import React from 'react';
import CardHolder from '@/components/Home/CardHolder';
import changeColorOnScroll from '@/components/ChangeColorOnScroll';
import ParallaxImage from '@/components/Home/ParallaxImage';
import MovingText from '@/components/Home/MovingText';

export default function Home() {
    const breakPoint0 = useMediaQuery('(min-width:450px)');

    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:1000px)');

    const theme = useTheme();
    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');
    const startPercentage = breakPoint2 ? 0.42 : 0.5;
    const endPercentage = breakPoint2 ? 0.52 : 0.6;
    const {scrollYProgress}= useScroll()
    useEffect(() => {
        const handleScroll = () => {
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 0, g: 0, b: 0 },
                { r: 240, g: 228, b: 220 },
                setBackgroundColor
            );
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 154, g: 205, b: 50 },
                { r: 0, g: 0, b: 0 },
                setTitleColor
            );
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 255, g: 255, b: 255 },

                { r: 0, g: 0, b: 0 },
                setColor
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY || window.pageYOffset;

            const scale = breakPoint2 ? y * 0.0013 : y * 0.0006; // Adjust the scaling factor as needed

            const boxElement2 = document.getElementById('boxElement2');

            if (boxElement2) {
                boxElement2.style.transition = 'transform 0.3s ease-out'; // Adjust the duration and easing as needed
                // boxElement2.style.transform = `translateX(${newPosition2}px)`;
                boxElement2.style.transform = `scale(${scale})`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const xMotionValue = useMotionValue(0);
    const yMotionValue = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            xMotionValue.set(-(event.clientX / window.innerWidth - 0.5) * 40);
            yMotionValue.set(-(event.clientY / window.innerHeight - 0.5) * 40);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [xMotionValue, yMotionValue]);

    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            <div
                id="one"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    overflowX: 'hidden',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'center',
                        zIndex: '-10',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                >
                    <img
                        src="/black drone new.jpg"
                        alt="drone image"
                        style={{
                            objectFit: 'cover',
                            height: '95%',
                            width: '95%',
                        }}
                    />
                </div>

                <Box width="auto" textAlign="center">
                    <Typography
                        color="white"
                        variant="h1"
                        style={{
                            fontSize: `${breakPoint ? '100px' : '60px'}`,
                        }}
                        display="grid"
                        justifyItems="center"
                        gap="10px"
                    >
                        <div>
                            <span
                                style={{
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            >
                                A
                            </span>
                            ero{' '}
                        </div>
                        <div>
                            <span
                                style={{
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            >
                                M
                            </span>
                            odelling {` `}
                        </div>
                        <div>
                            <span
                                style={{
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            >
                                C
                            </span>
                            lub
                        </div>
                        <Typography
                            color="white"
                            variant="h2"
                            style={{ fontSize: '20px' }}
                        >
                            {' '}
                            IIT (BHU), Varanasi
                        </Typography>
                    </Typography>
                </Box>
            </div>

         
           <ParallaxImage></ParallaxImage>
           
           
            <Box
                width="100%"
                height="80vh"
                position="relative"
                bgcolor="black"
                textAlign="center"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{
                        duration: 0.6,
                        type: 'spring',
                        ease: 'linear',
                        damping: 10,
                        stiffness: 80,
                        restDelta: 0.001,
                    }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '25%',
                        width: '50%',
                        x: xMotionValue,
                        y: yMotionValue,
                    }}
                >
                    
                    
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                        fontSize={`${breakPoint ? '88px' : '48px'}`}
                    >
                        Who are we?
                    </Typography>
                   
                    <br />
                    <Typography
                        variant="h3"
                        lineHeight="2"
                        color="white"
                        margin="0 auto"
                        fontSize={`${breakPoint ? '28px' : '18px'}`}
                    >
                        We are a community of builders with a passion for
                        aviation, fostering a culture of intellectual curiosity
                        and collaborative ingenuity.
                    </Typography>
                </motion.div>
            </Box>
            <Box
                width="100%"
                height="120vh"
                position="relative"
                bgcolor="black"
                textAlign="center"
                zIndex="-1"
            >
                <Box
                    position="absolute"
                    top="50%"
                    // right={y * 1.25 - 1500}
                    id="boxElement2"
                    width="50%"
                    right="25%"
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                        fontSize={`${breakPoint ? '70px' : '48px'}`}
                    >
                        What do we do?
                    </Typography>
                    <br />
                    <Typography
                        variant="h3"
                        lineHeight="2"
                        color="white"
                        margin="0 auto"
                        fontSize={`${breakPoint ? '28px' : '18px'}`}
                    >
                        {' '}
                        We engineer airborne wonders, defying limits.
                    </Typography>
                </Box>
            </Box>

            <CardHolder
                titleColor={titleColor}
                backgroundColor={backgroundColor}
            />
            <MovingText color='black' bgColor='#f0e4dc' ></MovingText>

            <div
                style={{
                    backgroundColor: `${backgroundColor}`,
                    padding: '60px 0',
                }}
            >
                <Timeline titleColor={titleColor} color={color} />
            </div>

            <div style={{ backgroundColor: '#f0e4dc' }}>
                <TextTemplate
                    name="Sponsors"
                    title="Sponsors"
                    breakPoint={breakPoint}
                    bgcolor={backgroundColor}
                    titleColor={titleColor}
                    color={color}
                />

                <TextTemplate
                    name="Why us"
                    title="Why to choose us?"
                    content="AMC is dedicated to applying theoretical concepts in practical projects, promoting innovation and creativity among its members. By sponsoring the club, you would be supporting the development of cutting-edge technologies in aviation and engineering. 
                By sponsoring AMC, you can help the club obtain the necessary resources to build and test their projects, and gain exposure to a community of talented and motivated students who are passionate about the field. Additionally, by investing in the education and development of the next generation of engineers and aviation professionals, you will be making a positive contribution to society while also potentially identifying future talent for your own organization.
                "
                    bgcolor={backgroundColor}
                    breakPoint={breakPoint}
                    titleColor={titleColor}
                    color={color}
                />

                <div
                    style={{
                        minHeight: '100vh',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        display="flex"
                        gap="30px"
                        justifyContent="center"
                        width="100%"
                        alignItems="center"
                        textAlign={breakPoint ? 'left' : 'center'}
                        sx={{
                            backdropFilter: 'blur(15px)',
                        }}
                    >
                        <Typography
                            variant="h1"
                            width="70%"
                            color={theme.palette.primary.main}
                            fontSize={`${breakPoint ? '48px' : '40px'}`}
                            textAlign="center"
                        >
                            Join us, unleash your potential in engineering,
                            aviation, and teamwork.
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
}
