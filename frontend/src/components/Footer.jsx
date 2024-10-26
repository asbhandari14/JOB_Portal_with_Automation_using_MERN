import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer className="w-full h-auto py-12 px-6 bg-black text-white grid grid-cols-4 aligncon">
        <div className="w-full">
          <img src="/logo.png" alt="logo" className="w-32 h-auto"/>
        </div>

        <div className="w-full">
          <h4 className="text-2xl font-semibold uppercase">Support</h4>
          <ul className="mt-3 text-xl flex flex-col gap-1.5">
            <li> Indirapuram, Ghaziabad , Uttar_Pradesh India</li>
            <li>jobportal@gmail.com</li>
            <li>+92 1234567890</li>
          </ul>
        </div>

        <div className="w-full">
          <h4 className="text-2xl font-semibold uppercase">Quick Links</h4>
          <ul className="mt-3 text-xl flex flex-col gap-1.5">
            <li to={"/"}><NavLink>Home</NavLink></li>
            <li to={"/jobs"}><NavLink>Jobs</NavLink>
            </li>
            {isAuthenticated && (
              <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
            )}
          </ul>
        </div>

        <div className="w-full">
          <h4 className="text-2xl font-semibold uppercase">Follow Us</h4>
          <ul className="mt-3 flex flex-col gap-2 text-xl">
          <NavLink to="/"><li className="flex justify-start items-center gap-2"><FaSquareXTwitter className="text-2xl"/>Twitter (X)</li></NavLink>
          <NavLink to="/"><li className="flex justify-start items-center gap-2"><FaSquareInstagram className="text-2xl"/>Instagram</li></NavLink>
          <NavLink to="/"><li className="flex justify-start items-center gap-2"><FaYoutube className="text-2xl"/>Youtube</li></NavLink>
          <NavLink to="/"><li className="flex justify-start items-center gap-2"><FaLinkedin className="text-2xl"/>LinkedIn</li></NavLink>
          </ul>
        </div>
      </footer>
      <div className="copyright bg-black text-white text-center text-xl uppercase py-8 border-t-2 border-zinc-600">
        &copy; CopyRight 2024. All Rights Reserved 
      </div>
    </>
  );
};

export default Footer;
