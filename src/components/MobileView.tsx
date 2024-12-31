import { CardContext } from "@/context/cardTypes";
import { useContext } from "react";
import Result from "./Result";
import Form from "./Form";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const MobileView = () => {
  const { showResult } = useContext(CardContext);
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="h-[30%] bg-main-desktop bg-no-repeat bg-cover relative">
        <div className="absolute top-[18%] left-[23%] w-full">
          <CardBack />
        </div>
        <div className="absolute w-full left-5 -bottom-[20%]">
          <CardFront />
        </div>
      </div>
      <div className="flex-1 flex items-center">
        {showResult ? <Result /> : <Form />}
      </div>
    </div>
  );
};

export default MobileView;
