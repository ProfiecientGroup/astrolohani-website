import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContactUsStyles from "./ContactUs.styles";
import call from "../../assets/images/contact/call.webp";
import adress from "../../assets/images/contact/address.webp";
import panditPhoto from "../../assets/images/contact/panditPhoto.webp";
import urls from "../../global/constants/urls";
import { theme } from "../../styles/styles";
import ContactUsForm from "./ContactUsForm";

const addressData = [
  {
    icon: adress,
    title: "Reach Us",
    info: `LIG-A-495/8, Dashmesh Road, Avas Vikas Holy Chowk, Rudrapur`,
  },
  {
    icon: call,
    title: "Talk to Lalit Lohani",
    info: "+91-8439110001",
  },
];

const Contact = () => {
  const classes = ContactUsStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const introDeskTopView = () => {
    return (
      <Box position="relative" mb={10}>
        <Box sx={classes.blueBox} />
        <Box sx={classes.grayBox} />
        <Stack
          direction={{
            lg: "column",
            md: "column",
            sm: "column",
            xs: "column",
          }}
          spacing={3}
          alignItems="center"
          position="absolute"
          top={0}
          padding={10}
        >
          {addressData.map((i: any, index: number) => {
            return (
              <Box sx={classes.addressMain} key={index}>
                <Box sx={classes.addressInner}>
                  <Link href={urls.homePathView}>
                    <img
                      src={i.icon}
                      alt="address"
                      height={isDesktop ? "17px" : "10px"}
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    />
                  </Link>
                </Box>
                <Box ml={2}>
                  <Typography sx={classes.reachUsText}>{i.title}</Typography>
                  <Typography sx={classes.address}>{i.info}</Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
        <img
          src={panditPhoto}
          alt="pandit lalit"
          width="225px"
          height="225px"
          style={{
            position: "absolute",
            top: 35,
            right: 135,
          }}
        />
      </Box>
    );
  };

  const introMobileView = () => {
    return (
      <Box sx={classes.blueBox}>
        <Stack
          direction={{
            lg: "column",
            md: "column",
            sm: "column",
            xs: "column",
          }}
          spacing={3}
        >
          {addressData.map((i: any, index: number) => {
            return (
              <Box key={index} display="flex">
                <Box sx={classes.addressInner}>
                  <Link href={urls.homePathView}>
                    <img
                      src={i.icon}
                      alt="address"
                      height="10px"
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    />
                  </Link>
                </Box>
                <Box ml={2}>
                  <Typography sx={classes.reachUsText}>{i.title}</Typography>
                  <Typography sx={classes.address}>{i.info}</Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>

        <img
          src={panditPhoto}
          alt="pandit"
          width="100%"
          height="100%"
          style={{
            marginTop: 20,
          }}
        />
      </Box>
    );
  };

  return (
    <>
      <Box sx={classes.contactMain}>
        <Container maxWidth="md" sx={classes.contactInner}>
          {isDesktop ? introDeskTopView() : introMobileView()}
        </Container>
      </Box>
      <Container maxWidth="md">
        <ContactUsForm />
      </Container>
    </>
  );
};
export default Contact;
