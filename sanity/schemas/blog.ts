export default {
      name: 'blog',
      title: 'Blog',
      type: 'document',
      fields: [
            {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
            },
            {
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                  options: {
                        source: 'title',
                        maxLength: 96,
                  },
            },
            {
                  name: 'titleImage',
                  title: 'Main image',
                  type: 'image',
                  options: {
                        hotspot: true,
                  },
            },
            {
                  name: 'smallDescription',
                  title: 'Description',
                  type: 'text',
            },
            {
                  name: 'content',
                  title: 'Content',
                  type: 'array',
                  of: [{type: 'block'}],
            },
      ],};