import React from "react";
import contactBg from "../../public/bg-image.jpeg";

export default function BookSeat() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover opacity-25 hover:opacity-35"
        height="1200"
        src={contactBg.src}
        style={{
          aspectRatio: "1200/800",
          objectFit: "cover",
        }}
        width="1200"
      />
      <div className="relative z-10 text-center space-y-6 px-4 md:px-6">
        {/* uper jo ana hai woe */}
        <div className="text-white body-font ">
          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-5xl text-3xl font-extrabold title-font mb-4 text-white">
                Book a Seat
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                Reserve your table by filling out the form below.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-5">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="date"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="time"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="">
                    <label
                      htmlFor="partySize"
                      className="leading-7 text-lg font-bold text-red-600"
                    >
                      Party Size
                    </label>
                    <input
                      type="number"
                      id="partySize"
                      name="partySize"
                      min="1"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
