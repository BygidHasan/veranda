import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useVeranda } from "@/context/VerandaCustomization";

type WallType = "left" | "right" | "front";

const walls: { id: WallType; name: string }[] = [
  { id: "left", name: "Left Side" },
  { id: "right", name: "Right Side" },
  { id: "front", name: "Front Side" },
];

export default function WallOptionTab() {
  const { wallType, setWallType, setWallNavigate } = useVeranda();

  return (
    <>
      <Command>
        <CommandList className="max-h-svh">
          <CommandGroup className="text-start" heading="SELECT A WALL">
            {walls.map((wall) => (
              <CommandItem
                key={wall.id}
                onSelect={() => {
                  setWallType(wall.id);
                }}
                className={`flex items-center gap-4 cursor-pointer mb-2 ${
                  wallType === wall.id ? "border-2 border-accent1" : ""
                }`}
              >
                <div className="font-medium">{wall.name}</div>
              </CommandItem>
            ))}
          </CommandGroup>
          <div className="text-start">
            <Button
              className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
              size="default"
              variant="default"
              onClick={() => setWallNavigate(true)}
            >
              Customize Wall
            </Button>
          </div>
        </CommandList>
      </Command>
    </>
  );
}
