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

const KundaliMilan = () => {
  const classes = servicesStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("kundaliMilan");
  const servicesData: any = t("servicesData", { returnObjects: true });

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Find Lasting Love with Kundali Milan at Astrolohani in Rudrapur,
          Uttarakhand{" "}
        </title>
        <meta
          name="description"
          content="Forge enduring connections with Astrolohani's Kundali Milan service in Rudrapur. Led by Pandit Lahoni's 25 years of expertise, this cosmic matchmaking experience ensures compatibility in love and marriage through precise analysis of celestial forces."
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
export default KundaliMilan;
