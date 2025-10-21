import React from 'react'

const SoftwareCategories = () => {

const categories = [
  {
    title: "Hospital Visitor Management System",
    img: "",
    description:
      "Helps hospitals track and control visitor entry efficiently with complete digital records.",
    features: [
      "Generate visitor passes",
      "Restrict access to sensitive areas",
      "Notify staff about visitors",
    ],
  },
  {
    title: "University / Educational Institutions",
    img: "",
    description:
      "Ensures safe and organized visitor entry in schools, colleges, and universities.",
    features: [
      "Track parent and guest visits",
      "Provide visitor IDs",
      "Monitor visiting hours",
    ],
  },
  {
    title: "Gym / Fitness Centers",
    img: "",
    description:
      "Manages new member visits, trainers, and vendors digitally for secure access.",
    features: [
      "Monitor guest visits",
      "Integrate with membership system",
      "Automated check-in/out",
    ],
  },
  {
    title: "Corporate Offices",
    img: "",
    description:
      "Enhances security and professionalism in corporate environments by tracking all visitors and clients.",
    features: [
      "Pre-schedule meetings and visits",
      "Digital ID generation",
      "Notify employees instantly on visitor arrival",
    ],
  },
  {
    title: "Government Buildings",
    img: "",
    description:
      "Supports strict access control and security checks for government premises.",
    features: [
      "Biometric visitor verification",
      "Real-time visitor logs",
      "Department-wise visit authorization",
    ],
  },
  {
    title: "Hotels & Resorts",
    img: "",
    description:
      "Manages guest check-ins, vendors, and service providers for seamless and secure operations.",
    features: [
      "Quick visitor registration",
      "Access level control for restricted areas",
      "Integration with hotel management systems",
    ],
  },
  {
    title: "Factories / Industrial Plants",
    img: "",
    description:
      "Improves site security by tracking workers, suppliers, and maintenance staff.",
    features: [
      "Vehicle and visitor entry logs",
      "Safety compliance verification",
      "Access badge printing",
    ],
  },
  {
    title: "IT Parks & Research Centers",
    img: "",
    description:
      "Supports innovation spaces by managing contractors, guests, and vendors securely.",
    features: [
      "Visitor verification with digital IDs",
      "Time-based access permissions",
      "Custom reports and analytics",
    ],
  },
  {
    title: "Event Venues & Exhibition Halls",
    img: "",
    description:
      "Simplifies the process of managing event attendees, exhibitors, and VIP guests.",
    features: [
      "QR code-based entry",
      "Automated check-ins for guests",
      "Real-time crowd tracking",
    ],
  },
];


   



  return (
    <>
    <div>
      <h1 className='text-4xl mt-5 mb-5 ml-2 font-extrabold' >Software Categories</h1>
      <div className='flex justify-around gap-30 items-center ' >
        <h3  className='text-2xl mt-5 mb-5  w-210 ' >Visitor Management System (VMS)
          is designed to fit multiple domains — from hospitals and gyms to universities and
          corporate offices. Each category below explains how our software improves safety,
          efficiency, and visitor tracking in different environments.</h3>
          <h1 className='text-7xl text-blue-500 text-center' >ENTRACK</h1>
      </div>

<div  className='w-full  text-white flex flex-col gap-20 items-center ' >
  {categories.map((currCategory)=>{
    return     (
      <div className=' bg-black w-[95%] h-60 flex flex-col gap-5 p-3  '  >
      <div   >

         <div  className='flex flex-col gap-5' >
          <div  className='flex flex-col gap-5 text-3xl ' ><h1>{currCategory.title}</h1>
          <p  className='text-2xl' >{currCategory.description}</p></div>
          <img src={currCategory.img} alt="" />
         </div>
     
     <div className='flex flex-row gap-7' >
      {currCategory.features.map((currFeature)=>{
                   return(
                    <div className='p-3 text-1xl bg-blue-400 font-extrabold rounded-3xl'  >{currFeature}</div>
                   )
      })}
     </div>

      </div>
      </div>
    )
  })}
</div>

    </div>
    </>
  )
}

export default SoftwareCategories