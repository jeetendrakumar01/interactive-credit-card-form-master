import { useContext } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CardContext } from "@/context/cardTypes";


const Form = () => {
  const {
    name,
    setName,
    cardNumber,
    handleChange,
    expiryMonth,
    setExpiryMonth,
    expiryYear,
    setExpiryYear,
    cvc,
    setCvc,
    errors,
    handleSubmit,
  } = useContext(CardContext);

  return (
    <div className="md:w-2/5 w-full m-auto flex flex-col md:gap-6 gap-4 md:p-8 p-4">
      <div>
        <p className="uppercase text-very-dark-violet tracking-widest text-sm mb-2">
          Cardholder name
        </p>
        <Input
          type="text"
          placeholder="e.g. Jeetendra Kumar"
          className={`h-12 text-lg focus:outline-active-input-border ${
            errors.name ? "border-input-errors" : "light-grayish-violet"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p className="text-input-errors text-sm mt-2">{errors.name}</p>
        )}
      </div>

      <div>
        <p className="uppercase text-very-dark-violet tracking-widest text-sm mb-2">
          Card Number
        </p>
        <Input
          type="text"
          placeholder="e.g. 0000 0000 0000 0000"
          className={`h-12 text-lg focus:outline-active-input-border ${
            errors.cardNumber ? "border-input-errors" : "light-grayish-violet"
          }`}
          value={cardNumber}
          maxLength={19}
          onChange={handleChange}
        />
        {errors.cardNumber && (
          <p className="text-input-errors text-sm mt-2">{errors.cardNumber}</p>
        )}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <p className="uppercase text-very-dark-violet tracking-widest text-sm mb-2">
            Exp. Date (MM/YY)
          </p>
          <div className="flex gap-3">
            <div>
              <Input
                type="text"
                placeholder="MM"
                className={`h-12 text-lg focus:outline-active-input-border ${
                  errors.expiryMonth
                    ? "border-input-errors"
                    : "light-grayish-violet"
                }`}
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                maxLength={2}
              />
              {errors.expiryMonth && (
                <p className="text-input-errors text-sm mt-2">
                  {errors.expiryMonth}
                </p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="YY"
                className={`h-12 text-lg focus:outline-active-input-border ${
                  errors.expiryYear
                    ? "border-input-errors"
                    : "light-grayish-violet"
                }`}
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
                maxLength={2}
              />
              {errors.expiryYear && (
                <p className="text-input-errors text-sm mt-2">
                  {errors.expiryYear}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="uppercase text-very-dark-violet tracking-widest text-sm mb-2">
            Cvc
          </p>
          <Input
            type="text"
            placeholder="e.g. 123"
            className={`h-12 text-lg focus:outline-active-input-border ${
              errors.cvc ? "border-input-errors" : "light-grayish-violet"
            }`}
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength={3}
          />
          {errors.cvc && (
            <p className="text-input-errors text-sm mt-2">{errors.cvc}</p>
          )}
        </div>
      </div>

      <Button
        className="mt-4 h-12 text-xl bg-very-dark-violet hover:bg-active-input-border tracking-wider"
        onClick={handleSubmit}
      >
        Confirm
      </Button>
    </div>
  );
};

export default Form;
