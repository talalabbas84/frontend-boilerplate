import { extendTheme } from "@chakra-ui/react";

export const Colors = {
  brand: {
    300: "#74d2e7",
    600: "#48a9c5",
    900: "#00205b",
  },
};

export const theme = extendTheme({
  colors: Colors,
});
