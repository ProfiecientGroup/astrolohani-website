import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import panditLlalitPic from "../../assets/images/aboutUs/panditLalitPic.webp";
import { aboutUsStyles } from "./AboutUs.styles";
import aboutIcon from "../../assets/images/home/aboutIcon.webp";
import { theme } from "../../styles/styles";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const classes = aboutUsStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");
  const aboutSections: any = t("aboutSections", { returnObjects: true });

  const getAboutUs = () => {
    return (
      <>
        <Box position="relative" padding="60px 0 0 10px">
          <Box display="flex" justifyContent="flex-end">
            <img
              src={panditLlalitPic}
              alt="pandit lalit"
              width="90%"
              height="100%"
              style={{
                marginBottom: "20px",
              }}
            />
          </Box>
          <Box sx={classes.aboutInnerContent}>
            <Container maxWidth="xs">
              <Typography sx={classes.panditText}>
                {/* Pandit Lalit Lohani */}
                {t("panditName")}
              </Typography>
              <Typography sx={classes.aboutDescription}>
                {t("panditDes")}
                {/* In the heart of Rudrapur, Uttarakhand, surrounded by the
                Himalayas, Pandit Lahoni, with over 25 years of astrological
                expertise, offers &quot;hasthlikhit&quot; (handwritten)
                horoscopes and precise predictions. Against the backdrop of the
                majestic mountains, he guides people through life&quot;s
                journey, providing services such as horoscope matching, Vastu
                visit at factories and industrie year forecasts, Muhurta
                calculations, home remedies and astrology stone recommendations,
                deeply rooted in the mystical atmosphere of the Himalayas. */}
              </Typography>
            </Container>
          </Box>
        </Box>
      </>
    );
  };

  const servicesSection = () => {
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
              {/* Our Specialized Services */}
              {t("ourServicesTitle")}
            </Typography>
            <Typography sx={classes.aboutDes} gutterBottom>
              {t("ourServicesHeading")}
              {/* Our Specialized Services: Guided by the Wisdom of Pandit Lalit
              Lahoni */}
            </Typography>
            <img
              src={aboutIcon}
              alt="our Specialized"
              width="240px"
              height="15px"
              style={{ marginBottom: 15 }}
            />
            <Typography sx={classes.aboutDes}>
              {t("ourServicesDes")}
              {/* At our cosmic sanctuary, we take pride in offering a diverse array
              of specialized services, all meticulously crafted under the expert
              guidance of Pandit Lalit Lohani. Our commitment to authenticity
              and the sacred art of astrology shines through in every facet of
              our offerings. */}
            </Typography>
          </Stack>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={3} mb={10}>
            {/* {aboutServices.map((i: any, index: number) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                  <Stack
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "row",
                      xs: "column",
                    }}
                    spacing={2}
                    alignItems="center"
                  >
                    <img
                      src={i.serviceImg}
                      alt={i.altTagName}
                      width="227px"
                      height="282px"
                    />
                    <Box>
                      <Box position="relative">
                        <Typography sx={classes.number}>
                          {index + 1}.
                        </Typography>
                        <Typography sx={classes.servicesText} gutterBottom>
                          {i.serviceHeading}
                        </Typography>
                      </Box>
                      <Typography sx={classes.aboutDes}>
                        {i.serviceDes}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              );
            })} */}
            {aboutSections.map((i: any, index: number) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                  <Stack
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "row",
                      xs: "column",
                    }}
                    spacing={2}
                    alignItems="center"
                  >
                    <img
                      src={i.serviceImg}
                      alt={i.altTagName}
                      width="227px"
                      height="282px"
                    />
                    <Box>
                      <Box position="relative">
                        <Typography sx={classes.number}>
                          {index + 1}.
                        </Typography>
                        <Typography sx={classes.servicesText} gutterBottom>
                          {i.serviceHeading}
                        </Typography>
                      </Box>
                      <Typography sx={classes.aboutDes}>
                        {i.serviceDes}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container maxWidth="md">
          <Typography sx={classes.aboutDes} style={{ textAlign: "center" }}>
            {/* At our cosmic sanctuary, we take pride in offering a diverse array
            of specialized services, all meticulously crafted under the expert
            guidance of Pandit Lalit Lohani. Our commitment to authenticity and
            the sacred art of astrology shines through in every facet of our
            offerings. */}
            {t("aboutBottomDes")}
          </Typography>
        </Container>
      </Box>
    );
  };

  return (
    <>
      {getAboutUs()}
      {servicesSection()}
    </>
  );
};
export default AboutUs;
