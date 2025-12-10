import React from 'react'
import { ShoppingCart, Leaf, Clock, Truck, Mail, Phone, MapPin, Users, Target, Heart } from "lucide-react";
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div>
        < Navbar />
        <div className="bg-black min-h-screen pb-20">
            <div className="px-6 md:px-12 lg:px-20 pt-20">
                {/* Header */}
                <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                    Revolutionizing grocery shopping with technology and commitment to freshness
                </p>
                </div>

                {/* Story Section */}
                <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-bold text-yellow-500 mb-6">Our Story</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Founded in 2020, FreshCart started with a simple mission: make fresh groceries accessible to everyone, anytime. We saw how busy lives made it difficult for people to shop for quality groceries, and we knew there had to be a better way.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Today, we serve thousands of customers across the city, delivering fresh produce, pantry staples, and household essentials in just 15 minutes. Our commitment to quality, speed, and customer satisfaction has made us a trusted name in grocery delivery.
                </p>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                    <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-gray-400">To make fresh, quality groceries accessible to everyone through technology and exceptional service.</p>
                </div>

                <div className="text-center">
                    <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Values</h3>
                    <p className="text-gray-400">Quality, speed, and customer satisfaction drive everything we do. We never compromise on freshness.</p>
                </div>

                <div className="text-center">
                    <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Team</h3>
                    <p className="text-gray-400">A dedicated team of professionals committed to delivering excellence with every order.</p>
                </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                    <div className="text-4xl md:text-5xl font-bold text-black mb-2">50K+</div>
                    <div className="text-black font-semibold">Happy Customers</div>
                    </div>
                    <div>
                    <div className="text-4xl md:text-5xl font-bold text-black mb-2">15</div>
                    <div className="text-black font-semibold">Min Delivery</div>
                    </div>
                    <div>
                    <div className="text-4xl md:text-5xl font-bold text-black mb-2">5000+</div>
                    <div className="text-black font-semibold">Products</div>
                    </div>
                    <div>
                    <div className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</div>
                    <div className="text-black font-semibold">Support</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        < Footer />
    </div>
  )
}

export default About