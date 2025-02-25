"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function AddPassword() {
  const [passwordData, setPasswordData] = useState({
    website: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Saved: ${passwordData.website} - ${passwordData.username}`);
    setPasswordData({ website: "", username: "", password: "" });
  };

  return (
    <Card className="p-6 shadow-lg w-full max-w-md mx-auto min-h-[380px] flex flex-col justify-center">
      <CardHeader className="text-xl font-semibold text-center mb-4">
        Save Website Login
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <Label className="mb-2 block text-sm font-medium">
              Website URL
            </Label>
            <Input
              type="text"
              name="website"
              placeholder="https://example.com"
              value={passwordData.website}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium">Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="your_username"
              value={passwordData.username}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              value={passwordData.password}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <Button type="submit" className="w-full">
            Save Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
