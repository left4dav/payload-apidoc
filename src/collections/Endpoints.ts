import type {CollectionConfig} from 'payload/types'
import {Admonition} from "../blocks/Admonition";
import { HttpResponse } from '../blocks/HttpResponse'

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
            ]
        },
        {
            name: 'bodyParams',
            label: 'BodyParameters',
            type: 'array',
            fields: [
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
            ]
        },
        {
            name: 'pathParams',
            label: 'PathParameters',
            type: 'array',
            fields: [
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
            ]
        },
        {
            name: 'queryParams',
            label: 'QueryParameters',
            type: 'array',
            fields: [
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
            ]
        },
        {
            name: 'sdkMethods',
            label: 'SDK methods',
            type: 'array',
            fields: [
                {
                    name: 'sdkMethod',
                    label: 'SDK method',
                    type: 'relationship',
                    relationTo: 'sdk-method',
                    hasMany: false,
                    filterOptions: ({id}) => {
                        return {
                            id: {
                                not_in: [id],
                            },
                        }
                    },
                },
            ]
        },
        {
            name: 'slicezone',
            label: 'SliceZone',
            type: 'array',
            fields: [
                {
                    name: 'layout',
                    blocks: [Admonition, HttpResponse],
                    required: true,
                    type: 'blocks',
                },
            ]
        },
    ],
}

export default Endpoints
