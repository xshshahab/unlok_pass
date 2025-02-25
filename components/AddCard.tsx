"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function AddCard() {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Card Added: ${cardDetails.number} | Exp: ${cardDetails.expiry}`);
    setCardDetails({ number: "", expiry: "", cvv: "" });
  };

  return (
    <Card className="p-6 shadow-lg w-full max-w-md mx-auto min-h-[380px] flex flex-col justify-center">
      <CardHeader className="text-xl font-semibold text-center mb-4">
        Add a Credit Card
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <Label className="mb-2 block text-sm font-medium">
              Card Number
            </Label>
            <Input
              type="text"
              name="number"
              placeholder="1234 5678 9012 3456"
              value={cardDetails.number}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <Label className="mb-2 block text-sm font-medium">
                Expiry Date
              </Label>
              <Input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <Label className="mb-2 block text-sm font-medium">CVV</Label>
              <Input
                type="password"
                name="cvv"
                placeholder="•••"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Add Card
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
