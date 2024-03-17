import Image from "next/image";
import DashBoardMain from "./Components/Dashboard/DashBoardMain";

export default async function Home() {
  let data1;
  try{
    
  let res = await fetch("https://kodessphere-api.vercel.app/devices/nWHFpQU", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  data1=await res.json()
}catch(err){
  
}
  let data = {
    fan: 2,
    bulb: 1,
    led: "#16286E",
    ac: {
      state: 1,
      temp: 23,
    },
  };

  return (
    <div className="min-h-screen">
      <DashBoardMain data={data1||data} />
    </div>
  );
}
