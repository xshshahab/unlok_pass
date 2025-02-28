import AddCard from "@/components/AddCard";
import AddPassword from "@/components/AddPassword";
import YourCard from "@/components/YourCard";
import YourPassword from "@/components/YourPassword";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnlokPass - A unbreakable password manager",
  description: "This is homepage of my password manager app",
};

export default function Password() {
  return (
    <div className="min-h-screen mt-12 px-6 py-10 md:px-16 space-y-10">
      <h1 className="text-center font-bold text-2xl">
        Unlok<span className="text-primary">Pass</span> - Password Manager
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 shadow-lg flex flex-col">
          <h1 className="text-2xl font-semibold mb-4">Add a Credit Card</h1>
          <div className="flex-1 flex items-center">
            <AddCard />
          </div>
        </div>

        <div className="p-4 shadow-lg flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Add a Password</h1>
          <div className="flex-1 flex items-center">
            <AddPassword />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Your Cards</h1>
          <YourCard />
        </div>
        <div className="p-4 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Your Passwords</h1>
          <YourPassword />
        </div>
      </div>
    </div>
  );
}
