document.write('<article>');
document.write('<h2>Ejercicio 8</h2>');
let cantidad = parseInt(prompt('ingrese la cantida de elemntos del 1 al 50'));
console.log(cantidad);
if (typeof(cantidad)==='number'&& (cantidad>=1 && cantidad<=50)){
  for (let i = 1; i <= cantidad; i++){   
    let num=1; 
    console.log(num);     
    for (let j=1; j<=i;j++){ 
      document.write(num++);    
    }
    document.write('<br>');
  }
}else alert('no valido');

document.write('</article>');