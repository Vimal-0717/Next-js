import Link from 'next/link';
import { useRouter } from 'next/router';
import { Console } from 'console';
import { features } from 'process';
import StrapiClient from '../lib/strapi-client';
import { useEffect, useState } from "react";
import axios from "axios"; 


export default function Features(data) {
    console.log(data.data.attributes.title)
    console.log(data.data.attributes.label)
    return (
        <div>
<section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
<div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
  <div className="flex flex-col w-full md:flex-row">
    {/* Top Text */}
    <div className="flex justify-between">
      <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
        Crafting
        <span>Powerful</span>
        <span>Experiences</span>
      </h1>
    </div>
    {/* Right Image */}
    <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
      <img
        src="https://cdn.devdojo.com/images/december2020/designs3d.png"
        className="object-cover mt-3 mr-5 h-80 lg:h-96"
      />
    </div>
  </div>
  {/* Separator */}
  <div className="my-16 border-b border-gray-300 lg:my-24" />
  {/* Bottom Text */}
  <h2 className="text-left text-gray-500 xl:text-xl">
   {data.data.attributes.title}
  </h2>
</div>
</section>
<section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
      {/* Image */}
      <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <img
          src="https://cdn.devdojo.com/images/december2020/productivity.png"
          className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
        />
      </div>
      {/* Content */}
      <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
        {data.data.attributes.label}
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
          
        </p>
        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Maximize productivity and growth
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Speed past your competition
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Learn the top techniques
          </li>
        </ul>
      </div>
      {/* End  Content */}
    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
      {/* Content */}
      <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
          Automated Tasks
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Automated task management workflow
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Detailed analytics for your data
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Some awesome integrations
          </li>
        </ul>
      </div>
      {/* End  Content */}
      {/* Image */}
      <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img
          src="https://cdn.devdojo.com/images/december2020/settings.png"
          className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
        />
      </div>
    </div>
  </section>
  <section className="bg-white">
    <div className="max-w-6xl py-12 mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 ">
        <a
          href="landing"
          className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
        >
          <div className="flex items-center justify-center w-16 h-16 border border-indigo-200 shadow-inner bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-xl lg:h-20 lg:w-20">
            <svg
              className="w-10 h-10 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h5 className="mt-1 mb-2 text-xl font-bold lg:text-2xl">
              Fully Customizable
            </h5>
            <p className="mb-6 text-lg text-gray-600">
              Each component is fully customizable
            </p>
            <span className="flex items-center text-lg font-bold text-indigo-600">
              Customzation Details
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </a>
        <a
          href="landing1"
          className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
        >
          <div className="flex items-center justify-center w-16 h-16 border border-indigo-200 shadow-inner bg-gradient-to-br from-indigo-50 to-indigo-200 rounded-xl lg:h-20 lg:w-20">
            <svg
              className="w-10 h-10 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h5 className="mt-1 mb-2 text-xl font-bold lg:text-2xl">
              Integrates Easily
            </h5>
            <p className="mb-6 text-lg text-gray-600">
              Integrate each component with your stack
            </p>
            <span className="flex items-center text-lg font-bold text-indigo-600">
              Integration Details
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</div>
)}
export async function getStaticProps(){
    const res = await fetch("http://localhost:1337/api/feature");
    const getstarted=await res.json();
    const data=getstarted.data
    console.log(data);
    return{
      props:{data},
  
      
    }}