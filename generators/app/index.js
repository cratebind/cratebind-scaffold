'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('storybook'); // This method adds support for a `--babel` flag
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the superb ${chalk.red(
          'generator-cratebind-scaffolder'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'checkbox',
        name: 'features',
        message: 'What features would you like to add?',
        choices: ['Storybook', 'Apollo', 'Cypress'],
      },
      // {
      //   type: 'confirm',
      //   name: 'someAnswer',
      //   message: 'Would you like to enable this option?',
      //   default: true,
      // },
    ];

    return this.prompt(prompts).then(props => {
      console.log(props);
      // To access props later use this.props.someAnswer;
      this.features = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('**/*'), this.destinationRoot());
  }

  features() {
    if (this.features.includes('Storybook')) {
      this.log('Adding Storybook');
    }
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
    });
  }
};
