const Tags = {
  slug: 'tags',
 access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
    
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Tags;
