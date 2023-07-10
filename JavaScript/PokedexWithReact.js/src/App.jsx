import * as React from 'react';
import PropTypes from 'prop-types';

function App() {
  // const pokeData = [
  //   {
  //     name: 'ditto',
  //     height: 4,
  //     weight: 30,
  //     id: 132,
  //   },
  //   {
  //     name: 'testPokemon',
  //     height: 432,
  //     weight: 422,
  //     id: 333,
  //   },
  // ];

  const [searchTerm, setSearchTerm] = React.useState('pikachu');
  const [pokemonData, setPokemonData] = React.useState(null);

  React.useEffect(() => {
    const fetchPokemon = async() => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLocaleLowerCase()}`)
        const data = await response.json();
        setPokemonData(data);
      } catch (err) {
        console.log('Error fetching Pokemon', err);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  // const searchPokemon = pokeData.filter((poke) => 
  //   poke.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  // );

  // const searchPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLocaleLowerCase()}`)

  return (
    <div>
      <h1>Hello</h1>

      <Search onSearch={handleSearch} />

      <hr />

      {pokemonData ? (
        <List list={[pokemonData]} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const Search = (props) => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' onChange={props.onSearch} />
  </div>
);
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
        <Item key={item.id} item={item} />
      ))
    }
  </ul>
);
List.propTypes = {
  list: PropTypes.array.isRequired,
};

const Item = (props) => {
  // if(!props.item) {
  //   return null;
  // }

  const { name, height, weight, sprites } = props.item;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Height: {height ? height/10 : ''}m</div>
      <div>Weight: {weight ? weight/10 : ''}kg</div>
      {sprites && sprites.front_default && (
          <div>
            <p>Default</p>
            <img src={sprites.front_default} alt='Pokemon Image' />
          </div>
        )}
      {sprites && sprites.front_female && (
        <div>
          <p>Female</p>
          <img src={sprites.front_female} alt='Pokemon Female Image' />
        </div>
      )}
      {sprites && sprites.front_shiny && (
        <div>
          <p>Shiny</p>
          <img src={sprites.front_shiny} alt='Pokemon Shiny Image' />
        </div>
      )}
    </div>
  )
};
Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
      front_female: PropTypes.string.isRequired,
      front_shiny: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
