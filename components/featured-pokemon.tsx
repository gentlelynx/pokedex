import PokeCard from "./poke-card"

export default async function FeaturedPokemon() {
    return (
        <section className="flex flex-col items-center p-16 bg-gradient-to-r from-purple-300 to-blue-300">
            <h2 className="text-3xl font-bold text-center mb-8 font-stretch-expanded">
                Featured Pokemon
            </h2>
            <div className="flex gap-3 justify-between">
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
            </div>
        </section>
    )
}