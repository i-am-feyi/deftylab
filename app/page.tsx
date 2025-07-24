import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[url(/hero-bg.png)] bg-cover bg-center bg-no-repeat h-screen">
      <div className="container mx-auto h-full">
        <div className="py-10 flex justify-center">
          <Image src="/logo-white.png" alt="logo" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center justify-center h-full text-white gap-8 md:gap-10 lg:gap-16 text-center">
          <h1 className="text-2xl leading-10 md:text-3xl font-bold tracking-[2em] pl-12">
            COMING SOON
          </h1>
          <p className="text-purple-600 text-xl tracking-[0.6em]">DEFTYLAB</p>
        </div>
      </div>
    </section>
  );
}
