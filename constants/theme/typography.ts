import { TextStyle } from "react-native";
import { colors } from "./colors";

const sizeStyles = {
  xxl: { fontSize: 28, lineHeight: 34 },
  xl: { fontSize: 22, lineHeight: 26 },
  lg: { fontSize: 20, lineHeight: 24 },
  md: { fontSize: 18, lineHeight: 21 },
  sm: { fontSize: 16, lineHeight: 19 },
  xs: { fontSize: 14, lineHeight: 16 },
  xxs: { fontSize: 12, lineHeight: 14 },
};

const fontWeightStyles = {
  light: { fontWeight: 300 },
  normal: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semiBold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
};

const fontColorsStyles = {
  standard: { color: colors.text },
  disabled: { color: colors.textDim },
  false: { color: colors.error },
  true: { color: colors.success },
  white: { color: colors.white },
};

const baseStyle = {
  ...sizeStyles.sm,
  ...fontWeightStyles.normal,
  ...fontColorsStyles.standard,
};

export const textPresets = {
  default: baseStyle as TextStyle,

  h1: {
    ...baseStyle,
    ...sizeStyles.xxl,
    ...fontWeightStyles.semiBold,
  } as TextStyle,

  h2: {
    ...baseStyle,
    ...sizeStyles.xl,
    ...fontWeightStyles.semiBold,
  } as TextStyle,
  h2regular: { ...baseStyle, ...sizeStyles.xl },

  h3: {
    ...baseStyle,
    ...sizeStyles.lg,
    ...fontWeightStyles.semiBold,
  } as TextStyle,
  h3regular: { ...baseStyle, ...sizeStyles.lg } as TextStyle,

  h4: {
    ...baseStyle,
    ...sizeStyles.md,
    ...fontWeightStyles.semiBold,
  } as TextStyle,
  h4regular: { ...baseStyle, ...sizeStyles.md } as TextStyle,

  copy: baseStyle as TextStyle,
  copyLined: { ...baseStyle, textDecorationLine: "underline" } as TextStyle,
  copyBold: { ...baseStyle, ...fontWeightStyles.bold } as TextStyle,

  xs: { ...baseStyle, ...sizeStyles.xs } as TextStyle,

  xxs: {
    ...baseStyle,
    ...sizeStyles.xxs,
    ...fontWeightStyles.semiBold,
  } as TextStyle,
};
