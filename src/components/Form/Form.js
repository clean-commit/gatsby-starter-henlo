import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonField from './partials/ButtonField'
import Checkbox from './partials/Checkbox'
import ContentSection from './partials/ContentSection'
import Input from './partials/Input'
import Submit from './partials/Submit'
import TextArea from './partials/TextArea'
import { handleGoal, cn } from '@/lib/helper'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Form({ data, white }) {
  const [isSend, setIsSend] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors: fieldErrors },
  } = useForm()

  const onSubmit = async (formData) => {
    setIsSending(true)
    if (data.settings.resolver === 'Form') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': data.title, ...formData }),
      })
        .then(() => {
          setIsSend(true)
          handleGoal(data.settings.event_id)
          setTimeout(() => {
            reset()
            setIsSending(false)
          }, 200)
        })
        .catch((error) => setIsSending(false))
    }

    if (data.settings.resolver === 'ConvertKit') {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      const returned = JSON.parse(await res.json())
      if (returned.success === true) {
        setIsSend(true)
        handleGoal(data.settings.event_id)
        setTimeout(() => {
          reset()
        }, 200)
      }
      setIsSending(false)
    }
  }

  return (
    <div className="relative -mx-2 w-full overflow-hidden px-2 sm:w-auto">
      <div
        className={cn(
          'absolute z-10 flex h-full w-full items-center justify-center transition-all',
          {
            '-translate-y-full opacity-0': !isSend,
          },
        )}
      >
        <div className="text-center text-2xl">
          {data?.settings?.success_msg}
        </div>
      </div>
      <form
        className={cn('grid gap-6 transition-all', {
          '-translate-y-full opacity-0': isSend,
        })}
        name={data.title}
        onSubmit={handleSubmit(onSubmit)}
        data-netlify={data.settings.resolver === 'Form'}
      >
        {data.rows &&
          data.rows.map((row, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col justify-between gap-4 md:gap-6 lg:flex-row',
                {
                  'items-center': row.position === 'center',
                },
                {
                  'items-end': row.position === 'bottom',
                },
              )}
            >
              {row.fields &&
                row.fields.map((field, i) => {
                  switch (field.type) {
                    case 'input':
                      return (
                        <Input
                          data={field}
                          white={white}
                          key={i}
                          setValue={setValue}
                          register={register}
                          errors={fieldErrors}
                        />
                      )
                    case 'textarea':
                      return (
                        <TextArea
                          data={field}
                          key={i}
                          register={register}
                          errors={fieldErrors}
                        />
                      )
                    case 'checkbox':
                      return (
                        <Checkbox
                          data={field}
                          key={i}
                          register={register}
                          errors={fieldErrors}
                        />
                      )
                    case 'submit':
                      return <Submit data={field} sending={isSending} key={i} />
                    case 'button':
                      return <ButtonField data={field} key={i} />
                    case 'text':
                      return <ContentSection data={field} key={i} />
                    default:
                      return <></>
                  }
                })}
            </div>
          ))}
      </form>
    </div>
  )
}
