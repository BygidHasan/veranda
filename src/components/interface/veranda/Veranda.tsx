import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useVeranda } from '@/context/VerandaCustomization';
import BaseChoiceVerandaTab from './baseChoiceTab/BaseChoiceVerandaTab';
import WallInterface from './wallOptionsTab/WallInterface';
import LightingTab from './lightingTab/LightingTab';
import DeleveryTab from './delevaryTab/DeleveryTab';

export default function Veranda() {
  const { verandaTabs, setVerandaTabs } = useVeranda();

  return (
    <>
      <Tabs
        value={verandaTabs}
        onValueChange={(value) =>
          setVerandaTabs(
            value as 'baseChoice' | 'sideWall' | 'led' | 'delivery'
          )
        }
        defaultValue="baseChoice"
        className="w-full"
      >
        <TabsList className="border-none rounded-none outline-none w-full h-16 bg-bgGrayColor">
          <TabsTrigger
            className=" rounded-none outline-none border-r-2 px-2 h-12 text-xs uppercase"
            value="baseChoice"
          >
            <p>
              Base <br /> Choice
            </p>
          </TabsTrigger>

          <TabsTrigger
            className=" rounded-none outline-none px-2 h-12 border-r-2 text-xs uppercase"
            value="sideWall"
          >
            wall <br /> options
          </TabsTrigger>

          <TabsTrigger
            className=" rounded-none outline-none px-2 h-12 border-r-2 text-xs uppercase"
            value="led"
          >
            led <br />
            lighting
          </TabsTrigger>

          <TabsTrigger
            className=" rounded-none outline-none px-2 h-12 text-xs uppercase"
            value="delivery"
          >
            delivery <br />
            options
          </TabsTrigger>
        </TabsList>
        <TabsContent className="" value="baseChoice">
          <BaseChoiceVerandaTab />
        </TabsContent>
        <TabsContent className="text-center" value="sideWall">
          <WallInterface />
        </TabsContent>
        <TabsContent className="text-center" value="led">
          <LightingTab />
        </TabsContent>
        <TabsContent className="text-center" value="delivery">
          <DeleveryTab />
        </TabsContent>
      </Tabs>
    </>
  );
}
