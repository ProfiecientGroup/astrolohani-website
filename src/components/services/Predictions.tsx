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

const Muhurat = () => {
  const classes = servicesStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("Muhurat");
  const servicesData: any = t("servicesData", { returnObjects: true });

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Seize Cosmic Favor with Muhurat Suggestions at Astrolohani in
          Rudrapur, Uttarakhand{" "}
        </title>
        <meta
          name="description"
          content="Harness the power of cosmic alignment with Astrolohani's Muhurat Suggestions service. Led by Pandit Lahoni's 25 years of expertise, our expert predictions guide you through auspicious timings for weddings, business launches, and significant life events."
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
export default Muhurat;
