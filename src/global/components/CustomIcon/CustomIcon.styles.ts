import { centerItemFlex, regularFont } from "../../../styles/styles";

const customIconStyles = {
  centerAlignedBox: {
    ...regularFont,
    ...centerItemFlex,
  },
} as const;

export default customIconStyles;
