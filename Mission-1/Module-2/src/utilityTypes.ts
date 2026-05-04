//? Utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

//? Pick utility type
type ProductSummary = Pick<Product, "id" | "name" | "price">;

//? Omit utility type
type ProductWithoutStock = Omit<Product, "stock" | "color">;

//? Required utility type
type ProductWithColor = Required<Product>;

const product1: ProductWithColor = {
  id: 254,
  name: "Mouse",
  price: "2000",
  stock: 100,
  color: "Green",
};

//? Partial utility type -> makes every 'type' optional
type optionalProduct = Partial<Product>;

//? Readonly utitlity type
type ProductReadonly = Readonly<Product>;

//? Record utility type
const emptyObj: Record<string, unknown> = {}; //* Declared an object with "Record" utility class, which ensures maximum type safety in this particuler case.
