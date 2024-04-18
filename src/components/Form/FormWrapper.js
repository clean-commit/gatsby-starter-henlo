import React from 'react'
import Form from './Form'
import { useForms } from '@/hooks/useForms'

export default function FormWrapper({ formId, white }) {
  const forms = useForms()

  const {
    node: { frontmatter: form },
  } = forms.find(({ node: item }) => item.frontmatter.id === formId)

  return <Form data={form} white={white}></Form>
}
