import { createContext, useContext } from "react";

export interface IErrors {
  [key: string]: string | undefined;
  cardNumber?: string;
  expiryMonth?: string;
  expiryYear?: string;
  cvc?: string;
}

export interface CardContextType {
  cardNumber: string;
  name: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  showResult: boolean;
  errors: IErrors;
  bankName: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setExpiryMonth: React.Dispatch<React.SetStateAction<string>>;
  setExpiryYear: React.Dispatch<React.SetStateAction<string>>;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleReset: () => void;
}

export const CardContext = createContext<CardContextType>({
  cardNumber: "",
  name: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: "",
  showResult: false,
  errors: {},
  setName: () => {},
  setExpiryMonth: () => {},
  setExpiryYear: () => {},
  setCvc: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
  handleReset: () => {},
});

export const useTheme = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
