import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub,FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    MobNo: "",
    Sub: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("http://localhost:3001/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to submit");
      }

      setSubmitStatus('success');
      // Clear form
      setFormData({
        name: "",
        email: "",
        MobNo: "",
        Sub: "",
        message: ""
      });
    } catch (err) {
      console.error("Error submitting contact:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400 text-xl" />,
      title: "Email",
      value: "kaverijarali22@gmail.com",
      link: "mailto:kaverijarali22@gmail.com"
    },
    {
      icon: <FaPhone className="text-green-400 text-xl" />,
      title: "Phone",
      value: "+91 88613 09735",
      link: "tel:+918861309735"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400 text-xl" />,
      title: "Location",
      value: "Dharwad, Karnataka, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-500" />,
      name: "LinkedIn",
      url: "linkedin.com/in/kaveri-jarali-99bb41293",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub className="text-gray-300" />,
      name: "GitHub",
      url: "https://github.com/Kaveri-Bhimappa-Jarali",
      color: "hover:text-white"
    }
  ];

  return (
    <section id="contact" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12 border-b border-gray-700 pb-3">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Whether you have feedback on my projects, want to discuss web development, or just want to say hello, 
              I'd love to hear from you! I'm always interested in learning from others and sharing my learning journey.
            </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-300 hover:text-amber-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-gray-400 ${social.color} transition-colors p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600`}
                  >
                    {social.icon}
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#04000D] p-8 rounded-lg shadow-lg border border-gray-800 hover:border-amber-400 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                <div>
                  <h4 className="font-semibold text-green-300">Message Sent Successfully!</h4>
                  <p className="text-green-200 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
                <FaExclamationCircle className="text-red-400 text-xl" />
                <div>
                  <h4 className="font-semibold text-red-300">Failed to Send Message</h4>
                  <p className="text-red-200 text-sm">Please try again or contact me through other channels.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="MobNo" className="block text-gray-300 font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="MobNo"
                  name="MobNo"
                  value={formData.MobNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="Enter your mobile number"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="Sub" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="Sub"
                  name="Sub"
                  value={formData.Sub}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, question, or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
