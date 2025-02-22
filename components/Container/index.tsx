import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Button } from '../Button';

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'w-full h-full p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4',
        isDragging && 'opacity-50',
      )}
    >
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="px-4 py-5 sm:px-7">
      <div className="flex flex-row-reverse ...">
      <button
          className=" ml-2 mr-2 border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners}
        >
          ปุ่มย้าย Task
        </button>
      <Button onClick={onAddItem}>+ Create Card</Button>
      </div>
      <h1 className="text-gray-800 text-xl">{title}</h1>
      </div>
      <div className="w-full h-full px-4 py-5 sm:p-6 overflow-hidden bg-gray-50 sm:rounded-lg">
        {children}
       </div>

    </div>  
    </div>
  );
};

export default Container;
