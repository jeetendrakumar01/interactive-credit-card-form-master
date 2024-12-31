import { useContext, useRef } from "react";
import { toPng } from "html-to-image";
import { CardContext } from "@/context/cardTypes";

const CardFront = () => {
  const { cardNumber, name, expiryMonth, expiryYear, bankName } = useContext(CardContext);
  const cardRef = useRef(null);

  // Function to download the card as an image
  const downloadCard = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "credit-card.png";
        link.click();
      } catch (error) {
        console.error("Failed to download the card:", error);
      }
    }
  };

  return (
    <div>
      {/* Card Front Component */}
      <div
        ref={cardRef}
        className="md:w-[30rem] md:h-64 w-[70%] h-36 bg-card-front bg-no-repeat bg-cover rounded-lg md:px-10 md:py-6 p-4 flex flex-col justify-between"
      >
        {/* Card Logo and Bank Name */}
<div className="h-1/3 flex items-center gap-4">
  <img
    src="https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg" // Visa logo URL
    alt="card-logo"
    className="h-full"
  />
  <p className="text-card font-medium md:text-lg text-sm">
    {bankName ? bankName : " Bank Credit Card"}
  </p>
</div>


        {/* Card Number, Name, and Expiry Date */}

        <div className="flex flex-col justify-between gap-2 md:h-2/5">
          <p className="md:text-3xl text-card md:tracking-[0.2rem] tracking-wider">
            {cardNumber ? cardNumber : "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between">
            <p className="uppercase text-card tracking-wider">
              {name ? name : "JEETENDRA KUMAR"}
            </p>
            <p className="uppercase text-card tracking-wider">
              {expiryMonth ? expiryMonth : "01"}/{expiryYear ? expiryYear : "2025"}
            </p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadCard}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Download Card
      </button>
    </div>
  );
};

export default CardFront;
