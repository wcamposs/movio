import { ReactNode } from "react";

export interface HeaderTypes {
  title: string;
  showBackButton?: boolean;
  headerRight?: ReactNode;
  textColor?: string;
}

export interface HeaderViewTypes {
  title: string;
  showBackButton?: boolean;
  headerRight?: ReactNode;
  textColor?: string;
  iconName: string;
  handleGoBack: () => void;
}
