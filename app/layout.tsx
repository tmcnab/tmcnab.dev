import "./globals.css"
import './overrides.css'
import { Navigation } from "./Navigation"
import { ReactNode } from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ThemeProvider"
import GitHubButton from "@/components/buttons/GitHubButton"
import Link from "next/link"
import LinkedInButton from "@/components/buttons/LinkedInButton"
import SearchButton from "@/components/buttons/SearchButton"
import TerminalButton from "@/components/buttons/TerminalButton"
import ThemeButton from "@/components/buttons/ThemeButton"

export interface LayoutProps {
	readonly children: ReactNode
}

const Layout = (props: LayoutProps) => {
	return (
		<html suppressHydrationWarning>
			<body className="subpixel-antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					<SidebarProvider>
						<Sidebar>
							<SidebarContent>
								<Navigation />
							</SidebarContent>
							<SidebarFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
								<SearchButton />
								<ThemeButton />
								<TerminalButton />
								<GitHubButton />
								<LinkedInButton />
							</SidebarFooter>
						</Sidebar>
						<SidebarInset>
							{props.children}
						</SidebarInset>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default Layout