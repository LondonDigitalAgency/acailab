export default function Home() {
  return (
    <main className="steel grain relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-20">
      <div className="rise flex flex-col items-center">
        <h1 className="engraved font-display select-none text-center text-[clamp(3rem,15vw,9rem)] leading-none tracking-[-0.02em]">
          <span className="font-semibold">açaí</span>
          <span className="font-extralight">lab</span>
        </h1>

        <div
          aria-hidden
          className="mt-10 h-px w-28 bg-gradient-to-r from-transparent via-white/35 to-transparent sm:w-40"
        />

        <p className="mt-10 text-center text-[0.7rem] font-light uppercase tracking-[0.42em] text-steel-300/70 sm:text-xs">
          Coming soon
        </p>
      </div>
    </main>
  );
}
