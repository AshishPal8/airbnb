"use client";
import React, { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItems from "./MenuItems";

import useRegisterModel from "@/app/hooks/useRegisterModel";
import useLoginModel from "@/app/hooks/useLoginModel";
import useRentModel from "@/app/hooks/useRentModel";

import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();
  const rentModel = useRentModel();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModel.onOpen();
    }

    rentModel.onOpen();
  }, [currentUser, loginModel, rentModel]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          AirBnb your home
        </div>
        <div
          onClick={toggleMenu}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-white top-12 right-0 w-[40vw] md:w-3/4 rounded-xl shadow-md overflow-hidden text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItems onClick={() => {}} label="My Trips" />
                <MenuItems onClick={() => {}} label="My Reservations" />
                <MenuItems onClick={() => {}} label="My Favorites" />
                <MenuItems onClick={rentModel.onOpen} label="AirBnb my home" />
                <hr />
                <MenuItems onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItems onClick={loginModel.onOpen} label="Login" />
                <MenuItems onClick={registerModel.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
