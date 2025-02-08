import HeadLIneOfCourse from "@/components/our components/HeadLIneofCourse";
import Layout from "@/components/our components/layout";
import TopicCard from "@/components/our components/TopicCard";
import React from "react";
import computerNetwork from "@/utils/computerNetwork";

const ComputerNetworks = () => {
  return (
    <Layout>
      <HeadLIneOfCourse />
      <div className=" text-white p-4">
        {computerNetwork.map((categoryData, index) => (
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

export default ComputerNetworks;
