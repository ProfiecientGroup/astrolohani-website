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

const Gemstone = () => {
  const classes = servicesStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation("gemstone");
  const servicesData: any = t("servicesData", { returnObjects: true });

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.astrolohani.com/services/" />
        <title>
          Elevate Your Energies with Astrolohani's Gemstone Remedies in
          Rudrapur, Uttarakhand{" "}
        </title>
        <meta
          name="description"
          content="Discover cosmic balance with Astrolohani's Gemstone Recommendations and Sales service. Handpicked for your Kundali, each gem is a cosmic companion, enhancing strengths, mitigating challenges, and harmonizing your energies. Trust Pandit Lahoni's 25 years of astrological mastery for a transformative journey amidst the mystical Himalayas in Rudrapur. Your cosmic remedies await—embrace the power of gemstones with Astrolohani."
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
export default Gemstone;
