import Layout from "@/components/our components/layout";
import ProfileCard from "@/components/our components/ProfileCard";
import ProgressCard from "@/components/our components/ProgressCard";
import React from "react";

const ProfilePage = () => {
  return (
    <Layout>
      <div className=" flex gap-10 w-full h-full">
        <div>
          <ProfileCard></ProfileCard>
        </div>

        <div className="w-full">
          <ProgressCard></ProgressCard>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
