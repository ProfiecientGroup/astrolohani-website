import { primaryColor } from "../../../styles/styles";

const closeButtonStyles = {
  closeBtn: {
    position: "fixed",
    top: "10px",
    right: "10px",
    borderRadius: "50%",
    padding: "3px",
    color: "grey",
    cursor: "pointer",
  },
} as const;

export default closeButtonStyles;
