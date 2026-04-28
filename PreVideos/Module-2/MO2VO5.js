// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 3 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((subtotal, product) => {
  //* acc -> Expected result gets stored in acc(Accumulator)
  console.log(subtotal, product);
  return subtotal + product.price * product.quantity;
}, 0);

console.log(subTotal);

// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Sheikh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestplayer, player) => {
  if (bestplayer.score > player.score) return bestplayer;

  return player;
}, players[0]);

console.log(bestScorer);
