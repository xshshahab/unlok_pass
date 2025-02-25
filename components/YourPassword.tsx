"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function YourPassword() {
  const [passwords, setPasswords] = useState([
    { website: "GitHub", username: "john_doe" },
    { website: "Google", username: "jane_smith" },
  ]);

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      {passwords.length > 0 ? (
        passwords.map((pass, index) => (
          <Card key={index} className="p-4 bg-muted">
            <CardHeader className="text-lg font-semibold">
              {pass.website}
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">{pass.username}</p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() =>
                  setPasswords(passwords.filter((_, i) => i !== index))
                }
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-muted-foreground text-center">No logins saved.</p>
      )}
    </div>
  );
}
