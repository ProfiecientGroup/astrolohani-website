import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { centerItemFlex } from "../../../styles/styles";
import urls from "../../../global/constants/urls";
import Link from "react-router-dom";
import { useTranslation } from "react-i18next";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CustomCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("home");
  const bannerCarouselTranslation = t("bannerCarousel", { returnObjects: true }) || [];
  const bannerCarousel = Array.isArray(bannerCarouselTranslation)
    ? bannerCarouselTranslation
    : [];
  const maxSteps = bannerCarousel.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      {bannerCarousel.length > 0 ? (
        <Box>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={9500}
          >
            {bannerCarousel?.map((step, index) => (
              <Box key={step.label}>
                {Math.abs(activeStep - index + 1) <= 1 && (
                  <Box
                    style={{
                      backgroundImage: `url(${step.bgBanner})`,
                      height: "600px",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "auto",
                      overflow: "hidden",
                      backgroundColor: "#FFFFFF",
                      ...centerItemFlex,
                      transition: "all ease 2s",
                    }}
                  >
                    {isDesktop && (
                      <Button
                        size="small"
                        onClick={handleBack}
                        style={{
                          cursor: "pointer",
                          borderRadius: "50px",
                          background: "rgba(255, 255, 255, 0.30)",
                          width: "50px",
                          height: "50px",
                          marginLeft: 3,
                          minWidth: "50px",
                        }}
                        disabled={activeStep === 0}
                      >
                        <KeyboardArrowLeftRoundedIcon />
                      </Button>
                    )}
                    <Container
                      maxWidth="sm"
                      style={{
                        "&.MuiContainer-root": {
                          marginLeft: "50px",
                        },
                      }}
                    >
                      <Stack direction="column">
                        <Typography gutterBottom style={classes.bannerDes}>
                          {step.heading}
                        </Typography>
                        <Typography style={classes.bannerTitle} gutterBottom>
                          {step.title}
                        </Typography>
                        <Typography gutterBottom style={classes.bannerDes}>
                          {step.des}
                        </Typography>
                        <Link to={urls.contactUsViewPath}>
                          <Box style={classes.bannerBtn}>
                            <Typography style={classes.btnText}>
                              Appointment
                            </Typography>
                          </Box>
                        </Link>
                      </Stack>
                    </Container>
                    {isDesktop && (
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        style={{
                          cursor: "pointer",
                          borderRadius: "50px",
                          background: "rgba(255, 255, 255, 0.30)",
                          width: "50px",
                          height: "50px",
                          marginRight: 3,
                          minWidth: "50px",
                        }}
                      >
                        <KeyboardArrowRightRoundedIcon />
                      </Button>
                    )}
                  </Box>
                )}
              </Box>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CustomCarousel;
