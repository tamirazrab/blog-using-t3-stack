import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

const HomePage = () => {
  const tags = ["css", "html", "js"];
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-200 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Blog</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-800 hover:text-gray-800">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-12">
        <main className="col-span-8 h-full w-full border-r border-gray-300">
          <div className="flex w-full flex-col space-y-4 px-24 py-10">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-x-gray-300"
              >
                <div className="absolute left-1 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-3xl  px-3 py-1 pl-6 text-sm outline-none placeholder:text-sm placeholder:text-gray-300"
                />
              </label>

              <div className="flex w-full items-center justify-end space-x-4">
                <div>Topics</div>
                <div className="flex items-center space-x-4">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-3xl bg-gray-300/60 px-4 py-1 "
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
           <div className="flex w-full items-center justify-around border-b border-gray-300 pb-7">
            <div>Articles</div>
            <div>
              <button className="flex items-center space-x-2 rounded-3xl border border-gray-500 px-4 py-1.5 font-semibold">
                <div>Following</div>
                <div>
                  <HiChevronDown className="text-xl" />
                </div>
              </button>
            </div>
          </div>
        </main>
        <main className="col-span-4">side bar</main>
      </section>
    </div>
  );
};

export default HomePage;
