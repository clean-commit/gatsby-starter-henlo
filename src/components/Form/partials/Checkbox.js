import React from 'react'
import Label from '@/components/UI/Label'

export default function Checkbox({
  data,
  register,
  disabled = false,
  errors,
  ...props
}) {
  const name = data?.name ? data?.name : 'test-check'
  const error = errors[name]
  return (
    <div className="w-full ">
      <Label htmlFor={name}>
        <div className="flex cursor-pointer gap-3">
          <div className="mt-0.5 flex items-start justify-center">
            <input
              type="checkbox"
              {...props}
              {...register(name)}
              id={name}
              disabled={disabled}
              value={true}
              aria-invalid={error ? 'true' : 'false'}
              required={data?.required}
              className="border-black-300 relative cursor-pointer rounded-sm bg-zinc-100  focus:ring-0"
            />
          </div>
          <div className="text-dark-500 text-sm font-normal">{data?.label}</div>
        </div>
      </Label>
      <div className="block text-left text-sm text-red-600">
        {error?.message}
      </div>
    </div>
  )
}
