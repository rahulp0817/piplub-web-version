"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Landing from "@/components/landing";
import Loading from "@/app/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Landing />
    </main>
  );
}
