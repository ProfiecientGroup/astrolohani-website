import aboutBg from "../../assets/images/home/whatWeDoBg.webp";
import {
  boldFont,
  centerItemFlex,
  getRelativeFontSize,
  latoBoldFont,
  latoMediumFont,
  mediumFont,
  regularFont,
  theme,
} from "../../styles/styles";
import servicesBanner1 from "../../assets/images/services/servicesBanner.webp";

export const servicesStyles = {
  panchangMain: {
    backgroundImage: "url(" + aboutBg + ")",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFE",
    padding: 3,
  },
  aboutText: {
    ...mediumFont,
    color: "#111111",
    fontSize: getRelativeFontSize(20),
  },
  serviceHeading: {
    ...boldFont,
    color: "#111",
    fontSize: getRelativeFontSize(6),
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(2),
    },
  },
  aboutDes: {
    ...latoMediumFont,
    color: "#565656",
    fontSize: getRelativeFontSize(2),
    textAlign: "justify",
    letterSpacing: "0.11px",
    padding: "11px 0px",
    lineHeight: 1.5,
  },
  servicesCarouselMain: {
    backgroundImage: "url(" + servicesBanner1 + ")",
    height: "600px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    ...centerItemFlex,
  },
  bannerTitle: {
    ...regularFont,
    color: "#FFFFFF",
    lineHeight: 1.1,
    fontSize: getRelativeFontSize(15),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(10),
    },
  },
  serviceBannerDes: {
    ...latoMediumFont,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: getRelativeFontSize(2),
    [theme.breakpoints.down("lg")]: {
      fontSize: getRelativeFontSize(1),
    },
  },
  subHeading: {
    ...latoBoldFont,
    color: "#111",
    fontSize: getRelativeFontSize(3),
    textTransform: "capitalize",
    textAlign: "start",
    marginBottom: 2,
    marginTop: 2,
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(1),
      textAlign: "justify",
    },
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
  servicesText: {
    ...mediumFont,
    color: "#111111",
    fontSize: getRelativeFontSize(3),
  },
  btnStyle: {
    ...mediumFont,
    color: "#272C65",
    fontSize: getRelativeFontSize(3),
  },
} as const;
