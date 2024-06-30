import { useVeranda } from '@/context/VerandaCustomization';
import { Button } from '../ui/button';

export default function StepBtns() {
  const { productType, setProductNavigate, verandaTabs, setVerandaTabs } =
    useVeranda();

  const handleNextBtn = () => {
    if (productType === 'veranda') {
      verandaTabs === 'baseChoice'
        ? setVerandaTabs('sideWall')
        : verandaTabs === 'sideWall'
        ? setVerandaTabs('led')
        : setVerandaTabs('delivery');
    }
  };

  const handleBackBtn = () => {
    if (productType === 'veranda') {
      verandaTabs === 'delivery'
        ? setVerandaTabs('led')
        : verandaTabs === 'led'
        ? setVerandaTabs('sideWall')
        : verandaTabs === 'sideWall'
        ? setVerandaTabs('baseChoice')
        : setProductNavigate(false);
    } else {
      setProductNavigate(false);
    }
  };

  return (
    <div className="w-full fixed bottom-0 text-center sm:absolute sm:-bottom-2 ">
      <Button
        onClick={handleBackBtn}
        className="text-center mx-2 mb-4 uppercase border-2 border-accent1 bg-bgColor hover:bg-bgGrayColor hover:border-accent2"
        size="lg"
        variant="secondary"
      >
        {verandaTabs === 'baseChoice' ? 'Back To Products' : 'Back'}
      </Button>
      <Button
        onClick={handleNextBtn}
        className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
        size="lg"
        variant="default"
      >
        {verandaTabs === 'delivery' ? 'Overview' : 'Next'}
      </Button>
    </div>
  );
}
