import Layout from "@/components/our components/layout";
import React from "react";
import dataStructuresAlgorithms from "@/utils/dataStructuresAlgorithms";
import TopicCard from "@/components/our components/TopicCard";
import HeadLIneOfCourse from "@/components/our components/HeadLIneOfCourse";

const DSA = () => {
  return (
    <Layout>
      <HeadLIneOfCourse />
      <div className=" text-white p-4">
        {dataStructuresAlgorithms.map((categoryData, index) => (
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

export default DSA;
