import {
  Box,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../../styles/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import appFooterStyles from "./AppFooter.styles";
import DottedMap from "dotted-map";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    "&::before": {
      backgroundColor: "#FFFFFF",
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    boxShadow:
      "0px 151px 98px rgba(20, 0, 66, 0.07), 0px 75.5737px 49.0977px rgba(20, 0, 66, 0.0476106), 0px 45.5221px 40.1918px rgba(20, 0, 66, 0.0410845), 0px 29.1729px 42.2856px rgba(20, 0, 66, 0.0380395), 0px 18.9075px 41.8542px rgba(20, 0, 66, 0.0361867), 0px 11.9021px 36.9493px rgba(20, 0, 66, 0.0342799), 0px 6.83849px 27.9297px rgba(20, 0, 66, 0.0310556), 0px 3.0098px 15.4271px rgba(20, 0, 66, 0.0241386)",
    borderRadius: "10px",
  },
}));

const CustomMap = () => {
  const classes = appFooterStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const map = new DottedMap({
    height: 50,
    grid: "diagonal",
    // countries: ['IND',"USA","GBR","CAN","FRA",]
  });

  // US
  map.addPin({
    lat: 40.712776,
    lng: -74.005974,
    data: {
      location: "United States",
    },
    svgOptions: { color: "#FF7E00", radius: 0.4 },
  });

  // UK
  map.addPin({
    lat: 53.483959,
    lng: -2.244644,
    data: {
      location: "United Kingdom",
    },
    svgOptions: { color: "#FA3667", radius: 0.4 },
  });

  // CANADA
  map.addPin({
    lat: 43.65107,
    lng: -79.347015,
    data: {
      location: "Canada",
    },
    svgOptions: { color: "#FA3667", radius: 0.4 },
  });

  // South Korea
  map.addPin({
    lat: 35.179554,
    lng: 129.075642,
    data: {
      location: "South Korea",
    },
    svgOptions: { color: "#FFFFFF", radius: 0.4 },
  });

  // Japan
  map.addPin({
    lat: 34.693738,
    lng: 135.502165,
    data: {
      location: "Japan",
    },
    svgOptions: { color: "#FFFFFF", radius: 0.4 },
  });
  map.addPin({
    lat: 35.011635,
    lng: 135.768066,
    data: {
      location: "Kyoto",
    },
    svgOptions: { color: "#FFFFFF", radius: 0.4 },
  });
  map.addPin({
    lat: -33.865143,
    lng: 151.2099,
    data: {
      location: "Australia",
    },
    svgOptions: { color: "#FFFFFF", radius: 0.4 },
  });
  map.addPin({
    lat: 19.07609,
    lng: 72.877426,
    data: {
      location: "India",
    },
    svgOptions: { color: "#FFFFFF", radius: 0.4 },
  });

  const points = map.getPoints();

  const svgOptions = {
    radius: 0.35,
    color: "#FFFFFF",
    shape: "circle",
    backgroundColor: "skyblue",
  };

  return (
    <div
      style={{
        height: isDesktop ? "auto" : "200px",
        width: isDesktop ? "350px" : "300px",
      }}
    >
      <svg viewBox="0 0 105 50" style={{ background: "#211e1a00" }}>
        {points.map((point: any) => {
          return point.hasOwnProperty("data") ? (
            <HtmlTooltip
              placement="top"
              title={
                <Box
                  sx={{
                    padding: 0.5,
                  }}
                >
                  <Box display="flex">
                    <LocationOnIcon fontSize="small" htmlColor="#FA3667" />
                    <Typography sx={classes.pinLocationText}>
                      {point.data.location}
                    </Typography>
                  </Box>
                </Box>
              }
            >
              <circle
                cx={point.x}
                cy={point.y}
                r={svgOptions.radius}
                fill={"#FA3667"}
                style={{ cursor: "pointer" }}
              />
            </HtmlTooltip>
          ) : (
            <circle
              cx={point.x}
              cy={point.y}
              r={svgOptions.radius}
              fill={svgOptions.color}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CustomMap;
