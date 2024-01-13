import { Box } from "@mui/system";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import { useEffect, useRef, useState } from "react";
import LayoutStyles from "./Layout.styles";
import upArrow from "../../../assets/images/upArrow.svg";
import whatsappIcon from "../../../assets/icons/whatsappIcon.png";
import { Link } from "react-router-dom";

interface CustomProps {
  children?: any;
}

const Layout = (props: CustomProps) => {
  const classes = LayoutStyles;
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [hideIcon, setHideIcon] = useState("none");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setHideIcon("inline") : setHideIcon("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phoneNumber = "918439110001";
  const message = "Hello%20Sir!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <AppHeader toggleDrawer={toggleDrawer} />
      <Box>
        <Box sx={classes.main}>{props.children}</Box>
        <AppFooter />
      </Box>
      <Box>
        <img
          src={upArrow}
          alt="Module Not Found..."
          onClick={goToTop}
          style={{
            display: hideIcon,
            height: "5.5vh",
            cursor: "pointer",
            position: "fixed",
            // right: 38,
            bottom: 20,
            left: 20,
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          position: "fixed",
          right: 20,
          bottom: 18,
          zIndex: 2,
        }}
      >
        <Link to={whatsappUrl}>
          <a target="_blank" rel="noopener noreferrer">
            <img
              src={whatsappIcon}
              alt="scrollup"
              // onClick={goToTop}
              height="10%"
              style={{
                // display: hideIcon,
                cursor: "pointer",
                position: "fixed",
                right: 35,
                bottom: 10,
              }}
            />
          </a>
        </Link>
      </Box>
    </>
  );
};

export default Layout;
