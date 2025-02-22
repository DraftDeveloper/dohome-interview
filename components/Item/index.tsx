import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React,{useState} from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const [color, setScolor] = useState("red"); 

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
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        `px-2 py-4 bg-white shadow-md rounded-xl w-full  border border-transparent hover:border-${color}-200 cursor-pointer',
        isDragging && 'opacity-50`,
      )}
    >
    <div className={`overflow-hidden rounded-lg bg-gradient-to-b from-${color}-300 shadow-sm`}>
    <div className="flex flex-row-reverse ...">
      <button
      className="border p-1 text-xs rounded-xl shadow-lg hover:shadow-xl"
     {...listeners}
    >
          ปุ่มย้ายการ์ด
    </button>
    </div>
    <div className="px-4 py-5 sm:p-6">  
    <div className={`relative w-full border-4 border-${color}-300 rounded-2xl`}>
          <img
                  alt=""
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  className={`aspect-video w-full rounded-2xl bg-${color}-100 object-cover sm:aspect-2/1 lg:aspect-3/2`}
                />
    
    </div>
      <span className={`mt-1 inline-block break-words w-full overflow-hidden text-${color}-500`}>{title}
      </span>
      <br></br>
      <fieldset>
      <div className="space-y-5">
        <div className="flex gap-3">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                aria-describedby="candidates-description"
                className={`col-start-1 row-start-1 appearance-none rounded-sm border border-${color}-300 bg-white checked:border-${color}-600 checked:bg-${color}-600 indeterminate:border-${color}-600 indeterminate:bg-${color}-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600 disabled:border-${color}-300 disabled:bg-${color}-100 disabled:checked:bg-${color}-100 forced-colors:appearance-auto`}
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
            <p id="candidates-description" className={`text-${color}-500`}>
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                aria-describedby="offers-description"
                className={`col-start-1 row-start-1 appearance-none rounded-sm border border-${color}-300 bg-white checked:border-${color}-600 checked:bg-${color}-600 indeterminate:border-${color}-600 indeterminate:bg-${color}-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600 disabled:border-${color}-300 disabled:bg-${color}-100 disabled:checked:bg-${color}-100 forced-colors:appearance-auto`}
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
            <p id="offers-description" className={`text-${color}-500`}>
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>
      </div>
    </fieldset>  
      <p className={`text-sm font-medium text-${color}-900 mt-4 text-[8px] leading-[8px]`}>Progress : 37.5%</p>
      <div aria-hidden="true" className="mt-1">
        <div className={`overflow-hidden rounded-full bg-${color}-200`}>
          <div style={{ width: '37.5%' }} className={`h-2 rounded-full bg-${color}-600`} />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Items;
