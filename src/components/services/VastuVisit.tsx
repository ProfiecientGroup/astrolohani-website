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

const VastuVisit = () => {
  const classes = servicesStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("vastuVisit");
  const servicesData: any = t("servicesData", { returnObjects: true });

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Transform Your Spaces with Astrolohani's Vastu Visit in Rudrapur,
          Uttarakhand{" "}
        </title>
        <meta
          name="description"
          content="Discover the cosmic transformation with Astrolohani's Vastu Visit service in Rudrapur. Let Pandit Lahoni's 25 years of expertise align your spaces with positive energies. From homes to industries, experience the harmony of Vastu Shastra for a cosmic makeover rooted in the spiritual energy of the Himalayas."
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
export default VastuVisit;
