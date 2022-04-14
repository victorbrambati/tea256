import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  letterSpacings: {
    tighter: "-0.020em",
    tight: "-0.025em",
    normal: "-0.045em",
    wide: "-0.060em",
    wider: "-0.075em",
    widest: "-0.090em",
  },
});

export default theme;
