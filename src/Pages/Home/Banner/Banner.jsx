// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="House Model 1"
              style={{ width: "100%", height: "700px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">Find the luxury home that defines your lifestyle</h2>
              <p>
                We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="House Model 1"
              style={{ width: "100%", height: "700px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">Find the luxury home that defines your lifestyle</h2>
              <p>
                We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="House Model 2"
              style={{ width: "100%", height: "700px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">Find the perfect home that defines your lifestyle</h2>
              <p>We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="House Model 2"
              style={{ width: "100%", height: "700px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">Find the perfect home that defines your lifestyle</h2>
              <p>We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
