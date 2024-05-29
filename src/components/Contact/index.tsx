'use client'
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

// End point when submitted
const SUBMIT_FORM_ENDPOINT = "http://api.internationalfruithub.com/api/v1/submit-form";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validate = (): Errors => {
    const errors: Errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with form submission
      setIsSubmitting(true);
      setErrors({});
      setSuccessMessage("");
      
      try {
        const response = await fetch(SUBMIT_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
          setSuccessMessage("Your message has been sent successfully!");
        } else {
          const errorData = await response.json();
          setErrors({ submit: errorData.message || "Something went wrong. Please try again." });
        }
      } catch (error) {
        setErrors({ submit: "Something went wrong. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="overflow-hidden relative py-16 md:py-20 lg:py-28 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 ">
            <div
              className="mb-12 rounded-2xl shadow-2xl hover:shadow-sm transform hover:translate-y-2 transition-all ease duration-300 bg-white px-8 py-11 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              {successMessage && (
                <p className="text-green-500 text-sm mb-4">{successMessage}</p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>
                  </div>
                  {errors.submit && (
                    <div className="w-full px-4">
                      <p className="text-red-500 text-sm mb-4">{errors.submit}</p>
                    </div>
                  )}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-white hover:text-primary font-bold border-2 border-primary rounded px-9 py-4 text-base text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Your Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
