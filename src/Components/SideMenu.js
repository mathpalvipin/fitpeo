import { PiGridFourFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { TbCheckupList } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";import { GiShoppingBag } from "react-icons/gi";

const SideMenu =({className})=>{
    return (
        <div className={` ${className}  flex flex-col h-full justify-start items-center`}
        >
          <div className="w-full  h-12 mb-6 flex justify-center items-center" >   <PiGridFourFill size={32} style={{ fill: "#7294fe" }} /></div>
          <div className="w-full h-auto flex flex-col justify-start ">
          <div className="w-full h-auto mb-3 border-l-2 border-[#7294fe] flex justify-center items-center" >   <IoMdHome  size={30} style={{ fill: '#7294fe'}} /></div>
          <div className="w-full h-auto mb-3 flex justify-center items-center" >   <VscGraph   size={30} style={{ fill: 'grey' }} /></div>
          <div className="w-full h-auto mb-3 flex justify-center items-center" >   <TbCheckupList   size={30} style={{ fill: 'grey'  }} /></div>
          <div className="w-full h-auto mb-3 flex justify-center items-center" >   <CiWallet  size={30} style={{ fill: 'grey'}} /></div>
          <div className="w-full h-auto mb-3 flex justify-center items-center" >   <GiShoppingBag  size={30} style={{ fill: 'grey'}} /></div>
          
          </div>
        </div>
    )
}

export default SideMenu;