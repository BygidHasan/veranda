import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function ReinforcemetTube() {
  const { verandaWidth, rTube, setRTube } = useVeranda();

  const handlerTubePrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 330,
      406: 440,
      506: 550,
      606: 660,
    };

    return priceMap[verandaWidth] || 0;
  };

  return (
    <>
      {(verandaWidth === 306 ||
        verandaWidth === 406 ||
        verandaWidth === 506 ||
        verandaWidth === 606) && (
        <CommandGroup
          className="uppercase mt-2"
          heading="Reinforcement tube for under the gutter"
        >
          <div className="flex items-center gap-2">
            <CommandItem
              onSelect={() => setRTube(false)}
              className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
                rTube ? '' : 'border-accent1'
              }`}
            >
              No
            </CommandItem>
            <CommandItem
              onSelect={() => setRTube(true)}
              className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
                rTube ? 'border-accent1' : ''
              }`}
            >
              {`Yes (+€ ${handlerTubePrice()}.00)`}
            </CommandItem>
          </div>
        </CommandGroup>
      )}
    </>
  );
}
