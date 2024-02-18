import {
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import appDrawerStyles from "./AppDrawer.styles";
import logo from "../../../assets/icons/logo/whiteLogo.svg";
import urls from "../../../global/constants/urls";
import strings from "../../../global/constants/strings";
import call from "../../../assets/icons/appHeader/call.webp";
import mail from "../../../assets/icons/appHeader/adress.webp";
import CloseButton from "../../../global/components/CloseButton/CloseButton";
import LanguageSwitcher from "../LanguageSwitcher";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
interface CustomProps {
  setMenuMobileVisible?: Function;
  isActive?: boolean;
  listItems: JSX.Element;
}

const socialMediaIcon = [
  {
    icon: <FacebookRoundedIcon />,
    redirectLink: urls.facebook,
  },
  {
    icon: <InstagramIcon />,
    redirectLink: urls.instagram,
  },
];

const AppDrawer = (props: CustomProps) => {
  const classes = appDrawerStyles;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const getLogo = () => {
    return (
      <Box mt={6} style={{ display: "flex", justifyContent: "center" }}>
        <Box
          onClick={() => navigate(urls.homePathView)}
          style={{ textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="astroLohani"
            height={isDesktop ? "60px" : "50px"}
            style={{
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    );
  };

  const getCloseButton = () => {
    return (
      <CloseButton
        onClick={() =>
          props.setMenuMobileVisible && props.setMenuMobileVisible(false)
        }
      />
    );
  };
  const getYear = () => {
    return new Date().getFullYear();
  };

  const socialMedia = () => {
    return (
      <Stack direction="column" alignItems="center" spacing={3}>
        <Stack direction={"row"} gap={1} alignItems="center">
          <img src={call} alt="phone" height="15px" width="15px" />
          <Typography
            onClick={() => navigate(`tel:${strings.CONTACT}`)}
            sx={classes.regularFont}
          >
            {strings.CONTACT}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={1} alignItems="center">
          <img src={mail} alt="mail" height="15px" width="15px" />
          <Typography
            onClick={() => navigate(`mailto:${strings.SUPPORT}`)}
            sx={classes.regularFont}
          >
            {strings.SUPPORT}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography sx={classes.regularFont} textAlign="center">
            LIG-A-495/8, Dashmesh Road, Avas Vikas Holy Chowk, Rudrapur
          </Typography>
          <Typography sx={classes.regularFont}></Typography>
        </Stack>
        <Divider color="#FDA228" sx={{ height: 1, width: "90%" }} />
      </Stack>
    );
  };
  const getAppDrawer = () => {
    return (
      <Box sx={classes.drawer} mb={3}>
        <Box style={{ width: "100%" }}>
          {!isDesktop && getCloseButton()}
          {!isDesktop && getLogo()}
          <Stack
            direction={"column"}
            alignItems={"center"}
            padding={"30px 0px"}
          >
            <LanguageSwitcher fontColor={"#F4A636"} />
            {props.listItems}
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {socialMediaIcon.map((i: any, index: number) => {
              return (
                <Box onClick={() => navigate(i.redirectLink)}>
                  <a target="_target">{i.icon}</a>
                </Box>
              );
            })}
          </Stack>
          {socialMedia()}
          <Box textAlign="center">
            <Typography
              sx={classes.regularFont}
              mt={2}
            >{`© ${getYear()}. All Rights Reserved`}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {getAppDrawer()}
      {/* <AppFooter /> */}
    </>
  );
};

export default AppDrawer;
