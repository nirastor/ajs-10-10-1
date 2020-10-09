/* eslint-disable no-console */
import './css/style.css';
import GameSavingLoader from './js/GameSavingLoader';

console.log('index.js started');

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (e) => {
  console.log(`some error ${e}`);
});
