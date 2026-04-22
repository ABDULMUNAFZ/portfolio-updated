"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WorkPage() {
  useEffect(() => {
    redirect("/freelance");
  }, []);

  return null;
}
