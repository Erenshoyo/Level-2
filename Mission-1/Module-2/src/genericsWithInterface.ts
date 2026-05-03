//? Use of generics in interface.

//! Here "null" is the default value for X (bike)
interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandLessWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const poorDev: Developer<
  BrandLessWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
  name: "Asif",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2001",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};

const richDev: Developer<AppleWatch> = {
  name: "Asif",
  salary: 120,
  device: {
    brand: "HP",
    model: "E31",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
};
