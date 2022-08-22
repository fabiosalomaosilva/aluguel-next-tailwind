import React, { useState } from 'react';

interface InputProps {
  label: string;
  id?: string;
  value: string;
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'teal'
    | 'light';
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'search'
    | 'url'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color';
  onchange: (e: any) => void;
  icon?: JSX.Element;
}

export default function Input(props: InputProps) {
  let id = props.id;
  if (id == null) {
    id = props.label.toLowerCase().replace(/\s/g, '');
  }

  const classIcon = 'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-' + props.color.trim() + '-300';
  const inputClass = 'w-full bg-gray-50 border border-gray-300 focus:border-' + props.color.trim() + '-200 focus:ring-2 focus:ring-' + props.color.trim() + '-200 focus:ring-opacity-30 rounded pl-10 pr-5 py-2 text-lg text-gray-700 placeholder-gray-300 focus:outline-none transition duration-250 ease-in-out';

  return (
    <>
      <div>
        <label htmlFor={id} className='sr-only'>
          {props.label}
        </label>
        <div className='relative w-full'>
          <div className={classIcon}>{props.icon}</div>
          <input
            id={id}
            type={props.type}
            className={inputClass}
            placeholder='Search'
            value={props.value}
            onChange={props.onchange}
            required
          />
        </div>
      </div>
    </>
  );
}
('');
