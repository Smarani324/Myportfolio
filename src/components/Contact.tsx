import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_g7lwqta',
        'template_ypgk1ca',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Kola Smarani'
        },
        'CsYS90T9wjeD7jQeN'
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      content: "Smaranikola7@gmail.com",
      link: "mailto:Smaranikola7@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      content: "+91 9912515652",
      link: "tel:+919912515652"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      content: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kola-smarani-897003382",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Smarani324/My-portfolio.git",
      color: "bg-slate-800 hover:bg-slate-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Ready to discuss your testing needs or explore collaboration opportunities? 
            Let's connect and talk about how I can help ensure the quality of your software.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, projects, or just having a 
                  conversation about software testing and quality assurance. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm border">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 text-white rounded-lg transition-colors duration-200 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Message Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;