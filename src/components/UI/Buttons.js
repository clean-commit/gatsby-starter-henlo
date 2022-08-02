import React from 'react';
import Button from './Button';

export default function Buttons({ buttons }) {
  return (
    <div className='flex items-center flex-wrap gap-2'>
      {buttons.length > 0 &&
        buttons.map((item, i) => (
          <Button key={i} button={item?.button}>
            {item?.button?.content}
          </Button>
        ))}
    </div>
  );
}
