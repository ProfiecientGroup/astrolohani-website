import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { servicesStyles } from "./services.styles";
import { useTranslation } from "react-i18next";

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
        <Container maxWidth="lg">
          <Typography>All Services</Typography>
          <Grid container spacing={1}>
            {allServicesData?.map((i: any, index: number) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Stack direction="column">
                    <img src={i.img} />
                    <Typography>{i.title}</Typography>
                    <Typography>{i.des}</Typography>
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
