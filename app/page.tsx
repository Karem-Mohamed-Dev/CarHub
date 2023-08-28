import { Hero, Plan, Categorys, TrendCars, WhyUs } from "./components";

export default function Home() {
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <Plan />
      <Categorys />
      <TrendCars />
      <div className="text-white text-center py-10 px-5 flex flex-col items-center justify-center gap-5 bg-gray-700">
        <h3 className="text-5xl font-semibold">Save big with our cheap car rental!</h3>
        <p className="text-xl font-medium">Top Airports. Local Suppliers. <span className="text-blue-500">24/7</span> Support.</p>
      </div>
      <WhyUs />
    </main>
  )
}
// https://animeplyx.eu/episodes/why-the-hell-are-you-here-teacher-uncensored-episode-1/