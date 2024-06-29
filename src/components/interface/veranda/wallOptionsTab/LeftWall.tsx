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
    leftWallType,
    setLeftWallType,
    setWallNavigate,
  } = useVeranda();

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
    <>
      <Command>
        <CommandList className="max-h-[40svh] sm:max-h-[82svh]">
          <CommandGroup
            className="uppercase mt-2"
            heading={`Left side Excluding mounting ${verandaDepth} cm`}
          >
            <CommandItem
              onSelect={() => setLeftWallType("open")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "open" ? "border-accent1" : ""
              }`}
            >
              <img className="w-24" src="./images/red-cross.jpg" alt="open" />
              <div className="text-center">Open</div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("polySpike")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "polySpike" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24"
                src="./images/polycarbonate-spike.jpg"
                alt="polySpike"
              />
              <div className="text-center">
                Polycarbonate Spike{`(+€${getPrice})`}
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("ploySpiAluSide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "ploySpiAluSide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24"
                src="./images/polycarbonate_and_aluminum.jpg"
                alt="ploySpiAluSide"
              />
              <div className="text-start">
                Polycarbonate Spike + Aluminum Side Wall
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("fullAluSide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "fullAluSide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24"
                src="./images/full-aluminum.jpg"
                alt="fullAluSide"
              />
              <div className="text-start">Full Aluminum Side Wall</div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("polySpieGlasSlide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "polySpieGlasSlide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24"
                src="./images/polycarbonate_and_glass.jpg"
                alt="polySpieGlasSlide"
              />
              <div className="text-start">
                Polycarbonate Spie + Glass sliding walls
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("aluSpiGlasSlide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "aluSpiGlasSlide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24"
                src="./images/Alu_spigot_and_glass_slide.jpg"
                alt="aluSpiGlasSlide"
              />
              <div className="text-start">
                Aluminum Spigot + Glass Sliding Walls
              </div>
            </CommandItem>

            {!(verandaDepth === 450 || verandaDepth === 500) && (
              <>
                <CommandItem
                  onSelect={() => setLeftWallType("glasSpiGlasSlide")}
                  className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                    leftWallType === "glasSpiGlasSlide" ? "border-accent1" : ""
                  }`}
                >
                  <img
                    className="w-24"
                    src="./images/glass_spike_and_glass_slide_wall.jpg"
                    alt="glasSpiGlasSlide"
                  />
                  <div className="text-start">
                    Glass Spigot + Glass Sliding Walls
                  </div>
                </CommandItem>
                <CommandItem
                  onSelect={() => setLeftWallType("fixFrame")}
                  className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                    leftWallType === "fixFrame" ? "border-accent1" : ""
                  }`}
                >
                  <img
                    className="w-24"
                    src="./images/fixed_frame.jpg"
                    alt="fixFrame"
                  />
                  <div className="text-start">Fixed Frame</div>
                </CommandItem>
              </>
            )}
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
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
