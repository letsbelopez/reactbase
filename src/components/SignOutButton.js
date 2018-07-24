import React from "react";
import { signOut } from "../auth";

const SignOutButton = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
