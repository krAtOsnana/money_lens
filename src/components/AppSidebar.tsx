import { Banknote, CreditCard, LayoutDashboard, LineChart, PieChart } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

// Menu items.
const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Add Transactions",
      url: "/transaction",
      icon: CreditCard,
    },
    {
      title: "All Transactions",
      url: "/alltransactions",
      icon: Banknote,
    },
    {
      title: "Monthly Budget",
      url: "/budget",
      icon: PieChart,
    },
    {
      title: "Category",
      url: "/investments",
      icon: LineChart,
    },
    
  ];
  

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex mt-10 items-center justify-between  w-full ">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                <Link href="/">Money Lens</Link>
              </div>
              <ModeToggle/>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-10 ">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-lg font-semibold" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
