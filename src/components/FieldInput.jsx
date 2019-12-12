import React from 'react'

export const FieldInput = (props) => {
  const { input, meta, ...rest } = props
  return (
    <input {...input} {...rest} />
  )
}
