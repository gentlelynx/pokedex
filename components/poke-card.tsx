import Image from "next/image";
import { randomPokemonObject } from "./random-pokemon";

export default async function PokeCard() {
    const pokemon = await randomPokemonObject();

    if (!pokemon) {
        return null
    };

    return (
        <div className="flex flex-col items-center border-4 rounded-lg border-blue-400 p-4 bg-blue-100">
            <Image
                className="border-4 rounded-full"
                alt={pokemon.name}
                height={200}
                width={200}
                src={pokemon.sprites}
            />
            <h2 className="text-xl font-bold text-center capitalize p-2">
                {pokemon.name}
            </h2>
            <div className="flex">
                <span className="text-md font-semibold flex items-center rounded-lg px-2">
                    #{pokemon.pokemonID}
                </span>
            </div>
            <div>
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
            </div>
        </div>
    )
}