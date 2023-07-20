import React from 'react'
import MobileNav from './MobileNav'
import Nav2 from '../component/Nav2'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="text-white md:bg-white bg-[#000000d9] " >

    <Nav2 />
    <MobileNav />

  <footer className="text-gray-900 bg-white py-4 mt-20 md:mt-0 md:pt-20 text-center absolute w-full h-max">
  

<h1 className="text-6xl m-5 text-center">
        Privacy Policy
      </h1>

  <h1 className="md:text-3xl  text-lg mb-8 ">
 1. Information Collection: 

a: Personal Information: We may collect personal information such as your name, email address, shipping address, billing information, and contact details when you place an order for physical products or digital twins (NFTs). We collect this information to process and fulfill your orders. 


b: NFT Ownership Verification: For digital twins (NFTs), we may require additional information to verify ownership, such as digital wallet addresses or unique identifiers associated with the NFT.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  2. Use of Personal Information: 


a: Order Fulfillment: We use the personal information collected to process and fulfill your orders for physical products and digital twins (NFTs). This includes shipping the products to your designated address or granting access to the digital twins (NFTs). 


b: Communication: We may use your contact information to communicate with you regarding order status, delivery updates, customer support, and promotional offers. 


c: Improving User Experience: We may analyze user behavior and preferences to improve our website, products, and services.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  3. Third-Party Service Providers: 

a: We may engage third-party service providers to assist us in various business operations, such as payment processing, order fulfillment, and website analytics. These providers have access to the personal information needed to perform their respective tasks and are obligated to handle it in accordance with applicable privacy laws.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  4. Sharing of Information: 


a. We do not sell, trade, or rent your personal information to third parties for marketing purposes. 


b. We may disclose your personal information if required by law, regulation, or legal process, or if we believe it is necessary to protect our rights, property, or the safety of others.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  5. Third-Party Service Providers: 

a: We may engage third-party service providers to assist us in various business operations, such as payment processing, order fulfillment, and website analytics. These providers have access to the personal information needed to perform their respective tasks and are obligated to handle it in accordance with applicable privacy laws.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  6. Your Rights: 

a. You have the right to access, update, correct, or delete your personal information. You may also have the right to restrict or object to certain processing activities. Please contact us using the information provided below to exercise your rights. 


b. We will make reasonable efforts to respond to your requests promptly and in accordance with applicable laws.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  7. Updates to the Privacy Policy: 

a. We may update this Privacy Policy from time to time. Any changes will be effective when posted on our website. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.
</h1>



      <div className=" mt-[30%]  w-full justify-center items-center">
        <h1 className=" text-center text-xl md:font-bold font-bold mb-6 mt-2 text-black">
          &copy; Nextberries 2023. All rights reserved <Link className='hover:text-blue-500' to={'/policy'}>Privacy Policy</Link>.
        </h1>
      </div>
  </footer>
  </div>
    )
}
