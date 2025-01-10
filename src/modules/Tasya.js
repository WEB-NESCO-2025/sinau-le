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
          <div className="absolute flex w-full flex-row items-center justify-between">
            <Image src="/images/awan1.png" width={150} height={200} alt="Picture of the author" />
            <Image src="/images/awan2.png" width={150} height={200} alt="Picture of the author" />
          </div>
        </div>
      </div>

      {/* Teaser Porsenigama */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex flex-row items-start justify-center space-x-4">
          {/* Box Youtube */}
          <div className="relative h-auto w-[60%] rounded-2xl border-2 border-black bg-white p-[2%]">
            <iframe
              className="z-20 mx-auto aspect-video w-full rounded-xl"
              src="https://www.youtube.com/embed/unroADBN_cg?si=M7NF-Nv17fqGg3nb"
              loading="lazy"
              title="Porsenigama 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Gambar Tenis dan Catur */}
            <div className="absolute left-[-100px] top-[160px] z-10 flex flex-row gap-x-[230px]">
              <Image src="/images/tenis.png" width={200} height={200} alt="Gambar tenis" />
              <Image src="/images/catur1.png" width={150} height={100} alt="Gambar catur" />
            </div>
          </div>
          {/* Deskripsi Porsenigama */}
          <div className="ml-[100px] box-border flex h-[350px] w-[500px] justify-center bg-white p-4">
            <p className="text-justify font-primeformRegular text-[18px] text-black">
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
      <div className="mt-[50px] flex flex-row items-center justify-center space-x-[50px]">
        <div className="w-[40vw]">
          <Image
            src="/images/kontingen.png"
            alt="Picture of the author"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="w-[40vw]">
          <Image
            src="/images/supporter.png"
            alt="Picture of the author"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
