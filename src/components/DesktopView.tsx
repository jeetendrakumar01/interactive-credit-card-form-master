import { useContext } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import Form from "./Form";
import Result from "./Result";
import { CardContext } from "@/context/cardTypes";

const DesktopView = () => {
  const { showResult } = useContext(CardContext);
  return (
    <div className="flex h-screen relative">
      <div className="w-[30%] bg-main-desktop bg-no-repeat bg-cover flex items-center">
        <div className="h-2/3 w-full relative">
          <div className="absolute -right-[25%]">
            <CardFront />
          </div>
          <div className="absolute bottom-12 -right-[45%]">
            <CardBack />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {showResult ? <Result /> : <Form />}
      </div>
    </div>
  );
};

export default DesktopView;
