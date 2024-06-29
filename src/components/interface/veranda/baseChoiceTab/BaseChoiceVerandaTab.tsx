import { Command, CommandList } from '@/components/ui/command';
import WidthSelection from './WidthSelection';
import FreeStanding from './FreeStanding';
import Gutter from './Gutter';
import VerandaColor from './VerandaColor';
import VerandaDepth from './VerandaDepth';
import VerandaRoofMaterial from './VerandaRoofMaterial';
import Shortening from './Shortening';
import ShorteningInputs from './ShorteningInputs';
import ReinforcemetTube from './ReinforcemetTube';

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

        <ReinforcemetTube />

        <Shortening />

        <ShorteningInputs />
      </CommandList>
    </Command>
  );
}
