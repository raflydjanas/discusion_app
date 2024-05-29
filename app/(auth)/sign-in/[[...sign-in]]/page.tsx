import { SignIn } from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <SignIn />
    </main>
  );
};

export default LoginPage;
