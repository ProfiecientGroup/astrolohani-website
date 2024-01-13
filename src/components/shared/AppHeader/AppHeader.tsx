import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  Typography,
  popoverClasses,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import appHeaderStyles from "./AppHeader.styles";
import AppDrawer from "../AppDrawer/AppDrawer";
import { useMediaQuery } from "@mui/material";
import logo from "../../../assets/icons/logo/whiteLogo.svg";
import { getRelativeFontSize, theme } from "../../../styles/styles";
import urls from "../../../global/constants/urls";
import adress from "../../../assets/icons/appHeader/adress.webp";
import call from "../../../assets/icons/appHeader/call.webp";
import facebook from "../../../assets/icons/footerIcon/facebook.svg";
import instagram from "../../../assets/icons/footerIcon/instagram.svg";
import LanguageSwitcher from "../LanguageSwitcher";
import { Link } from "react-router-dom";
import { startTransition } from "react";
import { isActiveTab } from "../../helpers/methods";

interface CustomProps {
  toggleDrawer: Function;
}

const addressData = [
  {
    icon: adress,
    title: "Reach Us",
    info: `LIG-A-495/8, Dashmesh Road, Avas Vikas Holy Chowk, Rudrapur, udham singh nagar, uttarakhand `,
  },
  {
    icon: call,
    title: "Talk to Pandit Lalit Lohani",
    info: "+91-8439110001",
  },
];

const socialMediaIcon = [
  {
    icon: facebook,
    redirectLink: urls.facebook,
  },
  {
    icon: instagram,
    redirectLink: urls.instagram,
  },
];

const serviceData = [
  {
    title: "Vedic Kundali",
    path: urls.vedicKundaliServiceViewPath,
  },
  {
    title: "Vastu Visit",
    path: urls.vastuVisitServiceViewPath,
  },
  {
    title: "Gemstone",
    path: urls.gemstoneServiceViewPath,
  },
  {
    title: "Varshik Fal",
    path: urls.varshikFalServiceViewPath,
  },
  {
    title: "Kundali Milan",
    path: urls.kundaliMilanServiceViewPath,
  },
  {
    title: "Muhurat",
    path: urls.predictionsServiceViewPath,
  },
];

const AppHeader = (props: CustomProps) => {
  const classes = appHeaderStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(false);
  const [anchor, setAnchor] = useState(null);
  const [menuData, setMenuData] = useState([]);

  let currentlyHovering2 = false;

  function handleClick(event: any, data: any) {
    if (anchor !== event.currentTarget) {
      currentlyHovering2 = true;
      setAnchor(event.currentTarget);
      setMenuData(data);
    }
  }

  function handleCloseHover() {
    currentlyHovering2 = false;
    setTimeout(() => {
      if (!currentlyHovering2) {
        handleClose();
      }
    }, 10);
  }

  function handleHover() {
    currentlyHovering2 = true;
  }

  function handleClose() {
    setAnchor(null);
    setMenuMobileVisible(false);
  }

  const handleMenuMobileVisibility = (event: any) => {
    setMenuMobileVisible(event.currentTarget);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMenuMobileVisible(false);
    };

  const getMobileMenuDrawer = () => {
    return (
      <Drawer
        open={menuMobileVisible}
        onClose={toggleDrawer}
        sx={{
          paper: classes.menuMobile,
        }}
      >
        <AppDrawer
          setMenuMobileVisible={setMenuMobileVisible}
          listItems={getNavMenu()}
        />
      </Drawer>
    );
  };

  const getNavMenu = () => {
    return (
      <List sx={classes.navMenuMain}>
        <Link to={urls.homePathView} style={{ textDecoration: "none" }}>
          {/* <a href={urls.homePathView} rel="noreferrer"> */}
          <ListItem
            sx={[
              classes.navBtn,
              isActiveTab(urls.homePathView) && classes.selected,
            ]}
            onClick={() => setMenuMobileVisible(false)}
          >
            Home
          </ListItem>
          {/* </a> */}
        </Link>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{
            backgroundColor: "#FFFFFF",
          }}
        />
        <Link to={urls.aboutUsPathView} style={{ textDecoration: "none" }}>
          <ListItem
            sx={[
              classes.navBtn,
              isActiveTab(urls.aboutUsPathView) && classes.selected,
            ]}
            onClick={() => setMenuMobileVisible(false)}
          >
            About
          </ListItem>
        </Link>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{
            backgroundColor: "#FFFFFF",
          }}
        />
        <ListItem
          aria-owns={anchor ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={(e: any) => {
            handleClick(e, serviceData);
          }}
          onMouseOver={(e: any) => handleClick(e, serviceData)}
          onMouseLeave={handleCloseHover}
          sx={{ ...classes.navBtn, lineHeight: 0 }}
        >
          <Typography
            sx={[
              classes.navBtn,
              window.location.pathname.includes(urls.servicesViewPath) &&
                classes.selected,
            ]}
            style={{
              lineHeight: 0,
            }}
          >
            Services
          </Typography>
        </ListItem>
        <Menu
          id="simple-menu"
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={handleClose}
          onClick={() => setMenuMobileVisible(false)}
          MenuListProps={{
            onMouseEnter: handleHover,
            onMouseLeave: handleCloseHover,
            style: {
              pointerEvents: "auto",
              // paddingTop: 0,
              // paddingBottom: 0,
              // paddingRight: 0,
              // paddingLeft: 0,
              // width: "10vw",
              // maxWidth: "100vw",
              // [theme.breakpoints.down("md")]:{
              //   width: "20vw",
              //   maxWidth: "100vw",

              // }
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          sx={{
            [`&.${popoverClasses.root}`]: {
              pointerEvents: "none",
            },
            "& .MuiPopover-paper": {
              boxShadow: "0px 1px 17px rgba(0, 0, 0, 0.13)",
            },
          }}
        >
          {menuData.map((item: any, index: number) => (
            <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
              <MenuItem key={index} onClick={handleClose} sx={classes.saviynt}>
                <Typography
                  variant="h6"
                  sx={[
                    classes.saviynt,
                    isActiveTab(item.path) && classes.selected,
                  ]}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{
            backgroundColor: "#FFFFFF",
          }}
        />
        <Link to={urls.contactUsViewPath} style={{ textDecoration: "none" }}>
          <ListItem
            sx={[
              classes.navBtn,
              isActiveTab(urls.contactUsViewPath) && classes.selected,
            ]}
            onClick={() => setMenuMobileVisible(false)}
          >
            Contact
          </ListItem>
        </Link>
      </List>
    );
  };

  const getAppHeader = () => {
    return (
      <Box>
        <AppBar position="fixed" sx={classes.appBar}>
          {isDesktop && (
            <Container maxWidth="xl">
              <Stack
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                }}
                p={2}
                spacing={2}
                justifyContent="space-between"
                alignItems={{ lg: "center" }}
              >
                <Link to={urls.homePathView}>
                  <img
                    src={logo}
                    height={isDesktop ? "50px" : "100%"}
                    alt="astro logo"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Link>
                <Stack
                  direction={{
                    lg: "row",
                    md: "row",
                    sm: "row",
                    xs: "column",
                  }}
                  spacing={-4}
                >
                  {addressData.map((i: any, index: number) => {
                    return (
                      <Box sx={classes.addressMain} key={index}>
                        <Box sx={classes.addressInner}>
                          <Link to={urls.homePathView}>
                            <img
                              src={i.icon}
                              alt="adress"
                              height={isDesktop ? "17px" : "10px"}
                              style={{
                                cursor: "pointer",
                                textAlign: "center",
                              }}
                            />
                          </Link>
                        </Box>
                        <Box ml={2}>
                          <Typography sx={classes.reachUsText}>
                            {i.title}
                          </Typography>
                          <Typography sx={classes.address}>{i.info}</Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Stack>
              </Stack>
            </Container>
          )}
          {/* </Toolbar> */}
          <Box sx={classes.innerContent}>
            <Container maxWidth="lg" sx={classes.mainAddressBar}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {getNavMenu()}
              </Box>
              {isDesktop && (
                <Stack direction="row" spacing={2}>
                  <LanguageSwitcher />
                  {socialMediaIcon.map((i: any, index: number) => {
                    return (
                      <Link to={i.redirectLink} key={index}>
                        <a target="_target">
                          <img
                            src={i.icon}
                            alt="adress"
                            height={isDesktop ? "39px" : "30px"}
                            style={{
                              cursor: "pointer",
                              textAlign: "center",
                            }}
                          />
                        </a>
                      </Link>
                    );
                  })}
                </Stack>
              )}
              {!isDesktop && (
                <Link to={urls.homePathView}>
                  <a target="_target">
                    <img
                      src={logo}
                      alt="astro logo"
                      height={isDesktop ? "45px" : "40px"}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </Link>
              )}
              {!isDesktop && (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="open drawer"
                  onClick={handleMenuMobileVisibility}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Container>
          </Box>
        </AppBar>
        {getMobileMenuDrawer()}
      </Box>
    );
  };

  return getAppHeader();
};

export default AppHeader;
