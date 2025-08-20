'use client'

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { routeGroups } from "./routes"

export type Route = {
	pathname: string
	title: string
}

export const Navigation = () => {
	const pathname = usePathname()

	return routeGroups.map((group, index) =>
		<SidebarGroup key={`group-${index}`}>
			{group.title ? (
				<SidebarGroupLabel>
					{group.title}
				</SidebarGroupLabel>
			) : null}
			<SidebarGroupContent>
				<SidebarMenu>
				{group.items.map((route: Route) => (
					<SidebarMenuItem key={route.title}>
						<SidebarMenuButton asChild isActive={route.pathname === pathname}>
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