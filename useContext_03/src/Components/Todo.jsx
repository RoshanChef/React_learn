import { useState } from 'react';
import Task from './Task';

export default function Todo() {
  const [data, setData] = useState('');

  function handle(e) {
    let val = e.target.value;
    setData(val);
  }

  function form_handler(e) {
    e.preventDefault();

    let val = localStorage.getItem('curData');
    console.log(val);


    if (val) {
      val = JSON.parse(val); //array
      localStorage.setItem('curData', JSON.stringify([...val, data]));
    }
    else localStorage.setItem('curData', JSON.stringify([data]));
    val = JSON.parse(localStorage.getItem('curData'));
    console.log(val);


    setData('');
  }

  return (

    <div className='w-full h-screen flex flex-col justify-start items-center pt-10 bg-[#000f08]'>
      <form onSubmit={form_handler}>
        <input type="text" className='w-[60vw] rounded-md p-2 bg-[#f1f3f227] border outline-none border-gray-400 text-[#f3f3f3]' onChange={handle} value={data} />
        <button type='submit' className='bg-[#fb3640] ml-10 p-2 rounded-md font-bold w-[10.2rem]'>Add</button>
      </form>
      <div>
        {
          JSON.parse(localStorage.getItem('curData'))?.map((ele, inx) => (<Task key={ele} data={(ele)} setData={setData} inx={inx} />))
        }
      </div>
    </div >
  )
}
