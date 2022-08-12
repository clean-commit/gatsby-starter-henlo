---
id: T9c8SkeW4
type: form
layout: hidden
title: Contact Form
settings:
  resolver: Form
  success_msg: Thank you for reaching out!
  event_id: XJHYJIYC
rows:
  - fields:
      - type: input
        input_type: text
        required: true
        label: Full name
        autocomplete: name
      - type: input
        input_type: text
        required: false
        label: Company Name
        autocomplete: organization
    position: bottom
  - fields:
      - type: input
        input_type: email
        required: true
        label: Email Address
        autocomplete: email
      - type: input
        input_type: tel
        required: false
        label: Phone Number
        autocomplete: tel
      - type: input
        input_type: hidden
        value: hidden field
        required: false
        autocomplete: off
    position: bottom
  - fields:
      - type: textarea
        required: true
        label: What’s the main issue we’ll focus on?
    position: bottom
  - fields:
      - type: checkbox
        required: true
        label: I agree to the terms and conditions
        name: terms
    position: bottom
  - fields:
      - type: submit
        label: Take the first step
      - type: button
        button:
          variant: default
          content: Let's go to google!!
          url: 'https://google.com'
    position: center
  - position: bottom
    fields:
      - type: text
        content: Yo yo yo
---
