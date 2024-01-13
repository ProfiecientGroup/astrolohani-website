import {
  centerItemFlex,
  getRelativeFontSize,
  regularFont,
  theme,
  robotoBoldFont,
  RobotoMediumFont,
} from "../../../styles/styles";

const appHeaderStyles = {
  appBar: {
    boxShadow: "none",
    backgroundColor: "white",
    color: "black",
    wordSpacing: 1,
  },
  menuToolbar: {
    backgroundColor: "#FFFFFF",
    color: "#000",
    ...centerItemFlex,
    [theme.breakpoints.up("md")]: {
      height: "112px",
    },

    [theme.breakpoints.up("sm")]: {
      height: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  },
  navMenuMain: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      ...centerItemFlex,
      flexDirection: "column",
    },
  },
  selected: {
    ...robotoBoldFont,
    color: "#272C65",
    [theme.breakpoints.down("md")]: {
      color: "#F4A636",
    },
  },
  navBtn: {
    ...RobotoMediumFont,
    width: "auto",
    color: "#FFFFFF",
    "&:hover": {
      ...robotoBoldFont,
      color: "#272C65",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      mb: 0.1,
      ...RobotoMediumFont,
      width: "auto",
      color: "#272C65",
      "&:hover": {
        ...robotoBoldFont,
        color: "#FF7E00",
        cursor: "pointer",
      },
    },
  },
  Button: {
    ...regularFont,
    fontSize: getRelativeFontSize(1),
    backgroundColor: "#1B1028",
    textTransform: "unset",
    color: "#fff",
    height: "45px",
    width: "auto",
    borderRadius: "12px",
    letterSpacing: "1px",
    boxShadow: "none !important",
    "&:hover": {
      backgroundColor: "#1B1028",
      color: "#F5F5F5",
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  },
  menuMobile: {
    width: "30vw",
  },
  mainAddressBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
  addressMain: {
    display: "flex",
    alignItems: "self-start",
    justifyContent: "center",
    width: "360px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
    },
  },
  addressInner: {
    border: "1px solid #EDEDED",
    width: "50px",
    height: "50px",
    ...centerItemFlex,
    flexShrink: 0,
  },
  reachUsText: {
    ...robotoBoldFont,
    color: "#000",
    fontSize: "16px",
  },
  address: {
    ...RobotoMediumFont,
    color: "#797979",
    fontSize: "13px",
  },
  innerContent: {
    backgroundColor: "#FF7E00",
    width: "100%",
    height: "10vh",
    ...centerItemFlex,
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
    },
  },
  saviynt: {
    ...RobotoMediumFont,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "15vw",
    fontSize: getRelativeFontSize(1),
    maxWidth: "100vw",
    margin: 0,
    "&:hover": {
      color: "#0D3057",
    },
    [theme.breakpoints.down("xl")]: {
      width: "250px",
      height: "35px",
      borderRadius: "7px",
    },
  },
} as const;

export default appHeaderStyles;
