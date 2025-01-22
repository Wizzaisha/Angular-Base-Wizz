import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const StylePreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples

  semantic: {
    primary: {
      50: '#F4F3FC',
      100: '#E5E3F9',
      200: '#CBC9F2',
      300: '#B1AEEB',
      400: '#9784E4',
      500: '#635FC7',
      600: '#584FAD',
      700: '#4B3F93',
      800: '#3C3079',
      900: '#2E235F',
      950: '#1F1545',
    },
  },
  colorScheme: {
    light: {
      surface: {
        0: '#ffffff',
        50: '{sky.50}',
        100: '{sky.100}',
        200: '{sky.200}',
        300: '{sky.300}',
        400: '{sky.400}',
        500: '{sky.500}',
        600: '{sky.600}',
        700: '{sky.700}',
        800: '{sky.800}',
        900: '{sky.900}',
        950: '{sky.950}',
      },
    },
    dark: {
      surface: {
        0: '#ffffff',
        50: '{yellow.50}',
        100: '{yellow.100}',
        200: '{yellow.200}',
        300: '{yellow.300}',
        400: '{yellow.400}',
        500: '{yellow.500}',
        600: '{yellow.600}',
        700: '{yellow.700}',
        800: '{yellow.800}',
        900: '{yellow.900}',
        950: '{yellow.950}',
      },
    },
  },
});

export default StylePreset;
