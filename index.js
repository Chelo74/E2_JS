const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


/* a) Las pizzas que tengan un id impar. */

pizzas.forEach (e => e.id % 2 !== 0 ?console.log(`${e.id}- ${e.nombre}: $${e.precio}`) :0);

console.log('');
/* b) Responder: ¿Hay alguna pizza que valga menos de $600? */

const somePizza = pizzas.some((e) => e.precio < 600);
somePizza === true ?console.log('Existe al menos una pizza con valor menor a $600.') :console.log('No existen pizzas con valor menor a $600');

console.log('');
/* c) El nombre de cada pizza con su respectivo precio. */

pizzas.forEach(e => console.log(`La ${e.nombre} tiene un valor de: $${e.precio}`));

console.log('');

/* d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). */

pizzas.forEach(e => {
  console.log(`${e.nombre} - Ingredientes: ${e.ingredientes}`);
});