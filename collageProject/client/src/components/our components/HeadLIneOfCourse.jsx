import React from "react";
import ProgressBar from "@/components/our components/ProgressBar";

const HeadLIneOfCourse = () => {
  return (
    <div className="mb-5 p-3">
      <h1 className="text-5xl font-semibold">Data Structures Algorithms</h1>
      <p className="pt-2 font-normal text-gray-300 tracking-tighter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odit?
        Exercitationem aut harum, laudantium expedita repellat eius itaque nemo
        magni perferendis possimus adipisci fugit maiores sapiente ea placeat
        temporibus consequuntur. Minus aliquid expedita dicta esse maiores neque
        fugiat nulla, illum tenetur? Vitae officia sint totam, ut, possimus nisi
        id quibusdam corrupti incidunt modi voluptatem excepturi, corporis
        minima illo animi suscipit.
      </p>
      <div className="pt-5">
        <ProgressBar />
      </div>
    </div>
  );
};

export default HeadLIneOfCourse;
