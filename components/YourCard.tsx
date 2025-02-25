"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function YourCard() {
  const [cards, setCards] = useState([
    { number: "**** **** **** 1234", expiry: "12/24" },
    { number: "**** **** **** 5678", expiry: "11/25" },
  ]);

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <Card key={index} className="p-4 bg-muted">
            <CardHeader className="text-lg font-semibold">
              Card {index + 1}
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div>
                <p>{card.number}</p>
                <p className="text-sm text-muted-foreground">
                  Exp: {card.expiry}
                </p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCards(cards.filter((_, i) => i !== index))}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-muted-foreground text-center">No cards saved.</p>
      )}
    </div>
  );
}
