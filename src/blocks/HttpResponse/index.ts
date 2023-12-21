import type { Block, CollectionConfig } from 'payload/types'

export const HttpResponse: Block = {
  slug: 'http-responses',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'colors',
      type: 'select',
      options: [
        'Green',
        'Orange',
        'Red'
      ],
      defaultValue: 'Green'
    },
    {
      name: 'responseCode',
      type: 'select',
      options: [
        '200',
        '202',
        '302',
        '400',
        '401',
        '403',
        '404',
        '500',
        '503',
      ],
    },
    {
      name: 'responseAttributes',
      label: 'Response parameters',
      type: 'relationship',
      relationTo: 'parameters',
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

