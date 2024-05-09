import Image from "next/image";
import React from "react";
import about from "@/public/aboutus.jpg";
import { CheckCircle } from "lucide-react";

export default function AboutUS() {
  return (
    <>
    {/* main title */}
    <div className="text-center py-5 pt-24">
      <h1 className="text-3xl lg:text-5xl font-bold text-center opacity-40">
        About Us
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo libero, unde fugit nostrum veritatis itaque iusto illo vero corrupti excepturi maiores maxime.</p>
    </div>
    {/* image and text */}
    <div className="flex flex-col  md:flex-row  gap-4  justify-center items-center">
      {/* left side */}
      <div className="w-full md:w-1/2 xl:w-auto">
        <Image
          alt="hero"
          className="object-cover object-center w-full"
          width={350}
          height={200}
          src={about}
        />
      </div>
      {/* right side */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col ">
          {/* main para */}
          <div className="py-4">
            <p className="text-sm  lg:text-xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, animi ex et numquam explicabo libero, eveniet fugit,
              quos earum quae beatae possimus. Vero fuga natus sequi explicabo
              est provident nostrum?
            </p>
          </div>
          {/* points */}
          <div className="flex flex-col justify-stretch align-middle">
            <p className="flex flex-row gap-1 justify-center items-center text-sm  lg:text-lg">
              <span>
                <CheckCircle />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              obcaecati fuga dignissimos saepe! Animi, officia.
            </p>
            <p className="flex flex-row gap-1 justify-center items-center text-sm  lg:text-lg">
              <span>
                <CheckCircle />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              obcaecati fuga dignissimos saepe! Animi, officia.
            </p>
            <p className="flex flex-row gap-1 justify-center items-center text-sm  lg:text-lg ">
              <span>
                <CheckCircle />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              obcaecati fuga dignissimos saepe! Animi, officia.
            </p>
            <p className="flex flex-row gap-1 justify-center items-center text-sm  lg:text-lg  ">
              <span>
                <CheckCircle />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              obcaecati fuga dignissimos saepe! Animi, officia.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
