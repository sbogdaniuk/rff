import React from 'react'
import { Field, Form as RFFForm } from 'react-final-form'

import { FieldInput } from '../../components'
import { onSubmit } from './onSubmit'

export const Form = props => {
  const { history } = props
  return (
    <div>
      <h2>Form</h2>
      <RFFForm
        onSubmit={onSubmit}
      >
        {(formState) => {
          const {
            handleSubmit,
            values,
          } = formState

          return (
            <form onSubmit={handleSubmit}>
              <div>Name</div>
              <Field
                type="text"
                name="name"
                component={FieldInput}
              />
              <pre>{JSON.stringify(values, 0, 4)}</pre>
            </form>
          )
        }}
      </RFFForm>
    </div>
  )
}
