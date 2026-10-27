import HeroCard from "./heroCard";
import MainHero from "./mainHero"


const Hero = () => {
  return (
    <section className="w-full bg-hero-bg pt-8 pb-4">
      <div className="mx-auto grid w-full max-w-6xl flex-col items-start gap-8 px-6 lg:grid-cols-2 lg:justify-between lg:gap-16 my-8">
        <MainHero />
        <HeroCard />
      </div>
    </section>
  );
};

export default Hero;