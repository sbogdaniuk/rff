export const template = {
  types: [
    {
      type: 'user',
      fields: [
        {
          name: 'firstName',
          required: true,
          type: 'text',
        },
        {
          name: 'lastName',
          required: false,
          type: 'text',
        },
        {
          name: 'email',
          required: true,
          type: 'text',
        },
        {
          name: 'addresses',
          required: false,
          type: 'multi',
        },
      ],
    },
    {
      type: 'address',
      fields: [
        {
          name: 'title',
          required: true,
          type: 'text',
        },
        {
          name: 'country',
          required: false,
          type: 'text',
        },
        {
          name: 'city',
          required: false,
          type: 'text',
        },
        {
          name: 'street',
          required: false,
          type: 'text',
        },
      ],
    },
  ],
  sections: [
    {
      type: 'user',
      label: 'Users',
      fields: [
        {
          name: 'firstName',
          label: 'First name',
        },
        {
          name: 'lastName',
          label: 'Last name',
        },
        {
          name: 'email',
          label: 'Email name',
        },
        {
          name: 'addresses',
          label: 'Addresses',
        },
      ],
    },
    {
      type: 'address',
      label: 'Addresses',
      fields: [
        {
          name: 'title',
          label: 'Address name',
          placeholder: 'Please enter title',
        },
        {
          name: 'country',
          label: 'Country',
          placeholder: 'Please enter country',
        },
        {
          name: 'city',
          label: 'City',
          placeholder: 'Please enter city',
        },
        {
          name: 'street',
          label: 'Street',
          placeholder: 'Please enter street',
        },
      ],
    },
  ],
}
