import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import homeStyles from "../Home.styles";
import { centerItemFlex } from "../../../styles/styles";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import urls from "../../../global/constants/urls";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CustomCarousel = () => {
  const classes = homeStyles;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("home");
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const bannerCarouselTranslation: any =
    t("bannerCarousel", { returnObjects: true }) || [];
  const bannerCarousel: any[] = Array.isArray(bannerCarouselTranslation)
    ? bannerCarouselTranslation
    : [];
  const maxSteps = bannerCarousel.length;

  const handleStepChange = (step: number) => {
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
            {bannerCarousel?.map((step: any, index: number) => (
              <Box key={step.label}>
                {Math.abs(activeStep - index + 1) <= 1 && (
                  <Box
                    sx={{
                      backgroundImage: "url(" + step.bgBanner + ")",
                      height: "650px",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      // backgroundPosition: "center",
                      width: "auto",
                      overflow: "hidden",
                      backgroundColor: "#FFFFFF",
                      ...centerItemFlex,
                      transition: "all ease 2s",
                      [theme.breakpoints.down("md")]:{
                        height: "500px",

                      }
                    }}
                  >
                    {isDesktop && (
                      <Button
                        size="small"
                        onClick={handleBack}
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50px",
                          background: "rgba(255, 255, 255, 0.30)",
                          width: "50px",
                          height: "50px",
                          marginLeft: 3,
                          minWidth: "50px",
                          svg: {
                            color: activeStep === 0 ? "gray" : "#FF7E00",
                            cursor: "pointer",
                            width: "30px",
                            height: "30px",
                          },
                          "&:focus": {
                            color: activeStep === 0 ? "gray" : "#FF7E00",
                            backgroundColor: "#f9fcff",
                          },
                          "&:hover": {
                            color: activeStep === 0 ? "gray" : "#FF7E00",
                            backgroundColor: "#f9fcff",
                          },
                          transition: "all ease 2s",
                        }}
                        disabled={activeStep === 0}
                      >
                        <KeyboardArrowLeftRoundedIcon />
                      </Button>
                    )}
                    <Container
                      maxWidth="sm"
                      sx={{
                        "&.MuiContainer-root": {
                          marginLeft: "50px",
                        },
                      }}
                    >
                      <Stack direction="column">
                        <Typography gutterBottom sx={classes.bannerDes}>
                          {step.heading}
                        </Typography>
                        <Typography sx={classes.bannerTitle} gutterBottom>
                          {step.title}
                        </Typography>
                        <Typography gutterBottom sx={classes.bannerDes}>
                          {step.des}
                        </Typography>
                        <Link
                          to={urls.contactUsViewPath}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          <Box sx={classes.bannerBtn}>
                            <Typography sx={classes.btnText}>
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
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50px",
                          background: "rgba(255, 255, 255, 0.30)",
                          width: "50px",
                          height: "50px",
                          marginRight: 3,
                          minWidth: "50px",
                          svg: {
                            color:
                              activeStep === maxSteps - 1 ? "gray" : "#FF7E00",
                            cursor: "pointer",
                            width: "30px",
                            height: "30px",
                          },
                          "&:focus": {
                            color: activeStep === 0 ? "gray" : "#FF7E00",
                            backgroundColor: "#f9fcff",
                          },
                          "&:hover": {
                            color: activeStep === 0 ? "gray" : "#FF7E00",
                            backgroundColor: "#f9fcff",
                          },
                          transition: "all ease 0.5s",
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
