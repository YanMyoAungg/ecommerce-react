import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const brand = {
  bclBlue: { value: "#146C93" },
  bclBgGlay: { value: "#212121" },
  bclBgBlue: { value: "#2f3746" },
  textBlack: { value: "#18171C" },
  borderGray: { value: "#707070" },
  inputBorderGray: { value: "#484848" },
  inputError: { value: "brown" },
};
const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = defineConfig({
  theme: {
    breakpoints,
    tokens: {
      colors: {
        brand,
      },
    },
  },
});

export const system = createSystem(defaultConfig, theme);
