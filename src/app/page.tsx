import Image from "next/image";
import steel from "./steel.jpg";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-20">
      <Image
        src={steel}
        alt=""
        fill
        priority
        quality={82}
        sizes="100vw"
        placeholder="blur"
        className="object-cover"
      />

      {/* Lighting on the plate: polished pool behind the mark, vignette at the
          edges. Sits above the photo, below the lettering. */}
      <div aria-hidden className="plate-light absolute inset-0" />
      <div aria-hidden className="plate-grain absolute inset-0" />

      <div className="rise relative flex flex-col items-center">
        <h1 className="engraved font-display select-none text-center text-[clamp(3rem,15vw,9rem)] leading-none tracking-[-0.02em]">
          <span className="font-semibold">açaí</span>
          <span className="engraved-light font-extralight">lab</span>
        </h1>

        <div
          aria-hidden
          className="mt-10 h-px w-28 bg-gradient-to-r from-transparent via-black/30 to-transparent sm:w-40"
        />

        <p className="engraved-caption mt-10 text-center text-[0.8rem] font-medium uppercase tracking-[0.34em] sm:text-sm sm:tracking-[0.38em]">
          Coming soon
        </p>
      </div>
    </main>
  );
}
