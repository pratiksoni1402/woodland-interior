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
import History from "@/app/credentials/user-history";
import Resetpassword from "@/app/credentials/reset-password";
import { Deleteaccount } from "@/app/credentials/account-deletion";
export function Tabbing() {
  return (
    <Tabs defaultValue="account">
      <div className="flex justify-center pb-5">
        <TabsList className="grid w-3/4 grid-cols-12 bg-[#3c2f27] text-[#faf2ec] rounded-none">
          <TabsTrigger value="account" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
            Edit Profile
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="col-span-2 rounded-none hover:bg-white hover:text-black mx-1">
            My Wishlist
          </TabsTrigger>
          <TabsTrigger value="history" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
            Order History
          </TabsTrigger>
          <TabsTrigger value="taxation" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
          GST Details
          </TabsTrigger>
          <TabsTrigger value="change-password" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
          Change Password
          </TabsTrigger>
          <TabsTrigger value="account-deletion" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
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
        <TabsContent value="wishlist">
          <div>
            <Wishlist/>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <div>
            <History/>
          </div>
        </TabsContent>
        <TabsContent value="taxation">
          <div>
            GST Details 
          </div>
        </TabsContent>
        <TabsContent value="change-password">
          <div>
            <Resetpassword/>
          </div>
        </TabsContent>
        <TabsContent value="account-deletion">
          <div>
            <Deleteaccount/>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
