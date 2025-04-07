import './App.css';
import { SearchableList } from './SearchableList';

// const quotes = [
//   'Yer a wizard Harry.',
//   "I hope you're pleased with yourselves.",
//   'It does not do well to dwell on dreams and forget to live.',
//   'To the well-organized mind, death is but the next great adventure.',
//   "You're a little scary sometimes, you know that? Brilliant... but scary.",
//   'There will be no foolish wand-waving or silly incantations in this class.',
//   'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
//   'If there is one thing Voldemort cannot understand, it is love.',
//   'As much money and life as you could want!',
//   'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
//   'There are some things you can’t share without ending up liking each other.',
//   'Ah, music. A magic beyond all we do here!',
// ];
const list = [
  'Yer a wizard Harry.',
  "I hope you're pleased with yourselves.",
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure.',
  "You're a little scary sometimes, you know that? Brilliant... but scary.",
  'There will be no foolish wand-waving or silly incantations in this class.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'If there is one thing Voldemort cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
  'There are some things you can’t share without ending up liking each other.',
  'Ah, music. A magic beyond all we do here!',
];

// const [initalcontent, setContent] = useState(quotes);
// const [searchTerm, setSearchTerm] = useState('');

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const value = event.target.value;
//   setSearchTerm(value);

//   if (value === '') {
//     setContent(quotes);
//   } else {
//     const filtered = findItem(quotes, value);
//     setContent(filtered);
//   }
// };
// function findItem(arr: string[], searchTerm: string): string[] {
//   return arr.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }
// function contentfunction() {
//   const newList = quotes.map((quote, index) => <li key={index}>{quote}</li>);
//   return newList;

/* <form>
        <h3>Search</h3>
        <input
          type="text"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search quotes..."></input>
      </form>
      {contentfunction()}
    */

function App() {
  return (
    <div className="App">
      <SearchableList list={list} />
    </div>
  );
}

export default App;
