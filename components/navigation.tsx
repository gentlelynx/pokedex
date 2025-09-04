import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <header className="content-grid">
            <nav>
                <ul className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-5">
                        <Image
                            src="/Logo.png"
                            alt="Pokedex"
                            width={40}
                            height={40}
                        />
                        <h1 className="text-3xl gap-2">Pokedex</h1>
                    </div>
                    <div className="flex gap-5">
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li>
                            <Link href="#">Pokedex</Link>
                        </li>
                        <li>
                            <Link href="#">Types</Link>
                        </li>
                        <li>
                            <Link href="#">Favourites</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}