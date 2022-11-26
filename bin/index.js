#! /usr/bin/env node


import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const Welcome = async () => {
    let rainbow = chalkAnimation.karaoke(chalk.underline("Welcome To Faizan's Calculator"));
    await Animation();
    console.log(`_____________________
    |  _________________  |
    | | Faizan          0.| 
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    rainbow.stop();
    AskQuestion();
};
const Animation = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
const AskQuestion = async () => {
    inquirer.prompt([{
            name: "num1",
            type: "input",
            message: "Enter 1st Value",
            validate: function (value) {
                var pass = !isNaN(value);
                if (pass) {
                    return true;
                }
                return console.log(chalk.red('Please enter a valid number'));
            },
        },
        {
            name: "num2",
            type: "input",
            message: "Enter 2nd Value"
        },
        {
            name: "operator",
            type: "list",
            choices: [{
                    name: "Add",
                    type: "number",
                },
                {
                    name: "Substract",
                    type: "number",
                },
                {
                    name: "Divide",
                    type: "number",
                },
                {
                    name: "Multiply",
                    type: "number",
                },
            ],
            message: "Select Operator"
        }
    ]).then((res) => {
        calulator(res);
        setTimeout(() => {
            PlayAgain();
        }, 1000);
    }).catch((err) => {
        console.log(err, 'ererer');
    });
};
const calulator = (answer) => {
    if (answer.operator === "Add") {
        return console.log(chalk.cyanBright(`${answer.num1} + ${answer.num2} =  ${Number(answer.num1) + Number(answer.num2)}`));
    }
    else if (answer.operator === "Substract") {
        return console.log(chalk.cyanBright(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if (answer.operator === "Divide") {
        return console.log(chalk.cyanBright(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
    else if (answer.operator === "Multiply") {
        return console.log(chalk.cyanBright(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
};
const PlayAgain = async () => {
    let answers = await inquirer.prompt([
        {
            name: "Play_Again",
            type: "confirm",
            choices: [{
                    name: "Yes",
                    type: "number",
                },
                {
                    name: "No",
                    type: "number",
                }
            ],
            message: "Do You Want to Play Again"
        }
    ]);
    if (answers.Play_Again) {
        return AskQuestion();
    }
    else {
        return console.log(chalk.greenBright("Thanks for playing"));
    }
};
Welcome();
