"use client";
import { useEffect } from "react";
import AnimatedIcon from "@/components/AnimatedIcon";

export default function ServicesPage() {
  useEffect(() => {
    console.log(document); // Ensure this runs only on the client
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-brand-navy to-gray-900 text-white">
      <header className="py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">Our Services</h1>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We help businesses take the first step toward digital success.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center">
          <AnimatedIcon animationPath="/animations/web-development.json" />
          <h3 className="text-2xl font-semibold mt-4 text-blue-400 uppercase tracking-wider">
            Full Stack Web Development
          </h3>
        </div>
      </section>
    </div>
  );
}

