import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Main() {
  return (
    <div>
      <h1 className="text-xl">Hello World</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
