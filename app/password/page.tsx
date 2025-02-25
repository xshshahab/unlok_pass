import AddCard from "@/components/AddCard";
import AddPassword from "@/components/AddPassword";
import YourCard from "@/components/YourCard";
import YourPassword from "@/components/YourPassword";
import { Card } from "@/components/ui/card";

export default function Password() {
  return (
    <div className="min-h-screen mt-12 px-6 py-10 md:px-16 space-y-10">
      <h1 className="text-center font-bold text-2xl">
        Unlok<span className="text-primary">Pass</span> - Password Manager
      </h1>
      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Add a Credit Card</h1>
          <div className="flex-1 flex items-center">
            <AddCard />
          </div>
        </Card>

        <Card className="p-6 shadow-lg flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Add a Password</h1>
          <div className="flex-1 flex items-center">
            <AddPassword />
          </div>
        </Card>
      </div>

      {/* Saved Data Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Your Cards</h1>
          <YourCard />
        </Card>

        <Card className="p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Your Passwords</h1>
          <YourPassword />
        </Card>
      </div>
    </div>
  );
}
