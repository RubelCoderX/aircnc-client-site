import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import DashBoardLayout from "../layout/DashBoardLayout";
import AddRoom from "../pages/DashBoard/AddRoom";
import { getRoom } from "../api/room";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoutes>
            <RoomDetails></RoomDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard/add-room",
        element: <AddRoom></AddRoom>,
      },
    ],
  },
]);
