
import AboutUS from "./UI-components/AboutUS";
import Hero from "./UI-components/Hero";
import Hero2 from "./UI-components/Hero2";
import Team from "./UI-components/Team";

export default function Home() {
  return (
    <>
      <div className="wapper">
        <Hero/>
        <Hero2/> 
        <AboutUS/>
        <Team/>
      </div>
      
    </>
  );
}
