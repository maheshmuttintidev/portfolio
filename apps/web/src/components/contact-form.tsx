"use client";
import { useForm } from "react-hook-form";
import Call from "@mui/icons-material/Call";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="md:max-w-md w-full my-custom-card p-8 rounded-lg shadow-md relative">
      <div className="flex justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Contact Me
        </h2>
        <div>
          <a
            href="tel:+919603757304"
            target="_blank"
            rel="noopener"
            className="hover:scale-105 transition-all my-custom-card rounded-lg shadow-inner py-5 px-2 dark:bg-transparent"
            title="Call Mahesh Muttinti"
          >
            <Call sx={{ height: 40, width: 40, color: "royalblue" }} />
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-red-500 sm:text-sm my-custom-card`}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {/* @ts-ignore */}
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-red-500 sm:text-sm my-custom-card`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {/* @ts-ignore */}
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            // @ts-ignore
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-red-500 sm:text-sm my-custom-card`}
          ></textarea>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {/* @ts-ignore */}
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
