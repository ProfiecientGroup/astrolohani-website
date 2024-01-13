import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
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
        <Services
          bannerHeading={t("bannerHeading")}
          bannerDescription={t("bannerDescription")}
          servicesData={servicesData}
        />
      </>
    );
  };
  export default VastuVisit;
  