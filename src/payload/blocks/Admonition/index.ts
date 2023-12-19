import type {Block} from "payload/types";
import richText from "../../fields/richText";

const Admonition: Block = {
  fields: [
    {
      name: 'size',
      defaultValue: 'oneThird',
      type: 'select',
    },
    richText(),
    {
      name: 'enableLink',
      type: 'checkbox',
    },
  ],
  slug: 'admonition',
}

