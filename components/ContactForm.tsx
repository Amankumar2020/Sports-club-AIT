import {useState} from 'react'

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
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

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log("submitted")
        alert("This feature is not yet implemented")
    //     fetch("/api/send-email", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }).then((res) => {
    //       console.log("Response received");
    //       if (res.status === 200) {
    //         console.log("Response succeeded!");
    //       }
    //     });
    }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        id="form"
        className="needs-validation"
      >
        <input type="hidden" />
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          name="botcheck"
        />
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          {/* <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please provide your full name.
          </div> */}
        </div>
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none  ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4"
          />
          {/* <div className="empty-feedback mt-1 text-sm text-red-400">
            Please provide your email address.
          </div> */}
          {/* <div className="invalid-feedback mt-1 text-sm text-red-400">
            Please provide a valid email address.
          </div> */}
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className="h-36 w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4"
            defaultValue={""}
            value={formData.message}
            onChange={handleChange}
          />
          {/* <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please enter your message.
          </div> */}
        </div>
        <button
          className="w-full rounded border-2 border-transparent bg-black py-3 text-center text-white ring-gray-200 ring-offset-2 transition hover:bg-slate-900 focus-visible:ring-2 md:px-5 md:py-2.5 lg:px-6"
          type="submit"
        >
          Send Message
        </button>
        <div id="result" className="mt-3 text-center" />
      </form>
    </>
  );
}

export default ContactForm