export default function Home() {
  return (
    <div className="container mx-auto relative">
      <h1 className="text-5xl text-orange-400 font-bold mt-20 ">
        Hello Tailwind
      </h1>
      <button className="border border-white/50 border-solid bg-amber-700 hover:bg-amber-500 text-white rounded-4xl p-1 mt-5 w-50 h-30 transition-colors ease-in-out duration-600 ">
        Button
      </button>

      <div className="bg-amber-300 mt-5 w-24 h-32">Width & Heigth</div>

      <div className="flex items-center gap-5">
        <div className="bg-blue-300 w-20 h-20" />
        <div className="bg-blue-300 w-20 h-20" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-red-300 w-20 h-20" />
        <div className="bg-red-300 w-20 h-20" />
        <div className="bg-red-300 w-20 h-20" />
        <div className="bg-red-300 w-20 h-20" />
      </div>

      <div className=" fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
        <div className="bg-black/50 rounded w-1/2 absolute top-20 left-20 text-white p-10">
          <h1>Modal window</h1>
          <p>paragraph</p>
        </div>
      </div>
    </div>
  );
}
