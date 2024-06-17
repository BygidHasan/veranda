import { useVeranda } from '@/context/VerandaCustomization';
import ProductSelection from './ProductSelection';
import Veranda from './veranda/Veranda';
import GardenRoom from './gardenRoom/GardenRoom';
import SlidingGlassWall from './slidingGlassWall/SlidingGlassWall';
import Carport from './carport/Carport';
import SunProtection from './sunProtection/SunProtection';
import { Button } from '../ui/button';

export default function Interface() {
  const { productType, productnavigate, setProductNavigate } = useVeranda();

  return (
    <div className="fixed top-[44svh] sm:top-0 sm:right-0 bg-bgColor shadow-md h-[56svh] sm:h-svh w-full sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[28%] 2xl:w-[24%]">
      {!productnavigate && <ProductSelection />}
      {productnavigate && productType === 'veranda' && <Veranda />}
      {productnavigate && productType === 'gardenRoom' && <GardenRoom />}
      {productnavigate && productType === 'slidingGlassWall' && (
        <SlidingGlassWall />
      )}
      {productnavigate && productType === 'carport' && <Carport />}
      {productnavigate && productType === 'sunProtection' && <SunProtection />}
      {productnavigate && (
        <div className="w-full text-center sm:absolute sm:bottom-0 ">
          <Button
            className="text-center mx-2 mb-4 uppercase border-2 border-accent1 bg-bgColor hover:bg-bgGrayColor"
            size="lg"
            variant="secondary"
            onClick={() => setProductNavigate(false)}
          >
            products
          </Button>
          <Button
            className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
            size="lg"
            variant="default"
          >
            Next step
          </Button>
        </div>
      )}
    </div>
  );
}
