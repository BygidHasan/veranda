import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function Gutter() {
  const { verandaWidth, flatGutterV, setFlatGutterV } = useVeranda();

  const handleFlatGutterPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 150,
      406: 150,
      506: 175,
      606: 210,
      706: 245,
      806: 280,
      906: 315,
      1006: 350,
      1106: 385,
      1206: 420,
    };

    return priceMap[verandaWidth] || 0;
  };

  return (
    <CommandGroup className="uppercase mt-2" heading="Gutter moulding">
      <div className="flex items-center gap-2">
        <CommandItem
          onSelect={() => setFlatGutterV(false)}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            flatGutterV ? '' : 'border-accent1'
          }`}
        >
          <img
            className="w-32"
            src="./images/Hemisphere.jpg"
            alt="Hemisphere"
          />
          <div className="text-center">Hemisphere</div>
        </CommandItem>
        <CommandItem
          onSelect={() => setFlatGutterV(true)}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            flatGutterV ? 'border-accent1' : ''
          }`}
        >
          <img className="w-32" src="./images/flat.jpg" alt="flat" />
          <div className="text-center">{`Flat (+€ ${handleFlatGutterPrice()}.00)`}</div>
        </CommandItem>
      </div>
    </CommandGroup>
  );
}
