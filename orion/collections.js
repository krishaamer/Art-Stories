Partners = new orion.collection('partners', {
  singularName: "Partner",
  pluralName: "Partners",
  title: "Partners",
  link: {
    title: "Partners"
  },
  tabular: {
    columns: [
      { data: 'order', title: "Sort Order" },
      orion.attributeColumn('image', 'image', "Photo"),
      { data: 'name', title: "Name" },
    ]
  }
});

Partners.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    optional: false
  },
  order: {
    type: Number,
    label: "Sort Order",
    optional: false
  },
  image: orion.attribute('image', {
      label: "Logo",
      optional: true
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt'),
  updatedBy: orion.attribute('updatedBy'),
  updatedAt: orion.attribute('updatedAt')
}));


Team = new orion.collection('team', {
  singularName: "Team",
  pluralName: "Team",
  title: "Team",
  link: {
    title: "Team"
  },
  tabular: {
    columns: [
      { data: 'order', title: "Sort Order" },
      orion.attributeColumn('image', 'image', "Photo"),
      { data: 'name', title: "Name" },
    ]
  }
});

Team.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    optional: false
  },
  order: {
    type: Number,
    label: "Sort Order",
    optional: false
  },
  role: {
    type: String,
    label: "Role",
    optional: true
  },
  image: orion.attribute('image', {
      label: "Logo",
      optional: true
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt'),
  updatedBy: orion.attribute('updatedBy'),
  updatedAt: orion.attribute('updatedAt')
}));


Projects = new orion.collection('projects', {
  singularName: "Project",
  pluralName: "Projects",
  title: "Projects",
  link: {
    title: "Projects"
  },
  tabular: {
    columns: [
      { data: 'order', title: "Sort Order" },
      orion.attributeColumn('image', 'image', "Photo"),
      { data: 'author', title: "Author" },
      { data: 'title', title: "Title" },
      { data: 'subtitle', title: "Subtitle" },
      { data: 'lang', title: "Language" },
    ]
  }
});

Projects.friendlySlugs({
  slugFrom: 'title',
  slugField: 'slug',
  createOnUpdate: true,
  maxLength: 0,
  distinct: false,
  updateSlug: false
});

/*
Projects.after.find((userId, doc) => {
  console.log("find");
});
*/

Projects.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    optional: false
  },
  order: {
    type: Number,
    label: "Sort Order",
    optional: false
  },
  author: {
    type: String,
    label: "Author",
    optional: false
  },
  slug: {
    type: String,
    label: "URL",
    optional: true
  },
  status: {
    type: String,
    label: "Status",
    optional: true
  },
  views: {
    type: String,
    label: "Views",
    optional: true
  },
  trailer: {
    type: String,
    label: "Trailer Slug",
    optional: true
  },
  image: orion.attribute('image', {
      label: "Photo",
      optional: true
  }),
  painting: orion.attribute('image', {
      label: "Original Painting",
      optional: true
  }),
  subtitle: {
    type: String,
    label: "Subtitle",
    optional: true,
    autoform: {
      type: "markdown"
    }
  },
  body: {
    type: String,
    label: "Content",
    optional: true,
    autoform: {
      type: 'markdown'
    }
  },
  facebook: {
    type: Boolean,
    label: "Facebook Video?",
    optional: true
  },
  video: {
    type: String,
    label: "Video URL",
    optional: true,
    autoform: {
       type: "url"
    }
  },
  link: {
      type: String,
      label: "Link",
      optional: true,
      autoform: {
         type: "url"
      }
  },
  lang: {
      type: String,
      label: "What language?",
      optional: false,
      autoform: {
        type: "select-radio-inline",
        options: () => {
          return [
            {label: "English", value: "en"},
            {label: "Estonian", value: "et"},
            {label: "Portugues", value: "pt"},
            {label: "Santomean", value: "st"},
            {label: "中文", value: "cn"}
          ];
        }
      }
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt'),
  updatedBy: orion.attribute('updatedBy'),
  updatedAt: orion.attribute('updatedAt')
}));

About = new orion.collection('about', {
  singularName: "About",
  pluralName: "About",
  title: "Abouts",
  link: {
    title: "About"
  },
  tabular: {
    columns: [
      { data: 'title', title: "Title" },
      { data: 'lang', title: "Language" },
    ]
  }
});

About.friendlySlugs({
    slugFrom: 'title',
    slugField: 'slug',
    createOnUpdate: true,
    maxLength: 0,
    distinct: false,
    updateSlug: false
  }
);

About.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    optional: false
  },
  slug: {
    type: String,
    label: "URL",
    optional: true
  },
  body: {
    type: String,
    label: "Content",
    optional: false,
    autoform: {
      type: "markdown"
    }
  },
  lang: {
      type: String,
      label: "What language?",
      optional: false,
      autoform: {
        type: "select-radio-inline",
        options: () => {
          return [
            {label: "English", value: "en"},
            {label: "Estonian", value: "et"},
            {label: "Portugues", value: "pt"},
            {label: "Santomean", value: "st"},
            {label: "中文", value: "cn"}
          ];
        }
      }
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt'),
  updatedBy: orion.attribute('updatedBy'),
  updatedAt: orion.attribute('updatedAt')
}));