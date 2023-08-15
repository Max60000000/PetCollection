import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div class="flex justify-center  ">
        <nav class="self-center w-full max-w-7xl  ">
          <div class="flex flex-col lg:flex-row justify-around items-center " />
        </nav>
      </div>
      <div class="flex justify-center   p-8 ">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
            <div class="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
              <div class="flex flex-col items-start space-y-3">
                <div class="text-3xl md:text-5xl font-bold px-8">About Us </div>
                <div class="text-2xl text-orange-500 md:text-2xl font-bold px-8">
                  Pet House & Animal clinic was established with moto to provide
                  qualitative and affordable animal healthcare service to your
                  doorstep.
                </div>

                <form class="h-1  rounded-2xl w-20 bg-orange-500 ml-10" />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Comprehensive</label>
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Professional</label>
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label for="vehicle3"> Compassionate Veterinary Service</label>
                <br />
              </div>

              <Link href="/Contact" alt="" className="m-4 mt-6 pl-4 pt-1 pb-1 pr-4 bg-blue-900 rounded text-white font-medium w-36">
                Contact
              </Link>
            </div>
            <div class="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
              <div class=" w-96 h-60 lg:h-96  overflow-hidden ">
                <img
                  src="https://source.unsplash.com/300x400/?design"
                  class="h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
