import { IoMdArrowDropup } from "react-icons/io";
import { BsFillBucketFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { BiSolidDish } from "react-icons/bi";
import BarChartComponent from "./BarChartComponent";
import { IoChevronForwardCircle } from "react-icons/io5";
import MyTable from "./Table";
const ThirdRow = () => {
  return (
    <div className=" w-full h-full   flex justify-between px-5 items-center ">
      {/* <div className="w-[66%] p-3 h-full bg-[#202028] flex flex-col justify-between self-start">
        <div className=" flex flex-col mb-2 ">
          <div className="text-xl font-bold"> Recent Orders </div>
          <MyTable></MyTable>
          </div>
      </div> */}

      <div className="w-[33%] py-2    px-3 h-full bg-[#202028] flex flex-col justify-between items-center">
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
  );
};

export default ThirdRow;
