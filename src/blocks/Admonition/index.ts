import type {Block} from "payload/types";
import richText from "../../fields/richText";
import {HeadingFeature, lexicalEditor, LinkFeature, ParagraphFeature} from "@payloadcms/richtext-lexical";
import {LabelFeature} from "../../fields/lexicalFeatures/label";
import {LargeBodyFeature} from "../../fields/lexicalFeatures/largeBody";

export const Admonition: Block = {
  fields: [
    richText({
      editor: lexicalEditor({
        features: [
          ParagraphFeature(),
          HeadingFeature({enabledHeadingSizes: ['h1']}),
          LinkFeature({}),
          LabelFeature(),
          LargeBodyFeature(),
        ],
      }),
      name: 'description'
    }),
    {
      name: 'icon',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  slug: 'admonition',
}

