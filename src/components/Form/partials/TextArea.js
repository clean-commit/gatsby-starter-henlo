import React from 'react'
import { slugify } from '@/lib/helper'

export default function TextArea({
  data,
  register,
  disabled = false,
  errors,
  ...props
}) {
  const name = data?.label ? slugify(data?.label, '_') : 'testing'
  const error = errors[name]
  return (
    <div className="w-full">
      <textarea
        {...props}
        {...register(name)}
        id={name}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        required={data?.required}
        placeholder={`${data?.label}${data?.required ? '*' : ''}`}
        className="block h-48 w-full rounded-lg  border-transparent bg-gray-100 p-5 transition-colors placeholder:text-gray-700 focus:border-blue-400 focus:ring-0"
      ></textarea>
      <div className="block text-left text-sm text-red-600">
        {error?.message}
      </div>
    </div>
  )
}
