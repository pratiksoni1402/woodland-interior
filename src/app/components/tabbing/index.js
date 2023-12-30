import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Profile from "@/app/credentials/user-profile";
import Wishlist from "@/app/credentials/user-wishlist";
export function Tabbing() {
  return (
    <Tabs defaultValue="account">
      <div className="flex justify-center pb-5">
        <TabsList className="grid w-3/4 grid-cols-12 bg-[#3c2f27] text-[#faf2ec] rounded-none">
          <TabsTrigger value="account" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
            Edit Profile
          </TabsTrigger>
          <TabsTrigger value="password" className="col-span-2 rounded-none hover:bg-white hover:text-black mx-1">
            My Wishlist
          </TabsTrigger>
          <TabsTrigger value="desks" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
            Order History
          </TabsTrigger>
          <TabsTrigger value="tables" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
          GST Details
          </TabsTrigger>
          <TabsTrigger value="outdoor" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
          Change Password
          </TabsTrigger>
          <TabsTrigger value="kitchen" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
            Account Deletion
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="tab-content flex flex-col justify-center">
        <TabsContent value="account">
          <div>
            <Profile />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div>
            <Wishlist/>
          </div>
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
