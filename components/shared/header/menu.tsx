import { UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import CartButton from "./cart-button";

const menu = () => {
  return (
    <div className="flex justify-end items-center h-full">
      <nav className="flex items-center gap-4">
        <Link
          href="/signin"
          className="header-button group flex flex-col items-center justify-center p-2.5 rounded-lg transition-all duration-300 hover:bg-gray-100/10 hover:shadow-lg"
        >
          <UserIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
          <span className="text-sm font-medium mt-1 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-primary">
            Giriş Yap
          </span>
        </Link>

        <CartButton />
      </nav>
    </div>
  );
};

export default menu;
