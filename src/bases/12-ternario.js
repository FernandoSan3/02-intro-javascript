const activo = true;

let mensaje = '';

activo ? mensaje = 'Activo' : mensaje = 'Inactivo';

console.log(mensaje);

const mensaje1 = !activo && 'Activo';
console.log(mensaje1);