import { ReactNode } from "react";
import { TextVariant, SpacingToken, ColorScheme, ColorWeight } from "../types";

export interface FlexProps {
  as?: any;
  inline?: boolean;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  tabletDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  mobileDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  wrap?: boolean;
  flex?: number | string;
}

export interface SpacingProps {
  padding?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingX?: SpacingToken;
  paddingY?: SpacingToken;
  margin?: SpacingToken;
  marginLeft?: SpacingToken;
  marginRight?: SpacingToken;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  marginX?: SpacingToken;
  marginY?: SpacingToken;
  gap?: SpacingToken;
}

export interface SizeProps {
  width?: number | SpacingToken;
  height?: number | SpacingToken;
  maxWidth?: number | SpacingToken;
  minWidth?: number | SpacingToken;
  minHeight?: number | SpacingToken;
  maxHeight?: number | SpacingToken;
  aspectRatio?: string | number;
}

export interface StyleProps {
  textVariant?: TextVariant;
  textSize?: string;
  textWeight?: string;
  textType?: string;
  onBackground?: `${ColorScheme}-${ColorWeight}`;
  onSolid?: `${ColorScheme}-${ColorWeight}`;
  align?: "left" | "center" | "right" | "justify";
}

export interface CommonProps {
  position?: "relative" | "absolute" | "fixed" | "sticky";
  top?: SpacingToken;
  right?: SpacingToken;
  bottom?: SpacingToken;
  left?: SpacingToken;
  transition?: string;
  background?: string;
  solid?: string;
  opacity?: string;
  pointerEvents?: "none" | "auto";
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderStyle?: string;
  borderWidth?: string;
  radius?: string;
  topRadius?: string;
  rightRadius?: string;
  bottomRadius?: string;
  leftRadius?: string;
  topLeftRadius?: string;
  topRightRadius?: string;
  bottomLeftRadius?: string;
  bottomRightRadius?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  zIndex?: number;
  shadow?: string;
  cursor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  role?: string;
  tabIndex?: number;
  "aria-haspopup"?: string;
  "aria-expanded"?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "data-value"?: string;
}

export interface DisplayProps {
  fit?: boolean;
  fitWidth?: boolean;
  fitHeight?: boolean;
  fill?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
}

export interface ConditionalProps {
  hide?: string;
  show?: string;
}
