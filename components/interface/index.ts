import { UniqueIdentifier } from "@dnd-kit/core";

export type CheckList = {
  id: UniqueIdentifier;
  isCheck: boolean;
  value: string;
};

export type DNDType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
    image: string;
    color: string;
    checkList: Array<CheckList>;
  }[];
};
