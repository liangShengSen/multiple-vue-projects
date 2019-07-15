const projectName = require("./project");

const config = {
  proA: {
    pages: {
      index: {
        entry: "src/projects/proA/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    }
  },
  proB: {
    pages: {
      index: {
        entry: "src/projects/proB/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    }
  }
};

const configObj = config[projectName.name]
module.exports = configObj