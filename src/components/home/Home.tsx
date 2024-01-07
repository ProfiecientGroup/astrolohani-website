import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import homeStyles from "./Home.styles";
import { centerItemFlex, theme } from "../../styles/styles";
import aboutIcon from "../../assets/images/home/aboutIcon.webp";
import aboutIcon1 from "../../assets/images/home/aboutIcon1.png";
import urls from "../../global/constants/urls";
import playBtn from "../../assets/images/home/playBtn.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../global/components/LanguageSwitcher";

const HomeComponent = () => {
  const { t } = useTranslation("home"); // Use the translation hook
  const classes = homeStyles;
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlay = () => {
    const video: any = document.getElementById("your-video-id");

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  const aboutSection = () => {
    return (
      <>
        <Box sx={classes.aboutMain}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Stack
              direction="column"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={5}
            >
              <LanguageSwitcher/>
              <Typography sx={classes.aboutText} gutterBottom>
                {/* About Pandit Lalit Lohani */}
                {t("panditName")} {/* Translated title */}
              </Typography>
              <img
                src={aboutIcon}
                width="240px"
                height="15px"
                alt="About Pandit Lalit Lohani"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.aboutDes}>
                {/* Translated title */}
                {/* Introducing Pandit Lalit Lohani, the beacon of wisdom in
                Rudrapur, Uttarakhand. With an impressive legacy spanning more
                than two and a half decades in the realm of astrolohani, Pandit
                Lahoni is your trusted navigator through life &apos;s celestial
                mysteries. */}
              </Typography>
            </Stack>
            <Box>
              <Stack
                direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    position: "relative",
                    ...centerItemFlex,
                    opacity: 0.888,
                  }}
                >
                  <video
                    id="your-video-id"
                    loop
                    autoPlay={isPlaying} // Use the state variable to control autoplay
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
                    sx={{
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
                  <Typography
                    sx={classes.aboutText}
                    textAlign="start"
                    gutterBottom
                  >
                    {/* What Do We Do ? */}
                    {t("aboutWhatDO")}
                  </Typography>
                  <Stack direction="row" spacing={2} mb={1}>
                    <Divider
                      orientation="vertical"
                      flexItem
                      color="#FDA228"
                      sx={{ width: "2px" }}
                    />
                    <Box>
                      <Typography
                        sx={classes.aboutDes}
                        gutterBottom
                        textAlign="start"
                      >
                        {t("aboutDes1")}
                        {/* Renowned for his Pure Handwritten (Hasth Likhit)
                        horoscopes, precise horoscope matching, and insightful
                        year forecasts, Pandit Lohani offers a guiding hand in
                        the journey of life. His expertise extends to Muhurta
                        calculations, astrology stone recommendations, kundali
                        readings, varshik rashifal predictions, and more. */}
                      </Typography>
                      <Typography sx={classes.aboutDes} textAlign="start">
                        {t("aboutDes2")}
                        {/* Whether you seek clarity in career, love, or life&apos;s
                        diverse facets, Pandit Lalit Lohani&apos;s wisdom is
                        your celestial compass, helping you navigate the stars
                        and uncover the path to your destiny. */}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "row",
                      xs: "row",
                    }}
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
                      <Typography sx={classes.experience}>25+</Typography>
                      <Box>
                        <Typography sx={classes.yearText}>years of</Typography>
                        <Typography sx={classes.experienceText}>
                          Experience
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                  <Stack
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "row",
                      xs: "column",
                    }}
                    spacing={3}
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Box sx={classes.readBtn} marginTop={0}>
                      <Link to={urls.aboutUsPathView}>
                        <a target="_target">
                          <Typography sx={classes.readText}>
                            {/* read more */}
                            {t("btnName")}
                          </Typography>
                        </a>
                      </Link>
                    </Box>
                    <Box sx={classes.bookingBtn}>
                      <Link to={urls.contactUsViewPath}>
                        <a target="_target">
                          <Typography
                            sx={classes.btnText}
                            color="#272C65 !important"
                          >
                            {/* Booking & Appointment */}
                            {t("appointmentName")}
                          </Typography>
                        </a>
                      </Link>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box sx={classes.homeMain}>{aboutSection()}</Box>
    </>
  );
};

export default HomeComponent;
