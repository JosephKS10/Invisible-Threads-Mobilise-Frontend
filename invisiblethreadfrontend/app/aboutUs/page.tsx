import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* Team<AnimatedListDemo/> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Title */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl pt-5 font-bold md:text-4xl md:leading-tight">Our Team</h2>
  </div>
  {/* End Title */}

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
    <div className="text-center">
      <Image className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://avatars.githubusercontent.com/u/119341956?v=4" alt="Avatar" />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-white sm:text-base lg:text-lg">
          Ayush Indapure
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          Front-end Developer
        </p>
      </div>
    </div>
    {/* End Col */}

    <div className="text-center">
      <Image className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://avatars.githubusercontent.com/u/77894439?v=4" alt="Avatar" />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-white sm:text-base lg:text-lg">
          Joseph Joestar
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          AI Engineer
        </p>
      </div>
    </div>
    {/* End Col */}

    <div className="text-center">
      <Image className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://avatars.githubusercontent.com/u/62185049?v=4" alt="Avatar" />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-white sm:text-base lg:text-lg">
          Parth Vaghela
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          Backend Developer
        </p>
      </div>
    </div>
    {/* End Col */}

    <div className="text-center">
      <Image className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://i.ibb.co/W4qbVgLc/Screenshot-2025-03-28-at-8-57-19-PM.png" alt="Avatar" />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm font-medium text-white sm:text-base lg:text-lg">
          Gaurav Myana
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          3d / VFX Artist
        </p>
      </div>
    </div>
    {/* End Col */}


  </div>
  {/* End Grid */}
</div>
{/* End Team */}
    </div>
  )
}

export default page