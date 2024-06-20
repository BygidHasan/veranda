import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function VerandaRoofMaterial() {
  const { verandaWidth, verandaDepth, verandaRoof, setVerandaRoof } =
    useVeranda();

  const glassClearPrices: { [key: number]: { [key: number]: number } } = {
    306: { 250: 540, 300: 705, 350: 1000, 400: 1275 },
    406: { 250: 690, 300: 995, 350: 1210, 400: 1520 },
    506: { 250: 810, 300: 975, 350: 1135, 400: 1300 },
    606: { 250: 725, 300: 940, 350: 1025, 400: 1760 },
    706: { 250: 915, 300: 1350, 350: 1355, 400: 2100 },
    806: { 250: 1800, 300: 2050, 350: 2275, 400: 3190 },
    906: { 250: 2150, 300: 2530, 350: 2750, 400: 3780 },
    1006: { 250: 2260, 300: 2875, 350: 3000, 400: 4120 },
    1106: { 250: 1925, 300: 2325, 350: 2460, 400: 3530 },
    1206: { 250: 2700, 300: 3225, 350: 3390, 400: 4780 },
  };

  const glassOpalPrices: { [key: number]: { [key: number]: number } } = {
    306: { 250: 840, 300: 1065, 350: 1420, 400: 1670 },
    406: { 250: 1090, 300: 1475, 350: 1760, 400: 2140 },
    506: { 250: 1275, 300: 1530, 350: 1785, 400: 2040 },
    606: { 250: 1210, 300: 1606, 350: 1805, 400: 2645 },
    706: { 250: 1555, 300: 2125, 350: 2260, 400: 3130 },
    806: { 250: 2540, 300: 2935, 350: 3310, 400: 4370 },
    906: { 250: 2980, 300: 3525, 350: 3915, 400: 5110 },
    1006: { 250: 3185, 300: 3985, 350: 4295, 400: 5600 },
    1106: { 250: 2940, 300: 3545, 350: 3880, 400: 5150 },
    1206: { 250: 3810, 300: 4555, 350: 4940, 400: 6555 },
  };

  const getPrice = (
    prices: { [key: number]: { [key: number]: number } },
    width: number,
    depth: number
  ) => {
    return prices[width]?.[depth] || 0;
  };

  const handleGlassClearPrice = () =>
    getPrice(glassClearPrices, verandaWidth, verandaDepth);

  const handleGlassOpalPrice = () =>
    getPrice(glassOpalPrices, verandaWidth, verandaDepth);

  return (
    <CommandGroup
      className="uppercase mt-2"
      heading={`Roof material excluding mounting ${verandaDepth} cm`}
    >
      <CommandItem
        onSelect={() => setVerandaRoof('polyOpal')}
        className={`flex gap-2 border-2 cursor-pointer mb-1 ${
          verandaRoof === 'polyOpal' ? 'border-accent1' : ''
        }`}
      >
        <img className="w-24" src="./images/polyOpal.jpg" alt="polyOpal" />
        <div className="text-center">Polyarbonate Opal</div>
      </CommandItem>
      <CommandItem
        onSelect={() => setVerandaRoof('polyClear')}
        className={`flex gap-2 border-2 cursor-pointer mb-1 ${
          verandaRoof === 'polyClear' ? 'border-accent1' : ''
        }`}
      >
        <img className="w-24" src="./images/polyClear.jpg" alt="polyClear" />
        <div className="text-center">Polycarbonate Clear</div>
      </CommandItem>

      {!(verandaDepth === 450 || verandaDepth === 500) && (
        <>
          <CommandItem
            onSelect={() => setVerandaRoof('glassClear')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              verandaRoof === 'glassClear' ? 'border-accent1' : ''
            }`}
          >
            <img
              className="w-24"
              src="./images/glassClear.jpg"
              alt="glassClear"
            />
            <div className="text-center">
              {`Clear Glass 44.2 (+€ ${handleGlassClearPrice()}.00)`}{' '}
            </div>
          </CommandItem>
          <CommandItem
            onSelect={() => setVerandaRoof('glassOpal')}
            className={`flex gap-2 border-2 cursor-pointer mb-1 ${
              verandaRoof === 'glassOpal' ? 'border-accent1' : ''
            }`}
          >
            <img
              className="w-24"
              src="./images/glassOpal.jpg"
              alt="glassOpal"
            />
            <div className="text-center">{`Opal Glass 44.2 (+€ ${handleGlassOpalPrice()}.00)`}</div>
          </CommandItem>
        </>
      )}
    </CommandGroup>
  );
}
