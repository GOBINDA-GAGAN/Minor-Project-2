import Layout from "@/components/our components/layout";
import React from "react";
import objectOrientedProgramming from "@/utils/objectOrientedProgramming";
import HeadLIneOfCourse from "@/components/our components/HeadLIneofCourse";
import TopicCard from "@/components/our components/TopicCard";

const OOPs = () => {
  return (
    <Layout>
      <HeadLIneOfCourse />
      <div className=" text-white p-4">
        {objectOrientedProgramming.map((categoryData, index) => (
          <div key={index} className="mb-4">
            <TopicCard
              heading={categoryData.category}
              categoryData_topics={categoryData.topics}
            />{" "}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default OOPs;
