import {
  centerItemFlex,
  getRelativeFontSize,
  theme,
  regularFont,
  mediumFont,
  primaryColor,
  latoBoldFont,
  latoMediumFont,
  latoRegularFont,
  RobotoMediumFont,
} from "../../styles/styles";
import aboutBg from "../../assets/images/home/whatWeDoBg.webp";
import panchangGocharBg from "../../assets/images/home/panchangGocharBg.webp";
import whyChooseBg from "../../assets/images/home/whyChooseBg.webp";

const homeStyles = {
  homeMain: {
    overflowX: "hidden",
  },
  testimonialText: {
    ...mediumFont,
    fontSize: getRelativeFontSize(20),
    lineHeight: "98px",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#212121",
    [theme.breakpoints.down("lg")]: {
      fontSize: getRelativeFontSize(10),
    },
  },
  imgText: {
    ...mediumFont,
    color: "#1A1A1A",
    textAlign: "center",
    fontSize: getRelativeFontSize(6),
    [theme.breakpoints.down("lg")]: {
      fontSize: getRelativeFontSize(2),
    },
  },
  desText: {
    ...latoMediumFont,
    color: "#797979",
    fontSize: getRelativeFontSize(2),
  },
  influenceBackground: {
    height: "auto",
    textAlign: "center",
    padding: "15px 0",
    backgroundColor: "#FEFEFE",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
  },
  bannerTitle: {
    ...regularFont,
    color: "#FFFFFF",
    lineHeight: 1.1,
    fontSize: getRelativeFontSize(36),
    [theme.breakpoints.down("lg")]: {
      fontSize: getRelativeFontSize(15),
    },
  },
  bannerDes: {
    ...latoMediumFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(2),
  },
  bannerBtn: {
    borderRadius: "45px",
    background: "#FFFFFF",
    ...centerItemFlex,
    width: "160px",
    height: "45px",
    marginTop: 1,
    cursor: "pointer",
  },
  btnText: {
    ...latoBoldFont,
    color: "#111111",
    fontSize: getRelativeFontSize(1),
    textTransform: "capitalize",
  },
  readBtn: {
    borderRadius: "45px",
    background: "#272C65",
    ...centerItemFlex,
    width: "160px",
    height: "45px",
    marginTop: 1,
    cursor: "pointer",
  },
  readText: {
    ...latoMediumFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(1),
    textTransform: "capitalize",
  },
  bookingBtn: {
    borderRadius: "45px",
    background: "#FFFFFF",
    ...centerItemFlex,
    width: "200px",
    height: "45px",
    marginTop: 1,
    cursor: "pointer",
    border: "1px solid #272C65",
  },
  aboutMain: {
    backgroundImage: "url(" + aboutBg + ")",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFE",
    padding: 5,
    [theme.breakpoints.down("md")]: {
      padding: 2,
    },
  },
  aboutText: {
    ...mediumFont,
    color: "#111111",
    fontSize: getRelativeFontSize(20),
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(10),
    },
  },
  aboutDes: {
    ...latoRegularFont,
    color: "#797979",
    fontSize: getRelativeFontSize(2),
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(1),
    },
  },
  experience: {
    ...mediumFont,
    color: "#F4A636",
    fontSize: getRelativeFontSize(30),
    marginRight: 1,
  },
  yearText: {
    ...regularFont,
    color: "#111111",
    fontSize: getRelativeFontSize(2),
  },
  experienceText: {
    ...mediumFont,
    color: "#111111",
    fontSize: getRelativeFontSize(5),
  },
  panchangMain: {
    backgroundImage: "url(" + panchangGocharBg + ")",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFE",
    padding: 5,
  },
  comingInner: {
    width: "135px",
    height: "145px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    textAlign: "center",
    padding: "5px",
    border: "1px solid #E7E7E7",
    boxShadow: "-2px 0px 28px 0px rgba(0, 0, 0, 0.05)",
    ...centerItemFlex,
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: "auto",
    },
    // "&:hover": {
    //   // transform: "scale(1.1)",
    //   backgroundColor: "#272C65",
    //   // transition: "all ease 1s",
    //   "& .hoverEffect": {
    //     color: "#FFFFFF",
    //     boxShadow: "none",
    //     // background: "#272C65",
    //     // transform: "scale(1.1)",
    //   },
    // },
  },
  circleStyle: {
    borderRadius: "56px",
    background: "#FFFFFF",
    boxShadow: "-2px 0px 15px 0px rgba(0, 0, 0, 0.06)",
    width: "56px",
    height: "56px",
    ...centerItemFlex,
    "&:hover": {
      boxShadow: "none",
      // background: "#272C65",
    },
  },
  numberLite: {
    ...mediumFont,
    fontSize: getRelativeFontSize(6),
  },
  textLite: {
    ...latoMediumFont,
    fontSize: getRelativeFontSize(0),
    color: "#666666",
    textTransform: "lowercase",
  },
  whyChooseMain: {
    backgroundImage: "url(" + whyChooseBg + ")",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFE",
    padding: "140px 30px",
  },
  whyChooseText: {
    ...mediumFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(20),
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(10),
    },
  },
  whyChooseDes: {
    ...latoMediumFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(2),
  },
  whyChooseCount: {
    ...mediumFont,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(8),
  },
  whyChooseTitle: {
    ...regularFont,
    textAlign: "center",
    fontSize: getRelativeFontSize(4),
    color: "#FFFFFF",
  },

  //accordion css
  mainAccordion: {
    marginBottom: "1rem",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    "&.MuiAccordion-root": {
      borderBottom: "1px solid #D2D2D2",
      backgroundColor: "linear-gradient(0deg, #F4AA36 0%, #F37335 100%)",
      marginBottom: 0,
    },
    "&.MuiAccordion-root:last-of-type": {
      borderBottom: "none",
    },
    "& .MuiAccordionDetails-root": {
      backgroundColor: "#F5F5F5",
      borderTop: "none",
      // marginLeft: "8px",
      textAlign: "start",
    },
  },
  solutionTitle: {
    ...latoBoldFont,
    color: "#212121",
    fontSize: getRelativeFontSize(4),
    padding: 0,
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(-1),
    },
  },
  titleInnerAccordian: {
    "&.MuiAccordionSummary-root": {
      backgroundColor: "#F5F5F5",
      flexDirection: "initial",
    },
    "& .MuiAccordionDetails-root": {
      // padding: "16px 0",
    },
  },
  accordianDescription: {
    ...RobotoMediumFont,
    color: "#666666",
    fontSize: getRelativeFontSize(4),
    padding: "0px 0px 20px 15px !important",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(-1),
      padding: "0px !important",
    },
  },
  selected: {
    svg: {
      color: primaryColor,
      fontSize: "0.9rem !important",
    },
  },
  comingFallInner: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    textAlign: "center",
    height: "65vh",
    border: "1px solid #E7E7E7",
    boxShadow: " -2px 0px 28px 0px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  tooltip: {
    background: "#fff",
    color: "#666",
    border: "1px solid #666",
    borderRadius: 0,
    fontWeight: "normal",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    padding: 20,
    fontSize: "0.6rem",
    fontFamily: "Lato,Microsoft JhengHei,Helvetica,Arial,sans-serif",
    maxWidth: 350,
  },
  arrow: {
    fontSize: 16,
    width: 17,
    "&::before": {
      border: "1px solid #666",
      backgroundColor: "#fff",
      boxSizing: "border-box",
    },
  },
  horoscopeMain: {
    backgroundColor: "transparent",
    perspective: "1000px",
  },
  horoscopeInner: {
    height: "140px",
    width: "135px",
    position: "relative",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    borderRadius: "10px",
    border: "1px solid #E7E7E7",
    background: "#272C65",
    boxShadow: "-2px 0px 28px 0px rgba(0, 0, 0, 0.05)",
    "&:hover": {
      transform: "rotateY(180deg)",
    },
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "110px",
    },
  },
  horoscopeFrontSide: {
    ...centerItemFlex,
    height: "140px",
    width: "135px",
    borderRadius: "9px",
    background: "#FFF",
    position: "absolute",
    backfaceVisibility: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "110px",
    },
  },
  horoscopeBackSide: {
    ...centerItemFlex,
    height: "140px",
    width: "135px",
    color: "white",
    transform: "rotateY(180deg)",
    position: "absolute",
    backfaceVisibility: "hidden",
    padding: 0.2,
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "110px",
    },
  },
  backText: {
    ...RobotoMediumFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(-4),
  },
} as const;

export default homeStyles;
