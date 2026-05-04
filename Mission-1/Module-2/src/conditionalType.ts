//? conditional type -> the type that depends on conditions

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type RichVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type checkVehicle<T> = T extends keyof RichVehicle ? true : false;

type HasMentionedVehicles = checkVehicle<"ship">;

//! Not used much but good to know. Used mostly in complex situations.
