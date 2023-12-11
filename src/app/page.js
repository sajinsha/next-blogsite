"use-client";
import Image from "next/image";
import Data from "./components/Data";
import MyProfile from "./components/MyProfile";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome to my Blog Page &nbsp;
        <span className="whitespace-nowrap"></span>
      </p>
      <MyProfile />

      <h1 className="text-3xl text-center font-bold mt-12 mb-12">Sajinsha.S.S</h1>

      <Data />
    </main>
  );
}
