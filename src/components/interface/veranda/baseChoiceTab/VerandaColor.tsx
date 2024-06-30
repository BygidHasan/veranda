import { CommandGroup, CommandItem } from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function VerandaColor() {
  const { verandaColor, setVerandaColor } = useVeranda();

  return (
    <CommandGroup className="uppercase mt-2" heading="Color">
      <CommandItem
        onSelect={() => setVerandaColor('anthracite')}
        className={`flex items-center justify-start gap-2 border-2 cursor-pointer mb-1 ${
          verandaColor === 'anthracite' ? 'border-accent1' : ''
        }`}
      >
        <div className="w-12 h-12 bg-[#363C40]"></div>
        <div className="text-center">Anthracite 7016</div>
      </CommandItem>
      <CommandItem
        onSelect={() => setVerandaColor('black')}
        className={`fle items-center justify-start gap-2 border-2 cursor-pointer mb-1 ${
          verandaColor === 'black' ? 'border-accent1' : ''
        }`}
      >
        <div className="w-12 h-12 bg-black"></div>
        <div className="text-center">Black 9005</div>
      </CommandItem>
      <CommandItem
        onSelect={() => setVerandaColor('silverGrey')}
        className={`fle items-center justify-start gap-2 border-2 cursor-pointer mb-1 ${
          verandaColor === 'silverGrey' ? 'border-accent1' : ''
        }`}
      >
        <div className="w-12 h-12 bg-[#858E95]"></div>
        <div className="text-center">Silver grey 7001 (+10%)</div>
      </CommandItem>
      <CommandItem
        onSelect={() => setVerandaColor('metallicGrey')}
        className={`fle items-center justify-start gap-2 border-2 cursor-pointer mb-1 ${
          verandaColor === 'metallicGrey' ? 'border-accent1' : ''
        }`}
      >
        <div className="w-12 h-12 bg-[#82807C]"></div>
        <div className="text-center">Metallic grey 9007 (+10%)</div>
      </CommandItem>
    </CommandGroup>
  );
}
