import logo from "../../assets/images/logo.png";
import isolation from "../../assets/images/Isolation_Mode.png";
import { MenuIcon, XIcon } from "lucide-react";
import Search from "../Search";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const navList = [
  {
    title: "Marketplace",
    path: "/marketplace",
  },
  {
    title: "Auction",
    path: "/auction",
  },
  {
    title: "Community",
    path: "/community",
  },
];
const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setIsOpenSidebar(false);
  };
  return (
    <header className="h-[120px] lg:h-[90px] flex items-center justify-center lg:justify-between border-b border-white/50 px-2.5">
      <div className="flex flex-col lg:flex-row items-center w-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="object-cover static max-lg:absolute max-lg:top-0 max-lg:left-[50%] translate-x-[-50%] lg:mx-20 my-5 lg:my-0"
          />
        </Link>
        {isOpenSidebar && (
          <div
            className="fixed inset-0 bg-black/65 z-30"
            onClick={handleCloseSidebar}
          ></div>
        )}
        <ul
          className={`flex items-center gap-10 lg:ml-5 mr-10 max-lg:fixed z-50 max-lg:top-0 max-lg:bottom-0 max-lg:w-[80%] max-lg:flex-col max-lg:bg-[#051319] max-lg:shadow-2xl max-lg:pt-20 duration-300 ease-in-out ${
            isOpenSidebar ? "max-lg:left-0" : "max-lg:left-[-100%]"
          }`}
        >
          <XIcon
            cursor="pointer"
            className="absolute text-white top-3 right-3 lg:hidden"
            onClick={handleCloseSidebar}
          />
          {navList.map((nav) => {
            return (
              <li key={nav.title} className="font-bold text-white text-xl">
                <NavLink to={nav.path} onClick={handleCloseSidebar}>
                  {nav.title}
                </NavLink>
              </li>
            );
          })}
          <Button className="lg:hidden">
            <img src={isolation} alt="isolation" />
            Connect Wallet
          </Button>
        </ul>
        <div className="w-full lg:mt-0 mt-10">
          <Search />
        </div>
      </div>
      <button className="hidden lg:flex items-center gap-2 text-xl flex-nowrap text-nowrap text-white px-2.5 h-[45px] border ml-5 w-[200px]">
        <img src={isolation} alt="isolation" />
        Connect Wallet
      </button>
      <Button
        variant="md"
        className="ml-5 lg:hidden lg:mt-0 mt-10"
        onClick={handleOpenSidebar}
      >
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
