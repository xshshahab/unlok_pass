"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  cardNumber: z
    .string()
    .length(16, {
      message: "Card Number must be exactly 16 characters.",
    })
    .regex(/^[0-9]{16}$/, {
      message: "Card Number must be numeric.",
    }),

  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiry Date must be in the format MM/YY.",
  }),

  cvv: z
    .string()
    .length(3, {
      message: "CVV must be exactly 3 digits.",
    })
    .regex(/^[0-9]{3}$/, {
      message: "CVV must be numeric.",
    }),
});

export default function AddCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="p-4 shadow-lg w-full max-w-md mx-auto min-h-[380px] flex flex-col justify-center">
      <CardHeader className="text-xl font-medium mb-2">
        Add a New Card
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="add your card" {...field} />
                  </FormControl>
                  <FormDescription>This is your card number</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input placeholder="add your expiry date" {...field} />
                  </FormControl>
                  <FormDescription>This is your expiry date</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVVV</FormLabel>
                  <FormControl>
                    <Input placeholder="add your cvv" {...field} />
                  </FormControl>
                  <FormDescription>This is your cvv</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
