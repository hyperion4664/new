
import React from "react";
import CartButton from "./cart-button";
import UserButton from './user-button'



const menu = () => {
  return (
    <div className="flex justify-end items-center h-full">
      <nav className="flex items-center gap-4">
    
        <UserButton />

        <CartButton />
      </nav>
    </div>
  );
};

export default menu;
