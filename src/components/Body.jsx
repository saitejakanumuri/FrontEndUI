import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx';
import Result from '../components/Result.jsx';
import Button from '../components/Button.jsx';

const Body = () => {
  function optionValid(){
    const selected_seed = document.querySelector("seed name");
    const seed_variety = selected_seed.value
    const selected_month = document.querySelector("forecast_months");
    const months_selected = selected_month.value
    console.log(months_selected);
    if(seed_variety.length<1){document.querySelector("mention").textContent="Select Seed Name"}
  }
  const [isLoading,setIsLoading] = useState(true);
  const load=()=>(
   // console.log("data approached");
    useEffect(()=>{
      setTimeout(()=>{setIsLoading(false)},2000)
    },[]));

    const handleClick =()=>{
      selectElement = document.querySelector("#seed_name");
      seedName = selectElement.value;
      ()=>{setSelect_seed(seedName);}
    }
    const[select_seed,setSelect_seed] = useState("");
    const[select_months,setSelect_months] = useState(0);


  const range=[" "]
  for(let i=1;i<=6;i++){range.push(i);}
  const spices = [" ","AJWAN SEED",
    "BLACK PEPPER(MG-_x000D_1)",
    "CARDAMOM(LARGE)",
    "CARDAMOM(SMALL)",
    "CASSIA",
    "CHILLIES",
    "CLOVE",
    "CORIANDER",
    "CUMIN",
    "FENNEL",
    "FENUGREEK",
    "GARLIC",
    "MACE",
    "MENTHA OIL",
    "MUSTARD",
   " NUTMEG (WITH SHELL)",
    "NUTMEG (WITHOUT SHELL)",
    "POPPY SEED",
    "SAFFRON",
    "TAMARIND",
    "TURMERIC"]

  return (<div className='m-1 bg-slate-200'>
    <div className='flex h-screen '>          {/* */}
        <div className='flex-row basis-1/4  border-2 '>     {/* */}
        <form method="post"  className=" " encType="multipart/form-data">
          <div className='flex flex-col space-y-10 p-2 m-2 mt-20 '>                   {/* */}
            <div className='space-y-4 font-bold'>
              <label for ="file">Upload data file (.csv,.xlsx) </label>
              <input type='file' id="file" name="file" accept='.csv, .xlsx' className=' w-full'/>
            </div>
        
            <div className=" space-y-4">                                              {/* */}
              <div>
                <label className=" leading-3  font-bold" for="seed name">Choose seed category</label>
                <select id="seed_name" className="w-full bg-yellow-500 outline-none border-b-4 font-poppins box-content h-[30px]">
                  {spices.map((s)=>(<option value={s}>{s}</option>))}
                </select>
              </div>

              <div>
                <label className="font-bold" for="forecast_months">Choose forecasting months</label>
                <select id="forecast_months" className="bg-purple-400 w-full border-b-4 box-content outline-none h-[30px]">
                  {range.map((i)=>(<option value={i}>{i}</option>))};
                </select>
              </div>
            </div>
            <Button onClick={handleClick}></Button>
                <p id="mention" className=''></p>
          </div>
        </form>
        </div>

        <div className=' flex static h-full  w-full basis-3/4 border-2'>
          {isLoading?<Loading/>:<Result/>}
         
        </div>
    </div>
  </div>);
}

export default Body










