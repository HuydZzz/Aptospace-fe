import { SquareArrowOutUpRight } from "lucide-react";
import Button from "./shared/Button";

interface TrendingCardProps {
  image: string;
  name: string;
  by: string;
  apt: string | number;
}
const TrendingCard = ({ image, name, by, apt }: TrendingCardProps) => {
  return (
    <div className="max-w-[450px]">
      <div className="relative">
        <img src={image} alt={image} />
        <div className="absolute top-2.5 right-2.5 sm:top-0 sm:right-0 sm:size-[92px] flex items-center justify-center rounded-bl-[5px]">
          <SquareArrowOutUpRight size={30} color="#00D2CE" />
        </div>
        <div className="absolute bottom-0 left-0 sm:w-[150px] sm:h-[90px] flex flex-col items-center justify-center rounded-tr-[5px]">
          <p className="text-lg sm:text-xl font-bold text-[#00D2CE]">{name}</p>
          <p className="text-white">{by}</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2.5 mt-2">
        <p className="text-sm bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
          {apt} APT
        </p>
        <button className="text-white border border-white text-sm px-2 py-1.5">
          Add to card
        </button>
        <Button variant="sm" className="text-sm">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default TrendingCard;
