//Aquí se configura el valor de los grados en escala Kelvin
const kelvinDegrees = 293;

//Aquí se obtiene el valor de los grados en escala Celsius
const celciusDegrees = kelvinDegrees - 273;

//Aquí se obtiene el valor de los grados en escala Fahrenheit
let fahrenheitDegrees = celciusDegrees * (9 / 5) + 32;
fahrenheitDegrees = Math.floor(fahrenheitDegrees);

//Aquí se imprime el resultado dentro de un string
console.log(`The temperature is ${fahrenheitDegrees} degrees Fahrenheit`);

//Aquí se obtiene el valor de los grados en escala Newton
let newtonDegrees = celciusDegrees * (33 / 100);
newtonDegrees = Math.floor(newtonDegrees);

//Aquí se imprime el resultado dentro de un string
console.log(`The temperature is ${newtonDegrees} degrees Newton`);
