let paises = [];

let opcionesDeViaje = prompt(
  'Ingresa el país de destino\n1 - Chile\n2 - Argentina\n3 - Venezuela'
);

function escogerPais(pais) {
  if (pais === '1') {
    alert('Planifiquemos tu viaje a Chile');
  } else if (pais === '2') {
    alert('Planifiquemos tu viaje a Argentina');
  } else if (pais === '3') {
    alert('Planifiquemos tu viaje a Venezuela');
  } else {
    alert('Selecciona una opción válida');
  }
}
escogerPais(opcionesDeViaje);

let presupuestoDeViaje = Number(
  prompt('Ingresa el monto de tu presupuesto para este viaje')
);

function obtenerMontos() {
  let hospedaje = parseFloat(prompt('Ingresa el presupuesto para hospedaje'));
  let transporte = parseFloat(prompt('Ingresa el presupuesto para transporte'));
  let comida = parseFloat(prompt('Ingresa el presupuesto para comida'));

  return { hospedaje, transporte, comida };
}

function calcularGastos() {
  const { hospedaje, transporte, comida } = obtenerMontos();
  let gastos = parseInt(hospedaje) + parseInt(transporte) + parseInt(comida);
  let balance = presupuestoDeViaje - gastos;
    alert(
      `Tu balance es de: ${balance}`
    );

}
calcularGastos();

  for (let i = 0; i <= 2; i++) {
    if (paises.length === 0) {
      let pais = prompt('Ingresa el pais que desearías visitar');
      paises.push[pais];
      alert(
        `La vida es corta, comienza a planificar tu próximo viaje a ${pais.toUpperCase()}`
      );
      break;
    } else {
      alert('¡Excelente elección!');
    }
  }




