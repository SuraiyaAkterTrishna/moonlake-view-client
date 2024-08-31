import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import firstImg from "../../../assets/images/latest/1.png";
import secondImg from "../../../assets/images/latest/2.jpg";
import thirdImg from "../../../assets/images/latest/3.jpg";
import forthImg from "../../../assets/images/latest/4.jpg";
import fifthImg from "../../../assets/images/latest/5.jpg";
import sixthImg from "../../../assets/images/latest/6.jpg";

const LatestProperties = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="text-center w-2/3">
          <h1 className="text-3xl font-semibold">
            Display Latest & Featured Properties
          </h1>
          <p className="text-gray-500">
            With the features and filters provided with the Houzez widgets you
            can turn your visitors attention to the latest listings or the ones
            that are most profitable to buy at the moment.
          </p>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-8"
        >
          <SwiperSlide>
            <div className="relative group">
              <span className="absolute top-0 left-0 z-10 bg-green-600 text-white uppercase px-2 py-1 m-2">
                Featured
              </span>
              <span className="absolute top-0 right-0 z-10 bg-black text-white uppercase px-2 py-1 m-2">
                For sale
              </span>
              <img
                src={firstImg}
                alt="slide1"
                className="w-full brightness-75 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
              />
              <h3 className="absolute inset-0 flex items-end justify-center text-center mb-4 text-4xl capitalize text-white transition duration-300 ease-in-out group-hover:text-white">
                Luxurious Villa with Ocean View
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative group">
              <span className="absolute top-0 left-0 z-10 bg-green-600 text-white uppercase px-2 py-1 m-2">
                Featured
              </span>
              <span className="absolute top-0 right-0 z-10 bg-black text-white uppercase px-2 py-1 m-2">
                For Rent
              </span>
              <img
                src={secondImg}
                alt="slide2"
                className="w-full brightness-75 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
              />
              <h3 className="absolute inset-0 flex items-end justify-center text-center capitalize mb-4 text-4xl text-white transition duration-300 ease-in-out group-hover:text-white">
                Cozy Downtown Apartment
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group">
              <span className="absolute top-0 left-0 z-10 bg-green-600 text-white uppercase px-2 py-1 m-2">
                Featured
              </span>
              <span className="absolute top-0 right-0 z-10 bg-black text-white uppercase px-2 py-1 m-2">
                For sale
              </span>
              <img
                src={thirdImg}
                alt="slide3"
                className="w-full brightness-75 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
              />
              <h3 className="absolute inset-0 flex items-end justify-center mb-4 text-4xl text-center capitalize text-white transition duration-300 ease-in-out group-hover:text-white px-8">
                Spacious Suburban Home
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group">
              <span className="absolute top-0 left-0 z-10 bg-green-600 text-white uppercase px-2 py-1 m-2">
                Featured
              </span>
              <span className="absolute top-0 right-0 z-10 bg-black text-white uppercase px-2 py-1 m-2">
                For rent
              </span>
              <img
                src={forthImg}
                alt="slide4"
                className="w-full brightness-75 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
              />
              <h3 className="absolute inset-0 flex items-end justify-center mb-4 text-4xl px-8 text-center capitalize text-white transition duration-300 ease-in-out group-hover:text-white">
                Modern Loft in the United
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group">
              <span className="absolute top-0 left-0 z-10 bg-green-600 text-white uppercase px-2 py-1 m-2">
                Featured
              </span>
              <span className="absolute top-0 right-0 z-10 bg-black text-white uppercase px-2 py-1 m-2">
                For sale
              </span>
              <img
                src={fifthImg}
                alt="slide5"
                className="w-full brightness-75 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
              />
              <h3 className="absolute inset-0 flex items-end justify-center mb-4 text-4xl text-center capitalize text-white transition duration-300 ease-in-out group-hover:text-white">
                Charming Cottage in City house
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group">
              <span className="absolute top-0 left-0 z-10 bg-green-600 text-white uppercase px-2 py-1 m-2">
                Featured
              </span>
              <span className="absolute top-0 right-0 z-10 bg-black text-white uppercase px-2 py-1 m-2">
                For rent
              </span>
              <img
                src={sixthImg}
                alt="slide6"
                className="w-full brightness-75 object-cover group-hover:brightness-50 transition duration-300 ease-in-out"
              />
              <h3 className="absolute inset-0 flex items-end justify-center mb-4 text-4xl text-center capitalize text-white transition duration-300 ease-in-out group-hover:text-white">
                Luxury Penthouse for passion
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LatestProperties;
