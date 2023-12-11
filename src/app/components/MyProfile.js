"use-client";
import React from "react";
import Image from "next/image";
import Data from "./Data";
import ProfilePic from "./profilepic.jpg";

function MyProfile() {
  return (
    <>
      <section className="w-full mx-auto">
        <Image
          className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
          src={ProfilePic}
          width={200}
          height={200} // Adjust the height to maintain a circular shape
          alt="Profile pic"
          priority={true}
        />
      </section>
    </>
  );
}

export default MyProfile;
