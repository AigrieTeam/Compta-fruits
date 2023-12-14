"use client";

import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <a
      onClick={async () => {
        await signIn();
      }}
      className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline"
    >
      Login
    </a>
  );
};