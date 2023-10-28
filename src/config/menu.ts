import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";

export const guest = {
  label: "Authentication",
  items: [
    {
      key: "signup",
      value: "Sign up",
      description: "Register new your account",
      url: "/sign-up",
    },
    {
      key: "signin",
      value: "Sign in",
      description: "Login to your account",
      url: "/sign-in",
    },
  ],
};

export const logged = [
  {
    key: "profile",
    value: "Profile",
    description: "Information about your",
    url: "/profile/me",
    icon: FaRegUserCircle,
  },
  {
    key: "my-orders",
    value: "My orders",
    description: "Manage your orders",
    url: "/profile/orders",
    icon: RiBillLine,
  },
  {
    key: "my-favorites",
    value: "My favorites",
    description: "Manage your favorites",
    url: "/profile/favorites",
    icon: MdOutlineFavoriteBorder,
  },
  {
    key: "logout",
    value: "Log out",
    description: "Log out of your account",
    icon: IoLogOutOutline,
  },
];
