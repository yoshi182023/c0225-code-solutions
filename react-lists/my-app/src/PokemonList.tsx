import { Pokemon } from './App';

type PokemonListProps = {
  pokedex: Pokemon[];
};

export default function PokemonList({ pokedex }: PokemonListProps) {
  const listItems = pokedex.map((poke) => (
    <li key={poke.number}>
      #{poke.number} - {poke.name}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
