
// import React from 'react'
// import { assets } from '../assets/assets'
// export const Footer = () => {
//   return (
//     <div className="md:mx-10">
//       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  ">
//         {/* -------Left Section ----*/}
//         <div>
//         <img className="mb-5 w-40" src={assets.logo} alt="" />
//           <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
//           Need Assistance? 
// If you have questions about booking your appointment, call us or email us at gashawsissay@gmail.com 

// <br />Cancellation Policy:
// Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment.
// <br />

// Additional Information
// Patient Safety: Your health and safety are our top priorities. Learn more about the measures we take to keep you safe during your visit.
// <br />Privacy Assurance: Your personal information is secure with us. Read our Privacy Policy for more details.
// Emergency Contact: If you are experiencing a medical emergency, please dial 911 or visit your nearest emergency room.
// </p>
//         </div>
//         {/*-------middle section -----*/}
//         <div>
//           <p className="text-xl font-medium mb-5">COMPANY</p>
//           <ul className="flex flex-col gap-2 text-gray-600">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Contact us</li>
//             <li>Privacy policy</li>
//             <li>Services Offered</li>
//             <li>Meet Our Doctors</li>
//             <li>Patient Testimonials</li>
//             <li>Terms and Conditions</li>
//             <li>FAQs</li>
//           </ul>
//         </div>
//         {/*-------right section -----*/}
//         <div>
//           <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-2 text-gray-600">
//             <li>+251-920-929-067</li>
//             <li>Gmail:gashawadane2024@gmail.com </li>
//           <li>Facebook: [Link]</li>
//           <li>Twitter: [Link]</li>
//           <li>Instagram: [Link]</li>
//           <li>LinkedIn: [Link]</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         {/*-----Copyright Text */}
//         <hr />
//         <p className="py-5 text-sm text-center">
//           Copyright 2024&copy; Prescripto :- All Right Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };





import React from 'react';
import { assets } from '../assets/assets';

 const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* ------- Left Section ---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Need Assistance? If you have questions about booking your appointment, call us or email us at <a href="mailto:gashawsissay@gmail.com">gashawsissay@gmail.com</a>.
          </p>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Cancellation Policy: Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment.
          </p>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Additional Information:
            <br />
            Patient Safety: Your health and safety are our top priorities. Learn more about the measures we take to keep you safe during your visit.
            <br />
            Privacy Assurance: Your personal information is secure with us. Read our Privacy Policy for more details.
            <br />
            Emergency Contact: If you are experiencing a medical emergency, please dial 911 or visit your nearest emergency room.
          </p>
        </div>
        
        {/* ------- Middle Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Services Offered</li>
            <li>Meet Our Doctors</li>
            <li>Patient Testimonials</li>
            <li>Terms and Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
        
        {/* ------- Right Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
    <li>Phone: +251-920-929-067</li>
    <li>
      Email: 
      <a 
        href="mailto:gashawadane2024@gmail.com" 
        className="underline text-blue-600"
      >
        gashawadane2024@gmail.com
      </a>
    </li>
    <li>
      Facebook: <a href="[Facebook Link]" target="_blank" rel="noopener noreferrer">[Link]</a>
    </li>
    <li>
      Twitter: <a href="[Twitter Link]" target="_blank" rel="noopener noreferrer">[Link]</a>
    </li>
    <li>
      Instagram: <a href="[Instagram Link]" target="_blank" rel="noopener noreferrer">[Link]</a>
    </li>
    <li>
      LinkedIn: <a href="[LinkedIn Link]" target="_blank" rel="noopener noreferrer">[Link]</a>
    </li>
  </ul>
        </div>
      </div>
      
      <div>
        {/* ----- Copyright Text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 &copy; Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer
// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
// return (
//     <div className='md:mx-10'>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//             {/*--------Left Side------ */}
//             <div>
//                 <img className='mb-5 w-40' src={assets.logo} alt="" />
//                 <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//             </div>
//             {/*--------Center Side------ */}
//             <div>
//                 <p className='text-xl font-medium mb-5'>COMPANY</p>
//                 <ul className='flex flex-col gap-2 text-gray-600'>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Contact us</li>
//                     <li>Privacy policy</li>
//                 </ul>
//             </div>
//             {/*--------Right Side------ */}
//             <div>
//                 <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//                 <ul className='flex flex-col gap-2 text-gray-600'>
//                     <li>+251-986284241</li>
//                     <li>malodev@gmail.com</li>
//                 </ul>
//             </div>
//         </div>
//         {/*-------Copyright text ------- */}
//         <div>
//             <hr />
//             <p className='py-5 text-sm text-center'>Copyright © 2024 malodev - All Right Reserved.</p>
//         </div>
//     </div>
// )
// }

// export default Footer