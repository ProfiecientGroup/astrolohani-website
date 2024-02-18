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
import { Helmet } from "react-helmet";
import homeStyles from "./Home.styles";
import { centerItemFlex, theme } from "../../styles/styles";
import aboutIcon from "../../assets/images/home/aboutIcon.webp";
import ourServicesIcon from "../../assets/images/home/ourServicesIcon.webp";
import aboutIcon1 from "../../assets/images/home/aboutIcon1.png";
import whyChooseIcon from "../../assets/images/home/whyChooseIcon.webp";
import { comingFallData } from "./HomeData";
import urls from "../../global/constants/urls";
import playBtn from "../../assets/images/home/playBtn.svg";
import { useTranslation } from "react-i18next";
import CustomCarousel from "./component/CustomCarousel";
import Testimonials from "./component/Testimonials";
import HomeAccordion from "./component/HomeAccordion";
import OurServicesTestimonial from "./component/OurServicesTestimonial";
import ContactUsForm from "../contactus/ContactUsForm";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const { t } = useTranslation("home"); // Use the translation hook
  const classes = homeStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isPlaying, setIsPlaying] = useState(false);
  const liteData: any = t("liteData", { returnObjects: true });
  const whyChooseUsData: any = t("whyChooseUsData", { returnObjects: true });
  const accordionContent: any = t("accordionContent", { returnObjects: true });
  const navigate = useNavigate();

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
                {t("panditName")}
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
                      </Typography>
                      <Typography sx={classes.aboutDes} textAlign="start">
                        {t("aboutDes2")}
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
                      <Typography
                        sx={classes.readText}
                        onClick={() => navigate(urls.aboutUsPathView)}
                      >
                        {t("btnName")}
                      </Typography>
                    </Box>
                    <Box sx={classes.bookingBtn}>
                      <Typography
                        sx={classes.btnText}
                        color="#272C65 !important"
                        onClick={() => navigate(urls.contactUsViewPath)}
                      >
                        {t("appointmentName")}
                      </Typography>
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
                {t("horoscopeName")}
              </Typography>
              <img
                alt="horoscope"
                src={aboutIcon}
                width="240px"
                height="15px"
                style={{ marginBottom: 15 }}
              />
              <Typography sx={classes.aboutDes}>{t("panchangDes")}</Typography>
            </Stack>
            <Grid container spacing={{ lg: 2, xs: 4, sm: 3 }}>
              {liteData.map((item: any, index: number) => {
                return (
                  <Grid
                    item
                    md={3}
                    lg={2}
                    xs={6}
                    sm={4}
                    key={index}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
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
                width={isDesktop ? "100%" : "50%"}
                height={isDesktop ? "567px" : "50%"}
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
              {t("testimonialTitle")}
            </Typography>
            <img
              alt="testimonial"
              src={aboutIcon}
              width="240px"
              height="15px"
              style={{ marginBottom: 15 }}
            />
            <Typography sx={classes.aboutDes}>{t("testimonialDes")}</Typography>
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
      <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/" />
        <title>
          Astrolohani - Your Gateway to Vedic Astrology and Spiritual Insights
        </title>
        <meta
          name="description"
          content="Experience the transformative power of Vedic astrology at astrolohani. Get insights into your life's journey, improve spaces with Vastu expertise, discover the radiance of gemstones, navigate the year ahead with annual predictions, and find lasting relationships through horoscope matching."
        />
        <meta
          name="keywords"
          content="astrolohani, best astrologer in rudrapur , best astrologer in uttrakhand, pandit lalit lohani,Vedic astrology, astrology services, horoscope matching, gemstone recommendations, Vastu Shastra, annual predictions, astrologer in Rudrapur, Kundali analysis, cosmic guidance, spiritual insights"
        />
        <meta
          property="og:title"
          content="Astrolohani - Your Trusted Astrologer"
        />
        <meta
          property="og:description"
          content="Unlock the secrets of your life's journey with personalized Vedic Kundali charts."
        />
        <meta
          property="og:image"
          content="https://cdn.astrolohani.com/astrolohani/astrolohani-og-image.png"
        />
      </Helmet>
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
