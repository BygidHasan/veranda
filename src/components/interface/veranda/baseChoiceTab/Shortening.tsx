import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function Shortening() {
  const { verandaShortening, setVerandaShortening } = useVeranda();

  return (
    <CommandGroup
      className="uppercase mt-2"
      heading="Free-standing construction"
    >
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
          Shorten width (+€ 225.00)
        </CommandItem>
        <CommandItem
          onSelect={() => setVerandaShortening('depth')}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            verandaShortening === 'depth' ? 'border-accent1' : ''
          }`}
        >
          Depth Shortening (+€ 125,00)
        </CommandItem>
        <CommandItem
          onSelect={() => setVerandaShortening('widthAndDepth')}
          className={`flex flex-col w-fit border-2 shadow-lg cursor-pointer mb-1 ${
            verandaShortening === 'widthAndDepth' ? 'border-accent1' : ''
          }`}
        >
          Shorten width and depth (+€ 350,00)
        </CommandItem>
      </div>
    </CommandGroup>
  );
}
