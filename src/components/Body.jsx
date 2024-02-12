import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import Loading from '../components/Loading.jsx';
import Result from '../components/Result.jsx';
import Error from '../components/Error.jsx';

const Body = () => {

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

//const [state,setState] = useState({seedtype: "null", monthNumber: 0})
    const [filepath,setfilePath] = useState("not selected");
    const [seed,setSeed] = useState(" ");
    const [months, setMonths] = useState(0);
    
    const [resultRender, setResultRender] = useState(false)
    const [sentence,setSentence] = useState("Input fields [Months,Seed,(.csv) file] are empty.")
    function captureDetails(){
      setResultRender(false)
      function errorHandle()
      {
        var empty_fields=(seed==" " && months==0)?(" seed,month aren't "):((seed==" ")?(" seed isn't "):(" month isn't "))
        var sentence1 = "Input"
        sentence1 = sentence1.concat(empty_fields).concat("given.")
        setSentence(sentence1)
        console.log(seed,months,sentence1)
      }
      if(seed == " " || months == 0){
        errorHandle()
      }
      else{setResultRender(true); } 
    }

  return (<div className='m-1 '>
    <div className='flex h-screen  bg-slate-400'>          {/* */}
        <div className='flex-none group basis-1/4  hover:border-white hover:border bg-slate-300 h-full '>     {/* */}
    
          <div className='flex h-full flex-col bg-logo p-4 mt-1 w-full  max-w-screen-xl shadow-lg shadow-slate-400 rounded-lg md:items-center  space-y-10 dark:bg-gray-800'>
            <div className='mt-5 ml-1'>
              <label for ="file" className='text-m font-bold'>Upload data file (.csv,.xlsx) </label>
              <input type='file' id="file" name="file" accept='.csv,.xlsx' className='  w-fit'/>
            </div>
        
            <div className=" space-y-4">                                              {/* */}
              <div>
                <label className=" leading-3  font-bold" for="seed_name">Choose seed category</label>
                <select id="seed_name" onChange={(event) => setSeed(event.target.value)} className="w-full hover:cursor-pointer bg-yellow-400 outline-none border-b-4 box-content h-[30px] group-hover:border-white border-2 ease-out duration-700">
                  {spices.map((i)=>(<option key={i} value={i}>{i}</option>))}
                </select>
              </div>

              <div>
                <label className="font-bold" for="forecast_months">Choose forecasting months</label>
                <select id="forecast_months" onChange={(event) => setMonths(event.target.value)} className="bg-purple-400 w-full border-b-4 hover:cursor-pointer box-content outline-none h-[30px] group-hover:border-white border-2 ease-out duration-700">
                  {range.map((i)=>(<option key={i} value={i}>{i}</option>))};
                </select>
              </div>
            </div>
            <button type="submit" id='getResult'onClick={captureDetails} className='p-2 w-fit  ml-[100px] bg-cyan-400 group-hover:ring ring-white rounded-lg ring font-bold group-hover:-translate-y-3 duration-700 ease-out text-white group-hover:border-b-4 group-hover:border-r-4 border-slate-200'><span className=''>Submit</span></button>
          </div>

        </div>
        <div className=' h-full w-full basis-3/4  hover:border hover:border-white outline-none rounded-lg shadow-slate-400 shadow-lg flex-1' id="render">
          {resultRender ? (<Result  seedName={seed} months={months} />):(<Error sentence = {sentence}/>)}
        </div>
        
    </div>
  </div>);
}


export default Body

      //  console.log("The following fields",(seed==null && months==0)?(" seed,month aren't "):((seed=="null")?(" seed isn't "):(" month isn't ")),"selected.")
