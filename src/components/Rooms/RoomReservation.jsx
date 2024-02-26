import React, { useContext, useState } from "react";
import Calender from "./Calender";
import Button from "../Button/Button";
import { AuthContext } from "../../provider/AuthProvider";
import BookingModal from "../Modal/BookingModal";
import { formatDistance } from "date-fns";
import { bookingRoom, updateStatus } from "../../api/booking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservation = ({ roomData }) => {
  const { user, role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  // price calculation
  const totalPrice =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.form)).split(
        " "
      )[0]
    ) * roomData.price;
  console.log(totalPrice);
  const [value, setValue] = useState({
    startDate: new Date(roomData?.form),
    endDate: new Date(roomData?.to),
    key: "selection",
  });
  // booking state
  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    },
    host: roomData.host.email,
    location: roomData.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: roomData.title,
    roomId: roomData._id,
    image: roomData.image,
  });

  const handleSelect = (ranges) => {
    setValue({ ...value });
  };

  const modalHandler = () => {
    bookingRoom(bookingInfo)
      .then((data) => {
        // console.log(data);
        updateStatus(roomData._id, true).then((data) => {
          toast.success("Booking Successfully");
          navigate("/dashboard/my-bookings");
          closeModal();
        });
      })
      .catch((err) => {
        console.log(err);
        closeModal();
      });
    // console.log(bookingInfo);
  };
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${roomData.price}</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} handleSelect={handleSelect}></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData.host.email === user.email || roomData.booked}
          label="Reserve"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      <BookingModal
        modalHandler={modalHandler}
        bookingInfo={bookingInfo}
        isOpen={isOpen}
        closeModal={closeModal}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
