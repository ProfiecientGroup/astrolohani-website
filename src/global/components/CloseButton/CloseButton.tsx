import { Box } from "@mui/system";
import CustomIcon from "../CustomIcon/CustomIcon";
import closeButtonStyles from "./CloseButton.styles";
import ClearIcon from "@mui/icons-material/Clear";

interface CustomProps {
  onClick: Function;
  customClasses?: any;
}

const CloseButton = (props: CustomProps) => {
  const classes = closeButtonStyles;
  const appliedClass = props.customClasses
    ? props.customClasses
    : classes.closeBtn;

  const getCloseButton = () => {
    return (
      <Box sx={appliedClass} onClick={() => props.onClick()}>
        <CustomIcon icon={<ClearIcon fontSize="medium" />} />
      </Box>
    );
  };

  return getCloseButton();
};

export default CloseButton;
