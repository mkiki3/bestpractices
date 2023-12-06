import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

interface RadioProp {
  className?: string;
}
interface Plan {
  name: string;
}

const plans: Plan[] = [
  {
    name: 'Mobile',
  },
  {
    name: 'Twitter',
  },
  {
    name: 'Email',
  },
  {
    name: 'Instagram',
  },
];

const Example: React.FC<RadioProp> = ({ className }) => {
  const [selected, setSelected] = useState<Plan>(plans[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
      <div className='border'>
        {plans.map((plan) => (
          <RadioGroup.Option key={plan.name} value={plan}>
            {({ checked }) => (
              <>
                <div className='rounded-3xl  border border-pink-250 bg-white w-12 h-12 flex justify-center items-center'>
                  <div
                    className={classNames(
                      'rounded-3xl  border border-pink-250  w-8 h-8',
                      { 'bg-pink-250': checked, [`${className}`]: className }
                    )}
                  ></div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Example;
