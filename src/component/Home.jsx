import React, { useState } from "react";
import { ShoppingCart, Leaf, Clock, Truck, Mail, Phone, MapPin, Users, Target, Heart } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    return (
    <div>   
        <div className="bg-black min-h-screen pb-20">
        <Navbar />
            {/* HERO SECTION */}
            <div className="px-6 md:px-12 lg:px-20 pt-20 lg:pt-32 text-white">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10">
                <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    groceries <br />
                    <span className="text-yellow-500">delivery</span> in 15 mins
                    </h1>

                    <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                    Get fresh groceries delivered to your doorstep in just 15 minutes. 
                    Quality products, unbeatable prices, and lightning-fast delivery 
                    that fits your schedule.
                    </p>

                    <button className="mt-8 bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                    Order Now
                    </button>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full p-12 lg:p-20">
                        <Leaf className="w-32 h-32 lg:w-48 lg:h-48 text-white animate-pulse" />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="px-6 md:px-12 lg:px-20 mt-32">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors">
                    <Clock className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">15 Min Delivery</h3>
                    <p className="text-gray-400">Lightning-fast delivery straight to your door. Fresh products in minutes, not hours.</p>
                </div>

                <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors">
                    <Leaf className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">Fresh Products</h3>
                    <p className="text-gray-400">Handpicked fresh fruits, vegetables, and groceries sourced from trusted suppliers.</p>
                </div>

                <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors">
                    <Truck className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">Free Delivery</h3>
                    <p className="text-gray-400">Enjoy free delivery on orders above $30. Save more with every purchase.</p>
                </div>
                </div>
            </div>

            {/* CTA SECTION */}
            <div className="px-6 md:px-12 lg:px-20 mt-32">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-bold text-black mb-4">Ready to Get Started?</h2>
                <p className="text-black text-lg mb-8">Join thousands of happy customers enjoying fast, fresh grocery delivery.</p>
                <button className="bg-black text-yellow-500 hover:bg-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Download App
                </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
};
export default Home;