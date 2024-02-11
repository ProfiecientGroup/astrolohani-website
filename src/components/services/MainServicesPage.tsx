import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { servicesStyles } from "./services.styles";
import { useTranslation } from "react-i18next";
import aboutIcon from "../../assets/images/home/aboutIcon.webp";
import { NavLink } from "react-router-dom";

const MainServices = () => {
  const classes = servicesStyles;
  const { t } = useTranslation("mainService");
  const allServicesData: any = t("allServicesData", { returnObjects: true });

  const serviceBanner = () => {
    return (
      <>
        <Box sx={classes.servicesCarouselMain}>
          <Container maxWidth="md">
            <Stack direction="column" alignItems="center">
              <Typography sx={classes.bannerTitle} gutterBottom>
                {t("bannerHeading")}
              </Typography>
              <Typography gutterBottom sx={classes.serviceBannerDes}>
                {t("bannerDes")}
              </Typography>
            </Stack>
          </Container>
        </Box>
      </>
    );
  };

  const allServices = () => {
    return (
      <>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography textAlign="center" sx={classes.aboutText} gutterBottom>
            All Services
          </Typography>
          <img
            alt="services"
            src={aboutIcon}
            width="240px"
            height="15px"
            style={{ marginBottom: 40 }}
          />
          <Grid container spacing={3}>
            {allServicesData?.map((i: any, index: number) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12} mb={2} height={"100%"}>
                  <Stack direction="column" textAlign={"start"}>
                    <img src={i.img} style={{ marginBottom: 20 }} />
                    <Typography sx={classes.servicesText}>
                      {index + 1} . {i.title}
                    </Typography>
                    <Typography sx={classes.aboutDes}>{i.des}</Typography>
                    <NavLink to={i.redirectLink}>
                      <Typography sx={classes.btnStyle}>
                        Read more...
                      </Typography>
                    </NavLink>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  };
  return (
    <>
      {serviceBanner()}
      {allServices()}
    </>
  );
};
export default MainServices;
