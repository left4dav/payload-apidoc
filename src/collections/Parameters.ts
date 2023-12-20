import type {CollectionConfig} from 'payload/types'
import richText from "../fields/richText";

const Parameters: CollectionConfig = {
  slug: 'parameters',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'usage',
      type: 'select',
      options: [
        'optional',
        'required',
        'required if',
        'deprecated'
      ],
      defaultValue: 'required'
    },
    richText({
      name: 'usageDescription',
    }),
    {
      name: 'type',
      type: 'select',
      options: [
        'string',
        'array',
        'object',
        'timestamp',
        'integer',
        'float',
        'boolean'
      ],
      defaultValue: 'string'
    },
    richText({
      name: 'defaultValues',
    }),
    richText({
      name: 'allowedValues',
    }),
    richText({
      name: 'returnValues',
    }),
    richText({
      name: 'description',
    }),
    {
      name: 'subParameters',
      label: 'Children',
      type: 'relationship',
      relationTo: 'parameters',
      hasMany: true,
      filterOptions: ({id}) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
  ],
}

export default Parameters
