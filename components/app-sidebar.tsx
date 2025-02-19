"use client";

import type { User } from "next-auth";
import { useRouter } from "next/navigation";

import { PlusIcon } from "@/components/icons";
import { SidebarHistory } from "@/components/sidebar-history";
import { SidebarUserNav } from "@/components/sidebar-user-nav";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { NavUser } from "@/components/sidebar-user-footer";
import { NavMain } from "@/components/sidebar-content-acc";
import { useSession } from "next-auth/react";

export function AppSidebar({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();
  const {data:session} = useSession()
  console.log(session);
  const data = {
    user: {
      address:(session?.user as any)?.publicAddress,
      balance:(session?.user as any)?.balance
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };

  return (
    <Sidebar className="group-data-[side=left]:border-r-0 ">
      <SidebarHeader>
        <SidebarMenu>
          <div className="py-3 border-b border-[#2D2D2D] mx-auto flex flex-row justify-between items-center">
            <Link
              href="/"
              onClick={() => {
                setOpenMobile(false);
              }}
              className="flex flex-row gap-3 items-center"
            >
              <span className=" text-3xl font-marvin px-2 hover:text-[#bcbbbb] rounded-md cursor-pointer">
                SONICARB
              </span>
            </Link>
            {/* Code for adding new chat */}
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="p-2 h-fit"
                  onClick={() => {
                    setOpenMobile(false);
                    router.push('/');
                    router.refresh();
                  }}
                >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent align="end">New Chat</TooltipContent>
            </Tooltip> */}
          </div>
        </SidebarMenu>
      </SidebarHeader>
      {/* <SidebarContent>
        <SidebarHistory user={user} />  
      </SidebarContent> */}
      <SidebarContent>
        <NavMain user={user} items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {user && (
          // <SidebarUserNav user={user} />
          <NavUser user={data.user} />
        )}
        <div className="py-3 border-t border-[#2D2D2D] mx-auto flex flex-row justify-between items-center">
          <Link
            href="/"
            onClick={() => {
              setOpenMobile(false);
            }}
            className=""
          >
            <span className="text-md  px-2 rounded-md cursor-pointer">
              Follow us on <span className="text-2xl font-marvin">X</span>
            </span>
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
