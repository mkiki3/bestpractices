import React, { Fragment } from 'react';
import cn from 'classnames';

type StepperProps = {
  steps: string[];
  activeStep: number;
  onStepClick?: (step: number) => void;
};

const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  const { activeStep, onStepClick, steps } = props;
  return (
    <div className='stepper'>
      {/* Steps are each generated */}
      {steps.map((step, index) => (
        <Fragment key={index}>
          <div
            className={cn('stepper__step-bar', {
              completed: activeStep >= index,
            })}
          />
          <button
            className={cn('stepper__step-button', {
              completed: activeStep >= index,
              active: activeStep === index,
            })}
            onClick={() => onStepClick?.(index)}
          >
            <div className='stepper__step-bubble' />
            <p className='stepper__step-text'>{step}</p>
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default Stepper;
