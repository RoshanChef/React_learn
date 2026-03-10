import { Pencil, X, Save } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTodo } from "../Context/TodoContext";

export default function Task({ data, inx, setData }) {
  const { edit, set_edit, setter } = useTodo();
  const inputRef = useRef(null);

  function handle(e) {
    setData(e?.target?.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit, data]);


  function cancel() {

    let val = JSON.parse(localStorage.getItem('curData'));
    console.log(val, inx);

    let newAr = val.filter((ele, index) => index !== inx);
    console.log(newAr);

    localStorage.setItem('curData', JSON.stringify(newAr));
    setter(newAr);
  }

  function show(e) {
    set_edit({ check: e.target.checked, inx, save: false });
  }
  function savy() {
    let val = (inputRef.current.value);
    let obj = JSON.parse(localStorage.getItem('curData'));
    obj[inx] = val;

    localStorage.setItem('curData', JSON.stringify(obj));
    setter(obj);
    set_edit({save:false});
  }

  return (
    <div className={`flex mt-8 justify-between items-center px-4 ${edit.check && inx == edit.inx ? "bg-[#4e6651]" : "bg-[#333]"} w-[60vw] h-10 text-[#e7fce8] rounded-md`}>

      <div className="flex items-center gap-2">
        <input type="checkbox"
          className="cursor-pointer"
          onClick={show}

        />

        <input
          ref={inputRef}
          type="text"
          defaultValue={data}
          disabled={edit?.inx !== (inx)}
          onChange={handle}
          className="bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center gap-2">
        {edit.save && inx === edit.inx ?
          <Save
            onClick={savy}
          />
          :
          <X
            className="cursor-pointer"
            onClick={cancel}
          />
        }
        <Pencil
          className="cursor-pointer text-yellow-200 hover:fill-red-400 transition-colors"
          color="wheat"
          onClick={() => { return set_edit({ inx, save: true }) }}
        />
      </div>

    </div>
  );
}