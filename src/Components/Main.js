import FirstRow from "./FirstRow";import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
const Main = ({ className }) => {
  return (
    <div className={`${className} text-white`}>
      <div className="flex flex-col ">
        <h2 className="pl-8 text-2xl font-bold py-4">Dashboard </h2>
       <div className="lg:flex lg:flex-row justify-between flex flex-col">
        <div className=" mb-4 lg:w-[80%] w-full " ><FirstRow></FirstRow></div>
      <div className="mb-4 lg:w-[40%] w-full"> <SecondRow></SecondRow></div>
      </div> 
      {/* <div className="mb-4 h-[40%]"> <ThirdRow></ThirdRow></div> */}
              </div>
    </div>
  );
};
export default Main;
