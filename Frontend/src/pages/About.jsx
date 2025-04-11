import Heading from "../components/Heading";
import { FaShippingFast, FaCrown, FaUserShield, FaQuoteLeft } from 'react-icons/fa';
import { MdSupportAgent, MdPayment } from 'react-icons/md';
import Newsletter from "../components/Newsletter";

const About = () => {
    return (
        <div className="bg-gray-50">
            <div className="relative h-[400px] mb-16">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-fixed">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80">
                        <div className="max-w-4xl mx-auto py-28 px-4">
                            <h1 className="text-4xl font-light text-white mb-4">About <span className="font-semibold">Voguer</span></h1>
                            <p className="text-xl text-gray-200 font-light max-w-2xl">Redefining the future of fashion retail through innovation and exceptional service.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-20">
                    <FaQuoteLeft className="text-4xl text-amber-700/20 mb-6" />
                    <p className="text-gray-700 leading-relaxed text-lg font-light">Founded with a vision of transforming the fashion retail landscape, Voguer has established itself as a cornerstone of innovative online shopping. Our commitment to excellence and customer satisfaction drives every decision we make.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all">
                        <h3 className="text-lg uppercase tracking-wider text-amber-800 mb-4 font-medium">Our Mission</h3>
                        <p className="text-gray-600 font-light">To provide accessible, high-quality fashion while delivering an exceptional shopping experience.</p>
                    </div>
                    <div className="bg-white p-8 rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all">
                        <h3 className="text-lg uppercase tracking-wider text-amber-800 mb-4 font-medium">Our Vision</h3>
                        <p className="text-gray-600 font-light">To become the most trusted and preferred online fashion destination.</p>
                    </div>
                    <div className="bg-white p-8 rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all">
                        <h3 className="text-lg uppercase tracking-wider text-amber-800 mb-4 font-medium">Our Values</h3>
                        <p className="text-gray-600 font-light">Quality, integrity, customer focus, and innovation drive everything we do.</p>
                    </div>
                </div>

                <div className="mb-20 bg-white shadow-md">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 bg-gray-900">
                            <h2 className="text-2xl font-light text-white mb-8">Why Choose Voguer</h2>
                            <div className="space-y-6 text-gray-300">
                                <div className="flex items-center gap-4">
                                    <FaShippingFast className="text-2xl text-amber-500" />
                                    <p className="font-light">Global shipping network</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaCrown className="text-2xl text-amber-500" />
                                    <p className="font-light">Premium quality products</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdSupportAgent className="text-2xl text-amber-500" />
                                    <p className="font-light">24/7 Customer support</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaUserShield className="text-2xl text-amber-500" />
                                    <p className="font-light">Secure shopping experience</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdPayment className="text-2xl text-amber-500" />
                                    <p className="font-light">Multiple payment options</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04')] bg-cover bg-center"></div>
                    </div>
                </div>

                <div className="text-gray-700 bg-white p-12 shadow-md mb-20">
                    <p className="text-lg font-light leading-relaxed mb-6">We're committed to providing you with the best online shopping experience possible. Our dedicated customer service team is always here to assist you with any questions or concerns.</p>
                    <p className="text-amber-800 text-sm uppercase tracking-wider">Voguer — Defining Modern Retail Excellence</p>
                </div>

                <Newsletter />
            </div>
        </div>
    )
}

export default About