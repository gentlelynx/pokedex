import Hero from "@/components/hero";
import FeaturedPokemon from "@/components/featured-pokemon";
import Search from "@/components/search";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Search />
      <FeaturedPokemon />
      <Footer />
    </main>
  );
}
