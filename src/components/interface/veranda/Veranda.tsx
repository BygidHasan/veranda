import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Veranda() {
  return (
    <>
      <Tabs defaultValue="baseChoice" className="w-full">
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
            className=" rounded-none outline-none px-2 h-12 border-r-2 text-xs uppercase"
            value="delivery"
          >
            delivery <br />
            options
          </TabsTrigger>
        </TabsList>
        <TabsContent className="text-center" value="baseChoice">
          baseChoice content
        </TabsContent>
        <TabsContent className="text-center" value="sideWall">
          sideWall content
        </TabsContent>
        <TabsContent className="text-center" value="led">
          led content
        </TabsContent>
        <TabsContent className="text-center" value="delivery">
          delivery content
        </TabsContent>
      </Tabs>
    </>
  );
}
