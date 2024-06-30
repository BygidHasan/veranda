import { useVeranda } from '@/context/VerandaCustomization';
import ProductSelection from './ProductSelection';
import Veranda from './veranda/Veranda';
import GardenRoom from './gardenRoom/GardenRoom';
import SlidingGlassWall from './slidingGlassWall/SlidingGlassWall';
import Carport from './carport/Carport';
import SunProtection from './sunProtection/SunProtection';
import StepBtns from './StepBtns';

export default function Interface() {
  const { productType, productnavigate } = useVeranda();

  return (
    <div className="fixed top-[44svh] sm:top-0 sm:right-0 bg-bgColor shadow-md h-[56svh] sm:h-svh w-full sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[28%] 2xl:w-[24%] sm:pl-4">
      {!productnavigate && <ProductSelection />}
      {productnavigate && productType === 'veranda' && <Veranda />}
      {productnavigate && productType === 'gardenRoom' && <GardenRoom />}
      {productnavigate && productType === 'slidingGlassWall' && (
        <SlidingGlassWall />
      )}
      {productnavigate && productType === 'carport' && <Carport />}
      {productnavigate && productType === 'sunProtection' && <SunProtection />}
      {productnavigate && <StepBtns />}
    </div>
  );
}
