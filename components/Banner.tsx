import React from "react";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Bang's Blog</h1> <br />
        <h2 className="mt-5 md:mt-0">Welcome every developer with passion</h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm animate-pulse">
        New products features ! The newest cutting-edge technologies !
      </p>
    </div>
  );
}

export default Banner;
