"use client";
import AboutUS from "./UI-components/AboutUS";
import BookSeat from "./UI-components/BookSeat";
import Hero from "./UI-components/Hero";
import Hero2 from "./UI-components/Hero2";
import Reveal from "./UI-components/Reveal";
import Team from "./UI-components/Team";
import TestimonialPage from "./UI-components/Testinominals/Testinomial";

export default function Home() {
  return (
    <>
      <div className="wapper">
        <Reveal>
          <Hero />
        </Reveal>
      </div>
      <div className="bg-red-800 py-5">
        <Reveal>
          <Hero2 />
        </Reveal>
      </div>
      <div className="wapper">
        <Reveal>
          <AboutUS />
        </Reveal>
      </div>
      <div className="bg-red-200 my-8">
        <Reveal>
          <Team />
        </Reveal>
      </div>
      <div className="wapper">
        <Reveal>
          <TestimonialPage />
        </Reveal>
      </div>
      <div className=" my-8">
        <Reveal>
          <BookSeat />
        </Reveal>
      </div>
    </>
  );
}
