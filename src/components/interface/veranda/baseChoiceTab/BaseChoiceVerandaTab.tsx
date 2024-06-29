import { Command, CommandList } from '@/components/ui/command';
import WidthSelection from './WidthSelection';
import FreeStanding from './FreeStanding';
import Gutter from './Gutter';
import VerandaColor from './VerandaColor';
import VerandaDepth from './VerandaDepth';
import VerandaRoofMaterial from './VerandaRoofMaterial';
import Shortening from './Shortening';

export default function BaseChoiceVerandaTab() {
  return (
    <Command>
      <CommandList className="max-h-[40svh] sm:max-h-[82svh] ">
        <WidthSelection />

        <FreeStanding />

        <Gutter />

        <VerandaColor />

        <VerandaDepth />

        <VerandaRoofMaterial />

        <Shortening />
      </CommandList>
    </Command>
  );
}
