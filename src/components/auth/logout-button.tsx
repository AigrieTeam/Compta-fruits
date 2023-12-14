"use client";

import { signOut } from "next-auth/react";

export const LogOutButton = () => {
  return (
    <a
      onClick={async () => {
        await signOut();
      }}
      className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline"
    >
      Logout
    </a>
  );
};
