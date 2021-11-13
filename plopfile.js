const COMPONENTS_DIRECTORY = "src/components";
const TEMPLATES_DIRECTORY = "plop-templates/component";

module.exports = (/** @type {import("plop").NodePlopAPI} */ plop) => {
  plop.setGenerator("component", {
    description:
      "Create a new React component (TypeScript React) in a subdirectory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Insert component name, please:",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: `${TEMPLATES_DIRECTORY}/Component.tsx.hbs`,
      },
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
        templateFile: `${TEMPLATES_DIRECTORY}/Component.module.scss.hbs`,
      },
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/{{pascalCase name}}/index.ts`,
        templateFile: `${TEMPLATES_DIRECTORY}/index.ts.hbs`,
      },
    ],
  });
};
