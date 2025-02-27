"use client";

import { usePathname } from "next/navigation";

import { useWindowSize } from "usehooks-ts";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ChartCandlestick,
  ChartPie,
  CircleDot,
  MessageSquare,
  PlusIcon,
  User,
  type LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
} from "@/components/ui/sidebar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import type { User as UserType } from "next-auth";
import { SidebarHistory } from "@/components/sidebar-history";

export function NavMain({
  items,
  user,
}: {
  user: UserType | undefined;
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  const getActive = () => {
    if (pathname.includes("chat")) return "chat";
    if (pathname.includes("token")) return "token";
    if (pathname.includes("account")) return "account";
    if (pathname.includes("stake")) return "stake";
    if (pathname.includes("portfolio")) return "portfolio";
    return "";
  };

  const active = getActive();
  const router = useRouter();

  const { width: windowWidth } = useWindowSize();
  return (
    <SidebarGroup className="flex flex-col justify-center gap-y-4">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col justify-center gap-y-4"
      >
        <AccordionItem
          className={`border-0 rounded-md bg-[#1D1D1D]`}
          value="item-1"
        >
          <AccordionTrigger
            //   onClick={()=>{
            //     router.push("/chat")
            // }}
            className={`px-2 hover:no-underline rounded-md ${
              active === "chat"
                ? "bg-[#8902F4] text-white text-xl font-marvin font-bold"
                : "text-[#8C8C8C] text-sm font-semibold "
            }`}
          >
            <span
              className={`flex gap-x-2  ${
                active === "chat"
                  ? "flex-col items-start"
                  : "flex-row items-center"
              }`}
            >
              {" "}
              <MessageSquare className="w-4 h-4" />
              <span className="flex items-center">
                Chats
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="order-2 md:order-1 md:px-2 px-2 md:h-fit ml-auto md:ml-0"
                      onClick={() => {
                        router.push("/chat");
                        router.refresh();
                      }}
                    >
                      <PlusIcon />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="!font-montserrat font-light p-2">
                    New Chat
                  </TooltipContent>
                </Tooltip>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="flex items-center py-1 px-2">
            <SidebarHistory user={user} />  
          </AccordionContent>
        </AccordionItem>
      </Accordion>

        <div
        onClick={() => {
          router.push("/token");
        }}
        className={`cursor-pointer py-[12px] px-2 rounded-md ${
          active === "token"
            ? "bg-[#8902F4] text-white font-marvin"
            : "text-[#8C8C8C] font-semibold bg-[#1D1D1D]"
        }`}
      >
        <span className={`flex gap-x-2 items-center`}>
        <CircleDot className="w-4 h-4" />
          Token
        </span>
      </div>
      <div
        onClick={() => {
          router.push("/stake");
        }}
        className={`cursor-pointer py-[12px] px-2 rounded-md ${
          active === "stake"
            ? "bg-[#8902F4] text-white font-marvin"
            : "text-[#8C8C8C] font-semibold bg-[#1D1D1D]"
        }`}
      >
        <span className={`flex gap-x-2 items-center`}>
          <ChartCandlestick className="w-4 h-4" />
          Stake
        </span>
      </div>
      <div
        onClick={() => {
          router.push("/account");
        }}
        className={`cursor-pointer py-[12px] px-2 rounded-md ${
          active === "account"
            ? "bg-[#8902F4] text-white font-marvin"
            : "text-[#8C8C8C] font-semibold bg-[#1D1D1D]"
        }`}
      >
        <span className={`flex gap-x-2 items-center`}>
          <User className="w-4 h-4" />
          Account
        </span>
      </div>
      <div
        onClick={() => {
          router.push("/portfolio");
        }}
        className={`cursor-pointer py-[12px] px-2 rounded-md ${
          active === "portfolio"
            ? "bg-[#8902F4] text-white font-marvin"
            : "text-[#8C8C8C] font-semibold bg-[#1D1D1D]"
        }`}
      >
        <span className={`flex gap-x-2 items-center`}>
          <ChartPie className="w-4 h-4" />
          Portfolio
        </span>
      </div>
    </SidebarGroup>
  );
}
