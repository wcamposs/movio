import { ReactNode } from "react";

export interface SearchBarTypes {
  onBlur: () => void;
  onChangeText: (text: string) => void;
  value: string;
}

export interface SearchBarViewTypes {
  onBlur: () => void;
  handleOnCleanText: () => void;
  handleOnChangeText: (text: string) => void;
  value: string;
}
