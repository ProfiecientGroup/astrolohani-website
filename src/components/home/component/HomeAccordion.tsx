import React, { useState, useEffect } from "react";
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails, Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Data } from "../../../models/interface";
import { homeStyles } from "../Home.styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const HomeAccordion = (props) => {
  const classes = homeStyles;
  const [expanded, setExpanded] = useState(props.data?.length ? props.data[0].id : "");

  useEffect(() => {
    setExpanded(props.data?.length ? props.data[0].id : "");
  }, [props.data]);

  const handleChange = (id) => (event, newExpanded) => {
    setExpanded(newExpanded ? id : false);
  };

  return (
    <>
      {props.data?.map((item, index) => {
        const AccordionSummary = styled((props) => (
          <MuiAccordionSummary
            expandIcon={
              expanded === item.id ? (
                <RemoveIcon />
              ) : (
                <AddIcon sx={{ fontSize: "1rem" }} />
              )
            }
            {...props}
          />
        ))(({ theme }) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, .05)"
              : "rgba(0, 0, 0, .03)",
          flexDirection: "row-reverse",
          "&.MuiAccordionSummary-root.Mui-expanded": {
            background: "linear-gradient(0deg, #F4AA36 0%, #F37335 100%)",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(0deg)",
            svg: {
              color: "#FFFFFF",
            },
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            svg: {
              color: "#FF6033",
            },
          },
          "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1),
          },
        }));

        return (
          <Accordion
            key={index}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={classes.mainAccordion}
          >
            <AccordionSummary
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
              sx={[
                classes.titleInnerAccordian,
                expanded === item.id && classes.selected,
              ]}
            >
              <Typography sx={classes.solutionTitle}>{item.id}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.content.map((description, index) => (
                <Typography sx={classes.accordianDescription} key={index}>
                  {description}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default HomeAccordion;
