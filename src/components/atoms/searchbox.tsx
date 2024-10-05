import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import SearchIconImage from "@/assets/icons/search.svg"; // Assuming this is the correct path

export function SearchInputField() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative w-full">
        {/* Input field with icon */}
        <Input
          type="text"
          placeholder="Search..."
          className="w-full pr-10 border border-gray-400 h-[52px] rounded px-4  text-black"
        />
        {/* Search icon inside the input */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Image src={SearchIconImage} alt="Search Icon" width={20} height={20} />
        </span>
      </div>
    </div>
  );
}
