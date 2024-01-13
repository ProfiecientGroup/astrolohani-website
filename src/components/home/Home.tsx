import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import homeStyles from "./Home.styles";
import aboutIcon from "../../assets/images/home/aboutIcon.webp";
import aboutIcon1 from "../../assets/images/home/aboutIcon1.png";
import urls from "../../global/constants/urls";
import playBtn from "../../assets/images/home/playBtn.svg";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const classes = homeStyles;
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlay = () => {
    const video = document.getElementById("your-video-id");

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  const aboutSection = () => {
    return (
      <Box className={classes.aboutMain}>
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <Stack
            direction="column"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={5}
          >
            <Typography className={classes.aboutText} gutterBottom>
              Pandit Lalit Lohani
            </Typography>
            <img
              src={aboutIcon}
              width="240px"
              height="15px"
              alt="About Pandit Lalit Lohani"
              style={{ marginBottom: 15 }}
            />
            <Typography className={classes.aboutDes}>
              Introducing Pandit Lalit Lohani, the beacon of wisdom in Rudrapur,
              Uttarakhand. With an impressive legacy spanning more than two and
              a half decades in the realm of astrolohani, Pandit Lahoni is your
              trusted navigator through life's celestial mysteries.
            </Typography>
          </Stack>
          <Box>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                style={{
                  position: "relative",
                  opacity: 0.888,
                }}
              >
                <video
                  id="your-video-id"
                  loop
                  autoPlay={isPlaying}
                  playsInline
                  muted
                  width="auto"
                  height="400px"
                  style={{
                    borderRadius: "1%",
                  }}
                >
                  <source src="/panditVideo.mp4" />
                </video>

                <Box
                  style={{
                    visibility: isPlaying ? "hidden" : "visible",
                    position: "absolute",
                    cursor: "pointer",
                  }}
                  onClick={toggleVideoPlay}
                >
                  <img src={playBtn} alt={"play video"} />
                </Box>
              </Box>
              <Box>
                <Typography className={classes.aboutText} textAlign="start" gutterBottom>
                  What Do We Do?
                </Typography>
                <Stack direction="row" spacing={2} mb={1}>
                  <Divider orientation="vertical" flexItem color="#FDA228" style={{ width: "2px" }} />
                  <Box>
                    <Typography className={classes.aboutDes} gutterBottom textAlign="start">
                      Renowned for his Pure Handwritten (Hasth Likhit) horoscopes,
                      precise horoscope matching, and insightful year forecasts,
                      Pandit Lohani offers a guiding hand in the journey of life.
                      His expertise extends to Muhurta calculations, astrology
                      stone recommendations, kundali readings, varshik rashifal
                      predictions, and more.
                    </Typography>
                    <Typography className={classes.aboutDes} textAlign="start">
                      Whether you seek clarity in career, love, or life's diverse
                      facets, Pandit Lalit Lohani's wisdom is your celestial
                      compass, helping you navigate the stars and uncover the path
                      to your destiny.
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={3}
                  mb={3}
                  alignItems="center"
                >
                  <img
                    src={aboutIcon1}
                    alt="experience"
                    width="100px"
                    height="100px"
                  />
                  <Box display="flex" alignItems="center">
                    <Typography className={classes.experience}>25+</Typography>
                    <Box>
                      <Typography className={classes.yearText}>years of</Typography>
                      <Typography className={classes.experienceText}>Experience</Typography>
                    </Box>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={3}
                  justifyContent="start"
                  alignItems="center"
                >
                  <Box className={classes.readBtn} marginTop={0}>
                    <Link to={urls.aboutUsPathView}>
                      <Typography className={classes.readText}>
                        {t("btnName")}
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={classes.bookingBtn}>
                    <Link to={urls.contactUsViewPath}>
                      <Typography
                        className={classes.btnText}
                        color="#272C65 !important"
                      >
                        {t("appointmentName")}
                      </Typography>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  };

  return (
    <Box className={classes.homeMain}>
      {aboutSection()}
    </Box>
  );
};

export default HomeComponent;
