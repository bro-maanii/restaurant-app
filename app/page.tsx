
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
        <Hero/>
        <Hero2/> 
        <AboutUS/>
        <Team/>
        <TestimonialPage/>
        <BookSeat/>
      </div>
      
    </>
  );
}
