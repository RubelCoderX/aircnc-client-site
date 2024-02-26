import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Dashboard/Forms/AddRoomForm";
import { imageUpload } from "../../api/imageUpload";
import { AuthContext } from "../../provider/AuthProvider";
import { addRoom } from "../../api/room";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const title = event.target.title.value;
    const form = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];

    // uploade Image
    imageUpload(image)
      .then((data) => {
        // console.log(data);
        const roomData = {
          image: data.data.display_url,
          location,
          title,
          form,
          to,
          price: parseFloat(price),
          total_guest,
          bedrooms,
          bathrooms,
          description,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          category,
        };
        // post room data to server
        addRoom(roomData)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded");
            setLoading(false);
            toast.success("Room is added to the database");
            navigate("/dashboard/my-listings");
          })
          .catch((error) => {
            console.log(error.message);
          });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  return (
    <AddRoomForm
      handleSubmit={handleSubmit}
      loading={loading}
      handleImageChange={handleImageChange}
      uploadButtonText={uploadButtonText}
      dates={dates}
      handleDates={handleDates}
    ></AddRoomForm>
  );
};

export default AddRoom;
