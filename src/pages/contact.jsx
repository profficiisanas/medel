// Contact.js
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto mt-8 ">
            <br /><br /><br /><br /><br />
            <h1 className="text-2xl font-bold mb-4 flex flex-col items-center">Nous contacter</h1>
            <p className="mb-4"></p><br /><br />
            <div className="flex flex-col md:flex-row justify-between ml-10">
                <div className="md:w-1/3 flex items-center mb-4 md:mb-0 md:ml-4">
                    <div>
                        <FaEnvelope className="text-lg mr-2" />
                        <h2 className="text-lg font-semibold">Email</h2>
                        <a  href="mailto:contact@luminis.com" className="text-gray-600">contact@luminis.com</a>
                    </div>
                </div>
                <div className="md:w-1/3 flex items-center md:ml-4">
                    
                    <div>
                        <FaPhone className="text-lg mr-2" />
                        <h2 className="text-lg font-semibold">Téléphone</h2>
                        <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2 flex flex-col items-center">Envoyez-nous un message</h2>
                <form className='ml-5'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold">Nom</label>
                        <input type="text" id="name" name="name" className="border-gray-400 border w-full px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold">Email</label>
                        <input type="email" id="email" name="email" className="border-gray-400 border w-full px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-semibold">Message</label>
                        <textarea id="message" name="message" rows="4" className="border-gray-400 border w-full px-3 py-2"></textarea>
                    </div>
                    <button type="submit" className="  bg-black text-white py-2 px-4 rounded hover:bg-black-700">Envoyer</button>
                </form>
            </div>
            <br />
        </div>
    );
};

export default Contact;