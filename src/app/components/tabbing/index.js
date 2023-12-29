import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Tabbing() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-12">
        <TabsTrigger value="account" className="col-span-2">
          Seating
        </TabsTrigger>
        <TabsTrigger value="password" className="col-span-2">
          Bedroom
        </TabsTrigger>
        <TabsTrigger value="desks" className="col-span-2">
          Desks
        </TabsTrigger>
        <TabsTrigger value="tables" className="col-span-2">
          Tables
        </TabsTrigger>
        <TabsTrigger value="outdoor" className="col-span-2">
          Outdoor
        </TabsTrigger>
        <TabsTrigger value="kitchen" className="col-span-2">
          Outdoor
        </TabsTrigger>
      </TabsList>
      <div className="tab-content">
        <TabsContent value="account" className="w-full">
          <div>Coming Soon</div>
        </TabsContent>
        <TabsContent value="password">
          <div>Coming Soon</div>
        </TabsContent>
        <TabsContent value="desks">
          <div>Coming Soon</div>
        </TabsContent>
        <TabsContent value="tables">
          <div>Coming Soon</div>
        </TabsContent>
        <TabsContent value="kitchen">
          <div>Coming Soon</div>
        </TabsContent>
        <TabsContent value="outdoor">
          <div>Coming Soon</div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
