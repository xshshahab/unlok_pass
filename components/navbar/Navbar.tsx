"use client";

import * as React from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-dashed bg-background shadow-md">
      <div className="flex items-center justify-between px-6 md:px-16 py-2">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          Unlok<span className="text-primary">Pass</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex border rounded-full px-6 py-3 items-center gap-6 bg-muted/50 backdrop-blur-md">
          {["Home", "About", "Services", "Contact", "Password"].map(
            (item, index) => (
              <li
                key={index}
                className="cursor-pointer text-sm font-medium hover:text-primary transition-all"
              >
                <Link
                  href={
                    item.toLowerCase() === "home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Right Side (Theme Toggle & Auth Buttons) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="border-muted"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6 text-muted-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background flex-col flex justify-between"
            >
              <div className="flex flex-col gap-6 mt-6 text-lg font-medium">
                {["Home", "About", "Services", "Contact", "Password"].map(
                  (item, index) => (
                    <Link
                      key={index}
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-primary transition-all"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
              <div className="flex items-center gap-4 justify-end">
                {/* Theme Toggle */}
                <Button
                  onClick={toggleTheme}
                  variant="outline"
                  size="icon"
                  className="border-muted"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>

                {/* Auth Buttons */}
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
