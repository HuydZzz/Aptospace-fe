import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  name: string;
  images: string[];
}
const CollectionCard = ({ name, images }: CollectionCardProps) => {
  return (
    <div>
      <div className="border-[0.5px] border-white/50 px-2.5 py-2 flex items-center justify-between">
        <p className="text-white font-bold text-xl uppercase">{name}</p>
        <ArrowRight size="20" color="#fff" />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <img
          src={images[0]}
          alt={images[0]}
          className="row-span-2 object-cover"
        />
        <img
          src={images[1]}
          alt={images[1]}
          className="aspect-square object-cover"
        />
        <img
          src={images[2]}
          alt={images[2]}
          className="col-start-2 row-start-2 aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default CollectionCard;
