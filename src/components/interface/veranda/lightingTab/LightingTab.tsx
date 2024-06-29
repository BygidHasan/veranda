import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function LightingTab() {
  const [lightingType, setLightingType] = useVeranda();

  return (
    <Command>
      <CommandList className="max-h-[40svh] sm:max-h-[82svh] ">
        <CommandGroup
          className="uppercase mt-2"
          heading="Dimmable LED lighting"
        >
          <CommandItem
            onSelect={() => setLightingType('no')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === 'no' ? 'border-accent1' : ''
            }`}
          >
            <img className="w-24" src="./images/polyOpal.jpg" alt="polyOpal" />
            <div className="text-center">No</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setLightingType('1per')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === '1per' ? 'border-accent1' : ''
            }`}
          >
            <img
              className="w-24"
              src="./images/polyClear.jpg"
              alt="polyClear"
            />
            <div className="text-center">
              {`1 per intermediate beam (+€ 60,00)`}
            </div>
          </CommandItem>

          <CommandItem
            onSelect={() => setLightingType('2per')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === '2per' ? 'border-accent1' : ''
            }`}
          >
            <img
              className="w-24"
              src="./images/glassClear.jpg"
              alt="glassClear"
            />
            <div className="text-center">
              {`2 per intermediate beam (+€ 120,00)`}
            </div>
          </CommandItem>
          <CommandItem
            onSelect={() => setLightingType('3per')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === '3per' ? 'border-accent1' : ''
            }`}
          >
            <img
              className="w-24"
              src="./images/glassOpal.jpg"
              alt="glassOpal"
            />
            <div className="text-center">{`3 per intermediate beam (+€ 180,00)`}</div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
