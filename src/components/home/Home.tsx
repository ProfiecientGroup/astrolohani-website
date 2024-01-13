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
import ourServicesIcon from "../../assets/images/home/ourServicesIcon.webp";
import aboutIcon1 from "../../assets/images/home/aboutIcon1.png";
import whyChooseIcon from "../../assets/images/home/whyChooseIcon.webp";
import {
  accordionContent,
  comingFallData,
  liteData,
  whyChooseUsData,
} from "./HomeData";
import urls from "../../global/constants/urls";
import playBtn from "../../assets/images/home/playBtn.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CustomCarousel from "./component/CustomCarousel";
import Testimonials from "./component/Testimonials";
import HomeAccordion from "./component/HomeAccordion";
import OurServicesTestimonial from "./component/OurServicesTestimonial";
import ContactUsForm from "../contactus/ContactUsForm";

const HomeComponent = () => {
  const { t } = useTranslation("home"); // Use the translation hook
  const classes = homeStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isPlaying, setIsPlaying] = useState(false);
  const liteData: any = t("liteData", { returnObjects: true });
  const whyChooseUsData: any = t("whyChooseUsData", { returnObjects: true });
  const accordionContent: any = t("accordionContent", { returnObjects: true });

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
                      <Link
                        to={urls.aboutUsPathView}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={classes.readText}>
                          {/* read more */}
                          {t("btnName")}
                        </Typography>
                      </Link>
                    </Box>
                    <Box sx={classes.bookingBtn}>
                      <Link
                        to={urls.contactUsViewPath}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={classes.btnText}
                          color="#272C65 !important"
                        >
                          {/* Booking & Appointment */}
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
      </>
    );
  };

  const panchangSection = () => {
    return (
      <>
        <Box sx={classes.panchangMain}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Stack
              direction="column"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={5}
            >
              <Typography sx={classes.aboutText} gutterBottom>
                {/* Horoscope */}
                {t("horoscopeName")}
              </Typography>
              <img
                alt="horoscope"
                src={aboutIcon}
                width="240px"
                height="15px"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.aboutDes}>
                {t("panchangDes")}
                {/* Unlocking Destiny with Handcrafted Vedic Astrology */}
              </Typography>
            </Stack>
            <Grid container spacing={{ lg: 2, xs: 4, sm: 3 }}>
              {liteData.map((item: any, index: number) => {
                return (
                  <Grid item md={2} lg={2} xs={6} sm={3} key={index}>
                    <Box sx={classes.horoscopeMain}>
                      <Box sx={classes.horoscopeInner}>
                        <Box sx={classes.horoscopeFrontSide}>
                          <Box>
                            <img
                              src={item.icon}
                              alt={`Item ${item.number}`}
                              width={isDesktop ? "auto" : "auto"}
                              height={isDesktop ? "auto" : "30px"}
                            />
                            <Typography
                              sx={classes.numberLite}
                              className="hoverEffect"
                            >
                              {item.number}
                            </Typography>
                            <Typography
                              sx={classes.textLite}
                              className="hoverEffect"
                            >
                              {item.text}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={classes.horoscopeBackSide}>
                          <Typography
                            sx={classes.backText}
                            className="hoverEffect"
                          >
                            {item.horoscopeDetails}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </>
    );
  };

  const ourServicesSection = () => {
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
              <Typography sx={classes.aboutText} gutterBottom>
                {/* Our Services{" "} */}
                {t("ourServicesName")}
              </Typography>
              <img
                alt="services"
                src={aboutIcon}
                width="240px"
                height="15px"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.aboutDes}>
                {t("ourServicesDec")}
                {/* Explore the Cosmic Blueprint of Your Life with Vedic Kundali,
                Craft Harmonious Spaces with Vastu Wisdom, Discover Gemstone
                Power, Gain Annual Cosmic Insights, Find Love with Celestial
                Matchmaking, and Elevate Moments with Auspicious Timings. */}
              </Typography>
            </Stack>
            <Stack
              direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                alt="vedic kundali"
                src={ourServicesIcon}
                width={isDesktop ? "100%" : "100%"}
                height={isDesktop ? "567px" : "100%"}
              />
              <OurServicesTestimonial />
            </Stack>
          </Container>
        </Box>
      </>
    );
  };

  const whyChooseUs = () => {
    return (
      <>
        <Box sx={classes.whyChooseMain}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Stack
              direction="column"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={5}
            >
              <Typography sx={classes.whyChooseText} gutterBottom>
                {/* Why Choose Us */}
                {t("whyChooseUsText")}
              </Typography>
              <img
                alt="trust"
                src={aboutIcon}
                width="240px"
                height="15px"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.whyChooseDes}>
                {t("whyChooseUsDes")}
                {/* Guiding Life's Journey with Trust and Expertise. */}
              </Typography>
            </Stack>
          </Container>
          <Grid container spacing={1} textAlign="center">
            {whyChooseUsData.map((us: any, index: number) => {
              return (
                <Grid item md={2.4} lg={2.4} xs={6} sm={4} key={index}>
                  <Box position="relative">
                    <img
                      alt={us.altTag}
                      src={whyChooseIcon}
                      width="129.994px"
                      height=" 120.13px"
                    />
                    <Typography sx={classes.whyChooseCount}>
                      {us.count}+
                    </Typography>
                  </Box>
                  <Typography sx={classes.whyChooseTitle}>
                    {us.title}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </>
    );
  };

  const testimonialSection = () => {
    return (
      <Box sx={classes.aboutMain}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Stack
            direction="column"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={5}
          >
            <Typography sx={classes.aboutText} gutterBottom>
              {/* What clients are saying */}
              {t("testimonialTitle")}
            </Typography>
            <img
              alt="testimonial"
              src={aboutIcon}
              width="240px"
              height="15px"
              style={{ marginBottom: 15 }}
            />
            <Typography sx={classes.aboutDes}>
              {/* Discover How We've Touched Lives. Words from Satisfied Cosmic
              Explorers. */}
              {t("testimonialDes")}
            </Typography>
          </Stack>
          <Testimonials />
        </Container>
      </Box>
    );
  };

  const articleSection = () => {
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
              <Typography sx={classes.aboutText} gutterBottom>
                Latest Articles
              </Typography>
              <img
                src={aboutIcon}
                width="240px"
                height="15px"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.aboutDes}>
                Unlocking the Mysteries of the Cosmos: A Journey into the World
                of Vedic Astrology
              </Typography>
            </Stack>
            <Box>
              <Stack
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                {comingFallData.map((item: any, key) => {
                  return (
                    <Box sx={classes.comingFallInner} key={key}>
                      <Box>
                        <img
                          src={item.icon}
                          alt="message"
                          width={isDesktop ? "300px" : "100%"}
                          height={isDesktop ? "100%" : "100%"}
                          style={{
                            marginBottom: 20,
                            borderTopRightRadius: "10px",
                            borderTopLeftRadius: "10px",
                          }}
                        />
                      </Box>
                      <Box padding={2}>
                        <Typography gutterBottom sx={classes.numberLite}>
                          {item.number}
                        </Typography>
                        <Typography sx={classes.textLite}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Container>
        </Box>
      </>
    );
  };

  const faqSection = () => {
    return (
      <>
        <Box sx={classes.whyChooseMain}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Stack
              direction="column"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={5}
            >
              <Typography sx={classes.whyChooseText} gutterBottom>
                {/* Frequently Asked Questions */}
                {t("FAQText")}
              </Typography>
              <img
                alt="queries"
                src={aboutIcon}
                width="240px"
                height="15px"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.whyChooseDes}>
                {/* Answers to Your Cosmic Queries. */}
                {t("FAQHeading")}
              </Typography>
            </Stack>
            <HomeAccordion data={accordionContent.data} />
          </Container>
        </Box>
      </>
    );
  };

  const makeAppointment = () => {
    return (
      <Box sx={classes.aboutMain}>
        {isDesktop ? (
          <Container maxWidth="md">
            <ContactUsForm />
          </Container>
        ) : (
          <ContactUsForm />
        )}
      </Box>
    );
  };

  return (
    <>
      <Box sx={classes.homeMain}>
        <CustomCarousel />
        {aboutSection()}
        {panchangSection()}
        {ourServicesSection()}
        {whyChooseUs()}
        {testimonialSection()}
        {faqSection()}
        {makeAppointment()}
      </Box>
    </>
  );
};

export default HomeComponent;
