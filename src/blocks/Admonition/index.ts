import type {Block} from "payload/types";
import richText from "../../fields/richText";

export const Admonition: Block = {
  fields: [
    richText({
      name: 'description'
    }),
  ],
  slug: 'admonition',
}

