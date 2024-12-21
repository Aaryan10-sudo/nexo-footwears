import React from "react";
import { HashRouter } from "react-router-dom";

export default function page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Get in touch
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-500">
            We are always here to chat and help you ...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-violet-600 rounded-full bg-violet-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-500">
              We are here to help.
            </p>
            <p className="mt-2 text-violet-600 dark:text-violet-500">
              lazyfox916@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-violet-600 rounded-full bg-violet-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Store
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-500">
              Come visit us !!!
            </p>
            <p className="mt-2 text-violet-600 dark:text-violet-500">
              Budhanikantha - 12 Kapan Kathmandu
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-violet-600 rounded-full bg-violet-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Phone
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-500">
              Sun-Sat from 10am to 8pm.
            </p>
            <p className="mt-2 text-violet-600 dark:text-violet-500">
              +977 9761637657
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:p-10 p-3 mx-auto max-w-[1080px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.594517254941!2d85.3524452740541!3d27.729803174503157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bdfff137e71%3A0xf75c202e68d1d2c5!2sKapan%20Milan%20Chowk%2C%20Budhanilkantha%2044600!5e0!3m2!1sen!2snp!4v1733667396922!5m2!1sen!2snp"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy=""
        ></iframe>
      </div>
    </section>
  );
}
