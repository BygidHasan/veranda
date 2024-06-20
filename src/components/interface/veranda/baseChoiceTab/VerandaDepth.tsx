import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

const depths: (250 | 300 | 350 | 400 | 450 | 500)[] = [
  250, 300, 350, 400, 450, 500,
];

export default function VerandaDepth() {
  const { verandaDepth, setVerandaDepth } = useVeranda();

  return (
    <CommandGroup className="uppercase mt-2" heading="veranda depth">
      <div className="flex flex-wrap items-center gap-1">
        {depths.map((depth) => (
          <CommandItem
            key={depth}
            onSelect={() => setVerandaDepth(depth)}
            className={`flex w-fit border-2 shadow-lg cursor-pointer mb-1 ${
              verandaDepth === depth ? 'border-accent1' : ''
            }`}
          >
            {depth} CM
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}
