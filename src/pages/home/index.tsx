import { FoodGrid } from '../../components/home/food-grid';
import { HeroSection } from '../../components/home/hero-section';
import { WaitlistForm } from '../../components/home/waitlist-form';

function Home() {
  return (
    <>
      <HeroSection />
      <WaitlistForm />
      <FoodGrid />
    </>
  );
}

export default Home;
