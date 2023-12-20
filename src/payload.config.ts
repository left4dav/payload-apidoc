import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { buildConfig } from 'payload/config'

import Attributes from './collections/Attributes'
import Endpoints from './collections/Endpoints'
import Responses from './collections/Responses'
import Users from './collections/Users'

// noinspection TypeScriptValidateTypes
export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  collections: [Users, Attributes, Endpoints, Responses],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  editor: slateEditor({}),
  endpoints: [
    {
      handler: async (req, res) => {
        const data = await req.payload.find({
          collection: 'endpoints',
          depth: 2,
        })
        if (data) {
          res.status(200).send({ data })
        } else {
          res.status(404).send({ error: 'not found' })
        }
      },
      method: 'get',
      path: '/api/endpoints',
      root: true,
    },
  ],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})