import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Interface() {
  return (
    <div className="fixed top-[50vh] bg-teal-700 h-[50vh] w-full">
      <Tabs defaultValue="account" className="w-inherit">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
      ;
    </div>
  );
}
