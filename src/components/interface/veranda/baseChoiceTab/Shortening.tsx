import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function Shortening() {
  const { verandaWidth, verandaShortening, setVerandaShortening } =
    useVeranda();

  const handlewidthShortenPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 90,
      406: 95,
      506: 125,
      606: 125,
      706: 145,
      806: 195,
      906: 135,
      1006: 225,
      1106: 250,
      1206: 250,
    };

    return priceMap[verandaWidth] || 0;
  };

  const handleDepthShortenPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 155,
      406: 155,
      506: 75,
      606: 75,
      706: 85,
      806: 95,
      906: 105,
      1006: 125,
      1106: 150,
      1206: 150,
    };
    return priceMap[verandaWidth] || 0;
  };

  const handleWidthAndDepthShortenPrice = () => {
    const priceMap: { [key: number]: number } = {
      306: 250,
      406: 250,
      506: 200,
      606: 200,
      706: 230,
      806: 290,
      906: 240,
      1006: 350,
      1106: 400,
      1206: 400,
    };
    return priceMap[verandaWidth] || 0;
  };

  return (
    <CommandGroup className="uppercase mt-2" heading="Shortening the veranda">
      <div className="flex flex-wrap items-center gap-2">
        <CommandItem
          onSelect={() => setVerandaShortening('no')}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            verandaShortening === 'no' ? 'border-accent1' : ''
          }`}
        >
          No
        </CommandItem>
        <CommandItem
          onSelect={() => setVerandaShortening('width')}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            verandaShortening === 'width' ? 'border-accent1' : ''
          }`}
        >
          {`Shorten width (+€ ${handlewidthShortenPrice()}.00)`}
        </CommandItem>
        <CommandItem
          onSelect={() => setVerandaShortening('depth')}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            verandaShortening === 'depth' ? 'border-accent1' : ''
          }`}
        >
          {`Depth Shortening (+€ ${handleDepthShortenPrice()}.00)`}
        </CommandItem>
        <CommandItem
          onSelect={() => setVerandaShortening('widthAndDepth')}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            verandaShortening === 'widthAndDepth' ? 'border-accent1' : ''
          }`}
        >
          {`Shorten width and depth (+€ ${handleWidthAndDepthShortenPrice()}.00)`}
        </CommandItem>
      </div>
    </CommandGroup>
  );
}
