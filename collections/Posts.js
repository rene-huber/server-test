const Posts = {
  slug: "posts",

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,

  },

  fields: [
    {
      name: "Title",
      type: "text",
    },
    {
      name: "Description",
      type: "richText",
    },
    {
      name: "Image",
      type: "upload",
      relationTo: "media",
    },

    {
      name: "Categories",
      type: "select",
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: "All",
          value: "All",
        },
        {
          label: "React",
          value: "React",
        },
        {
          label: "UI/UX",
          value: "UI/UX",
        },
        {
          label: "Wordpress",
          value: "Wordpress",
        },
      ],
    },
  ],
};

export default Posts;
