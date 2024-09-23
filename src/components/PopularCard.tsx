import { ArrowRight } from "lucide-react";
import Button from "./shared/Button";

interface PopularCardProps {
  name: string;
  image: string;
  apt: string | number;
}
const PopularCard = ({ name, image, apt }: PopularCardProps) => {
  return (
    <div className="max-w-[450px]">
      <div className="border-[0.5px] border-white/50 px-2.5 py-2 flex items-center justify-between">
        <p className="text-white font-bold text-xl uppercase">{name}</p>
        <ArrowRight size="20" color="#fff" />
      </div>
      <div>
        <div className="relative">
          <img src={image} alt={image} />
          <div className="absolute top-5 left-3 flex flex-col items-start justify-center rounded-tr-[5px]">
            <p className="text-sm xl:text-lg font-bold text-[#00D2CE]">
              CURRENT BID
            </p>
            <p className="text-xs xl:text-lg font-bold bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
              {apt} APT
            </p>
          </div>
          <div className="absolute bottom-6 right-3 bg-transparent flex flex-col items-center justify-center">
            <Button
              variant="sm"
              className="text-xs text-nowrap sm:text-sm w-[100px]"
            >
              Place a bid
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 -translate-y-2.5">
          <div className="aspect-square border-[0.5px] border-white/50 flex flex-col items-center justify-center gap-4">
            <p className="text-[#00D2CE] text-xl font-bold">4</p>
            <p className="text-white">Days</p>
          </div>
          <div className="aspect-square border-[0.5px] border-white/50 flex flex-col items-center justify-center gap-4">
            <p className="text-[#00D2CE] text-xl font-bold">12</p>
            <p className="text-white">Hours</p>
          </div>
          <div className="aspect-square border-[0.5px] border-white/50 flex flex-col items-center justify-center gap-4">
            <p className="text-[#00D2CE] text-xl font-bold">30</p>
            <p className="text-white">Minutes</p>
          </div>
          <div className="aspect-square border-[0.5px] border-white/50 flex flex-col items-center justify-center gap-4">
            <p className="text-[#00D2CE] text-xl font-bold">33</p>
            <p className="text-white">Secords</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
