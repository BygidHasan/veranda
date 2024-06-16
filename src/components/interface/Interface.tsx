import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Interface() {
  return (
    <div className="fixed top-[50vh] md:top-0 md:right-0 bg-bgColor h-[50vh] md:h-screen w-full md:w-[40%] lg:w-[32%] xl:w-[28%] 2xl:w-[24%] ">
      <Tabs defaultValue="veranda" className="w-full">
        <TabsList className="border-none rounded-none outline-none w-full h-16 bg-bgGrayColor">
          <TabsTrigger
            className=" rounded-none outline-none border-r-2 px-2 h-12 text-xs"
            value="veranda"
          >
            <p>VERANDA</p>
          </TabsTrigger>

          <TabsTrigger
            className=" rounded-none outline-none px-2 h-12 border-r-2 text-xs"
            value="gardenRoom"
          >
            GARDEN <br /> ROOM
          </TabsTrigger>

          <TabsTrigger
            className=" rounded-none outline-none px-2 h-12 border-r-2 text-xs"
            value="slidingWall"
          >
            SLIDING <br /> WALL
          </TabsTrigger>

          <TabsTrigger
            className=" rounded-none outline-none px-2 h-12 border-r-2 text-xs"
            value="carPort"
          >
            CARPORT
          </TabsTrigger>

          <TabsTrigger
            className=" border-none rounded-none outline-none px-2 h-16 text-xs"
            value="sunProtection"
          >
            SUN <br /> PROTECTION
          </TabsTrigger>
        </TabsList>
        <TabsContent className="text-center" value="veranda">
          VERANDA content
        </TabsContent>
        <TabsContent className="text-center" value="gardenRoom">
          GARDEN ROOM content
        </TabsContent>
        <TabsContent className="text-center" value="slidingWall">
          {' '}
          SLIDING WALL content
        </TabsContent>
        <TabsContent className="text-center" value="carPort">
          CARPORT content
        </TabsContent>
        <TabsContent className="text-center" value="sunProtection">
          {' '}
          SUN PROTECTION content
        </TabsContent>
      </Tabs>
    </div>
  );
}
