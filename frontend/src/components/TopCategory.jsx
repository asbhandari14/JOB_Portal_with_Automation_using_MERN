import React from "react";





const TopNiches = () => {

  const jobType = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
  ];

  return (
    <section className="services w-full h-auto py-10 flex flex-col justify-center items-center gap-8">
      <h3 className="text-3xl font-bold uppercase border-b-4 border-black py-3">Top Job Category</h3>
      <div className=" w-[95%] grid grid-cols-3 gap-8 container mt-8 max-md:grid-cols-1">
        {jobType.map((element) => {
          return (
            <div className="card bg-black text-white p-6 rounded-md hover:bg-green-500 hover:text-black" key={element.id}>
              <h4 className="text-xl font-semibold">{element.service}</h4>
              <p className="mt-2 tracking-wide">{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
