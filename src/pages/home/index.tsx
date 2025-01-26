import { FoodGrid } from '../../components/home/food-grid';
import { HeroSection } from '../../components/home/hero-section'; 
import { FeatureSection } from '../../components/home/features'; 

function Home() {
  return (
    <>
      <HeroSection /> 
      <FoodGrid />
      <FeatureSection />
    </>
  );
}

export default Home;
