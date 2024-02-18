import {
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import appFooterStyles from "./AppFooter.styles";
import logo from "../../../assets/icons/logo/blackLogo.svg";
import { centerItemFlex, theme } from "../../../styles/styles";
import urls from "../../../global/constants/urls";
import MessageFooter from "../../../assets/icons/footerIcon/mail.svg";
import CallingFooter from "../../../assets/icons/footerIcon/phone.svg";
import map from "../../../assets/icons/footerIcon/map.svg";
import strings from "../../../global/constants/strings";
import CustomMap from "./customMap";
import { useNavigate } from "react-router-dom";

const footerData = [
  {
    title: "Quick Links",
    data: [
      {
        redirectLink: urls.aboutUsPathView,
        name: "About Us",
      },
      {
        redirectLink: urls.homePathView,
        name: "FAQ",
      },
      {
        redirectLink: urls.contactUsViewPath,
        name: "Contact Us",
      },
    ],
  },
  {
    title: "Our Services",
    data: [
      {
        redirectLink: urls.gemstoneServiceViewPath,
        name: "Gemstone",
      },
      {
        redirectLink: urls.vedicKundaliServiceViewPath,
        name: "Career and Business",
      },
      {
        redirectLink: urls.predictionsServiceViewPath,
        name: "Vedic Astrology",
      },
      {
        redirectLink: urls.vastuVisitServiceViewPath,
        name: "Vastu Visit",
      },
    ],
  },
];
const AppFooter = () => {
  const classes = appFooterStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box sx={classes.footer}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Stack spacing={2} sx={classes.footerBox}>
              {/* {isDesktop && */}
              <img
                src={logo}
                alt="astroLohani logo"
                style={{
                  width: isDesktop ? "172px" : "172px",
                  height: isDesktop ? "40px" : "40px",
                  marginBottom: "8px",
                }}
              />
              {/* } */}
              <Stack direction={"row"} gap={1} sx={{ svg: { height: "19px" } }}>
                <img src={map} alt="map" />
                <Typography sx={classes.regularFont}>
                  LIG-A-495/8, Dashmesh Road,
                  <br />
                  Avas Vikas Holy Chowk, Rudrapur
                  <br />
                  udham singh nagar, Uttarakhand
                </Typography>
                <Typography sx={classes.regularFont}></Typography>
              </Stack>
              <Stack direction={"row"} gap={1}>
                <img src={CallingFooter} alt="call" />
                <Typography
                  onClick={() => navigate(`tel:${strings.CONTACT}`)}
                  sx={classes.regularFont}
                >
                  {strings.CONTACT}
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={1}>
                <img src={MessageFooter} alt="message" />
                <Typography
                  onClick={() => navigate(`mailto:${strings.SUPPORT}`)}
                  sx={classes.regularFont}
                >
                  {strings.SUPPORT}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {footerData.map((data: any, index: number) => {
            return (
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2} key={index}>
                <Box sx={classes.footerBox}>
                  <Stack spacing={1}>
                    <Typography sx={classes.label}>{data.title}</Typography>
                    {data.data.map((i: any, index: number) => {
                      return (
                        <Typography
                          onClick={() => navigate(i.redirectLink)}
                          key={index}
                          sx={[classes.regularFont, classes.pointerCursor]}
                        >
                          {i.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                </Box>
              </Grid>
            );
          })}
          {isDesktop && (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              sx={{ ...centerItemFlex }}
            >
              <CustomMap />
            </Grid>
          )}
        </Grid>
        {/* {isDesktop && (
          <Divider color="#FDA228" sx={{ height: 0.01, width: "100%" }} />
        )} */}
        <Box sx={classes.copyright}>
          <Typography
            sx={classes.regularFont}
            mt={2}
          >{`Copyright © ${getYear()} astrolohani.  All Rights Reserved`}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
