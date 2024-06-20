import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function FreeStanding() {
  const { verandaWidth, freeStandingV, setFreeStandingV } = useVeranda();

  const handleFreeStandingPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 1250,
      406: 1250,
      506: 1450,
      606: 1650,
      706: 1950,
      806: 2150,
      906: 2225,
      1006: 2425,
      1106: 2650,
      1206: 2850,
    };

    return priceMap[verandaWidth] || 0;
  };

  return (
    <CommandGroup className="uppercase mt-2" heading="Free-standing construction">
      <div className="flex items-center gap-2">
        <CommandItem
          onSelect={() => setFreeStandingV(false)}
          className={`w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            freeStandingV ? '' : 'border-accent1'
          }`}
        >
          No
        </CommandItem>
        <CommandItem
          onSelect={() => setFreeStandingV(true)}
          className={`w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            freeStandingV ? 'border-accent1' : ''
          }`}
        >
          {`Yes (+€ ${handleFreeStandingPrice()}.00)`}
        </CommandItem>
      </div>
    </CommandGroup>
  );
}
