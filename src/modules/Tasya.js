/* eslint-disable react/no-unescaped-entities */
/*
  Ini punya Tasya
  Semangat Tas!
*/

import Image from "next/image";

export default function Tasya() {
  return (
    <>
      {/* Judul Section */}
      <div className="flex w-full flex-col items-center bg-white">
        <div className="flex flex-col items-center justify-center space-x-4">
          <div className="mt-[40px] font-piximisa text-[4vw]">Tentang</div>
          <div className="font-primeformSemiBold text-[4vw]">PORSENIGAMA 2024</div>
          {/* komponen awan */}
          <div className="absolute left-[-16px] flex w-full flex-row items-center justify-between">
            <Image
              src="/images/awan1.png"
              width={50}
              height={20}
              className="md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px]"
              alt="Gambar awan1"
            />
            <Image
              src="/images/awan2.png"
              width={50}
              height={20}
              className="md:h-[150px] md:w-[200px] lg:h-[150px] lg:w-[200px]"
              alt="Gambar awan2"
            />
          </div>
        </div>
      </div>

      {/* Teaser Porsenigama */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center space-x-4 md:flex-row lg:flex-row">
          <div className="relative h-auto w-[70%] rounded-2xl border-2 border-black bg-white p-[2%] md:w-[50%] lg:w-[50%]">
            <iframe
              className="z-20 mx-auto aspect-video w-full rounded-xl"
              src="https://www.youtube.com/embed/unroADBN_cg?si=M7NF-Nv17fqGg3nb"
              loading="lazy"
              title="Porsenigama 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Gambar Tenis dan Catur */}
            <div
              className="absolute left-[-35px] top-[100px] z-10 flex flex-row gap-x-[140px]
              md:left-[-50px] md:top-[150px] md:gap-x-[210px]
              lg:left-[-80px] lg:top-[140px] lg:gap-x-[180px]"
            >
              <Image
                src="/images/tenis.png"
                width={70}
                height={40}
                className="md:h-[110px] md:w-[110px] lg:h-[150px] lg:w-[150px]"
                alt="Gambar tenis"
              />
              <Image
                src="/images/catur1.png"
                width={70}
                height={30}
                className="md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]"
                alt="Gambar tenis"
              />
            </div>
          </div>
          {/* Deskripsi Porsenigama */}
          <div className="mt-[10px] box-border flex h-auto w-[300px] justify-center bg-white p-4 md:w-[450px] lg:h-[350px] lg:w-[450px] ">
            <p className="text-justify font-primeformRegular text-[2vw] text-black md:text-[16px] lg:text-[18px]">
              Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) adalah ajang olahraga
              dan seni tahunan yang melibatkan kontingen dari berbagai Fakultas dan Sekolah di UGM.
              <br />
              <br />
              Acara ini diselenggarakan berdasarkan RKAT atau program FORKOM UKM UGM. Tahun ini,
              Porsenigama mengusung tema "Kembara Jagaddhita" dan tagline "Genggam Gemerlap Talenta
              Gadjah Mada.
            </p>
          </div>
        </div>
      </div>

      {/* Kontingen & Supporter */}
      <div className="flex flex-col items-center justify-center space-y-[20px] md:mt-[50px] md:flex-row md:space-x-[40px] md:space-y-0 lg:mt-[50px] lg:flex-row lg:space-x-[50px] lg:space-y-0">
        <div className="flex w-[50vw] items-center justify-center">
          <Image
            src="/images/kontingen.png"
            width={300}
            height={150}
            className="md:h-[190px] md:w-[380px] lg:h-[180px] lg:w-[360px]"
            alt="image"
          />
        </div>
        <div className="flex w-[50vw] items-center justify-center">
          <Image
            src="/images/supporter.png"
            width={300}
            height={150}
            className="md:h-[190px] md:w-[380px] lg:h-[180px] lg:w-[360px]"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
