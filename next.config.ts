import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/pereira",
				destination: "https://luma.com/63xdcail",
				permanent: false,
			},
			{
				source: "/lima",
				destination: "https://luma.com/mhmuia60",
				permanent: false,
			},
			{
				source: "/bogota",
				destination: "https://luma.com/vio9mzgs",
				permanent: false,
			},
			{
				source: "/menu",
				destination:
					"https://xlpzqv2bvtoejfq9.public.blob.vercel-storage.com/CARTA%20LUCIO%20BOLLERIA_2026.pdf",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
