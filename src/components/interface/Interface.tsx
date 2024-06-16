import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Interface() {
  return (
    <div className="fixed top-[50vh] bg-bgColor h-[50vh] w-full">
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
        <TabsContent value="veranda">VERANDA content</TabsContent>
        <TabsContent value="gardenRoom">GARDEN ROOM content</TabsContent>
        <TabsContent value="slidingWall"> SLIDING WALL content</TabsContent>
        <TabsContent value="carPort">CARPORT content</TabsContent>
        <TabsContent value="sunProtection"> SUN PROTECTION content</TabsContent>
      </Tabs>
    </div>
  );
}
