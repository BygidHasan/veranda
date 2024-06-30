import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

export default function DeleveryTab() {
  const { verandaWidth, deleveryType, setDeleveryType } = useVeranda();

  return (
    <Command>
      <CommandList className="max-h-[40svh] sm:max-h-[82svh] ">
        <CommandGroup className="uppercase mt-2 text-start" heading="Delivery">
          <div className="flex flex-wrap gap-2 w-fit">
            <CommandItem
              onSelect={() => setDeleveryType('freePickup')}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                deleveryType === 'freePickup' ? 'border-accent1' : ''
              }`}
            >
              Free Pick-up
            </CommandItem>
            <CommandItem
              onSelect={() => setDeleveryType('takewayAssembly')}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                deleveryType === 'takewayAssembly' ? 'border-accent1' : ''
              }`}
            >
              Takeaway with Assembly
            </CommandItem>

            <CommandItem
              onSelect={() => setDeleveryType('freeDelevery')}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                deleveryType === 'freeDelevery' ? 'border-accent1' : ''
              }`}
            >
              Free Delivery up to 75km (Boxtel)
            </CommandItem>
            <CommandItem
              onSelect={() => setDeleveryType('paidDelevery')}
              className={`flex gap-2 border-2 cursor-pointer mb-1 ${
                deleveryType === 'paidDelevery' ? 'border-accent1' : ''
              }`}
            >
              {`Delivery more than 75km (Boxtel) (+€ ${
                verandaWidth === 306 ? 200 : 150
              }.00)`}
            </CommandItem>
          </div>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
