import Image from "next/image";
import { randomPokemonObject } from "./random-pokemon";

export default async function PokeCard() {
    const pokemon = await randomPokemonObject();

    if (!pokemon) {
        return null
    };

    return (
        <section className="flex flex-col items-center border-4 rounded-lg border-blue-400 p-4 bg-blue-100">
            <figure><Image
                className="border-2 border-yellow-400 border-solid rounded-full bg-amber-50"
                alt={pokemon.name}
                height={200}
                width={200}
                src={pokemon.sprites}
            /></figure>
            <h2 className="text-xl font-bold text-center capitalize p-2">
                {pokemon.name}
            </h2>
            <section className="flex">
                <span className="text-md font-semibold flex items-center rounded-lg px-2">
                    #{pokemon.pokemonID}
                </span>
            </section>
            <ul className="gap-4">
                <li className="flex justify-between">
                    <h3 className="text-lg px-6">HP</h3>
                    <h3 className="text-lg px-6">{pokemon.health}</h3>
                </li>
                <li className="flex justify-between">
                    <h3 className="text-lg px-6">Attack</h3>
                    <h3 className="text-lg px-6">{pokemon.attack}</h3>
                </li>
                <li className="flex justify-between">
                    <h3 className="text-lg px-6">Defense</h3>
                    <h3 className="text-lg px-6">{pokemon.defense}</h3>
                </li>
            </ul>
        </section>
    )
}