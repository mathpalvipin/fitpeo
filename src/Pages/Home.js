import SideMenu from "../Components/SideMenu";
import NavBar from "../Components/NavBar";
import Main from "../Components/Main";
const Home = ()=>{
 return <div className="w-full h-screen bg-slate-600 flex  flex-row">
   <SideMenu className=" w-12 bg-[#202028]"></SideMenu>
   <div className=" w-full h-screen">
    <NavBar className ="h-12 bg-[#202028]"></NavBar>
    <Main className="bg-[#141416] w-full  h-[calc(100%-3rem)]  overflow-y-auto "></Main>
   </div>
   </div>
}

export default Home;