import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Platform for social media",
      type: "string"
    }),
    defineField({
      name: "iconImage",
      title: "Icon Image",
      type: "image",
      options: {
          hotspot: true
      }
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
  ],
})
