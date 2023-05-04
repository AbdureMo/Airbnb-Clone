import React from 'react'

function Try() {
  return (
    <div>
      <div className="mx-5">
        <FaAirbnb className="text-red-500  " style={{ fontSize: 50 }} />
      </div>

      <div className="hidden lg:flex shadow-md hover:shadow-lg cursor-pointer border-2 items-center justify-around rounded-full pl-3 pr-2">
        <p className="pr-3 border-r-2 font-semibold text-[20px] ">Anywhere</p>
        <p className="px-3 border-r-2 font-semibold text-[20px] ">Any week</p>
        <p className="px-3 ">Add guests</p>

        <BiSearch
          className="searchIcon text-white bg-red-500 rounded-full p-[3px]"
          style={{ fontSize: 20 }}
        />
      </div>

      {/* right */}
      <div className="space-x-4 text-gray-500 flex items-center w-full ">
        <p className="cursor-pointer rounded-full p-2 hover:bg-gray-100 text-xl font-semibold ">
          Airbnb your home
        </p>
        <LanguageIcon className="h-6 cursor-pointer rounded-full hover:border-4 hover:scale-150  hover:bg-gray-100 " />
        <DropdownMenu />
      </div>
    </div>
  );
}

export default Try