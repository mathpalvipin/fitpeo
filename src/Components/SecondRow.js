
import { IoMdArrowDropup } from "react-icons/io";
import { BsFillBucketFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { BiSolidDish } from "react-icons/bi";
import BarChartComponent from "./BarChartComponent";
import { IoChevronForwardCircle } from "react-icons/io5";
import DonutChartWithText from "./Donut"
const SecondRow= ()=>{
     return (<div className=" w-full h-full flex  lg:flex-col flex-row justify-between px-5 items-center ">
     <div className="flex flex-col w-full  self-start mr-3 lg:mr-0 ">  
       <div className="w-full self-start mb-3 lg:mr-0 mr-2 p-3 h-full bg-[#202028] flex flex-row justify-between items-center  ">
          <div className="flex flex-col ">
              <p className="mb-4 text-sm"> New profit</p>
          <h1 className="text-2xl font-bold mb-3">$6759.25</h1>
          <p className="text-green-600 font-semibold flex flex-row items-center mb-3"><IoMdArrowDropup />3%</p>

          </div>
          <div className="w-[calc(100%/2)]  h-24  " >
       <DonutChartWithText></DonutChartWithText>
          </div>
        </div>
        <div className=" w-full  py-6 self-start  lg:mr-0 mr-2 mb-3 px-3 h-full bg-[#202028] flex flex-row justify-between items-center">
          <div className="flex flex-col w-full h-full ">
            <div className=" w-full h-full flex flex-row justify-between mb-4  mt-2" >
               <div className=" flex flex-row justify-center items-center">
                 <div className=" bg-[#ff5e5e54] rounded-full  p-2 w-fit mr-3"><BiTargetLock size={35} style={ { fill :'#f45c5b'}}/></div>
               <h1 className=" text-2xl">Goals</h1>
               </div> 
             <div className="self-center    "><IoChevronForwardCircle  size={30} style={ { fill :'#44454a'}} /></div>
             </div>
             <div className=" w-full h-full flex flex-row justify-between mb-4 " >
               <div className=" flex flex-row justify-center items-center">
                 <div className=" bg-[#6172cf49] rounded-full  p-2 w-fit mr-3"><BiSolidDish size={35} style={ { fill :'#6171cf'}}/></div>
               <h1 className=" text-2xl">Popular Dishes</h1>
               </div> 
               <div className="self-center    "><IoChevronForwardCircle   size={30} style={ { fill :'#44454a'}} /></div>
             </div>
             <div className=" w-full h-full flex flex-row justify-between mb-4 " >
               <div className=" flex flex-row justify-center items-center">
                 <div className=" bg-[#1e85b44d] rounded-full  p-2 w-fit mr-3"><BiSolidDish size={35} style={ { fill :'#1e84b4'}}/></div>
               <h1 className=" text-2xl">Menus</h1>
               </div> 
               <div className="self-center    "><IoChevronForwardCircle  size={30} style={ { fill :'#44454a'}} /></div>
             </div>
          </div>
        </div>
        </div>
        {/* <div className="lg:w-[calc((64.5%))] w-full p-3 h-full bg-[#202028] flex flex-col justify-between">
          <div className=" flex flex-col mb-2">
          <BarChartComponent></BarChartComponent>
        </div>
</div> */}

<div className="w-full py-2  self-start   px-3 h-full bg-[#202028] flex flex-col justify-between items-center">
        <h1 className=" text-xl  w-full  h-auto my-1 px-3 font-bold">
          Customer's Feedback
        </h1>
        <div className="flex flex-col w-full h-full ">
          <div className="p-2 flex flex-col">
            <div className="flex flex-row justify-start items-center">
              <div className=" text-[#808184] m-1  border-none rounded-full  bg-[#44454a]">
                <img
                  width="30rem"
                  height="30rem"
                  className="rounded-full object-fill "
                  src="../images/vipinimg1.jpg"
                ></img>
              </div>
              <h1 className=" font-semibold text-xl ml-2">Jenny Wilson</h1>
            </div>
            <div className="text-wrap text-sm">
              The quick brown fox jumps over the lazy dog. In the heart of the
              bustling city, amidst the cacophony of honking cars and chattering
              pedestrians
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full ">
          <div className="p-2 flex flex-col">
            <div className="flex flex-row justify-start items-center">
              <div className=" text-[#808184] m-1  border-none rounded-full  bg-[#44454a]">
                <img
                  width="30rem"
                  height="30rem"
                  className="rounded-full object-fill "
                  src="../images/vipinimg1.jpg"
                ></img>
              </div>
              <h1 className=" font-semibold text-xl ml-2">Jenny Wilson</h1>
            </div>
            <div className="text-wrap text-sm">
              The quick brown fox jumps over the lazy dog. In the heart of the
              bustling city, amidst the cacophony of honking cars and chattering
              pedestrians
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full ">
          <div className="p-2 flex flex-col">
            <div className="flex flex-row justify-start items-center">
              <div className=" text-[#808184] m-1  border-none rounded-full  bg-[#44454a]">
                <img
                  width="30rem"
                  height="30rem"
                  className="rounded-full object-fill "
                  src="../images/vipinimg1.jpg"
                ></img>
              </div>
              <h1 className=" font-semibold text-xl ml-2">Jenny Wilson</h1>
            </div>
            <div className="text-wrap text-sm">
              The quick brown fox jumps over the lazy dog. In the heart of the
              bustling city, amidst the cacophony of honking cars and chattering
              pedestrians
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full ">
          <div className="p-2 flex flex-col">
            <div className="flex flex-row justify-start items-center">
              <div className=" text-[#808184] m-1  border-none rounded-full  bg-[#44454a]">
                <img
                  width="30rem"
                  height="30rem"
                  className="rounded-full object-fill "
                  src="../images/vipinimg1.jpg"
                ></img>
              </div>
              <h1 className=" font-semibold text-xl ml-2">Jenny Wilson</h1>
            </div>
            <div className="text-wrap text-sm">
              The quick brown fox jumps over the lazy dog. In the heart of the
              bustling city, amidst the cacophony of honking cars and chattering
              pedestrians
            </div>
          </div>
        </div>  
      </div>
      </div>
)
}

export default SecondRow;