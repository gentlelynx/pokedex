import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center p-8 bg-gray-700">
            <div className="flex gap-4">
                <Image
                    src="/Logo.png"
                    alt=""    
                    width={40}
                    height={40}
                />
                <h2 className="text-3xl text-white">Pokédex</h2>
            </div>
            <p className="p-6 text-white">Explore the world of Pokémon</p>
            <div>
            </div>
        </footer>
    );
}