import type { CollectionConfig } from 'payload/types'

import richText from '../fields/richText'
import label from '../fields/richText/label'
import largeBody from '../fields/richText/largeBody'

const Endpoints: CollectionConfig = {
  slug: 'endpoints',
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
      name: 'url',
      type: 'text',
    },
    {
      name: 'method',
      type: 'select',
      options: [
        {
          label: 'GET',
          value: 'GET',
        },
        {
          label: 'POST',
          value: 'POST',
        },
        {
          label: 'PUT',
          value: 'PUT',
        },
      ],
    },
    {
      name: 'lastUpdated',
      type: 'date',
      label: 'Last Updated',
      defaultValue: () => {
        return new Date()
      },
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    richText({
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
    }),
    {
      name: 'attributes',
      label: 'Attributes',
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
    {
      name: 'bodyParameters',
      label: 'Body Parameters',
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
    {
      name: 'responses',
      label: 'Responses',
      type: 'relationship',
      relationTo: 'responses',
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

export default Endpoints
