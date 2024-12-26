"use client"
import { IoIosStar } from "react-icons/io";
import React from "react";
import Slider from "react-slick";



const ReviewSlider = () => {
    const reviews = [
        {
            name: "Carolina Monntoya",
            title: "Impeccable service! From punctuality to the pristine condition of the vehicles, RPC Limo made our corporate\n" +
                "            event seamless and stylish. Highly recommended!",

            image: "/person1-150x150.jpg",
            rating: <IoIosStar />
        },

        {
            name: "Peter Rose",
            title: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding",

            image: "/person2-150x150.jpg",
            rating: <IoIosStar />

        }

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="max-w-[1200px] shadow-gray-300 shadow-sm mx-auto p-6 mt-[80px] ">
            <h2 className="text-3xl font-bold text-center mb-10 ">Our Satisfied Clients</h2>
            <p className={'mb-10'}>
                At RPC Limo, our success is measured by the satisfaction of our clients. We take immense pride in building lasting relationships and delivering exceptional service that exceeds expectations. Here's what some of our satisfied clients have to say about their experiences
            </p>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg flex flex-col items-center mx-auto justify-center  text-center"
                    >

                        <p className="text-black bg-yellow-400 p-5 text-xl">{review.title}</p>
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-24 h-24 rounded-full mb-4 mx-auto my-5"
                        />
                        <div className={'flex justify-center'}>
                            <p className="text-yellow-400 flex text-xl justify-center text-center my-10 items-center">{review.rating}</p>
                            <p className="text-yellow-400 flex text-xl justify-center text-center  items-center">{review.rating}</p>
                            <p className="text-yellow-400 flex text-xl justify-center text-center  items-center">{review.rating}</p>
                            <p className="text-yellow-400 flex text-xl justify-center text-center  items-center">{review.rating}</p>
                            <p className="text-yellow-400 flex text-xl justify-center text-center  items-center">{review.rating}</p>
                        </div>
                        <h3 className="text-xl font-semibold my-5">{review.name}</h3>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlider;
