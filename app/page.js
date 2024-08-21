"use client";
import Image from "next/image";

import Hero from "@/Components/Hero";

import Sidebar from "@/Components/Sidebar";

import Carousel from "@/Components/Members/Carousel";
import Members from "@/Components/Members/Members";
// import { client } from "@/Helper/context";

import Mainbar from "@/Components/Projects/Mainbar";

import Achievements from "@/Components/Achievements/Achievements";

import YearCalendar from "@/Components/Events/YearCalendar";

import Alumni from "@/Components/Alumni/Alumni";

import Item from "@/Components/Gallery/Item";

import Contact from "@/Components/Contact/Contact";

import YearCalendar2 from "@/Components/NewEvents/YearCalendar";

import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#000016] overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* About Us */}
      <div id='About' className="flex flex-col md:flex-row md:min-h-screen items-center justify-start w-screen md:gap-16">
        <Sidebar word="ABOUT   US" />
        <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10  w-full">
          <div className="mb-6 mt-12 text-[1.5rem] font-semibold text-white  lg:text-[2rem] text-left">
            WHO ARE WE?
          </div>

          <div className="mb-6 text-[1.25em] text-white  lg:text-[1.5rem] text-justify">
            Team Innoreva is a research-oriented team that places a strong
            emphasis on providing innovative and cutting-edge solutions to
            challenges faced by the real world.
          </div>
          <div className="mb-6 text-[1.5rem] font-semibold text-white  lg:text-[2rem] text-left">
            WHAT’S OUR PURPOSE?
          </div>
          <div className="mb-6 text-[1.25rem] text-white lg:text-[1.5rem] text-justify">
            Team Innoreva fosters a creative and innovative environment for
            developing groundbreaking solutions. We integrate various domains of
            technology and push the boundaries of technological advancements.
          </div>
          <div className="mb-6 text-[1.5rem] font-semibold text-white lg:text-[2rem] text-left">
            WHAT ARE OUR MAIN DOMAINS?
          </div>
          <div className="text-[1.25rem] md:mb-12 text-white  lg:text-[1.5rem] text-justify">
            Since its formation in 2018, the team has been dedicated to
            exploring the domains of IOT, ROBOTICS, WEB/APP DEVELOPMENT, and
            MACHINE LEARNING/AI.
          </div>
        </div>
      </div>

      {/* Members */}
      <div id='Members' className="flex flex-col md:flex-row md:min-h-screen items-center justify-start w-screen md:gap-16">
        <Sidebar word="Members" />
        <div className="flex flex-col w-full md:min-h-dvh px-10 md:px-0 items-start justify-center md:justify-start overflow-hidden">
          <div className=" w-full">
            <div className="[font-family:'Archivo-Bold',Helvetica] mt-3 font-bold text-white text-[3.8vw] md:mt-4">
              HOLA AMIGOS !
            </div>
            <div className="flex w-full items-center justify-start">
              <div className="[font-family:'Archivo-SemiBold',Helvetica]font-semibold text-white text-[2vw] w-fit text-nowrap mr-2 justify-self-start">
                POR HOLDERS
              </div>
            </div>
            <div className=" w-[100%] border border-3 rounded-md"></div>
          </div>

          <Members />
        </div>
      </div>

      {/* Projects */}

      <div id='Projects' className="flex flex-col md:h-screen md:flex-row md:min-h-screen items-center justify-start w-screen md:gap-16 ">
        <Sidebar word="Projects" />
        <Mainbar />
      </div>

      {/* Achievements */}
      <div id='Achievements' className=" flex flex-col md:flex-row min-h-screen items-center justify-start w-screen md:gap-16">
        <Sidebar word="Achievements" />
        <Achievements />
      </div>

      {/* Events */}
        <div id='Events' className=" flex flex-col md:flex-row md:min-h-screen items-center justify-start w-screen md:gap-16">
          <Sidebar word="Events" />
          <YearCalendar2 />
        </div>
      {/* <div className=" flex flex-col md:flex-row md:min-h-screen items-center justify-start w-screen md:gap-16">
        <Sidebar word="Events" />
        <YearCalendar />
      </div> */}

      {/* Alumni */}
      <div id='Alumni' className="flex flex-col mt-4 md:mt-0 md:h-screen md:min-h-screen md:flex-row items-center justify-start w-screen ">
        <Sidebar word="Alumni" />
        <Alumni />
      </div>

      {/* Gallery */}
      <div id='Gallery' className="flex flex-col md:flex-row min-h-screen items-center justify-start w-screen ">
        <div className="hidden md:block">
          <Sidebar word="Gallery" />
        </div>
        <div className="flex md:hidden font-[Archivo] text-6xl my-5 [-webkit-text-stroke:2px_#ffffff80] text-transparent">
          <h1 className="tracking-[4px]">GALLERY</h1>
        </div>
        <Item />
      </div>

      {/* Contact Us */}
      <div id='Contacts' className=" flex flex-col min-h-screen items-center justify-start w-screen">
        {/* <div className="hidden md:block">
          <Sidebar word="Contact us" />
          </div>
          <div className="flex md:hidden font-[Archivo] text-5xl my-5 [-webkit-text-stroke:2px_#ffffff80] text-transparent">
          <h1 className="tracking-[4px]">
            CONTACT US
          </h1>
        </div> */}
        <div className="md:flex-row min-h-screen items-center justify-start w-screen">
          <Contact />
          <ToastContainer/>
        </div>
        <footer className=" w-full">
          <p className="font-light text-white  text-center pt-5 pb-2">
            Copyright 2023 All Rights Reserved @innoreva
          </p>
        </footer>
      </div>

      {/* Sponsors */}
      {/* <div className=" flex min-h-screen">
        <Sidebar word="Sponsors" />
      </div> */}

    </main>
  );
}