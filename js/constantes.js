export const PI = Math.PI;

export let usuario = "Maxi";

const password = "qwerty";
// export default password;

const hello = () => console.log("Hello");

export default function saludar() {
  console.log("Hola módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
