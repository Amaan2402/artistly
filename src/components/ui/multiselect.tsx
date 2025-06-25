"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (newValues: string[]) => void;
  placeholder?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const toggleItem = (item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter((i) => i !== item));
    } else {
      onChange([...selected, item]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {selected.length > 0 ? selected.join(", ") : placeholder || "Select"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2 border-border">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => toggleItem(option)}
            className={cn(
              "flex items-center space-x-2 cursor-pointer mb-2 px-2 py-1 rounded-md hover:bg-muted",
              selected.includes(option) && "bg-muted"
            )}
          >
            <Check
              className={cn(
                "h-4 w-4",
                !selected.includes(option) && "opacity-0"
              )}
            />
            <span>{option}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
