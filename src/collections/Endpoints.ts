import type {CollectionConfig} from 'payload/types'
import {Admonition} from "../blocks/Admonition";

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
      name: 'uid',
      type: 'text',
    },
    {
      name: 'isObject',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'method',
      type: 'select',
      options: [
        'GET',
        'POST',
        'PUT',
      ],
      required: true,
      defaultValue: 'GET'
    },
    {
      name: 'allParametersAreOptional',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'url',
      type: 'text'
    },
    {
      name: 'attributes',
      label: 'Attributes',
      type: 'array',
      fields: [
        {
          name: 'parameter',
          type: 'relationship',
          relationTo: 'parameter'
        }
      ]
    },
    {
      name: 'attributes',
      label: 'Attributes',
      type: 'array',
      fields: [
        {
          name: 'parameter',
          type: 'relationship',
          relationTo: 'parameter'
        }
      ]
    },
    {
      name: 'slice-zone',
      label: 'SliceZone',
      type: 'array',
      fields: [
        {
          name: 'layout',
          blocks: [Admonition],
          required: true,
          type: 'blocks',
        },
      ]
    },
  ],
}

export default Endpoints