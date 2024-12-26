"use client"
import React from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Message sent successfully!");
        reset();
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={'mt-1 p-2 w-full border  ${errors.subject ? "border-red-500" : "border-gray-300"}                        }'}
                        placeholder={"Enter your Name"}
                        {...register('name',{
                            required: "Enter your Name",
                            pattern: {
                                value: /^[a-zA-Z\s]*$/g ,
                                message: "Only Characters Not Numbers",
                            },

                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters long",
                            },
                            maxLength: {
                                value: 20,
                                message: "Name must not exceed 20 characters",
                            },
                        })}/>
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1 font-bold">{errors.name.message}</p>
                    )}
                </div>


                {/* Email Field*/}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className={`mt-1 p-2 w-full border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Your Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1 font-bold">{errors.email.message}</p>
                    )}
                </div>

                {/* Subject Field*/}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className={'mt-1 p-2 w-full border  ${errors.subject ? "border-red-500" : "border-gray-300"}                        }'}
                        placeholder={"Subject"}
                        {...register('subject',{
                            required: "Enter your Subject",

                            minLength: {
                                value: 10,
                                message: "Subject must be at least 10 characters long",
                            },
                            maxLength: {
                                value: 20,
                                message: "Subject must not exceed 50 characters",
                            },
                        })}/>
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1 font-bold">{errors.subject.message}</p>
                    )}
                </div>

                {/* Message Field*/}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        {...register("message", { required: "Message is required" })}
                        className={`mt-1 p-2 w-full border ${
                            errors.message ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Your Message"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1 font-bold">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button*/}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};


