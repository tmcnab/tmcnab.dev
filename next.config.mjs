import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)