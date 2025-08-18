'use client'

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import routes from "./routes.json"

export type Route = {
	pathname: string
	title: string
}

export const Navigation = () => {
	const pathname = usePathname()

	return routes.map((group, index) =>
		<SidebarGroup key={`group-${index}`}>
			<SidebarGroupLabel>
				{group.title}
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{group.items.map((route: Route) => (
						<SidebarMenuItem key={route.title}>
							<SidebarMenuButton asChild isActive={route.path === pathname}>
								<Link href={route.pathname} >
									{route.title}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}