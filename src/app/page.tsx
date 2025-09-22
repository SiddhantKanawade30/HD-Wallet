import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Options } from "@/components/ui/Options";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
  {/* Azure Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
  />
  {/* Your Content/Components */}
 
  <div className="relative z-10  pt-8 max-w-7xl mx-auto">
  <Navbar />
  <Header />
  <Options />
  </div>
</div>
  );
}