import { MdMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
const NavBar =({className})=>{
    return (
        <div className={`${className} w-full flex justify-between items-center`  }>
         <div className ="m-2" > 
            <input  className="bg-[#2a2b30] p-1 px-2 h-6 border rounded-md" placeholder="Search"></input>
         </div>
         <div  className="flex items-center mx-4 ">
                <div className="text-[#808184] m-1 border-none rounded-full  bg-[#44454a]"><MdMailOutline  size={30} style={{ fill: 'grey', padding:'0.3rem' }}  /></div>
                <div className= " text-[#808184] m-1  border-none rounded-full  bg-[#44454a]"><IoSettingsOutline size={30} style={{ fill: 'grey', padding:'0.3rem' }} /></div>
                <div className=" text-[#808184] m-1  border-none rounded-full  bg-[#44454a]"><IoNotificationsOutline  size={30} style={{ fill: 'grey', padding:'0.3rem'}} /></div>
                <div className=" text-[#808184] m-1  border-none rounded-full  bg-[#44454a]"><img width="30rem" height="30rem"  className="rounded-full object-fill "  src="../images/vipinimg1.jpg"></img></div>
                
                </div>
        </div>
    )
}
export default NavBar;