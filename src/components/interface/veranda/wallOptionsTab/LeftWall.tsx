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

  // All prices
  const polycarbonateSpike: { [key: number]: { [key: number]: number } } = {
    306: { 250: 120, 300: 150, 350: 180, 400: 200, 450: 225, 500: 250 },
    406: { 250: 120, 300: 150, 350: 180, 400: 200, 450: 225, 500: 250 },
    506: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    606: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    706: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    806: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    906: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    1006: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    1106: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
    1206: { 250: 120, 300: 140, 350: 160, 400: 185, 450: 210, 500: 230 },
  };
  const polySpiAluSide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 740, 300: 900, 350: 1030, 400: 1200, 450: 1360, 500: 1500 },
    406: { 250: 740, 300: 900, 350: 1030, 400: 1200, 450: 1360, 500: 1500 },
    506: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    606: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    706: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    806: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    906: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    1006: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    1106: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
    1206: { 250: 580, 300: 695, 350: 810, 400: 920, 450: 1160, 500: 1280 },
  };
  const fullAluSide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 1050, 300: 1120, 350: 1280, 400: 1500, 450: 1680, 500: 1880 },
    406: { 250: 1050, 300: 1120, 350: 1280, 400: 1500, 450: 1680, 500: 1880 },
    506: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    606: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    706: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    806: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    906: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    1006: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    1106: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
    1206: { 250: 690, 300: 835, 350: 960, 400: 1100, 450: 1460, 500: 1660 },
  };
  const polySpiInsuSide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 740, 300: 900, 350: 1030, 400: 1200, 450: 1360, 500: 1500 },
  };
  const fullInsuSide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 1050, 300: 1120, 350: 1280, 400: 1500, 450: 1680, 500: 1880 },
  };
  const polySpiGlasSlide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 825, 300: 855, 350: 1120, 400: 1140, 450: 1450, 500: 1470 },
    406: { 250: 825, 300: 855, 350: 1120, 400: 1140, 450: 1450, 500: 1470 },
    506: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    606: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    706: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    806: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    906: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    1006: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    1106: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
    1206: { 250: 880, 300: 900, 350: 1140, 400: 1145, 450: 1550, 500: 1570 },
  };
  const aluSpiGlasSlide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 1005, 300: 1075, 350: 1370, 400: 1440, 450: 1675, 500: 1750 },
    406: { 250: 1005, 300: 1075, 350: 1370, 400: 1440, 450: 1675, 500: 1750 },
    506: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    606: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    706: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    806: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    906: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    1006: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    1106: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
    1206: { 250: 990, 300: 1040, 350: 1285, 400: 1330, 450: 1750, 500: 1850 },
  };
  const glasSpiGlasSlide: { [key: number]: { [key: number]: number } } = {
    306: { 250: 1135, 300: 1255, 350: 1620, 400: 1740 },
    406: { 250: 1135, 300: 1255, 350: 1620, 400: 1740 },
    506: { 250: 1250, 300: 1360, 350: 1680, 400: 1740 },
    606: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
    706: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
    806: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
    906: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
    1006: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
    1106: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
    1206: { 250: 1250, 300: 1360, 350: 1680, 400: 1790 },
  };
  const fixFrame: { [key: number]: { [key: number]: number } } = {
    306: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    406: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    506: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    606: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    706: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    806: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    906: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    1006: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    1106: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
    1206: { 250: 2250, 300: 2545, 350: 2690, 400: 3075 },
  };

  const getPrice = (
    prices: { [key: number]: { [key: number]: number } },
    width: number,
    depth: number
  ) => {
    return prices[width]?.[depth] || 0;
  };

  const handlePrice = (variable: {
    [key: number]: { [key: number]: number };
  }) => getPrice(variable, verandaWidth, verandaDepth);

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
              onSelect={() => setLeftWallType("open")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "open" ? "border-accent1" : ""
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
              onSelect={() => setLeftWallType("polySpike")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "polySpike" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/polycarbonate-spike.jpg"
                alt="polySpike"
              />
              <div className="text-start">
                Polycarbonate Spike{`(+€${handlePrice(polycarbonateSpike)}.00)`}
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("ploySpiAluSide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "ploySpiAluSide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/polycarbonate_and_aluminum.jpg"
                alt="ploySpiAluSide"
              />
              <div className="text-start">
                Polycarbonate Spike + Aluminum Side Wall
                {`(+€${handlePrice(polySpiAluSide)}.00)`}
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("fullAluSide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "fullAluSide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/full-aluminum.jpg"
                alt="fullAluSide"
              />
              <div className="text-start">
                Full Aluminum Side Wall{`(+€${handlePrice(fullAluSide)}.00)`}
              </div>
            </CommandItem>
            {verandaWidth === 306 && (
              <>
                <CommandItem
                  onSelect={() => setLeftWallType("polyInsu")}
                  className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                    leftWallType === "polyInsu" ? "border-accent1" : ""
                  }`}
                >
                  <img
                    className="w-24 h-16"
                    src="./images/polyInsu.jpg"
                    alt="polyInsu"
                  />
                  <div className="text-start">
                    Polycarbonate Spigot + Insulated Side Wall
                    {`(+€${handlePrice(polySpiInsuSide)}.00)`}
                  </div>
                </CommandItem>
                <CommandItem
                  onSelect={() => setLeftWallType("fullInsu")}
                  className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                    leftWallType === "fullInsu" ? "border-accent1" : ""
                  }`}
                >
                  <img
                    className="w-24 h-16"
                    src="./images/full_Insu.jpg"
                    alt="fullInsu"
                  />
                  <div className="text-start">
                    Full Insulated Side Wall
                    {`(+€${handlePrice(fullInsuSide)}.00)`}
                  </div>
                </CommandItem>
              </>
            )}
            <CommandItem
              onSelect={() => setLeftWallType("polySpieGlasSlide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "polySpieGlasSlide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/polycarbonate_and_glass.jpg"
                alt="polySpieGlasSlide"
              />
              <div className="text-start">
                Polycarbonate Spie + Glass sliding walls
                {`(+€${handlePrice(polySpiGlasSlide)}.00)`}
              </div>
            </CommandItem>
            <CommandItem
              onSelect={() => setLeftWallType("aluSpiGlasSlide")}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                leftWallType === "aluSpiGlasSlide" ? "border-accent1" : ""
              }`}
            >
              <img
                className="w-24 h-16"
                src="./images/Alu_spigot_and_glass_slide.jpg"
                alt="aluSpiGlasSlide"
              />
              <div className="text-start">
                Aluminum Spigot + Glass Sliding Walls
                {`(+€${handlePrice(aluSpiGlasSlide)}.00)`}
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
                    className="w-24 h-16"
                    src="./images/glass_spike_and_glass_slide_wall.jpg"
                    alt="glasSpiGlasSlide"
                  />
                  <div className="text-start">
                    Glass Spigot + Glass Sliding Walls
                    {`(+€${handlePrice(glasSpiGlasSlide)}.00)`}
                  </div>
                </CommandItem>
                <CommandItem
                  onSelect={() => setLeftWallType("fixFrame")}
                  className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                    leftWallType === "fixFrame" ? "border-accent1" : ""
                  }`}
                >
                  <img
                    className="w-24 h-16"
                    src="./images/fixed_frame.jpg"
                    alt="fixFrame"
                  />
                  <div className="text-start">
                    Fixed Frame{`(+€${handlePrice(fixFrame)}.00)`}
                  </div>
                </CommandItem>
              </>
            )}
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
