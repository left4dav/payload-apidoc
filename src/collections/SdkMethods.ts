import type { CollectionConfig } from 'payload/types'

const SdkMethods: CollectionConfig = {
  slug: 'sdk-method',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'language',
      type: 'select',
      options: [
        "REST",
        'PHP',
        "NodeJS",
        "NodeJS TS",
        "Ruby",
        "Java",
        "Python",
        ".Net"
      ],
      defaultValue: 'REST'
    },
    {
      name: 'code',
      type: 'code'
    }
  ],
}

export default SdkMethods
