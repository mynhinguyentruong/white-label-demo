import Layout from "../components/Layout";
import Location from "../public/map.png";
import Image from "next/image";

export default function Store() {
  return (
    <>
      <Layout />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="font-bold mb-10 text-3xl pb-10">Our Stores</h2>
            <Image src={Location} width={1200} height={700} className="rounded-xl"/>
        </div>
    </>
  );
}
