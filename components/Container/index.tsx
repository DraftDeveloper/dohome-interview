import React, { useState, useEffect } from "react";
import ContainerProps from "./container.type";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { Button } from "../Button";

const Container = ({ id, children, title, onAddItem }: ContainerProps) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const { attributes, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: id,
      data: {
        type: "container",
      },
    });

  useEffect(() => {
    if (!children || (Array.isArray(children) && children.length === 0)) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [children]);

  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "w-full min-h-[400px] p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4 flex-grow",
        isDragging && "opacity-50",
        isEmpty && "border-dashed"
      )}
    >
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm flex flex-col flex-grow">
        <div className="px-4 py-5 sm:px-7">
          <div className="flex flex-row-reverse">
            <Button onClick={onAddItem}>+ Create Card</Button>
          </div>
          <h1 className="text-gray-800 text-xl">{title}</h1>
        </div>
        <div className="w-full max-h-[500px] px-4 py-5 sm:p-6 overflow-auto bg-gray-50 sm:rounded-lg flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
