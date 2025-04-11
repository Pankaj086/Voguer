import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gray-50">
            <div className="relative h-[300px]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a')] bg-cover bg-fixed">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80">
                        <div className="max-w-6xl mx-auto py-20 px-4">
                            <h1 className="text-4xl font-light text-white mb-4">Contact <span className="font-semibold">Us</span></h1>
                            <p className="text-xl text-gray-200 font-light max-w-2xl">We're here to help and answer any questions you might have.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-all">
                        <FaMapMarkerAlt className="text-2xl text-amber-700 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
                        <p className="text-gray-600 font-light">123 Fashion Avenue</p>
                        <p className="text-gray-600 font-light">Mumbai, Maharashtra 400001</p>
                    </div>
                    <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-all">
                        <FaPhoneAlt className="text-2xl text-amber-700 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
                        <p className="text-gray-600 font-light">+91 98765 43210</p>
                        <p className="text-gray-600 font-light">+91 98765 43211</p>
                    </div>
                    <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-all">
                        <FaClock className="text-2xl text-amber-700 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600 font-light">Mon - Fri: 9:00 - 18:00</p>
                        <p className="text-gray-600 font-light">Sat - Sun: 10:00 - 14:00</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-sm shadow-md">
                        <h2 className="text-2xl font-light text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-amber-700 text-white px-6 py-3 rounded-sm hover:bg-amber-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-sm shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109806000574!3d19.08219783934048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701295798330!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-sm"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;