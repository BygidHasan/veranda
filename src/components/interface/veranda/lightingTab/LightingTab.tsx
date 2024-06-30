import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function LightingTab() {
  const { verandaWidth, lightingType, setLightingType } = useVeranda();

  const handle1perPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 60,
      406: 90,
      506: 120,
      606: 150,
      706: 180,
      806: 210,
      906: 240,
      1006: 270,
      1106: 300,
      1206: 330,
    };

    return priceMap[verandaWidth] || 0;
  };
  const handle2perPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 120,
      406: 180,
      506: 240,
      606: 300,
      706: 360,
      806: 420,
      906: 480,
      1006: 540,
      1106: 600,
      1206: 660,
    };

    return priceMap[verandaWidth] || 0;
  };
  const handle3perPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 180,
      406: 270,
      506: 360,
      606: 450,
      706: 540,
      806: 630,
      906: 720,
      1006: 810,
      1106: 900,
      1206: 990,
    };

    return priceMap[verandaWidth] || 0;
  };

  return (
    <Command>
      <CommandList className="max-h-[40svh] sm:max-h-[82svh] ">
        <CommandGroup
          className="uppercase mt-2 text-start"
          heading="Dimmable LED lighting"
        >
          <CommandItem
            onSelect={() => setLightingType('no')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === 'no' ? 'border-accent1' : ''
            }`}
          >
            <img className="w-24 h-16" src="./images/no.jpg" alt="no" />
            <div className="text-center">No</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setLightingType('1per')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === '1per' ? 'border-accent1' : ''
            }`}
          >
            <img className="w-24 h-16" src="./images/1per.jpg" alt="1per" />
            <div className="text-center">
              {`1 per intermediate beam (+€ ${handle1perPrice()}.00)`}
            </div>
          </CommandItem>

          <CommandItem
            onSelect={() => setLightingType('2per')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === '2per' ? 'border-accent1' : ''
            }`}
          >
            <img className="w-24 h-16" src="./images/2per.jpg" alt="2per" />
            <div className="text-center">
              {`2 per intermediate beam (+€ ${handle2perPrice()}.00)`}
            </div>
          </CommandItem>
          <CommandItem
            onSelect={() => setLightingType('3per')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              lightingType === '3per' ? 'border-accent1' : ''
            }`}
          >
            <img className="w-24 h-16" src="./images/3per.jpg" alt="3per" />
            <div className="text-center">{`3 per intermediate beam (+€ ${handle3perPrice()}.00)`}</div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
