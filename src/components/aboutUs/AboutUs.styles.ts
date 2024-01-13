import aboutBg from "../../assets/images/home/whatWeDoBg.webp";
import {
  getRelativeFontSize,
  latoMediumFont,
  mediumFont,
  regularFont,
  theme,
} from "../../styles/styles";

export const aboutUsStyles = {
  aboutMain: {
    backgroundImage: "url(" + aboutBg + ")",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFE",
    padding: 5,
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
    ...latoMediumFont,
    color: "#797979",
    fontSize: getRelativeFontSize(2),
    marginBottom: 2,
  },
  servicesText: {
    ...mediumFont,
    color: "#111111",
    fontSize: getRelativeFontSize(3),
    position: "absolute",
    bottom: 50,
  },
  aboutInnerContent: {
    position: "absolute",
    top: 0,
    padding: "97px 0px 0px 150px",
    [theme.breakpoints.down("lg")]: {
      padding: 0,
      position: "relative",
    },
  },
  panditText: {
    ...regularFont,
    color: "#000",
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  aboutDescription: {
    ...latoMediumFont,
    color: "#000",
    fontSize: "14px",
    textAlign: "justify",
  },
  number: {
    ...regularFont,
    color: "#ECECEC",
    fontSize: "97px",
    textTransform: "capitalize",
  },
} as const;
