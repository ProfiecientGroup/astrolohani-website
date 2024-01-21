import React, { useState } from "react";
import { InputAdornment, MenuItem, OutlinedInput, Select } from "@mui/material";
import i18n from "../../i18n";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 120,
    },
  },
};

const LanguageSwitcher = () => {
  const [lan, setLan] = useState(i18n.language);

  const changeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLanguage = event.target.value as string;
    i18n.changeLanguage(newLanguage);
    setLan(newLanguage);
  };

  return (
    <div>
      <Select
        id="language"
        name="language"
        value={lan}
        onChange={(event: any) => changeLanguage(event)}
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
