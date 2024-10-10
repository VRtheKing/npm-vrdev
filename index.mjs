#!/usr/bin/env node

'use strict';

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      {
        name: `Send me an ${chalk.cyan.bold('email')}?`,
        value: () => {
          open('mailto:mvram200@gmail.com');
          console.log('\nDone, see you soon in the inbox.\n');
        }
      },
      {
        name: `Download my ${chalk.magentaBright.bold('Resume')}?`,
        value: () => {
          open('https://drive.google.com/drive/u/2/folders/1UYGV3xXEIP7JvrmZ-hCwG-0c2e_yUDcc');
          console.log('\nOpening resume in your browser...\n');
        }
      },
      {
        name: `Schedule a ${chalk.blue.bold('Meeting')}?`,
        value: () => {
          open('https://calendly.com/vrdev');
          console.log('\nSee you at the meeting\n');
        }
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('See You Again, Very Very Soon ;) \n');
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.cyan('                      Vishnu Ram M'),
  handle: chalk.white('@vrdev'),
  Quote: `${chalk.white('    I Can Do This All Day.')}`,
  twitter: chalk.gray('https://x.com/') + chalk.cyan('vrdev_'),
  github: chalk.gray('https://github.com/') + chalk.green('VRtheKing'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('vrdev'),
  web: chalk.cyan('https://linktr.ee/mvram'),
  npx: chalk.cyan('npx') + ' ' + chalk.white('vrdev'),

  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.Quote}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic('Eager to explore exciting collaborations and new ventures?')}`,
    `${chalk.italic('My inbox is a portal for possibilities, ready for your ideas!')}`,
    `${chalk.italic('Whether it’s a question, a thought, or a spark of inspiration,')}`,
    `${chalk.italic('I’m here to connect and create something amazing together!')}`,
    ``,
    `${chalk.bold('Just Remember:')} ${chalk.italic('"While you slept, the world changed."')}`
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: '#81A1C1',
    backgroundColor: '#2E3440'
  }
);

console.log(me);

const tip = [
  `Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
  ''
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());
