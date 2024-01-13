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
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// import { ourServicesTestimonialData } from "../HomeData";
import { useTranslation } from "react-i18next";

const OurServicesTestimonial = () => {
  const classes = homeStyles;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("home"); // Use the translation hook
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const ourServicesTestimonial: any =
    t("ourServicesTestimonialData", { returnObjects: true }) || [];
  const ourServicesTestimonialData: any[] = Array.isArray(
    ourServicesTestimonial
  )
    ? ourServicesTestimonial
    : [];
  const maxSteps: any = ourServicesTestimonialData?.length;

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
          interval={9500}
        >
          {ourServicesTestimonialData?.map((step: any, index: number) => (
            <Box
              key={step.label}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {Math.abs(activeStep - index + 1) <= 1 && (
                <Stack direction="column" spacing={2}>
                  <Box
                    sx={{
                      height: "276px",
                      width: "200px",
                      overflow: "hidden",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      textAlign: "center",
                      padding: 3,
                      border: "1px solid #E7E7E7",
                      boxShadow: "0px 0px 13px 0px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <img
                      src={step.serviceIcon1}
                      alt="our services"
                      height="70px"
                      width="70px"
                    />

                    <Typography gutterBottom sx={classes.imgText}>
                      {step.title}
                    </Typography>
                    <Typography gutterBottom sx={classes.desText}>
                      {step.des}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: "276px",
                      width: "200px",
                      overflow: "hidden",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      textAlign: "center",
                      padding: 3,
                      border: "1px solid #E7E7E7",
                      boxShadow: "0px 0px 13px 0px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <img
                      src={step.serviceIcon2}
                      alt="our services"
                      height="70px"
                      width="70px"
                    />
                    <Typography gutterBottom sx={classes.imgText}>
                      {step.title2}
                    </Typography>
                    <Typography gutterBottom sx={classes.desText}>
                      {step.des2}
                    </Typography>
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
    // if (isTruthy(ourServicesTestimonialData)) {
    if (ourServicesTestimonialData) {
      const dataToView =
        ourServicesTestimonialData!.length >= 2
          ? 2
          : ourServicesTestimonialData!.length;
      let indices: any[] = [];
      Array.from(Array(dataToView), (_, x) =>
        indices.push((activeStep + x) % ourServicesTestimonialData!.length)
      );
      return indices.map((index) => ourServicesTestimonialData![index]);
    }
    return [];
  };

  const getDesktopTestimonialView = () => {
    const data = inViewTestimonialData();
    return data.map((step: any, index: number) => {
      return (
        <>
          <Stack direction="column" spacing={2}>
            <Box
              sx={{
                height: "276px",
                width: "200px",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                textAlign: "center",
                padding: 3,
                border: "1px solid #E7E7E7",
                boxShadow: "0px 0px 13px 0px rgba(0, 0, 0, 0.04)",
              }}
            >
              <img
                src={step.serviceIcon1}
                alt="our services"
                height="70px"
                width="70px"
              />

              <Typography gutterBottom sx={classes.imgText}>
                {step.title}
              </Typography>
              <Typography gutterBottom sx={classes.desText}>
                {step.des}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "276px",
                width: "200px",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                textAlign: "center",
                padding: 3,
                border: "1px solid #E7E7E7",
                boxShadow: "0px 0px 13px 0px rgba(0, 0, 0, 0.04)",
              }}
            >
              <img
                src={step.serviceIcon2}
                alt="our services"
                height="70px"
                width="70px"
              />
              <Typography gutterBottom sx={classes.imgText}>
                {step.title2}
              </Typography>
              <Typography gutterBottom sx={classes.desText}>
                {step.des2}
              </Typography>
            </Box>
          </Stack>
        </>
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
              width: "53px",
              height: "53px",
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
              width: "47px",
              height: "47px",
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
        {isDesktop && (
          <Button
            size="small"
            onClick={handleBack}
            sx={{
              cursor: "pointer",
              svg: {
                color: "#314F70",
                cursor: "pointer",
                width: "53px",
                height: "53px",
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
        )}
        {isDesktop ? getDesktopTestimonialView() : getMobileTestimonialView()}
        {isDesktop && (
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              cursor: "pointer",
              svg: {
                color: "#314F70",
                cursor: "pointer",
                width: "47px",
                height: "47px",
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
        )}
      </Stack>
      {/* <Stack
        direction="row"
        alignItems="center"
        mt={{ xl: 5, lg: 2, md: 1, sm: 0, xs: 0 }}
        justifyContent="center"
      >
        {isDesktop && testimonialData!.length >= 3 && getDesktopIndicators()}
      </Stack> */}
    </Box>
  );
};
export default OurServicesTestimonial;
