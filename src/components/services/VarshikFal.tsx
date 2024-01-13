import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import { Helmet } from "react-helmet";
  import { servicesStyles } from "./services.styles";
  import { theme } from "../../styles/styles";
  import { useTranslation } from "react-i18next";
  import Services from "./Services";
  
  const VarshikFal = () => {
    const classes = servicesStyles;
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const { t } = useTranslation("varshikFal");
    const servicesData: any = t("servicesData", { returnObjects: true });
  
    return (
      <>
 <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Navigate the Cosmos with Astrolohani's Varshik Fal in Rudrapur, Uttarakhand
        </title>
        <meta
          name="description"
    content =  "Prepare for the upcoming year with Astrolohani's Varshik Fal service, offering a cosmic preview into the script of your life's next chapter. Led by Pandit Lahoni's 25 years of expertise, this personalized journey in Rudrapur unfolds a celestial roadmap, guiding you through the twists and turns of the coming year with clarity and foresight."/>
      </Helmet>
        <Services
          bannerHeading={t("bannerHeading")}
          bannerDescription={t("bannerDescription")}
          servicesData={servicesData}
        />
      </>
    );
  };
  export default VarshikFal;
  