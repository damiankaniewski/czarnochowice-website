import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Investment from "@/components/Investment";

export default function Home() {
  return (
    <div className=" h-screen w-full">
      <div className="bg-render1_mobile md:bg-render1 bg-cover bg-center h-screen w-full absolute opacity-60" />
      <div className="h-full w-full">
        <Header />
        <HomeSection />
        <Investment />
      </div>
    </div>
  );
}
