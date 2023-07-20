import React from 'react'
import MobileNav from './MobileNav'
import Nav2 from '../component/Nav2'
import { Link } from 'react-router-dom'

export default function DeliveryPolicy() {
  return (
    <div className="text-white md:bg-white bg-[#000000d9] " >

    <Nav2 />
    <MobileNav />

  <footer className="text-gray-900 bg-white py-4 mt-20 md:mt-0 md:pt-20 text-center absolute w-full h-max">
  
    <h1 className="text-6xl m-5 text-center">
        Delivery Policy
      </h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
              
1. Shipping Methods and Timelines:


a: We offer shipping for physical products through reliable courier services.


b: The estimated delivery time for physical products will vary based on the shipping destination and will be communicated during the checkout process.


c: Digital twins (NFTs) will be delivered electronically through secure channels, and access to them will be granted upon successful purchase and verification.
            </h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
              

  2. Order Processing: 


a:  Once an order for physical products or digital twins is placed and payment is successfully processed, we will initiate order processing promptly. 


b:  For physical products, please permit 1 - 2 commercial days for your order to be processed. Processing time is not covered within the anticipated delivery time at checkout. During high volume of sales, the processing time is 3-4 days. 


c:  Digital twins will be accessible immediately upon verification of the purchase.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
              

 
3. Shipping Costs: 


a: Shipping costs for physical products will be calculated based on the destination, size, and weight of the package. 


b: The applicable shipping charges will be clearly displayed during the checkout process, allowing customers to review the costs before finalizing the purchase
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
              
  4. Tracking Orders: 

a: For physical product shipments, we will provide tracking information as soon as it becomes available from the shipping provider. 


b: Customers will receive an email notification with the tracking details, enabling them to monitor the progress of their shipment
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  5. International Shipping: 


a: We offer international shipping to select countries. However, customs duties, taxes, and additional fees may apply, which will be the responsibility of the customer. 


b: The customer is advised to review the customs regulations and any additional charges specific to their country before placing an order.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  6. Delivery Issues and Returns: 


a: In the event of any delivery issues, such as delayed or lost shipments, customers are encouraged to contact our customer support team for assistance. 


b: For physical product returns or exchanges, our standard return policy will apply, which can be found on our website. 


c: Digital twins (NFTs) are non-refundable once the purchase is confirmed and the access is granted, as they are unique digital assets.
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  7. Communication and Updates: 


a: We will communicate important updates regarding order status, delivery delays, or any other relevant information via email or other contact details provided during the order placement process.
 

b: Customers are responsible for providing accurate contact information to ensure smooth communication and timely updates
</h1>
  <h1 className="md:text-3xl  text-lg mb-8 ">
  8. Ownership and Authenticity of Digital Twins (NFTs): 


a:  We guarantee the authenticity and ownership of the digital twins (NFTs) sold on our website. 


b: Each digital twin (NFT) is created and verified on a blockchain platform, ensuring the uniqueness and traceability of the asset.
</h1>
  <h1 className="md:text-3xl  text-lg mb-0 ">
  9. Force Majeure: 


a: In the event of unforeseen circumstances or force majeure events that may impact the delivery timelines or availability of digital twins (NFTs), we will make reasonable efforts to notify customers and minimize any inconvenience caused.
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
