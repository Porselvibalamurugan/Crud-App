"use server";
import { signIn, signOut } from "./auth";
export const handleLogin = async () => {
  await signIn("google");
  console.log("Login Successful");
};
export const handleLogout = async () => {
  await signOut();
  console.log("LogOut Successful");
};
