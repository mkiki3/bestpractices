import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { Plan, RadioProp } from '../../types/radio';

const plans: Plan[] = [
  {
    name: 'Mobile',
  },
  {
    name: 'Home',
  },
  {
    name: 'Email',
  },
  {
    name: 'Twitter',
  },
];

const Radio: React.FC<RadioProp> = ({ className }) => {
  const [selected, setSelected] = useState<Plan>(plans[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected} className=''>
      <RadioGroup.Label className='sr-only'>preferred contact</RadioGroup.Label>
      <div className='flex justify-between '>
        {plans.map((plan) => (
          <RadioGroup.Option key={plan.name} value={plan}>
            {({ checked }) => (
              <div className='flex'>
                <div className='rounded-3xl  border border-pink-250 bg-white w-5 h-5 flex justify-center items-center mr-3'>
                  <div
                    className={classNames('rounded-3xl  w-3 h-3', {
                      'bg-pink-250': checked,
                      [`${className}`]: className,
                    })}
                  ></div>
                </div>
                <div className='flex justify-center items-center text-sm mr-3'>
                  {plan.name}
                </div>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Radio;
