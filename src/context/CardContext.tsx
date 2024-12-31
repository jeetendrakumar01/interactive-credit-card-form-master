import React, { ReactNode, useState } from "react";
import { CardContext, IErrors } from "./cardTypes";

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [bankName, setBankName] = useState<string>("");
  const [errors, setErrors] = useState<IErrors>({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    input = input.replace(/\s/g, "");

    let formattedInput = "";
    for (let i = 0; i < input.length; i += 4) {
      formattedInput += input.substring(i, i + 4) + " ";
    }

    setCardNumber(formattedInput.trim());
  };

  const handleSubmit = () => {
    const error: IErrors = {};

    const validations: {
      [key: string]: {
        value: string;
        regex: RegExp;
        errorMessage: string;
      };
    } = {
      name: {
        value: name,
        regex: /^[a-zA-Z0-9\s]*$/,
        errorMessage: "Can't contain special characters",
      },
        bankName: {
          value: bankName,
          regex: /^[a-zA-Z0-9\s]*$/,
          errorMessage: "Can't contain special characters",
      },
      cardNumber: {
        value: cardNumber,
        regex: /^[\d\s]+$/,
        errorMessage: "Wrong format, numbers only",
      },
      expiryMonth: {
        value: expiryMonth,
        regex: /^\d{2}$/,
        errorMessage: "Wrong format, numbers only",
      },
      expiryYear: {
        value: expiryYear,
        regex: /^\d{2}$/,
        errorMessage: "Wrong format, numbers only",
      },
      cvc: {
        value: cvc,
        regex: /^\d{3}$/,
        errorMessage: "Wrong format, numbers only",
      },
    };

    Object.keys(validations).forEach((field: string) => {
      const { value, regex, errorMessage } = validations[field];

      if (!value.trim()) {
        error[field] = "Can't be blank";
      } else if (!regex.test(value)) {
        error[field] = errorMessage;
      } else if (
        field === "cardNumber" &&
        value.replace(/\s+/g, "").length !== 16
      ) {
        error[field] = "Card numbers should be 16 digits long";
      }
    });

    if (Object.keys(error).length) {
      setErrors(error);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCardNumber("");
    setName("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvc("");
    setShowResult(false);
    setErrors({});
    setBankName("");
  };
  return (
    <CardContext.Provider
      value={{
        cardNumber,
        name,
        expiryMonth,
        expiryYear,
        cvc,
        showResult,
        errors,
        bankName,
        setName,
        setExpiryMonth,
        setExpiryYear,
        setCvc,
        handleChange,
        handleSubmit,
        handleReset,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
