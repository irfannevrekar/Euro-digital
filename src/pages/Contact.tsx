import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    department: "",
    message: "",
    agreeIP: false,
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Contact number ke liye sirf numbers allow karo
    if (name === "contactNumber") {
      // Sirf numbers aur + symbol (starting mein) allow hai
      const numericValue = value.replace(/[^\d+]/g, "");
      // + symbol sirf start mein allow karo
      const sanitizedValue = numericValue.startsWith("+")
        ? "+" + numericValue.slice(1).replace(/\+/g, "")
        : numericValue.replace(/\+/g, "");

      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
      return;
    }

    // Email validation - proper format check
    if (name === "email") {
      // Email ko lowercase mein convert karo aur extra spaces remove karo
      const cleanedEmail = value.toLowerCase().trim();
      setFormData((prev) => ({
        ...prev,
        [name]: cleanedEmail,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="max-w-[1455px] mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side - Contact Info with Background Image */}
              <div
                className="relative rounded-3xl overflow-hidden p-8 md:p-12 min-h-[700px] flex flex-col justify-center"
                style={{
                  backgroundImage: "url(/contactImages/contact.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/30"></div>

                <div className="relative z-10">
                  <h1
                    className="text-4xl md:text-5xl font-bold mb-3 text-center"
                    style={{ color: "var(--primary-navy)" }}
                  >
                    Contact Us
                  </h1>
                  <p
                    className="text-base mb-10 leading-relaxed text-center"
                    style={{ color: "var(--primary-navy)" }}
                  >
                    See how Company helps you deploy voice AI agents at scale.
                    <br />
                    Need support? Email support@compnay.com
                  </p>

                  {/* Corporate Office (UAE) */}
                  <div className="mb-8 backdrop-blur-sm rounded-2xl p-5 shadow-2xl">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-lg mb-2"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Corporate Office (UAE)
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Euro Digital Technologies LLC,
                          <br />
                          Mussafah Shabiya MBZ-12,
                          <br />
                          Building No. C-201, Office No. M-03,
                          <br />
                          Abu Dhabi, UAE
                        </p>
                      </div>
                    </div>

                    {/* Phone Number UAE */}
                    <div className="flex items-center gap-3 pl-14">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold mb-0.5"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Phone No.
                        </p>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          +971 561874676
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Overseas Partner (India) */}
                  <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-lg mb-2"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Overseas Partner (India)
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Der Deutsche Parkz Level 6,
                          <br />
                          Subhash Nagar Rd,
                          <br />
                          Bhandup (West),
                          <br />
                          Mumbai - 400078, India
                        </p>
                      </div>
                    </div>

                    {/* Phone Number India */}
                    <div className="flex items-center gap-3 pl-14">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold mb-0.5"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Phone No.
                        </p>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          +91 9820638638
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold mb-0.5"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          Email
                        </p>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "var(--primary-navy)" }}
                        >
                          support@eurodigital.site
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--primary-navy)" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--primary-navy)" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address (e.g., example@gmail.com)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      pattern="^\+?[0-9]*$"
                      title="Please enter only numbers (+ allowed at the beginning)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
                      required
                    />
                  </div>

                  {/* Choose Department */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      Choose Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    >
                      <option className="text-black" value="">
                        Select Department
                      </option>
                      <option className="text-black" value="sales">
                        Sales
                      </option>
                      <option className="text-black" value="support">
                        Support
                      </option>
                      <option className="text-black" value="technical">
                        Technical
                      </option>
                      <option className="text-black" value="general">
                        General Inquiry
                      </option>
                    </select>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      required
                    />
                  </div>

                  {/* Agreement Checkboxes */}
                  <div className="space-y-3">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      I agree to the following:
                    </p>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agreeIP"
                        checked={formData.agreeIP}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-gray-300"
                        required
                      />
                      <label className="text-sm text-gray-600">
                        I acknowledge that my IP address, email address are
                        being logged for monitoring my support conversation.
                      </label>
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-gray-300"
                        required
                      />
                      <label className="text-sm text-gray-600">
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-cyan-500 hover:underline"
                        >
                          Terms of Service
                        </a>{" "}
                        and the{" "}
                        <a
                          href="/privacy"
                          className="text-cyan-500 hover:underline"
                        >
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-3 rounded-lg text-white font-medium transition-all hover:shadow-lg cursor-pointer"
                    style={{ backgroundColor: "var(--primary-cyan)" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
