import type { CollectionConfig } from 'payload/types'

const Responses: CollectionConfig = {
  slug: 'responses',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'responseCode',
      type: 'select',
      options: [
        {
          label: '200',
          value: '200',
        },
        {
          label: '400',
          value: '400',
        },
      ],
    },
    {
      name: 'responseAttributes',
      label: 'Response attributes',
      type: 'relationship',
      relationTo: 'attributes',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
  ],
}

export default Responses
