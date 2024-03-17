"use client";


function Dashboard() {
  let fanvalue, bulbvalue, ledvalue, actemp, acstate;
  let teamid="nWHFpQU";
  const getdetails = async () => {
    let res = await fetch(
      `https://kodessphere-api.vercel.app/devices/nWHFpQU`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    
    fanvalue=data.fan;
    bulbvalue=data.bulb;
    ledvalue=data.led;
    actemp=data.ac.temp;
    acstate=data.ac.state;
    console.log(fanvalue, bulbvalue, ledvalue, actemp, acstate)
  };
  const postfan = async () => {
    const data = {
      teamid:teamid,
      device:"fan",
      value:fanvalue,
    };
    let res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
  };
  const postbulb = async () => {
    const data = {
      teamid:teamid,
      device:"bulb",
      value:bulbvalue,
    };
    let res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
  };
  const postled = async () => {
    const data = {
      teamid:teamid,
      device:"led",
      value:ledvalue,
    };
    let res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
  };
  const postac = async () => {
    const acdatapost={temp:actemp,state:acstate}
    const data = {
      teamid:teamid,
      device:"ac",
      value:acdatapost,
    };
    let res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
  };
  
  return (
    <div>
      <button onClick={getdetails} className="text-white mx-4 border-2 p-2">Get Details</button>
      <button onClick={()=>{fanvalue=4,postfan()}} className="text-white mx-4 border-2 p-2">Post Fan</button>
      <button onClick={()=>{bulbvalue=0,postbulb()}} className="text-white mx-4 border-2 p-2">Post Bulb</button>
      <button onClick={()=>{ledvalue="#dbff03",postled()}} className="text-white mx-4 border-2 p-2">Post Led</button>
      <button onClick={()=>{acstate=0,actemp=27,postac()}} className="text-white mx-4 border-2 p-2">Post AC</button>
    </div>
  );
}

export default Dashboard;
