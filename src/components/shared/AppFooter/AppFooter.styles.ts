import {
  getRelativeFontSize,
  latoMediumFont,
  mediumFont,
  theme,
} from "../../../styles/styles";
import footerBg from "../../../assets/icons/footerIcon/footerBg.webp";

const appFooterStyles = {
  footer: {
    backgroundColor: "#FFF",
    backgroundImage: "url(" + footerBg + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "50vh",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    padding: "20px 0",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      height: "130vh",
      backgroundColor: "#FFF",
      // backgroundImage: "none",
    alignItems: "end",

    },
  },
  footerBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  regularFont: {
    ...latoMediumFont,
    fontSize: getRelativeFontSize(2),
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      // color: "#272C65",
    },
  },
  copyright: {
    textAlign: "center",
  },
  label: {
    ...mediumFont,
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      // color: "#272C65",
    },
  },
  pointerCursor: {
    cursor: "pointer",
  },
  pinLocationText: {
    ...latoMediumFont,
    fontSize: getRelativeFontSize(),
    marginLeft: "4px",
    color: "#767676",
  },
  pinAddressText: {
    ...latoMediumFont,
    fontSize: getRelativeFontSize(-2),
    color: "#E73644",
  },
} as const;

export default appFooterStyles;
