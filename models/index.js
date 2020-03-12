const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

const User = db.define("user", {
  // Q: async/await? Why (not)?
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

const Page = db.define("page", {
  // Q: async/await? Why (not)?
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("open", "closed")
  }
});

function slugFunction(arg) {
  if (arg.length) {
    // generate a random string slug
  } else {
    // arg =
  }
}

Page.beforeValidate = page => {
  page.slug = slugFunction(page.title); // Q: async/await? Why (not)?
};

module.exports = {
  db,
  Page,
  User
};
