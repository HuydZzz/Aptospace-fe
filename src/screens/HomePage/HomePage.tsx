import { PauseIcon, PlayIcon, SquareArrowOutUpRight } from "lucide-react";
import player1 from "../../assets/images/player_1.png";
import walletIcon from "../../assets/images/lucide_wallet.png";
import fileIcon from "../../assets/images/lucian_file.png";
import writeIcon from "../../assets/images/jam_write-f.png";
import ReactPlayer from "react-player";
import { useState } from "react";
import TrendingCard from "../../components/TrendingCard";
import PopularCard from "../../components/PopularCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import useCountUp from "../../hooks/useCountUp";
import Button from "../../components/shared/Button";
import CollectionCard from "../../components/CollectionCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";

import { Pagination } from "swiper/modules";
import {
  collectionsData,
  popularBids,
  trendingCardData,
} from "../../constants/data";

const questionData = [
  {
    title: "WHAT IS AN NFT?",
    content:
      "NFT stands for Non-Fungible Token. It is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content, typically stored on a blockchain. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are unique and cannot be exchanged on a like-for-like basis.",
  },
  {
    title: "HOW CAN I BUY NFT?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima iure, animi nobis maxime veniam. Provident ipsam quos debitis eligendi, pariatur esse illo velit aliquid quis, voluptate exercitationem iusto tempora!",
  },
  {
    title: "WHAT CRYPTOCURRENCIES CAN BE USED TO BUY NFT?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima iure, animi nobis maxime veniam. Provident ipsam quos debitis eligendi, pariatur esse illo velit aliquid quis, voluptate exercitationem iusto tempora!",
  },
  {
    title: "HOW CAN I CREATE MY OWN NFTs?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima iure, animi nobis maxime veniam. Provident ipsam quos debitis eligendi, pariatur esse illo velit aliquid quis, voluptate exercitationem iusto tempora!",
  },
  {
    title: "ARE THERE ANY FEES APPLIED WHEN SELLING NFTs?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima iure, animi nobis maxime veniam. Provident ipsam quos debitis eligendi, pariatur esse illo velit aliquid quis, voluptate exercitationem iusto tempora!",
  },
];

const Counter = ({ target }: { target: number }) => {
  const count = useCountUp(target);

  return (
    <p className="text-[100px] font-bold bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
      {count.toLocaleString()}k+
    </p>
  );
};

const HomePage = () => {
  const [isPlayVideo, setIsPlayVideo] = useState(true);

  const handleToggleVideo = () => {
    setIsPlayVideo(!isPlayVideo);
  };

  return (
    <div>
      <div className="container border-x-[0.5px] border-white/50 px-[25px] py-[65px] grid grid-cols-1 xl:grid-cols-[1fr_530px] gap-5">
        <div className="flex flex-col justify-evenly">
          <p className="text-[50px] lg:text-[100px] font-bold text-white uppercase lg:leading-[135px]">
            Your Gateway to Exclusive
          </p>
          <p className="text-[50px] lg:text-[100px] font-bold uppercase lg:leading-[135px] bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
            NFTs
          </p>
          <p className="text-xl text-white mb-6">
            Discover, Trade, and Collect Unique Digital Assets on the Aptos
            Blockchain
          </p>
          <Button variant="lg" className="text-xl w-[170px]">
            Get Start
          </Button>
          <div className="relative w-full h-[246px] mt-6 lg:mt-4">
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=a7IRIOC1xCI'}
              loop
              playing={isPlayVideo}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
              className="object-contain"
              controls={false}
            />
            <button
              onClick={handleToggleVideo}
              className="absolute top-[50%] translate-y-[-50%] -left-2 w-[86px] h-20 bg-[#051319] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]"
            >
              {isPlayVideo ? (
                <PauseIcon size={30} fill="#00D2CE" />
              ) : (
                <PlayIcon size={30} fill="#00D2CE" />
              )}
            </button>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img src={player1} alt={player1} className="w-full" />
          <div className="absolute top-0 right-0 bg-[#051319] size-[92px] flex items-center justify-center rounded-bl-[5px]">
            <SquareArrowOutUpRight size={22} color="#00D2CE" />
          </div>
          <div className="absolute bottom-0 left-0 bg-[#051319] w-[129px] h-[89px] flex flex-col items-center justify-center rounded-tr-[5px]">
            <p className="text-xl font-bold text-[#00D2CE]">HDZ COL</p>
            <p className="text-white">3.6k items</p>
          </div>
        </div>
      </div>
      <div className="h-[50px] w-full bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52]"></div>
      <div className="container pt-[50px] pb-[65px] px-[25px]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="uppercase text-3xl lg:text-[50px] font-bold text-white">
            TrENDING ARTWORKS
          </h1>
          <p className="underline text-white text-sm text-nowrap">View all</p>
        </div>
        <div className="mt-9">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            modules={[Pagination]}
            className="mySwiper pb-20"
          >
            {trendingCardData.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  className="flex items-center justify-center"
                >
                  <TrendingCard
                    name={data.name}
                    image={data.thumbnail}
                    apt={data.apt}
                    by={data.by}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="border-y-[0.5px] border-white/50 w-full h-[50px]"></div>
      <div className="container pt-[50px] pb-10 px-[25px]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="font-bold text-white text-3xl lg:text-[50px]">
            HOW TO CREATE & SELL YOUR NFTs
          </h1>
          <p className="underline text-white text-sm text-nowrap">Learn more</p>
        </div>
        <p className="text-xl text-white mb-6 sm:mt-2 mt-6">
          Creating NFT is an exciting process that allows you to transform your
          digital creations into unique assets on the blockchains. Here are the
          steps that will guide you through the creation of your own NFT.
        </p>
        <div className="border-[0.5px] border-white/50 grid grid-cols-1 lg:grid-cols-3 ">
          <div className="text-white px-9 py-7 space-y-[18px]">
            <img
              src={walletIcon}
              alt={walletIcon}
              className="size-[50px] object-cover"
            />
            <p className="uppercase font-bold text-2xl">SETUP YOUR WALLET</p>
            <p className="text-2xl">
              To connect your wallet first register an account, then go to your
              profile, open wallets tab & follow setup instructions. The wallet
              will serve as a storage for your NFTs.
            </p>
          </div>
          <div className="text-white px-9 py-7 space-y-[18px] border-y-[0.5px] lg:border-x-[0.5px] border-white/50">
            <img
              src={fileIcon}
              alt={fileIcon}
              className="size-[50px] object-cover"
            />
            <p className="uppercase font-bold text-2xl">ADD YOUR NFTS</p>
            <p className="text-2xl">
              As you're already logged in click "Create NFT" button on
              navigation menu, then upload your digital asset & connect the
              previously created wallet.
            </p>
          </div>
          <div className="text-white px-9 py-7 space-y-[18px]">
            <img
              src={writeIcon}
              alt={writeIcon}
              className="size-[50px] object-cover"
            />
            <p className="uppercase font-bold text-2xl">ADJUST NFT DETAILS</p>
            <p className="text-2xl">
              Review the details of your NFT, choose between fixed price or
              timed auction listing and ensure you have sufficient funds in your
              wallet to cover the required service fees.
            </p>
          </div>
        </div>
      </div>
      <div className="border-y-[0.5px] border-white/50 w-full h-[50px]"></div>
      <div className="container pt-[50px] pb-[65px] px-[25px]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="uppercase font-bold text-white text-3xl lg:text-[50px]">
            Popular bids
          </h1>
          <p className="underline text-white text-sm text-nowrap">View all</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
          {popularBids.map((data) => {
            return (
              <div key={data.id} className="flex justify-center">
                <PopularCard
                  name={data.name}
                  image={data.thumbnail}
                  apt={data.apt}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-y-[0.5px] border-white/50 w-full h-[50px]"></div>
      <div className="container pt-[50px] pb-[65px] px-[25px]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="font-bold text-white text-3xl lg:text-[50px]">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="underline text-white text-sm text-nowrap">Read more</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3 mt-9">
          {questionData.map((question) => {
            return (
              <AccordionItem
                key={question.title}
                value={question.title}
                className="border-[0.5px] border-white/50 px-5 py-[18px]"
              >
                <AccordionTrigger className="text-white text-xl text-start font-bold uppercase">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="border-y-[0.5px] border-white/50 w-full h-[50px]"></div>
      <div className="container pt-[50px] pb-[65px] px-[25px]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="font-bold text-white text-3xl lg:text-[50px]">
            TOP COLLECTIONS
          </h1>
          <p className="underline text-white text-sm text-nowrap">View all</p>
        </div>
        <div className="mt-9">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            modules={[Pagination]}
            className="mySwiper pb-20"
          >
            {collectionsData.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  className="flex items-center justify-center"
                >
                  <CollectionCard name={data.name} images={data.images} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="border-y-[0.5px] border-white/50 w-full h-[50px]"></div>
      <div className="container pt-[50px] pb-[65px] px-[25px]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="font-bold text-white text-3xl lg:text-[50px]">
            IMPRESSIVE STATS
          </h1>
          <p className="underline text-white text-sm text-nowrap">Read more</p>
        </div>
        <div className="border-[0.5px] border-white/50 grid grid-cols-1 lg:grid-cols-3 mt-9">
          <div className="px-7 lg:px-9 py-7 space-y-11">
            <p className="uppercase font-bold text-2xl text-white">
              SETUP YOUR WALLET
            </p>

            <Counter target={99} />
          </div>
          <div className="px-7 lg:px-9 py-7 space-y-11 border-y-[0.5px] lg:border-x-[0.5px] border-white/50">
            <p className="uppercase font-bold text-2xl text-white">LIVE BIDS</p>
            <p className="text-[100px] font-bold bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
              <Counter target={9} />
            </p>
          </div>
          <div className="px-7 lg:px-9 py-7 space-y-11">
            <p className="uppercase font-bold text-2xl text-white">USERS</p>
            <p className="text-[100px] font-bold bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
              <Counter target={9} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
