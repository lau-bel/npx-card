#!/usr/bin/env node

const boxen = require('boxen');
const CFonts = require('cfonts');
const chalk = require('chalk');

console.log(

CFonts.render('Welcome',
{

//font title :
font: 'block',              // define the font face
align: 'center',              // define text alignment
colors: ['candy'],         // define all colors
background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
letterSpacing: 1,           // define letter spacing
lineHeight: 1,              // define the line height
space: true,                // define if the output text should have empty lines on top and on the bottom
maxLength: '0',             // define how many character can be on one line

}).string +

boxen('Laura Belferroum'  + "\nJunior Web Developer @becode.org" +
" \n  ♥  Design" +
" \n ♥  People" +

chalk.magentaBright.bold("\n Instagram : ") + "https://www.instagram.com/utilisatrice42/)",


{padding: 1, margin: 1, borderStyle: 'double', float: 'center', align: "center", borderColor: "#f9bbbb"}));
