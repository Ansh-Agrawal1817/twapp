export default function Button1() {
  return (
    <>
      <a
        href="#_"
        className="px-3 py-1.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block my-7"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90" />
        <span className="relative text-md group-hover:text-white">Button Text</span>
      </a>
    </>
  );
}
