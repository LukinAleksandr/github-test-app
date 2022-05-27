import {
  TypographyDefault,
  TypographyButton,
  TypographySubButton,
  TypographyAdminName,
  TypographyTitle,
  TypographyQuestion,
  TypographyH2,
  TypographyH1Bold,
  TypographyBody1
} from "./Typography.styles";

import { TypographyProps } from "./Typography.types";

export const Typography = ({
  variant = "default",
  children,
  tag,
  ...props
}: TypographyProps) => {
  switch (variant) {
    case "H2": {
      return (
        <TypographyH2 as={tag} {...props}>
          {children}
        </TypographyH2>
      );
    }
    case "H1Bold": {
      return (
        <TypographyH1Bold as={tag} {...props}>
          {children}
        </TypographyH1Bold>
      );
    }
    case "Body1": {
      return (
        <TypographyBody1 as={tag} {...props}>
          {children}
        </TypographyBody1>
      );
    }
    case "default": {
      return (
        <TypographyDefault as={tag} {...props}>
          {children}
        </TypographyDefault>
      );
    }
    case "button": {
      return (
        <TypographyButton as={tag} {...props}>
          {children}
        </TypographyButton>
      );
    }
    case "sub-button": {
      return (
        <TypographySubButton as={tag} {...props}>
          {children}
        </TypographySubButton>
      );
    }
    case "admin": {
      return (
        <TypographyAdminName as={tag} {...props}>
          {children}
        </TypographyAdminName>
      );
    }
    case "title": {
      return (
        <TypographyTitle as={tag} {...props}>
          {children}
        </TypographyTitle>
      );
    }
    case "question": {
      return (
        <TypographyQuestion as={tag} {...props}>
          {children}
        </TypographyQuestion>
      );
    }

    default:
      return (
        <TypographyDefault as={tag} {...props}>
          {children}
        </TypographyDefault>
      );
  }
};
