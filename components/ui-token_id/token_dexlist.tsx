"use client";
import * as Select from "@radix-ui/react-select";
import React, { useState } from "react";

const SelectDropdown: React.FC = () => {
  const menuItems = ["Uniswap", "Bitcoin", "Ethereum"];
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState(menuItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredOptions = menuItems.filter((item) =>
      item.toLowerCase().includes(searchValue)
    );
    setTimeout(() => setOptions(filteredOptions), 100);
  };

  return (
    <Select.Root
      onValueChange={setValue}
      onOpenChange={() => setOptions(menuItems)}
    >
      <div className="w-full max-w-full">
        <Select.Trigger className=" focus:border-none w-full inline-flex items-center justify-between px-3 py-2 text-sm text-[#000000] font-semibold bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <Select.Value
            placeholder="Select an option"
            className="text-[#000000] font-semibold"
          >
            {value}
          </Select.Value>
          <Select.Icon className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            avoidCollisions={false}
            className="w-[var(--radix-select-trigger-width)] overflow-hidden mt-3 bg-white border rounded-lg shadow-sm text-sm"
          >
            <Select.Viewport className="max-h-64 mt-2 overflow-y-auto">
              {options.length < 1 ? (
                <div className="px-3 py-2 text-gray-600">Nothing found.</div>
              ) : (
                options.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))
              )}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  );
};

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof Select.Item> {
  children: React.ReactNode;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <Select.Item
        className="flex items-center justify-between text-[#000000] font-semibold px-3 cursor-default py-2 duration-150 data-[state=checked]:text-[#8902F4] data-[state=checked]:bg-indigo-50 data-[highlighted]:text-[#8902F4] data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-[#8902F4] data-[highlighted]:hover:bg-indigo-50 outline-none"
        {...props}
        ref={ref}
      >
        <Select.ItemText>
          <div className="pr-4 ">{children}</div>
        </Select.ItemText>
        <div className="w-6">
          <Select.ItemIndicator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#8902F4]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Select.ItemIndicator>
        </div>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default SelectDropdown;
