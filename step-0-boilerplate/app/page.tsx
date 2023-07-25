"use client"
import Spotlight from "@/components/Spotlight";

const page = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-5 overflow-x-hidden">
      <p className="text-4xl font-bold text-blue-800">Ahmed Faraz</p>
      <h1 className="text-8xl font-bold text-[#949494]">&lt;No Brakes/&gt;</h1>
      {/* spotlight */}
      <Spotlight />
    </main>
  );
}

export default page;