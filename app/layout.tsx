import "./globals.css"
import { ReactNode } from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ThemeProvider"
import GitHubButton from "@/components/buttons/GitHubButton"
import Link from "next/link"
import LinkedInButton from "@/components/buttons/LinkedInButton"
import SearchButton from "@/components/buttons/SearchButton"
import ThemeButton from "@/components/buttons/ThemeButton"
import TerminalButton from "@/components/buttons/TerminalButton"
import { Navigation } from "./Navigation"

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
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<Sidebar>
							<SidebarHeader>
								<Link href='/'>tmcnab.dev</Link>
							</SidebarHeader>
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