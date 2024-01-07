import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import Radio, { RadioProps } from "@mui/material/Radio";
import { createStyles, styled } from "@mui/styles";
import { List, Theme } from "@mui/material";
import Switch from "@mui/material/Switch";
import { CSSProperties, withStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
const borderRadius = "30px";

const primaryColor = "#C20C85";
const primaryBackgroundColor = "#1A0224";
const borderColor = "rgba(0, 0, 0, 0.12)";
const borderStyle = "1px solid " + borderColor;
const infoTextColor = "#888888";
const disabledBackgroundColor = "#888888";
const defaultFontSize = 14;
const defaultBoxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
const drawerWidth = 300;

const mainContainer: CSSProperties = {
  margin: "20px",
};

const boldFont: CSSProperties = {
  fontFamily: "Philosopher-Bold",
  fontWeight: 700,
};

const mediumFont: CSSProperties = {
  fontFamily: "Philosopher-Regular",
  fontWeight: 600,
};

const regularFont: CSSProperties = {
  fontFamily: "Philosopher-Regular",
  fontWeight: 400,
};

const latoBoldFont: CSSProperties = {
  fontFamily: "Lato-Bold",
  fontWeight: 600,
};

const latoMediumFont: CSSProperties = {
  fontFamily: "Lato-regular",
  fontWeight: 400,
};
const latoRegularFont: CSSProperties = {
  fontFamily: "Lato-regular",
  fontWeight: 300,
};

const robotoBoldFont: CSSProperties = {
  fontFamily: "Roboto-Bold",
  fontWeight: 500,
};

const RobotoMediumFont: CSSProperties = {
  fontFamily: "Roboto-regular",
  fontWeight: 400,
};

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Poppins_Medium",
      "Poppins_Regular",
      "BebasNeue-Regular",
      "Poppins_Black",
      "sans-serif",
    ].join(","),
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [raleway],
  //     },
  //   },
  // },
});

const getRelativeFontSize = (value: number = 0) => {
  let size = defaultFontSize + value;
  return size + "px";
};

const customButtonStyle: CSSProperties = {
  borderRadius: "15px",
  border: "none",
  fontSize: getRelativeFontSize(),
  textAlign: "center",
  backgroundColor: "#EFA185",
  padding: "10px 15px",
  boxShadow: " 4px 4px 30px rgba(0, 0, 0, 0.03)",
  color: "black",
  cursor: "pointer",
  textTransform: "none",
};

const customTextFieldStyle: CSSProperties = {
  borderRadius: borderRadius,
  position: "relative",
  border: "none",
  fontSize: getRelativeFontSize(2),
  backgroundColor: primaryBackgroundColor,
  padding: "10px 15px",
  boxShadow: "none",
  width: "100%",
};

const headingText: CSSProperties = {
  display: "inline-block",
  fontSize: getRelativeFontSize(8),
};

const centerItemFlex: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const spaceBetweenItemFlex: CSSProperties = {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
};

const centerItemAbsolute: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "red",
  },
});

const CustomInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      borderRadius: borderRadius,
      padding: "0 5px",
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);

const CustomSwitch = withStyles({
  switchBase: {
    color: "grey",
    "&$checked": {
      color: primaryColor,
      "& + $track": {
        backgroundColor: primaryColor,
      },
    },
    "&$checked + $track": {
      color: primaryColor,
    },
  },
  track: { backgroundColor: "grey" },
  checked: {},
})(Switch);

const CustomCheckbox = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const CustomRadio = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(4),
      },
      backgroundColor: theme.palette.common.white,
      // border: "1px solid #ced4da",
      borderRadius: "15px",
      padding: "5px 5px",
      width: "300px",
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);

export {
  borderRadius,
  primaryColor,
  disabledBackgroundColor,
  primaryBackgroundColor,
  borderColor,
  borderStyle,
  infoTextColor,
  defaultBoxShadow,
  customButtonStyle,
  customTextFieldStyle,
  headingText,
  centerItemFlex,
  spaceBetweenItemFlex,
  centerItemAbsolute,
  CustomInput,
  CustomSwitch,
  CustomCheckbox,
  CustomRadio,
  boldFont,
  regularFont,
  mediumFont,
  latoBoldFont,
  latoMediumFont,
  robotoBoldFont,
  RobotoMediumFont,
  latoRegularFont,
  getRelativeFontSize,
  theme,
  StyledList,
  mainContainer,
  drawerWidth,
};
