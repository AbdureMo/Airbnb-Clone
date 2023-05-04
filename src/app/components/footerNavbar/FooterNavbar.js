"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FiUser } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export default function FooterNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottomNav sm:block xl:hidden w-full sticky bottom-0 left-0 ">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Explore"
          icon={<BiSearch style={{ fontSize: 50 }} />}
        />
        <BottomNavigationAction
          label="Wishlists"
          icon={<AiOutlineHeart style={{ fontSize: 40 }} />}
        />
        <BottomNavigationAction 
          label="Log in"
          icon={
            <FiUser
              className=" border-gray-400 border-2 rounded-full"
              style={{ fontSize: 30 }}
            />
          }
        />
      </BottomNavigation>
    </div>
  );
}
