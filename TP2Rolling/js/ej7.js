document.write('<article>');
document.write('<h2>Ejercicio 6</h2>');
let cantidad = parseInt(prompt('ingrese la cantida de elemntos del 1 al 50'));
console.log(cantidad);
if (typeof(cantidad)==='number'){
  for (let i = cantidad; i > 0; i--){
    console.log(i);
    for (let j=1; j<=i;j++){
      document.write(i);
    }
    document.write('<br>');
  }
}else alert('no valido');

document.write('</article>');