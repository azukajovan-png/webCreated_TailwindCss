import React from 'react'
import { ShoppingCart, Leaf, Clock, Truck, Mail, Phone, MapPin, Users, Target, Heart } from "lucide-react";
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
        < Navbar />
        <div className="bg-black min-h-screen pb-20">
            <div className="px-6 md:px-12 lg:px-20 pt-20">
                {/* Header */}
                <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                    Have questions? We're here to help. Reach out to us anytime.
                </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-900 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-yellow-500 mb-6">Send us a Message</h2>
                    <div className="space-y-6">
                    <div>
                        <label className="text-white block mb-2 font-semibold">Name</label>
                        <input 
                        type="text" 
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-2 font-semibold">Email</label>
                        <input 
                        type="email" 
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-2 font-semibold">Subject</label>
                        <input 
                        type="text" 
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="How can we help?"
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-2 font-semibold">Message</label>
                        <textarea 
                        rows="5"
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-yellow-500 outline-none transition-colors resize-none"
                        placeholder="Your message..."
                        ></textarea>
                    </div>

                    <button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-4 rounded-lg font-semibold text-lg transition-colors">
                        Send Message
                    </button>
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <div className="bg-gray-900 rounded-2xl p-8 mb-6">
                    <h2 className="text-3xl font-bold text-yellow-500 mb-6">Get in Touch</h2>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                        <div className="bg-yellow-500 p-3 rounded-lg">
                            <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Phone</h3>
                            <p className="text-gray-400">+1 (555) 123-4567</p>
                            <p className="text-gray-400">Mon-Sun, 8am-10pm</p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                        <div className="bg-yellow-500 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Email</h3>
                            <p className="text-gray-400">support@freshcart.com</p>
                            <p className="text-gray-400">We'll respond within 24 hours</p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                        <div className="bg-yellow-500 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Address</h3>
                            <p className="text-gray-400">123 Fresh Street</p>
                            <p className="text-gray-400">New York, NY 10001</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-black mb-3">Need Immediate Help?</h3>
                    <p className="text-black mb-6">Our customer support team is available 24/7</p>
                    <button className="bg-black text-yellow-500 hover:bg-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Chat with Support
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        < Footer />
    </div>
  )
}

export default Contact