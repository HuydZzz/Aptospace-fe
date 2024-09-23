import Button from "./shared/Button";

const Search = () => {
  return (
    <div className="flex flex-grow items-center gap-2">
      <input
        placeholder="Search"
        className="h-[47px] max-sm:w-4 flex-grow max-w-[551px] border border-[#277273] outline-none pl-4 pr-3 bg-transparent text-white"
      />
      <Button
        variant="md"
        className="text-sm sm:text-xl max-sm:w-28 font-bold w-max text-nowrap"
      >
        Create NFT
      </Button>
    </div>
  );
};

export default Search;
