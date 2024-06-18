import { useVeranda } from '@/context/VerandaCustomization';
import { Button } from '../ui/button';

export default function StepBtns() {
  const { setProductNavigate } = useVeranda();

  return (
    <div className="w-full text-center sm:absolute sm:bottom-0 ">
      <Button
        className="text-center mx-2 mb-4 uppercase border-2 border-accent1 bg-bgColor hover:bg-bgGrayColor hover:border-accent2"
        size="lg"
        variant="secondary"
        onClick={() => setProductNavigate(false)}
      >
        Back
      </Button>
      <Button
        className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
        size="lg"
        variant="default"
      >
        Next
      </Button>
    </div>
  );
}
