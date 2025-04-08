import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
        {/* Team<AnimatedListDemo/> */}
        <section className="text-neutral-300 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-[#FFF000]">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/josephavatar.jpeg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-[#FFF000]">Joseph Saji</h2>
            <h3 className="text-neutral-400 mb-3  ">Backend Developer</h3>
            <p className="mb-4">Ambition drives us, but at our core, I'm just pretty simple person</p>

          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src='/hacki.jpg' />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-[#FFF000]">Ayush Indapure</h2>
            <h3 className="text-neutral-400 mb-3  ">Frontend Developer</h3>
            <p className="mb-4">I love desiging and developing web apps, but apart from that, I love reviewing websites on <a href='https://www.awwwards.com/'> Awwwards </a> </p>

          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/parthavatar.jpeg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-[#FFF000]">Parth Vaghela</h2>
            <h3 className="text-neutral-400 mb-3  ">Backend Developer</h3>
            <p className="mb-4">My friends think I'm an extrovert, but deep down I know I'm just a 'commit' to my introverted side(MERN)</p>

          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-top mb-4 mask-radial-at-top"  src="/Gaurav.png" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-[#FFF000]">Gaurav Myana</h2>
            <h3 className="text-neutral-400 mb-3  ">Full Stack (support)</h3>
            <p className="mb-4">I'm always striving for more, but beyond that, I love to play with API's.</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* End Team */}
    </div>
  )
}

export default page