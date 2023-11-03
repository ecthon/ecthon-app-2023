import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/sections/Heading";
import { Projects } from "@/components/sections/Projects";
import { UIGuide } from "@/components/sections/StyleGuide";

export default function Home() {
  return (
    <div className="flex flex-col w-100% h-auto">
      <Header />
      <Heading />
      <Projects />
      <UIGuide />
      <Footer />
    </div>
  )
}
