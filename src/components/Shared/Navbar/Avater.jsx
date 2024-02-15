import React, { useContext } from "react";
import avaterImg from "../../../assets/placeholder.jpg";
import { AuthContext } from "../../../provider/AuthProvider";

const Avater = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <img
        className="rounded-full"
        src={user && user.photoURL ? user.photoURL : avaterImg}
        height="30"
        width="30"
        alt="profile"
      />
    </div>
  );
};

export default Avater;
