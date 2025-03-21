import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import "./globals.css";


import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css"


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
 
  return (
    <html lang="tr">
      

      <body>
        <PrimeReactProvider  >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex z-10 sticky top-0 h-16 shrink-0 items-center gap-2 border-b px-4 bg-[#3980F5] text-white">
                <SidebarTrigger className="-ml-1" />
                
                <Breadcrumb  >
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Building Your Application
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 bg-accent">
                {children}
                
              </div>
            </SidebarInset>
          </SidebarProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
