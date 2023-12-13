import type { CollectionConfig } from 'payload/types'
import richText from '../fields/richText'
import label from '../fields/richText/label'
import largeBody from "../fields/richText/largeBody";

const Attributes: CollectionConfig = {
  slug: 'attributes',
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
    richText({
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
    }),
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'object',
          value: 'object',
        },
        {
          label: 'integer',
          value: 'integer',
        },
        {
          label: 'boolean',
          value: 'boolean',
        },
        {
          label: 'string',
          value: 'string',
        },
        {
          label: 'string (Max. length: 100 characters)',
          value: 'string max',
        },
        {
          label: 'string (Max. length: 255 characters)',
          value: 'string max 255',
        },
        {
          label: 'string (Format: A valid email address)',
          value: 'string format',
        },
        {
          label: 'timestamp',
          value: 'timestamp',
        },
      ],
    },
    {
      name: 'childAttributes',
      label: 'Child attributes',
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

export default Attributes
