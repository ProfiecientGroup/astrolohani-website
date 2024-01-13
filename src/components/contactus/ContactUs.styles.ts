import {
  centerItemFlex,
  getRelativeFontSize,
  RobotoMediumFont,
  mediumFont,
  regularFont,
  theme,
} from "../../styles/styles";
import contactBg from "../../assets/images/contact/contactUsBg.webp";

const ContactUsStyles = {
  contactMain: {
    ...centerItemFlex,
    backgroundImage: "url(" + contactBg + ")",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#FFFFFE",
    padding: 15,
  },
  contactInner: {
    [theme.breakpoints.down("md")]: {
      ...centerItemFlex,
      flexDirection: "column",
    },
  },
  addressMain: {
    display: "flex",
    width: "270px",
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
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  },
  reachUsText: {
    ...RobotoMediumFont,
    color: "#FFFFFF",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  address: {
    ...RobotoMediumFont,
    color: "#FFFFFF",
    fontSize: "11px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  blueBox: {
    width: "auto",
    height: "300px",
    borderRadius: "37px",
    background: "#272C65",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
      height: "auto",
      padding: 3,
      marginBottom: 5,
    },
  },
  grayBox: {
    width: "243px",
    height: "300px",
    background: "var(--neutral-300, #EFF2F6)",
    borderTopRightRadius: "35px",
    borderBottomRightRadius: "35px",
    position: "absolute",
    top: 0,
    right: 0,
  },
  aboutText: {
    ...mediumFont,
    color: "#111111",
    fontSize: getRelativeFontSize(20),
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(10),
    },
  },
  optionStyle: {
    ...regularFont,
  },
  selectMenu: {
    width: "100%",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      padding: "12px 12px",
      position: "relative",
    },
    "& .MuiOutlinedInput-input": {
      "&.MuiSelect-select": {
        borderColor: "#24CBC7",
      },
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      // borderColor :primaryBorderColor,
    },
  },
  submitButton: {
    ...regularFont,
    fontStyle: "bold",
    fontSize: getRelativeFontSize(2),
    backgroundColor: "#272C65",
    borderRadius: "40px",
    color: "#fff",
    height: "50px",
    width: "188px",
    boxShadow: "none",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1B1028",
      color: "#F5F5F5",
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  },
  formMainContent: {
    backgroundColor: " #FFFFFF",
    width: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  formElementGrid: {
    display: "flex",
    flexDirection: "column",
  },
  textfieldStyles: {
    mb: 1,
    width: "auto",
    backgroundColor: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      "& fieldset": {
        borderColor: "#D2D2D2",
      },
      "&:hover fieldset": {
        borderColor: "#D2D2D2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000000",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
} as const;

export default ContactUsStyles;
