import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface Plan {
  name: string;
}

export interface RadioProp extends React.ComponentProps<'input'> {
  className?: string;
  name?: string;
  plans?: Plan[];
  selected?: Plan;
  setSelected?: Dispatch<SetStateAction<Plan>>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
