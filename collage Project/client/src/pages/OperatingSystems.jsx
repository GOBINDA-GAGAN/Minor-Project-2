import Layout from "@/components/our components/layout";
import React from "react";
import computerNetwork from "@/utils/computerNetwork";
import HeadLIneOfCourse from "@/components/our components/HeadLIneofCourse";
import TopicCard from "@/components/our components/TopicCard";
const OperatingSystems = () => {
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

export default OperatingSystems;
