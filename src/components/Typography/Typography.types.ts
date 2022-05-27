import { HTMLAttributes } from "react";

export interface SharedTypography {
  variant?:
    | "H2"
    | "H1Bold"
    | "Body1"
    | "default"
    | "button"
    | "sub-button"
    | "admin"
    | "title"
    | "question";
  active?: boolean;
}

export interface TypographyH1Props
  extends HTMLAttributes<HTMLHeadingElement>,
    SharedTypography {
  tag?: "h1";
}

export interface TypographyH2Props
  extends HTMLAttributes<HTMLHeadingElement>,
    SharedTypography {
  tag?: "h2";
}

export interface TypographyH3Props
  extends HTMLAttributes<HTMLHeadingElement>,
    SharedTypography {
  tag?: "h3";
}

export interface TypographyH4Props
  extends HTMLAttributes<HTMLHeadingElement>,
    SharedTypography {
  tag?: "h4";
}

export interface TypographyH5Props
  extends HTMLAttributes<HTMLHeadingElement>,
    SharedTypography {
  tag?: "h5";
}

export interface TypographyH6Props
  extends HTMLAttributes<HTMLHeadingElement>,
    SharedTypography {
  tag?: "h6";
}

export interface TypographyParagrapProps
  extends HTMLAttributes<HTMLParagraphElement>,
    SharedTypography {
  tag?: "p";
}

export interface TypographyDivProps
  extends HTMLAttributes<HTMLDivElement>,
    SharedTypography {
  tag?: "div";
}

export interface TypographySpanProps
  extends HTMLAttributes<HTMLSpanElement>,
    SharedTypography {
  tag?: "span";
}

export type TypographyProps =
  | TypographyH1Props
  | TypographyH2Props
  | TypographyH3Props
  | TypographyH4Props
  | TypographyH5Props
  | TypographyH6Props
  | TypographyParagrapProps
  | TypographyDivProps
  | TypographySpanProps;
