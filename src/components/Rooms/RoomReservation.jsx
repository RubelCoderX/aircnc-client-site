import React from "react";
import Calender from "./Calender";
import Button from "../Button/Button";

const RoomReservation = ({ roomData }) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${roomData.price}</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve"></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
