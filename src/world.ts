interface World {
    name: string;
    population: number;
    countries: Country[];
}

interface Country {
    name: string;
    population: number;
}

const world: World = {
    name: "Earth",
    population: 7_000_000_000,
    countries: [  { name: "China", population: 1_400_000_000 },{ name: "India", population: 1_300_000_000 },{ name: "USA", population: 330_000_000 },{ name: "Indonesia", population: 270_000_000 },{ name: "Brazil", population: 210_000_000 } ]
}

console.log(world);