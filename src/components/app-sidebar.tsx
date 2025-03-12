"use client"
import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import { MenuItem } from 'primereact/menuitem';
import { SearchForm } from "@/components/search-form"
import {
  
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
 
  SidebarRail,
} from "@/components/ui/sidebar"
import { PanelMenu } from "primereact/panelmenu"

const items:MenuItem[] = [
  {
    label: "Başvuru Sorgula",
    icon: "pi pi-search",
    
  },
  {
    label: "Dış Kurum Hizmetleri",
    icon: "pi pi-globe",
  },
  {
    label: "Yönetim İşlemleri",
    icon: "pi pi-pencil",
    items: [
      {
        label: "Duyuru Tanımlama",
        icon: "pi pi-megaphone",
       className:"pl-5 text-md bg-blue"
      },
      {
        label: "Şerh/Kriter Tanımlama",
        icon: "pi pi-envelope",
        className:"pl-5 text-md !bg-blue"
      },
      {
        label: "SMS-E-Posta-Revizyon Tanımlama",
        icon: "pi pi-fw pi-users",
        className:"pl-5 text-md !text-blue hover:text-blue leading-5"
      },
      {
        label: "İkametsiz Başvuru Yetki İşlemleri",
        icon: "pi pi-id-card",
        className:"pl-5 text-md !text-blue hover:text-blue leading-5"
       
      },
      {
        label: "Organizasyon İşlemleri",
        icon: "pi pi-id-card",
        className:"pl-5 text-md !text-blue hover:text-blue leading-5"
       
      },
    ],
    className:"!text-blue"
  },
  {
    label: "İstatistikler",
    icon: "pi pi-chart-line",
  },
  {
    label: "Sorgulamalar",
    icon: "pi pi-question",
  },
  {
    label: "Güncelleme İşlemleri",
    icon: "pi pi-refresh",
  },
  {
    label: "Genel Bilgiler",
    icon: "pi pi-id-card",
   
  },
  
];

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const css = `
        .p-panelmenu-header-content {
          
            
            background-color: white;
            border:none;
          

        }

       
    `;
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-[#3980F5] text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">UİGM</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
      </SidebarHeader>
      <SidebarContent >
      <PanelMenu pt={{panel:{className:"my-switch-slider"}}}  model={items} className="w-full bg-white leading-6 " />
      <style>{css}</style>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
