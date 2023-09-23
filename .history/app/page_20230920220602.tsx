import Image from 'next/image'
import { Searchbar,  Hero } from "@/components";
// import { fetchCars } from "@/utils";
// import { HomeProps } from "@/types";


export default function Home() {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 12,
  //   model: searchParams.model || "",
  //   cylinders: searchParams.cylinders || 0,
  // });
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          {/* <div className="home__filter-container">
            <CustomFilter title="fuel" options={[]}              // options={fuels}
            />
            <CustomFilter title="year" options={[]}              // options={yearsOfProduction}
            />
          </div> */}
        </div>
</div>
    </main>
  )
}
