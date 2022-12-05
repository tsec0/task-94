import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    // get the element with the emoji content;
    let div_content = document.getElementById('emojis');

    // clearing div textContent and children
    div_content.textContent = '';
    while (div_content.firstChild) {
      div_content.removeChild(div_content.firstChild);
    }

    // creating a paragraph and adding the modified emoji monkey array
    let paragrph = document.createElement('p');
    if (this.emojis.length != 0) {
      this.emojis.forEach(item => paragrph.textContent += item);
    }

    // adding the paragraph to the div_content!
    div_content.appendChild(paragrph);
  }

  addBananas() {
    // using map method to add banana to a monkey item in the emoji Arr
    let para = document.getElementsByTagName('p')[0];
    if (this.emojis.length != 0) {
      this.emojis = this.emojis.map(item => item += this.banana);
      // console.log(this.emojis)
      para.textContent = this.emojis.join('');
    }
  }
}
