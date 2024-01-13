import React, { useState } from "react";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import homeStyles from "../Home.styles";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { isTruthy } from "../../../helpers/methods";
import { mobileTestimonialData, testimonialData } from "../HomeData";
import { useTranslation } from "react-i18next";
import {
  RobotoMediumFont,
  centerItemFlex,
  getRelativeFontSize,
  latoMediumFont,
} from "../../../styles/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CustomCarousel = () => {
  const classes = homeStyles;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("home");
  const mobileTestimonial: any = t("mobileTestimonialData", { returnObjects: true }) || [];
  const mobileTestimonialData: any[] = Array.isArray(mobileTestimonial) ? mobileTestimonial : [];

  const testimonial: any = t("testimonialData", { returnObjects: true }) || [];
  const testimonialData: any[] = Array.isArray(testimonial) ? testimonial : [];
  const maxSteps: any = testimonialData?.length;

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
          interval={9000}
        >
          {mobileTestimonialData?.map((step, index) => (
            <Box key={step.label} sx={{ display: "flex", justifyContent: "center" }}>
              {Math.abs(activeStep - index + 1) <= 1 && (
                <Stack direction="column" spacing={5} justifyContent="center">
                  <Box sx={classes.testimonialBox}>
                    <Typography sx={{ ...latoMediumFont, color: "#797979", fontSize: getRelativeFontSize(-1) }}>
                      {step.clientFeedback1}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Box sx={classes.testimonialNameBox}>
                      <Typography>{step.clientName1}</Typography>
                    </Box>
                    <img src={step.clientImg1} alt="client" height="80px" width="80px" />
                  </Box>
                </Stack>
              )}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </>
    );
  };

  const inViewTestimonialData = () => {
    if (isTruthy(testimonialData)) {
      const dataToView = testimonialData!.length >= 1 ? 1 : testimonialData!.length;
      let indices: any[] = [];
      Array.from(Array(dataToView), (_, x) => indices.push((activeStep + x) % testimonialData!.length));
      return indices.map((index) => testimonialData![index]);
    }
    return [];
  };

  const getDesktopTestimonialView = () => {
    const data = inViewTestimonialData();
    return data.map((step: any, index: number) => (
      <Stack key={index} direction="row" spacing={4}>
        <Stack direction="column" spacing={5} justifyContent="center">
          <Box sx={classes.testimonialBox}>
            <Typography sx={{ ...RobotoMediumFont, color: "#797979" }}>{step.clientFeedback1}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <Box sx={classes.testimonialNameBox}>
              <Typography sx={{ ...RobotoMediumFont, color: "#000" }}>{step.clientName1}</Typography>
            </Box>
            <img src={step.clientImg1} alt="client" height="80px" width="80px" />
          </Box>
        </Stack>
        <Stack direction="column" spacing={5} justifyContent="center">
          {step.clientFeedback2 && (
            <Box sx={classes.testimonialBox}>
              <Typography sx={{ ...RobotoMediumFont, color: "#797979", fontSize: getRelativeFontSize(1) }}>
                {step.clientFeedback2}
              </Typography>
            </Box>
          )}
          {step.clientImg2 && (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <img height="80px" width="80px" alt="client" src={step.clientImg2} />
              <Box sx={classes.testimonialNameBox}>
                <Typography sx={{ ...RobotoMediumFont, color: "#000" }}>{step.clientName2}</Typography>
              </Box>
            </Box>
          )}
        </Stack>
      </Stack>
    ));
  };

  const getDesktopIndicators = () => {
    return (
      <>
        <Button
          size="small"
          onClick={handleBack}
          sx={classes.testimonialButton}
        >
          <KeyboardArrowLeftRoundedIcon />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          sx={classes.testimonialButton}
        >
          <KeyboardArrowRightRoundedIcon />
        </Button>
      </>
    );
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
        {isDesktop ? getDesktopTestimonialView() : getMobileTestimonialView()}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        mt={{ xl: 5, lg: 2, md: 1, sm: 0, xs: 0 }}
        justifyContent="center"
      >
        {isDesktop && testimonialData!.length >= 1 && getDesktopIndicators()}
      </Stack>
    </Box>
  );
};

export default CustomCarousel;
