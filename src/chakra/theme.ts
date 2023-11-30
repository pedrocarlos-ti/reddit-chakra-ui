import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/theme-utils";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      variants: {
        solid: {
          bg: "brand.100",
          color: "white",
          _hover: {
            bg: "brand.100",
            _disabled: {
              bg: "brand.100",
            },
          },
          _disabled: {
            bg: "brand.100",
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "brand.100",
            },
          },
        },
      },
    },
    Textarea: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "brand.100",
            },
          },
        },
      },
    },
  },
});
