import React from "react";
import { InputAdornment, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useLocation } from "react-router-dom";
import i18n from "../../i18n";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 120,
      transformOrigin: "center center",
    },
  },
};

const LanguageSwitcher = () => {
  const location = useLocation();

  const changeLanguage = (lng:any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Select
        id="language"
        name="language"
        value={i18n.language} // Set to current language
        onChange={(e) => changeLanguage(e.target.value)} // Pass only the language value
        input={
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <LanguageRoundedIcon style={{ color: "#DEDFF5" }} />
              </InputAdornment>
            }
          />
        }
        MenuProps={MenuProps}
        displayEmpty
        sx={{
          width: "100%",
          borderRadius: "10px",
          "& .MuiInputBase-input": {
            padding: "12px 12px",
            position: "relative",
            color: "white",
          },
          "& .MuiOutlinedInput-input": {
            "&.MuiSelect-select": {
              borderColor: "gray",
              color: "white",
            },
          },
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "& .css-ittuaa-MuiInputAdornment-root": {
            marginRight: 0,
          },
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="hi">Hindi</MenuItem>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
