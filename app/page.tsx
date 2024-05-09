import AboutUS from "./UI-components/AboutUS";
import BookSeat from "./UI-components/BookSeat";
import Hero from "./UI-components/Hero";
import Hero2 from "./UI-components/Hero2";
import Team from "./UI-components/Team";
import TestimonialPage from "./UI-components/Testinominals/Testinomial";

export default function Home() {
  return (
    <>
      <div className="wapper">
        <Hero />
      </div>
      <div className="bg-red-800 py-5">
        <Hero2 />
      </div>
      <div className="wapper">
        <AboutUS />
      </div>
      <div className="bg-red-200 my-8">
        <Team />
      </div>
      <div className="wapper">
        <TestimonialPage />  
      </div>
      <div className="contact-bg my-8">
        <BookSeat />
      </div>
      
    </>
  );
}
