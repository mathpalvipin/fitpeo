import { BsBucket } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { BsFillBucketFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import MyTable from "./Table";

import DonutChartWithText from "./Donut"
import BarChartComponent from "./BarChartComponent"
const FirstRow= ()=>{
    
     return (<div className=" w-full h-auto  flex  flex-row-col  flex-col justify-between px-5 items-start ">
      <div className=" h-full  w-full flex  justify-between items-center  flex-wrap mb-3 ">
        <div className="w-[23%] p-3 h-full m-1 bg-[#202028] flex flex-col justify-between min-w-40">
          <div className=" flex flex-col mb-2">
            {" "}
           <div className="bg-[#6b8bf54f] rounded-md  p-2 w-fit mb-2 "><BsFillBucketFill size={32} style={{ fill: "#7294fe" }} /></div> 
            <p className="text-sm">Total Orders </p>
          </div>
          <div className="flex flex-row justify-between w-full items-center     ">
            <h1 className="text-2xl font-bold">75</h1>
            <p className="text-green-600 font-semibold flex flex-row items-center justify-center"><IoMdArrowDropup />3%</p>
          </div>
        </div>
        <div className="w-[23%] p-3 h-full m-1 bg-[#202028] flex flex-col justify-between min-w-40">
          <div className=" flex flex-col mb-2">
            {" "}
           <div className="bg-[#155143] rounded-md  p-2 w-fit mb-2 "><BsFillBucketFill  size={32} style={{ fill: "#00cb8d" }} /></div> 
            <p className="text-sm">Total Delivered </p>
          </div>
          <div className="flex flex-row justify-between w-full items-center     ">
            <h1 className="text-2xl font-bold">70</h1>
            <p className="text-red-600 font-semibold flex flex-row items-center justify-center"><MdArrowDropDown  />3%</p>
          </div>
        </div>
        <div className="w-[23%] p-3 h-full m-1 bg-[#202028] flex flex-col justify-between min-w-40">
          <div className=" flex flex-col mb-2">
            {" "}
           <div className="bg-[#ff5e5e54] rounded-md  p-2 w-fit mb-2 "><BsFillBucketFill size={32} style={{ fill: "#f45c5b" }} /></div> 
            <p className="text-sm">Total Cancelled </p>
          </div>
          <div className="flex flex-row justify-between w-full items-center     ">
            <h1 className="text-2xl font-bold">05</h1>
            <p className="text-green-600 font-semibold flex flex-row items-center justify-center"><IoMdArrowDropup />3%</p>
          </div>
        </div>
        <div className="w-[23%] p-3 h-full m-1 bg-[#202028] flex flex-col justify-between min-w-40">
          <div className=" flex flex-col mb-2">
            {" "}
           <div className="bg-[#e778bc47] rounded-md  p-2 w-fit mb-2 "><MdAttachMoney  size={32} style={{ fill: "#e778bd" }} /></div> 
            <p className="text-sm">Total Revenue </p>
          </div>
          <div className="flex flex-row justify-between w-full items-center     ">
            <h1 className="text-2xl font-bold">$12K</h1>
            <p className="text-red-600 font-semibold flex flex-row items-center justify-center"><MdArrowDropDown  />3%</p>

          </div>
        </div>
        </div>
          <div className=" w-full p-3 h-full bg-[#202028] flex flex-col justify-between mb-3">
          <div className=" flex flex-col mb-2">
          <BarChartComponent></BarChartComponent>
        </div>
</div>
   <div className="w-full p-3 h-full bg-[#202028] flex flex-col justify-between self-start">
        <div className=" flex flex-col mb-2 ">
          <div className="text-xl font-bold"> Recent Orders </div>
          <MyTable></MyTable>
          </div>
      </div>

        {/* <div className="lg:w-[33.5%] w-[40%] p-3 h-full bg-[#202028] flex flex-row justify-between items-center  ">
          <div className="flex flex-col ">
              <p className="mb-4 text-sm"> New profit</p>
          <h1 className="text-2xl font-bold mb-3">$6759.25</h1>
          <p className="text-green-600 font-semibold flex flex-row items-center mb-3"><IoMdArrowDropup />3%</p>

          </div>
          <div className="w-[calc(100%/2)]  h-24 " >
       <DonutChartWithText></DonutChartWithText>
          </div>
        </div> */}
      </div>
)
}

export default FirstRow;