import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LocationFilter({
  location,
  setLocation,
}: {
  location: string;
  setLocation: (value: string) => void;
}) {
  return (
    <div className="mt-3">
      <h1 className="font-medium text-lg mb-2">Location</h1>
      <Select onValueChange={setLocation} value={location}>
        <SelectTrigger className="w-[180px] font-bold">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Mumbai">Mumbai</SelectItem>
          <SelectItem value="Delhi">Delhi</SelectItem>
          <SelectItem value="Bangalore">Bangalore</SelectItem>
          <SelectItem value="Chennai">Chennai</SelectItem>
          <SelectItem value="Kolkata">Kolkata</SelectItem>
          <SelectItem value="Hyderabad">Hyderabad</SelectItem>
          <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
          <SelectItem value="Pune">Pune</SelectItem>
          <SelectItem value="Jaipur">Jaipur</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LocationFilter;
