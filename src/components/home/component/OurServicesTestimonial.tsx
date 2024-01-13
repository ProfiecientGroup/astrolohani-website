import React, { useState } from "react";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import homeStyles from "../Home.styles";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { isTruthy } from "../../../helpers/methods";
import { useTranslation } from "react-i18next";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const OurServicesTestimonial = () => {
  const classes = homeStyles;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("home");
  const ourServicesTestimonial: any = t("ourServicesTestimonialData", { returnObjects: true }) || [];
  const ourServicesTestimonialData: any[] = Array.isArray(ourServicesTestimonial) ? ourServicesTestimonial : [];
  const maxSteps: any = ourServicesTestimonialData?.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const getMobileTestimonialView = () => {
    return (
      <>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
          interval={9500}
        >
          {ourServicesTestimonialData?.map((step: any, index: number) => (
            <Box key={step.label} sx={{ display: "flex", justifyContent: "center" }}>
              {Math.abs(activeStep - index + 1) <= 1 && (
                <Stack direction="column" spacing={2}>
                  <Box sx={classes.testimonialBox}>
                    <img src={step.serviceIcon1} alt="our services" height="70px" width="70px" />
                    <Typography gutterBottom sx={classes.imgText}>{step.title}</Typography>
                    <Typography gutterBottom sx={classes.desText}>{step.des}</Typography>
                  </Box>
                  <Box sx={classes.testimonialBox}>
                    <img src={step.serviceIcon2} alt="our services" height="70px" width="70px" />
                    <Typography gutterBottom sx={classes.imgText}>{step.title2}</Typography>
                    <Typography gutterBottom sx={classes.desText}>{step.des2}</Typography>
                  </Box>
                </Stack>
              )}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </>
    );
  };

  const getDesktopTestimonialView = () => {
    const data = ourServicesTestimonialData.slice(activeStep, activeStep + 2);
    return data.map((step: any, index: number) => (
      <Stack key={index} direction="column" spacing={2}>
        <Box sx={classes.testimonialBox}>
          <img src={step.serviceIcon1} alt="our services" height="70px" width="70px" />
          <Typography gutterBottom sx={classes.imgText}>{step.title}</Typography>
          <Typography gutterBottom sx={classes.desText}>{step.des}</Typography>
        </Box>
        <Box sx={classes.testimonialBox}>
          <img src={step.serviceIcon2} alt="our services" height="70px" width="70px" />
          <Typography gutterBottom sx={classes.imgText}>{step.title2}</Typography>
          <Typography gutterBottom sx={classes.desText}>{step.des2}</Typography>
        </Box>
      </Stack>
    ));
  };

  return (
    <Box sx={classes.influenceBackground}>
      <Stack
        direction={{ lg: "row", sm: "column" }}
        justifyContent={{
          lg: "center",
          sm: "center",
          xs: "center",
          md: "center",
        }}
        alignItems="center"
        display="flex"
        spacing={2}
      >
        {isDesktop && (
          <Button
            size="small"
            onClick={handleBack}
            sx={classes.testimonialButton}
          >
            <KeyboardArrowLeftRoundedIcon />
          </Button>
        )}
        {isDesktop ? getDesktopTestimonialView() : getMobileTestimonialView()}
        {isDesktop && (
          <Button
            size="small"
            onClick={handleNext}
            sx={classes.testimonialButton}
          >
            <KeyboardArrowRightRoundedIcon />
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default OurServicesTestimonial;
