import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div 
        className="w-full flex justify-between items-center font-semibold fixed top-0 left-0 right-0 h-16 bg-black z-10 px-8 shadow-lg"
      >
        {/* Sol Kısım: Spotify Logo ve Home, Search */}
        <div className="flex items-center gap-6">
          <img
            className="w-8 cursor-pointer"
            src={assets.spotify_logo}
            alt="Spotify Logo"
          />
          {/* Home Button */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-3 bg-[#242424] px-3 py-3 rounded-full cursor-pointer"
          >
            <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          </div>
          {/* Search Button */}
          <div 
            className="flex items-center justify-between gap-3 bg-[#242424] px-5 py-3 rounded-full cursor-pointer"
          >
            <img className="w-6" src={assets.search_icon} alt="Search Icon" />
            <p className="text-[#b3b3b3] text-sm mr-25">What do you want to play?</p>
             {/* Minik Dikey Çizgi */}
            <div className="h-5 w-px bg-[#b3b3b3]"></div>
            {/* Sağ kısım - Browse Icon */}
            <FontAwesomeIcon 
                icon={faWindowRestore} 
                style={{ color: "#b3b3b3" }} 
                className="w-5 h-5 cursor-pointer"
            />

          </div>
        </div>

        <div className="flex items-center gap-6">
            {/* Premium */}
            <p className="text-[#b3b3b3] text-sm font-bold cursor-pointer transition-transform duration-200 hover:text-white hover:scale-105">
                Premium
            </p>

            {/* Support */}
            <p className="text-[#b3b3b3] text-sm font-bold cursor-pointer transition-transform duration-200 hover:text-white hover:scale-105">
                Support
            </p>

            {/* Download */}
            <p className="text-[#b3b3b3] text-sm font-bold cursor-pointer transition-transform duration-200 hover:text-white hover:scale-105">
                Download
            </p>

            {/* Minik Dikey Çizgi */}
            <div className="h-5 w-px bg-[white]"></div>

            {/* Install App */}
            <div className="flex items-center gap-2">
                {/* Install Icon */}
                    <img className="w-15 h-10 p-2" src={assets.install_icon} alt="Install Icon" />

                    <p className="text-[#b3b3b3] text-sm font-bold cursor-pointer transition-transform duration-200 hover:text-white hover:scale-105">
                    Install App
                    </p>
            </div>

                {/* Kullanıcı Profili */}
                <p className="bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center">
                S
                </p>
        </div>



      </div>

      {/* Kategoriler */}
      <div className="flex items-center gap-4 mt-[70px] px-8">
        <p className="bg-white text-black px-4 py-1 rounded-full cursor-pointer">All</p>
        <p className="bg-black px-4 py-1 rounded-full text-gray-300 cursor-pointer hover:text-white">Music</p>
        <p className="bg-black px-4 py-1 rounded-full text-gray-300 cursor-pointer hover:text-white">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
