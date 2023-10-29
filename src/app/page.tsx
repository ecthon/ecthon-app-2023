import { Header } from "@/components/Header";
import { Heading } from "@/components/sections/Heading";
import { Projects } from "@/components/sections/Projects";
import { UIGuide } from "@/components/sections/UIGuide.tsx";

export default function Home() {
  return (
    <div className="flex flex-col w-100% h-auto">
      <Header />
      <Heading />
      <Projects />
      <UIGuide />
    </div>
  )
}
