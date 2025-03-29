import React from 'react'

const CardsOnBackground = () => {
  return (
    <div>
        {/* Features */}
<div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('https://i.ibb.co/DgWNz4f5/image.png')] bg-center bg-cover bg-no-repeat relative rounded-xl">
    <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
      {/* Card */}
      <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7">
        <div className="hidden md:block">
          <h3 className="text-lg font-bold text-gray-800 sm:text-2xl">Making homelessness everyones problem</h3>
          <p className="mt-2 text-gray-800">Learn more about us.</p>
        </div>

        <div className="md:mt-16">
          <a className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="https://youtu.be/SsbSklIf0vA?feature=shared">
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Watch our story
          </a>
        </div>
      </div>
      {/* End Card */}
    </div>
  </div>
</div>
{/* End Features */}
    </div>
  )
}

export default CardsOnBackground