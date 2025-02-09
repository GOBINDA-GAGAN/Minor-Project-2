import HeadLIneOfCourse from "@/components/our components/HeadLIneofCourse";
import Layout from "@/components/our components/layout";
import TopicCard from "@/components/our components/TopicCard";
import databaseManagementSystem from "@/utils/databaseManagementSystem";
import React from "react";

const DBMS = () => {
  return (
    <Layout>
      <HeadLIneOfCourse />
      <div className=" text-white p-4">
        {databaseManagementSystem.map((categoryData, index) => (
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

export default DBMS;
