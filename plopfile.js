const COMPONENTS_DIRECTORY = "src/components";
const TEMPLATES_DIRECTORY = "plop-templates/component";

const promptName = {
  type: "input",
  name: "name",
  message: "Insert component name, please:",
};

/**
 * Creating new plop command to generate various type of components:
 * - new:component <name>           Generate a normal (yet) atomic component. I.e. Card, Button, Custom list, etc.
 * - new:component-blocks <name>    Geneare a block-based component. I.e. Hero, Blog post, CTA container, etc.
 * - new:component-utils <name>     Generate a helper component that does not affect the view. I.e. SEO or Helmet.
 */
module.exports = (/** @type {import("plop").NodePlopAPI} */ plop) => {
  /** plop component <name> */
  plop.setGenerator("component", {
    description: "Create a new React base component",
    prompts: [promptName],
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

  /** plop component-blocks <name> */
  plop.setGenerator("component-blocks", {
    description: "Create a new React blocks component",
    prompts: [promptName],
    actions: [
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/blocks/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: `${TEMPLATES_DIRECTORY}/Component.tsx.hbs`,
      },
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/blocks/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
        templateFile: `${TEMPLATES_DIRECTORY}/Component.module.scss.hbs`,
      },
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/blocks/{{pascalCase name}}/index.ts`,
        templateFile: `${TEMPLATES_DIRECTORY}/index.ts.hbs`,
      },
    ],
  });

  /** plop component-utils <name> */
  plop.setGenerator("component-utils", {
    description: "Create a new React utils component",
    prompts: [promptName],
    actions: [
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/utils/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: `${TEMPLATES_DIRECTORY}/Component.tsx.hbs`,
      },
      {
        type: "add",
        path: `${COMPONENTS_DIRECTORY}/utils/{{pascalCase name}}/index.ts`,
        templateFile: `${TEMPLATES_DIRECTORY}/index.ts.hbs`,
      },
    ],
  });
};
