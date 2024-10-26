import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";



const HowItWorks = () => {

  return (
    <section className="howItWorks py-12">
      <h3 className="w-full text-center py-12 bg-red-600 text-white text-3xl font-semibold">How does it work?</h3>
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <div className="card w-[90%] p-6 mt-8 flex flex-col justify-start items-start gap-2 rounded-md shadow-md border border-gray-300  hover:bg-black hover:text-white">
          <div className="icon bg-black text-white w-10 h-10 rounded-full flex justify-center items-center">
            <LuUserPlus className="text-2xl"/>
          </div>
          <h4 className="text-lg font-semibold">Create an Account</h4>
          <p className="text-zinc-500"> Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or applying for jobs.
            Customize your profile to highlight your skills or requirements.
          </p>
        </div>
        <div className="card w-[90%] p-6 mt-8 flex flex-col justify-start items-start gap-2 rounded-md shadow-md border border-gray-300 hover:bg-black hover:text-white">
          <div className="icon bg-black text-white w-10 h-10 rounded-full flex justify-center items-center">
            <VscTasklist />
          </div>
          <h4>Post or Browse Jobs</h4>
          <p className="text-zinc-500"> Employers can post detailed job descriptions, and job seekers can browse a comprehensive list of available positions. Utilize filters to find jobs that match your skills and preferences. </p>
        </div>
        <div className="card w-[90%] p-6 mt-8 flex flex-col justify-start items-start gap-2 rounded-md shadow-md border border-gray-300 hover:bg-black hover:text-white">
          <div className="icon bg-black text-white w-10 h-10 rounded-full flex justify-center items-center">
            <BiSolidLike />
          </div>
          <h4>Hire or Get Hired</h4>
          <p className="text-zinc-500"> Employers can shortlist candidates and extend job offers. Job seekers can review job offers and accept positions that align with their career goals. </p>
        </div>
      </div>
    </section>
  );
  
};

export default HowItWorks;
