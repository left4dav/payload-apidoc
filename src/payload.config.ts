import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Attributes from "./collections/Attributes";
import Endpoints from "./collections/Endpoints";
import Responses from "./collections/Responses";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users,Attributes,Endpoints,Responses],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  endpoints: [
    {
      path: '/api/endpoints',
      method: 'get',
      root: true,
      handler: async (req, res, next) => {
        const data = await req.payload.find({
          collection: 'endpoints',
          depth: 2,
        })
        if (data) {
          res.status(200).send({ data });
        } else {
          res.status(404).send({ error: 'not found' });
        }
      },
    },
  ],
})
