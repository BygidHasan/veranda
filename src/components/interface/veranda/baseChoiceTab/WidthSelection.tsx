import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

type WidthType = 306 | 406 | 506 | 606 | 706 | 806 | 906 | 1006 | 1106 | 1206;

const widths: { id: WidthType; name: string }[] = [
  { id: 306, name: '306 CM' },
  { id: 406, name: '406 CM' },
  { id: 506, name: '506 CM' },
  { id: 606, name: '606 CM' },
  { id: 706, name: '706 CM' },
  { id: 806, name: '806 CM' },
  { id: 906, name: '906 CM' },
  { id: 1006, name: '1006 CM' },
  { id: 1106, name: '1106 CM' },
  { id: 1206, name: '1206 CM' },
];

export default function WidthSelection() {
  const { verandaWidth, setVerandaWidth } = useVeranda();

  return (
    <CommandGroup className="" heading="SELECT A WIDTH">
      <div className="flex flex-wrap items-center gap-1">
        {widths.map((width) => (
          <CommandItem
            key={width.id}
            onSelect={() => setVerandaWidth(width.id)}
            className={`w-fit border-2 shadow-lg cursor-pointer mb-1 ${
              verandaWidth === width.id ? 'border-accent1' : ''
            }`}
          >
            {width.name}
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}
