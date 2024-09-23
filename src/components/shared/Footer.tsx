import { MailIcon } from "lucide-react";
import logo from "../../assets/images/logo.png";
import x from "../../assets/images/prime_twitter.png";
import discord from "../../assets/images/discord.png";
import telegram from "../../assets/images/telegram.png";
import github from "../../assets/images/github.png";

const Footer = () => {
  return (
    <div>
      <div className="border-y-[0.5px] border-white/50">
        <div className="lg:container grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:border-x-[0.5px] border-y-[0.5px] border-white/50 px-[35px] py-6 flex items-center justify-center lg:justify-start gap-2.5">
            <MailIcon color="#fff" className="sm:size-[50px] size-8" />
            <p className="text-2xl text-white/50">Subscribe for Updates</p>
          </div>
          <div className="lg:border-x-[0.5px] border-y-[0.5px] border-white/50 px-[35px] py-6 flex items-center justify-center flex-wrap gap-20">
            <img src={x} alt={x} className="object-cover size-10" />
            <img src={discord} alt={discord} className="object-cover size-10" />
            <img
              src={telegram}
              alt={telegram}
              className="object-cover size-10"
            />
            <img src={github} alt={github} className="object-cover size-10" />
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-between pt-8 pb-11">
        <img src={logo} alt="logo" className="object-cover w-[150px] h-5" />
        <div className="flex flex-wrap gap-[67px] md:pt-0 pt-20">
          <div>
            <h4 className="tracking-[5px] text-white/50 text-2xl pb-7">
              COMPANY
            </h4>
            <ul className="text-white space-y-5 text-2xl font-medium">
              <li>About Aptos</li>
              <li>Foundation</li>
              <li>Network Numbers</li>
              <li>Blog</li>
              <li>Brand</li>
            </ul>
          </div>
          <div>
            <h4 className="tracking-[5px] text-white/50 text-2xl pb-7">MENU</h4>
            <ul className="text-white space-y-5 text-2xl font-medium">
              <li>Marketplace</li>
              <li>Auction</li>
              <li>Community</li>
              <li>Account</li>
              <li>Collections</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-y-[0.5px] border-white/50 py-3">
        <div className="container flex items-center justify-between">
          <p className="text-base font-medium text-white">
            © Design by HdZ 2024
          </p>
          <div className="flex items-center gap-5">
            <p className="text-base font-bold text-white">Privacy</p>
            <p className="text-base font-bold text-white">Term</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
