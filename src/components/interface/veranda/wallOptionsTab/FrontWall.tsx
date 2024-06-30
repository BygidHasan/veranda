import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useVeranda } from "@/context/VerandaCustomization";

export default function LeftWall() {
  const {
    verandaWidth,
    verandaDepth,
    frontWallType,
    setFrontWallType,
    setWallNavigate,
  } = useVeranda();

  // All prices
  const glasSlide = {
    306: 660,
    406: 880,
    506: 1100,
    606: 1320,
    706: 1540,
    806: 1760,
    906: 1980,
    1006: 2200,
    1106: 2420,
    1206: 2640,
  };
  const SlideDoor: { [key: number]: number } = {
    306: 2100,
    406: 2350,
    506: 2425,
    606: 2460,
    706: 4375,
    806: 4190,
    906: 4955,
    1006: 5100,
    1106: 4780,
    1206: 5550,
  };
  const ElectricScreen: { [key: number]: number } = {
    306: 1765,
    406: 1765,
    506: 1890,
    606: 2595,
    706: 3690,
    806: 4070,
    906: 4255,
    1006: 4580,
    1106: 4780,
    1206: 5190,
  };

  const getPrice = (prices: { [key: number]: number }, width: number) => {
    return prices[width] || 0;
  };

  const handlePrice = (variable: { [key: number]: number }) =>
    getPrice(variable, verandaWidth);

  return (
    <>
      <Command>
        <CommandList className="max-h-[40svh] sm:max-h-[82svh]">
          <CommandGroup
            className="uppercase mt-2"
            heading={`Left side Excluding mounting ${verandaDepth} cm`}
          >
            <div className="text-start">
              <Button
                className="text-center bg-accent1 hover:bg-accent2 mb-4 uppercase"
                size="default"
                variant="default"
                onClick={() => setWallNavigate(false)}
              >
                Back
              </Button>
            </div>
            <CommandItem
              onSelect={() => setFrontWallType("open")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                frontWallType === "open" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/red-cross.jpg"
                alt="open"
              />
              <div className="text-start">Open</div>
            </CommandItem>
            <CommandItem
              onSelect={() => setFrontWallType("glasSlide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                frontWallType === "glasSlide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/polycarbonate-spike.jpg"
                alt="glasSlide"
              />
              <div className="text-start">
                Glass sliding walls{`(+€${handlePrice(glasSlide)}.00)`}
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setFrontWallType("SlideDoor")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                frontWallType === "SlideDoor" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/polycarbonate_and_aluminum.jpg"
                alt="SlideDoor"
              />
              <div className="text-start">
                Sliding doors
                {`(+€${handlePrice(SlideDoor)}.00)`}
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setFrontWallType("ElectricScreen")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                frontWallType === "ElectricScreen" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/full-aluminum.jpg"
                alt="ElectricScreen"
              />
              <div className="text-start">
                Electric Screen{`(+€${handlePrice(ElectricScreen)}.00)`}
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
