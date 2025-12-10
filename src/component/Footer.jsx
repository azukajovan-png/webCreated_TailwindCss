import React from 'react'
import { ShoppingCart,} from "lucide-react";

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                <div className="flex items-center gap-2 mb-4">
                    <ShoppingCart className="h-8 w-8 text-yellow-500" />
                    <span className="text-2xl font-bold">FreshCart</span>
                </div>
                <p className="text-gray-400">Fresh groceries delivered in 15 minutes. Quality you can trust.</p>
                </div>

                <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <div className="space-y-2">
                    <p className="text-gray-400 hover:text-yellow-500 cursor-pointer">About Us</p>
                    <p className="text-gray-400 hover:text-yellow-500 cursor-pointer">Careers</p>
                    <p className="text-gray-400 hover:text-yellow-500 cursor-pointer">Blog</p>
                </div>
                </div>

                <div>
                <h4 className="font-bold text-lg mb-4">Support</h4>
                <div className="space-y-2">
                    <p className="text-gray-400 hover:text-yellow-500 cursor-pointer">Help Center</p>
                    <p className="text-gray-400 hover:text-yellow-500 cursor-pointer">Privacy Policy</p>
                    <p className="text-gray-400 hover:text-yellow-500 cursor-pointer">Terms of Service</p>
                </div>
                </div>

                <div>
                <h4 className="font-bold text-lg mb-4">Download App</h4>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold mb-2 w-full hover:bg-yellow-400 transition-colors">
                    iOS
                </button>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold w-full hover:bg-yellow-400 transition-colors">
                    Android
                </button>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2024 FreshCart. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer;