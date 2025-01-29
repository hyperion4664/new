'use client'

import React from "react";
import CartButton from "./cart-button";
import UserButton from './user-button'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-end items-center h-full">
      <nav className="flex items-center gap-4">
        {!session && (
          <Link href="/sign-in" passHref>
            <Button variant="outline">Sign In</Button>
          </Link>
        )}
        <UserButton />
        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
