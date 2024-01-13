import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import homeStyles from "../Home.styles";
import {
  RobotoMediumFont,
  centerItemFlex,
  getRelativeFontSize,
  latoMediumFont,
} from "../../../styles/styles";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// import { isTruthy } from "../../../helpers/methods";
import { mobileTestimonialData, testimonialData } from "../HomeData";
import { useTranslation } from "react-i18next";

const CustomCarousel = () => {
  const classes = homeStyles;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const { t } = useTranslation("home");
  const mobileTestimonial: any =
    t("mobileTestimonialData", { returnObjects: true }) || [];
  const mobileTestimonialData: any[] = Array.isArray(mobileTestimonial)
    ? mobileTestimonial
    : [];

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
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
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
            <Box
              key={step.label}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {Math.abs(activeStep - index + 1) <= 1 && (
                <Stack direction="column" spacing={5} justifyContent="center">
                  <Box
                    sx={{
                      width: "auto",
                      height: "128px",
                      border: "1px dashed #CECECE",
                      ...centerItemFlex,
                      padding: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        ...latoMediumFont,
                        color: "#797979",
                        [theme.breakpoints.down("md")]: {
                          fontSize: getRelativeFontSize(-1),
                        },
                      }}
                    >
                      {step.clientFeedback1}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px dashed #CECECE",
                        width: "160px",
                        hight: "auto",
                        padding: 2,
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                        position: "relative",
                        left: "5%",
                      }}
                    >
                      <Typography>{step.clientName1}</Typography>
                    </Box>
                    <img
                      src={step.clientImg1}
                      alt="client"
                      height="80px"
                      width="80px"
                      style={{
                        zIndex: 1,
                      }}
                    />
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
    // if (isTruthy(testimonialData)) {
    if (testimonialData) {
      const dataToView =
        testimonialData!.length >= 1 ? 1 : testimonialData!.length;
      let indices: any[] = [];
      Array.from(Array(dataToView), (_, x) =>
        indices.push((activeStep + x) % testimonialData!.length)
      );
      return indices.map((index) => testimonialData![index]);
    }
    return [];
  };

  const getDesktopTestimonialView = () => {
    const data = inViewTestimonialData();
    return data.map((step: any, index: number) => {
      return (
        <Stack direction="row" spacing={4} key={index}>
          <Stack direction="column" spacing={5} justifyContent="center">
            <Box
              sx={{
                width: "515px",
                height: "128px",
                border: "1px dashed #CECECE",
                ...centerItemFlex,
                padding: 2,
              }}
            >
              <Typography sx={{ ...RobotoMediumFont, color: "#797979" }}>
                {step.clientFeedback1}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  border: "1px dashed #CECECE",
                  width: "170px",
                  hight: "auto",
                  padding: 2,
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                  position: "relative",
                  left: "5%",
                }}
              >
                <Typography sx={{ ...RobotoMediumFont, color: "#000" }}>
                  {step.clientName1}
                </Typography>
              </Box>
              <img
                src={step.clientImg1}
                alt="client"
                height="80px"
                width="80px"
                style={{
                  zIndex: 1,
                }}
              />
            </Box>
          </Stack>
          <Stack direction="column" spacing={5} justifyContent="center">
            {step.clientFeedback2 && (
              <Box
                sx={{
                  width: "515px",
                  height: "128px",
                  border: "1px dashed #CECECE",
                  ...centerItemFlex,
                  padding: 2,
                }}
              >
                <Typography
                  sx={{
                    ...RobotoMediumFont,
                    color: "#797979",
                    [theme.breakpoints.down("md")]: {
                      fontSize: getRelativeFontSize(1),
                    },
                  }}
                >
                  {step.clientFeedback2}
                </Typography>
              </Box>
            )}
            {step.clientImg2 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  height="80px"
                  width="80px"
                  alt="client"
                  src={step.clientImg2}
                  style={{
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    border: "1px dashed #CECECE",
                    width: "190px",
                    hight: "auto",
                    padding: 2,
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    position: "relative",
                    right: "5%",
                  }}
                >
                  <Typography sx={{ ...RobotoMediumFont, color: "#000" }}>
                    {step.clientName2}
                  </Typography>
                </Box>
              </Box>
            )}
          </Stack>
        </Stack>
      );
    });
  };

  const getDesktopIndicators = () => {
    return (
      <>
        <Button
          size="small"
          onClick={handleBack}
          sx={{
            cursor: "pointer",
            svg: {
              color: "#314F70",
              cursor: "pointer",
              width: "24px",
              height: "24px",
            },
            "&:focus": {
              color: "#314F70",
              backgroundColor: "#f9fcff",
            },
            "&:hover": {
              color: "#314F70",
              backgroundColor: "#f9fcff",
            },
            transition: "all ease 2s",
          }}
        >
          <KeyboardArrowLeftRoundedIcon />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          sx={{
            cursor: "pointer",
            svg: {
              color: "#314F70",
              cursor: "pointer",
              width: "24px",
              height: "24px",
            },
            "&:focus": {
              color: "#314F70",
              backgroundColor: "#f9fcff",
            },
            "&:hover": {
              color: "#314F70",
              backgroundColor: "#f9fcff",
            },
            transition: "all ease 0.5s",
          }}
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
