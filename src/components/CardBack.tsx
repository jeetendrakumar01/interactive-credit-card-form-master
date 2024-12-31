import { CardContext } from "@/context/cardTypes";

import { useContext } from "react";

const CardBack = () => {
  const { cvc } = useContext(CardContext);
  return (
    <div className="md:w-[30rem] md:h-64 w-[70%] h-36 bg-card-back bg-no-repeat bg-cover rounded-lg relative">
      <div className="absolute w-11/12 h-full flex justify-end items-center">
        <p className="text-card tracking-wider md:pr-5">{cvc ? cvc : "123"}</p>
      </div>
    </div>
  );
};

export default CardBack;
