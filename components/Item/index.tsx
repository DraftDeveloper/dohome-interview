import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React,{useEffect, useState} from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { CheckList } from '@/components/interface';

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
  image: string;
  color: string;
  checkList: Array<CheckList>;
};

const Items = ({ id, title,color,image,checkList }: ItemsType) => {
  const [checkListValue, setCheckListValue] = useState<Array<CheckList>>(checkList);
  const [status,setStatus] = useState('0%');

  const handleCheckboxChange = (id: UniqueIdentifier) => {
    setCheckListValue((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCheck: !item.isCheck } : item
      )
    );
  };
  // color
  const bg_gradient = `from-${color}-300`;
  const hover_border_200 =  `hover:border-${color}-200`;
  const border_300 = `border-${color}-300`;
  const bg_100 = `bg-${color}-100`;
  const text_500 = `text-${color}-500`;
  const checked_border_600  = `checked:border-${color}-600`;
  const checked_bg_600  = `checked:bg-${color}-600`;
  const indeterminate_border_600  = `indeterminate:border-${color}-600`;
  const indeterminate_bg_600  = `indeterminate:bg-${color}-600`;
  const focus_visible_outline_600  = `focus-visible:outline-${color}-600`;
  const disabled_border_300 = `disabled:border-${color}-300`;
  const disabled_bg_100 = `disabled:bg-${color}-100`;
  const disabled_checked_bg_100 = `disabled:checked:bg-${color}-100`;
  const text_900 = `text-${color}-900`;
  const bg_200 = `bg-${color}-200`;
  const bg_600 = `bg-${color}-600`;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'item',
    },
  });


  const calculatorStatus = () => {
    //debugger
    const countChecked = checkListValue.filter(item => item.isCheck).length;
    const checkListAll = checkListValue.length;
    const sum = (countChecked/checkListAll) * 100;
    const result = `${sum}%`;
    setStatus(result);
  }

  useEffect(() => {
    calculatorStatus();
  }, [checkListValue]);


  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        `px-2 py-4 bg-white shadow-md rounded-xl w-full  border border-transparent cursor-pointer',
        isDragging && 'opacity-50`,hover_border_200
      )}
    >
    <div className={clsx("overflow-hidden rounded-lg bg-gradient-to-b shadow-sm",bg_gradient)}>
    <div className="flex flex-row-reverse ...">
      <button
      className="border p-1 text-xs rounded-xl shadow-lg hover:shadow-xl"
     {...listeners}
    >
          ปุ่มย้ายการ์ด
    </button>
    </div>
    <div className="px-4 py-5 sm:p-6">  
      {image &&  <div className={clsx("relative w-full border-4 rounded-2xl",border_300)}>
          <img
                  alt=""
                  src={image}
                  className={clsx("aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2",bg_100)}
                />
    
    </div>}

      <span className={clsx("mt-1 inline-block break-words w-full overflow-hidden",text_500)}>{title}
      </span>
      <br></br>
      <fieldset>
      <div className="space-y-5">
      {checkListValue.map((item, index) => (
        <div key={item.id} className="flex gap-3">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id={`checkbox-${index}`}
                name={`checkbox-${index}`}
                checked={item.isCheck}
                type="checkbox"
                onChange={() => handleCheckboxChange(item.id)}
                className={clsx("col-start-1 row-start-1 appearance-none rounded-sm border bg-white forced-colors:appearance-auto focus-visible:outline-2 focus-visible:outline-offset-2",border_300,checked_bg_600,checked_border_600,indeterminate_border_600,indeterminate_bg_600,
                  focus_visible_outline_600,disabled_border_300,disabled_bg_100,disabled_checked_bg_100
                  )}
              />
              <svg
                fill="none"
                viewBox="0 0 14 14"
                className={`w-4 h-4  pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-${color}-950/25`}
              >
              </svg>
            </div>
          </div>
          <div className="text-[10px] leading-[12px]">
            <p key={item.id} id="offers-description" className={clsx(text_500)}>
            {item.value}
            </p>
          </div>
        </div>
          ))}
      </div>        
    </fieldset>  
    {checkListValue &&   
    <>  
<p className={clsx("text-sm font-medium mt-4 text-[8px] leading-[8px]",text_900)}>Progress : {status}</p>
      <div aria-hidden="true" className="mt-1">
        <div className={clsx("overflow-hidden rounded-full", bg_200)}>
          <div style={{ width: status }} className={clsx("h-2 rounded-full",bg_600)} />
        </div>
      </div>
      </>
    }
    </div>
    </div>
    </div>
  );
};

export default Items;
