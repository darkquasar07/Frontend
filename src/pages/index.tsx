import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import CardHolder from "@/components/Home/CardHolder";
import {
    returnBgColor,
    returnColor,
    returnTitleColor,
} from '@/components/ChangeColorOnScroll';
import AMCSection from '@/components/Home/AMCSection';
import ParallaxImage from '@/components/Home/ParallaxImage';
import MovingText from '@/components/Home/MovingText';
import { h4, h4_, h5, h6, h6_ } from '@/constants';

export default function Home() {
	const breakPoint = useMediaQuery("(min-width:600px)");
	const breakPoint2 = useMediaQuery("(min-width:1000px)");

	const [backgroundColor, setBackgroundColor] = useState("rgb(0, 0, 0)");
	const [titleColor, setTitleColor] = useState("rgb(0, 0, 0)");
	const [color, setColor] = useState("rgb(255, 255, 255)");

	useEffect(() => {
		const handleScroll = () => {
			setBackgroundColor(returnBgColor);
			setTitleColor(returnTitleColor);
			setColor(returnColor);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			{/* <Box
                sx={{
                    height: '100px',
                    background: 'linear-gradient(to bottom, #4bb6fe, #000000)',
                }}
                position="relative"
            >
                <Box
                    width="100%"
                    height="110px"
                    sx={{
                        backdropFilter: 'blur(10px)',
                    }}
                    position="absolute"
                    bottom="0"
                    left="0"
                ></Box>
            </Box> */}
			<section
				id="welcome"
				style={{
					backgroundColor: backgroundColor,
					padding: "100px 7.5%",
				}}
			>
				<AMCSection />
			</section>

			<section id="parallax">
				<ParallaxImage />
			</section>

			<section
				id="cards"
				style={{
					backgroundColor: backgroundColor,
					padding: "100px 7.5%",
				}}
			>
				<CardHolder
					titleColor={titleColor}
					backgroundColor={backgroundColor}
					color={color}
				/>
			</section>

            <section
                id="why us"
                style={{
                    backgroundColor: backgroundColor,
                    padding: '100px 7.5%',
                }}
            >
                <Box
                    height="auto"
                    position="relative"
                    textAlign="left"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginLeft="auto"
                    marginRight="auto"
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: breakPoint2 ? 'row' : 'column',
                            width: '100%',
                            gap: '5px',
                        }}
                    >
                        <div
                            style={{
                                width: breakPoint2 ? '60%' : 'auto',
                            }}
                        >
                            <Typography
                                variant="h1"
                                color={titleColor}
                                fontSize={`${breakPoint ? h4_ : h5}`}
                            >
                                Why us?
                            </Typography>

                            <br />
                            <Typography
                                variant="h3"
                                lineHeight="2"
                                color={color}
                                margin="0 auto"
                                fontSize={breakPoint ? h6 : h6_}
                            >
                                Sponsor AMC to fuel innovation and creativity.
                                Your support drives cutting-edge aviation and
                                engineering projects, empowering talented
                                students.
                                <br />
                                <br />
                                By sponsoring AMC, you become a catalyst for
                                transformative change in the aviation and
                                engineering sectors, creating opportunities for
                                breakthrough discoveries and groundbreaking
                                advancements.
                                <br />
                                <br />
                                Invest in <b>education</b>, make an{' '}
                                <b>impact</b>, and <b>connect</b> with future
                                industry <b>leaders</b>.
                            </Typography>
                        </div>
                        <div
                            style={{
                                width: breakPoint2 ? '40%' : '100%',
                                display: 'flex',
                                flexDirection: breakPoint2 ? 'column' : 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                src="flight2.jpg"
                                alt="drone image"
                                style={{
                                    objectFit: 'cover',
                                    height: breakPoint2 ? '100%' : '100%',
                                    width: breakPoint2 ? '100%' : '100%',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>
                    </div>
                </Box>
            </section>

            <MovingText
                color={titleColor}
                bgColor={backgroundColor}
                fontSize={breakPoint ? h4 : h5}
            />
            <ContactForm bgColor="#F0E4DC"></ContactForm>
        </div>
    );
}
