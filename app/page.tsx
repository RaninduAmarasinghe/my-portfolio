"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen">
      {loading && <LoadingScreen />}

      <Navbar />
      <Hero />
    </main>
  );
}