import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Designer Portfolio | Creative Visual Artist",
  description: "Portfolio showcasing cutting-edge design work and creative services",
}

export default function Home() {
  return <ClientPage />
}
