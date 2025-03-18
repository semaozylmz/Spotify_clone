import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className="w-full mb-4 px-4"> 
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-x-auto no-scrollbar w-full">
                    {albumsData.map((item, index) => (
                        <Albumitem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full mb-4 px-4"> 
                <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
                <div className="flex overflow-x-auto no-scrollbar w-full">
                    {songsData.map((item, index) => (
                        <Songitem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
export default DisplayHome;
