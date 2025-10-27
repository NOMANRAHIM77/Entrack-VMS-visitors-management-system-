import ThirdPage from "../components/ThirdPage"

function FrontPage(){
    return(
<>
<div className="w-screen h-screen "  >
   < ThirdPage />
    <h2 className="bg-white  font-['Play'] text-black absolute bottom-30 w-full text-center  text-[3vw] tracking-widest " >   Manage visitors From Entrance To Exit</h2>
    <h1  className="bg-black  font-['Play'] text-white absolute bottom-0 w-full text-center  text-[6vw] tracking-widest " >ENTRACK</h1>
    <div  className="h-[26vh]" >hello</div>
    <div  className="w-full mt-20  flex justify-center items-center flex-col" >
        <p  className="text-6xl" >OUR TRUSTED USERS</p>
         <div  className="flex justify-around items-center mt-20 gap-60  " >
            <img src="../../public/images/tesla.png" alt=""  className="w-50 h-50"  />
            <img src="../../public/images/bmw.png" alt=""  className="w-75 h-50" />
            <img src="../../public/images/usarmy.png" alt=""  className="w-85 h-80" />
         </div>
    </div>
    
    
    
     <p className=" bg-black mt-30 text-3xl text-white ">
          A smart hybrid Visitor Management System designed for organizations,
          residences, hospitals, and universities — helping you track and manage
          every visitor efficiently and securely.
        </p>
</div>
</>
    )
}
export default FrontPage