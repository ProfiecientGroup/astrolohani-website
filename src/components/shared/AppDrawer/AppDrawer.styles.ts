import { getRelativeFontSize, latoMediumFont, theme } from "../../../styles/styles";

const appDrawerStyles = {
  drawer: {
    display: "flex",
    flexGrow: 1,
    width: "100vw",
    backgroundColor: "#FFF",
    boxShadow:"none"
  },
  Supportdrawer: {
    display: "flex",
    flexGrow: 1,
    width: "30vw",
    backgroundColor: "#F5F5F5 ",
  },
  regularFont: {
    ...latoMediumFont,
    fontSize: getRelativeFontSize(2),
    color: "#272C65",
  },
} as const;

export default appDrawerStyles;
