import { FoodGrid } from '../../components/home/food-grid';
import { HeroSection } from '../../components/home/hero-section'; 
import { FeatureSection } from '../../components/home/features'; 
import { GoodbyeCard } from '../../components/home/goodbyecard'; 

function Home() {
  return (
    <>
      <HeroSection />  
      <FeatureSection />
      <GoodbyeCard />
    </>
  );
}

export default Home;
