import { Button } from '@/components/ui/button';
import { useVeranda } from '@/context/VerandaCustomization';

export default function LeftWall() {
  const { setWallNavigate } = useVeranda();

  return (
    <>
      
      <Button
        className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
        size="lg"
        variant="default"
        onClick={() => setWallNavigate(false)}
      >
        Back
      </Button>
      <div>LeftWall</div>
    </>
  );
}
