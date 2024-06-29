import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useVeranda } from '@/context/VerandaCustomization';

export default function ShorteningInputs() {
  const { verandaShortening } = useVeranda();

  return (
    <div className="mt-2 mb-8 mx-2 uppercase">
      {verandaShortening === 'width' && (
        <>
          <Label className="ml-1" htmlFor="width">
            Width(cm)
          </Label>
          <Input type="number" id="width" placeholder="Enter Width" />
        </>
      )}
      {verandaShortening === 'depth' && (
        <>
          <Label className="ml-1" htmlFor="depth">
            Depth(cm)
          </Label>
          <Input type="number" id="depth" placeholder="Enter Depth" />
        </>
      )}
      {verandaShortening === 'widthAndDepth' && (
        <>
          <Label className="ml-1" htmlFor="width">
            Width(cm)
          </Label>
          <Input className='mb-2' type="number" id="width" placeholder="Enter Width" />

          <Label className="ml-1" htmlFor="depth">
            Depth(cm)
          </Label>
          <Input type="number" id="depth" placeholder="Enter Depth" />
        </>
      )}
    </div>
  );
}
