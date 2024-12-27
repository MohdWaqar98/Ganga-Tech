import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue">
      <DotLottieReact
        src="https://lottie.host/b4a28780-8ba8-4f3d-9f5d-09c22324c8c5/DiFjCoVy9M.lottie"
        loop
        autoplay
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default Loader;
