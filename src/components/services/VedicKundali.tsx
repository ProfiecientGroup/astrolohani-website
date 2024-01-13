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

const VedicKundali = () => {
  const classes = servicesStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("vedicKundali");
  const servicesData: any = t("servicesData", { returnObjects: true });

  return (
    <>
          <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Explore Your Cosmic Destiny
        </title>
        <meta
          name="description"
          content= "Uncover the cosmic tapestry of your life's journey with Astrolohani's personalized Vedic Kundali service. Explore career paths, love life, marriage prospects, educational pursuits, and more with a celestial life storybook tailored just for you.",
/>
      </Helmet>
      <Services
        bannerHeading={t("bannerHeading")}
        bannerDescription={t("bannerDescription")}
        servicesData={servicesData}
      />
    </>
  );
};
export default VedicKundali;
