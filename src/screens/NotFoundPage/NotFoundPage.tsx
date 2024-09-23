import { Link } from "react-router-dom";
import notFoundBanner from "../../assets/images/bg-404.png";
import { ArrowRight } from "lucide-react";
const NotFoundPage = () => {
  return (
    <div className="container py-[100px]">
      <div className="relative">
        <div className="relative">
          <img
            src={notFoundBanner}
            alt="not found"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-65"></div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <p className="text-[50px] sm:text-[100px] lg:text-[200px] leading-none font-bold bg-gradient-to-r from-[#CA8064] via-[#9AD8D3] to-[#E89E52] text-transparent bg-clip-text">
            OOPS!
          </p>
          <p className="text-2xl lg:text-[50px] text-white font-bold">
            Page not found
          </p>
          <Link
            to="/"
            className="text-white text-base lg:text-xl font-medium flex items-center justify-center gap-1 mt-5 sm:mt-10"
          >
            <span className="underline">Back to homepage</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
