import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { servicesStyles } from "./services.styles";
import {
  getRelativeFontSize,
  latoMediumFont,
  theme,
} from "../../styles/styles";
import { useTranslation } from "react-i18next";

export interface CustomProps {
  bannerHeading: string;
  bannerDescription: string;
  servicesData: any;
}

const Services = (props: CustomProps) => {
  const classes = servicesStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const serviceCustomCarousel = () => {
    return (
      <>
        <Box sx={classes.servicesCarouselMain}>
          <Container maxWidth="md">
            <Stack direction="column" alignItems="center">
              <Typography sx={classes.bannerTitle} gutterBottom>
                {props.bannerHeading}
              </Typography>
              <Typography gutterBottom sx={classes.serviceBannerDes}>
                {props.bannerDescription}
              </Typography>
            </Stack>
          </Container>
        </Box>
      </>
    );
  };

  const servicesSection = () => {
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
                All Services
              </Typography>
              {/* <img
                  alt="services"
                  src={aboutIcon.src}
                  width="240px"
                  height="15px"
                  style={{ marginBottom: 15 }}
                /> */}
            </Stack>
            <Grid container spacing={3}>
              {props.servicesData?.map((item: any, index: number) => {
                return (
                  <Grid item md={12} lg={12} xs={12} sm={12} key={index}>
                    <Box key={index}>
                      <img
                        src={item.serviceImg}
                        alt={item.altTagName}
                        width="100%"
                        height="100%"
                        style={{ marginBottom: 25 }}
                      />
                      <Box
                        display="flex"
                        alignItems="center"
                        mb={1}
                        textAlign="start"
                      >
                        <Typography sx={classes.serviceHeading}>
                          {item.serviceHeading}
                        </Typography>{" "}
                        {/* {isDesktop && (
                              <img
                                src={horizontalLine.src}
                                style={{
                                  width: "21%",
                                  height: "10%",
                                  marginLeft: 10,
                                }}
                              />
                            )} */}
                      </Box>
                      {item.serviceDes?.map((description: any) => {
                        return (
                          <Typography
                            key="Description"
                            component="div"
                            sx={classes.aboutDes}
                          >
                            {description}
                          </Typography>
                        );
                      })}
                      {item.keyFeatures?.map((i: any, keyIndex: number) => {
                        return (
                          <Typography
                            sx={classes.subHeading}
                            textAlign="justify"
                            key={keyIndex}
                          >
                            {keyIndex + 1}. {i.subHeading} :{" "}
                            <span
                              style={{
                                ...latoMediumFont,
                                color: "#565656",
                                fontSize: getRelativeFontSize(2),
                                textAlign: "justify",
                              }}
                            >
                              {i.subDescription}
                            </span>
                          </Typography>
                        );
                      })}
                      <Typography
                        key="Description"
                        component="div"
                        sx={classes.aboutDes}
                      >
                        {item.wrapUp}
                      </Typography>
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

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Astrolohani Services | Illuminate Your Cosmic Journey | Astrology Now
        </title>
        <meta
          name="description"
          content="Explore our astrology services curated under the expert guidance of Pandit Lalit Lohani. Unlock the secrets of your cosmic journey with Vedic Kundali, create positive spaces with Vastu Visit, discover the power of gemstones, navigate the year ahead with Varshik Fal, find lasting relationships through Horoscope Matching, and make important moments shine with Muhurat Suggestions."
        />
      </Helmet>
      {serviceCustomCarousel()}
      {servicesSection()}
    </>
  );
};
export default Services;
