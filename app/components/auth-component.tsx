import { signIn, signOut } from "@/auth";
import React from "react";

export const SignIn = ({
  provider,
  ...props
}: { provider?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button
        {...props}
        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-10 cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
};

export const SignOut = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        {...props}
        className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-10 cursor-pointer ml-6"
      >
        Sign Out
      </button>
    </form>
    )
}
