"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear messages when user starts typing
    if (successMsg || errorMsg) {
      setSuccessMsg("");
      setErrorMsg("");
    }
  };

  const validateForm = () => {
    if (!formData.fullname.trim()) {
      setErrorMsg("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Please enter your email");
      return false;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please enter your message");
      return false;
    }
    if (formData.message.length < 10) {
      setErrorMsg("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/mblykpke", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("Message sent successfully! We'll get back to you soon.");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
      } else {
        setErrorMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMsg("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="p-10 bg-[#101010]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side: Map and Info */}
        <div>
          <iframe
            className="w-full h-96 rounded-lg shadow-lg cursor-pointer border border-gray-700"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.799647935151!2d73.04835567551087!3d33.709527135429154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf4cf28ad71b%3A0x4b7332d85f4e930b!2sF-8%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1718791667000!5m2!1sen!2s"
            title="F-8 Markaz Islamabad"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Phone className="text-[#e0c840] w-5 h-5" />
              <div>
                <p className="font-semibold text-sm">Phone Number</p>
                <a href="tel:+923008104915" className="text-[#b9b4b4] hover:text-[#e0c840] transition-colors text-sm">
                  +92 300 8104915
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Mail className="text-[#e0c840] w-5 h-5" />
              <div>
                <p className="font-semibold text-sm">Email Address</p>
                <a href="mailto:Arslan.khizar45@gmail.com" className="text-[#b9b4b4] hover:text-[#e0c840] transition-colors text-sm">
                  Arslan.khizar45@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 md:col-span-2">
              <MapPin className="text-[#e0c840] w-5 h-5" />
              <div>
                <p className="font-semibold text-sm">Address</p>
                <p className="text-[#b9b4b4] text-sm">F-8 Markaz Islamabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl h-fit self-start border border-[#e0c840]/20 max-w-xl w-full">
          <h5 className="text-sm font-semibold text-[#e0c840] mb-2">CONTACT US</h5>
          <h3 className="text-2xl font-bold mb-4">HELLO, HAVE ANY QUESTION?</h3>
          <p className="text-[#b9b4b4] mb-6">
            Have a project in mind or just want to say hello? Fill out the form below — I'd love to hear from you and will get back shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-600 bg-white/5 text-white p-3 rounded-lg focus:border-[#e0c840] focus:outline-none transition-colors placeholder-gray-400"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-600 bg-white/5 text-white p-3 rounded-lg focus:border-[#e0c840] focus:outline-none transition-colors placeholder-gray-400"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                className="w-full border border-gray-600 bg-white/5 text-white p-3 rounded-lg focus:border-[#e0c840] focus:outline-none transition-colors placeholder-gray-400 resize-none"
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e0c840] text-black py-3 px-4 rounded-lg hover:bg-yellow-300 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Success & Error Messages */}
          <div className="mt-4">
            {successMsg && (
              <div className="text-green-400 bg-green-900/20 border border-green-500/30 px-4 py-3 rounded-lg">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="text-red-400 bg-red-900/20 border border-red-500/30 px-4 py-3 rounded-lg">
                {errorMsg}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
