export default function Home() {
  return (
    <div className="flex w-full items-center flex-column min-h-screen">
      <button className="bg-[#0d6efd] mx-auto rounded-lg p-3 cursor-pointer text-white">
        CSR Page
      </button>
      <button className="bg-[#0d6efd] mx-auto rounded-lg p-3 cursor-pointer text-white">
        SSR Page
      </button>
      <button className="bg-[#0d6efd] mx-auto rounded-lg p-3 cursor-pointer text-white">
        SSG Page
      </button>
      <button className="bg-[#0d6efd] mx-auto rounded-lg p-3 cursor-pointer text-white">
        PSG Page
      </button>
    </div>
  );
}
