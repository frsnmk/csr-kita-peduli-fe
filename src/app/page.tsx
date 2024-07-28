import ListView from "@/app/ui/list-view";
import Carousel from "@/app/ui/carousel";

export default function Home() {
  return (
    <div className="space-y-2">
      <div className="bg-white shadow-sm">
        <Carousel />
      </div>
      <div className="bg-white p-4 shadow-sm">
        <ListView />
      </div>
    </div>
  );
}
