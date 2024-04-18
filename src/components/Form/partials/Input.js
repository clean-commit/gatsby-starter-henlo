import React from 'react'
import classNames from 'clsx'
import { slugify, cn } from '@/lib/helper'

export default function Input({
  data,
  register,
  disabled = false,
  setValue,
  errors,
  white,
  ...props
}) {
  const name = data?.label ? slugify(data?.label, '_') : 'preview'
  const error = errors[name]
  if (data?.value) {
    setValue(name, data.value)
  }

  return (
    <div
      className={classNames('w-full', {
        hidden: data?.input_type === 'hidden',
      })}
    >
      <input
        {...props}
        {...register(name)}
        id={name}
        disabled={disabled}
        autoComplete={data?.autocomplete || 'on'}
        aria-invalid={error ? 'true' : 'false'}
        required={data?.required}
        type={data?.input_type}
        placeholder={`${data?.label}${data?.required ? '*' : ''}`}
        className={cn(
          'block h-14 w-full rounded-lg border border-gray-600  px-5 transition-colors placeholder:text-gray-700 focus:border-blue-400 focus:ring-0 sm:h-16',
          {
            'w-full border-gray-400 bg-white  sm:w-96': white,
            'bg-gray-100': !white,
          },
        )}
      ></input>
      <div className="block text-left text-sm text-red-600">
        {error?.message}
      </div>
      {white}
    </div>
  )
}
