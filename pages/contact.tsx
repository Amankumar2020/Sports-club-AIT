import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // fetch("/api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((res) => {
    //   console.log("Response received");
    //   if (res.status === 200) {
    //     console.log("Response succeeded!");
    //   }
    // });
  };

  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center px-4">
        {/* <div className="flex w-full max-w-screen-xl flex-col items-center justify-between px-5 md:flex-row lg:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-start lg:w-1/2 lg:text-start">
            <div className="text-5xl font-medium">Get In Touch</div>
            <div className="my-10 text-lg text-gray-600">
              We take our commitment to students seriously. We are always here,
              If you have any query feel free to mail us anytime.
            </div>
          </div>
          <div className="animate-[slide-down-fade_0.9s_ease-in-out]">
            <Image
              className=""
              src="/contact.png"
              width={400}
              height={400}
              alt="contact"
            />
          </div>
        </div>

        <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <form className='' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none h-40"
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
        <div className="center  text-center">
          <div
            slot="title"
            className="text-4xl font-bold lg:text-5xl lg:tracking-tight"
          >
            Contact
          </div>
          <div slot="desc" className="mt-4 text-lg text-slate-600">
            We are a here to help.
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium text-gray-800">Contact</h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-500">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
            <div className="mt-5">
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:map-marker" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span>Army Institute Of Technology , Dighi Hills.</span>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:envelope" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <a href="mailto:sportsclub@aitpune.edu.in">
                  sports@aitpune.edu.in
                </a>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:phone" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <a href="tel:+91 9421938430">+91 94219 38430</a>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:phone" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <a href="https://merchant.razorpay.com/policy/LXkWCKveMYphsB/privacy">
                  Privacy policy
                </a>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:phone" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>

                <a href="https://merchant.razorpay.com/policy/LXkWCKveMYphsB/refund">
                  Refund
                </a>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:phone" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <a href="https://merchant.razorpay.com/policy/LXkWCKveMYphsB/contact_us">
                  Contact Us
                </a>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                {/* <Icon className="h-4 w-4 text-gray-400" name="uil:phone" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>

                <a href="https://merchant.razorpay.com/policy/LXkWCKveMYphsB/terms">
                  Terms and condition
                </a>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
