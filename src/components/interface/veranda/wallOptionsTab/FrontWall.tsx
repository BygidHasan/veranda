import { Button } from '@/components/ui/button';
import { useVeranda } from '@/context/VerandaCustomization';

export default function FrontWall() {
  const { setWallNavigate } = useVeranda();
  return (
    <>
      <Button
        className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
        size="default"
        variant="default"
        onClick={() => setWallNavigate(false)}
      >
        Back
      </Button>
      <div>FrontWall</div>;
    </>
  );
}
