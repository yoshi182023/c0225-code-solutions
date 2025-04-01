import { useState } from 'react';

type Props = {
  list: string[];
};

export function SearchableList({ list = [] }: Props) {
  const [value, setValue] = useState('');
  // const [quotes, setQuotes] = useState(list);
  const quotes = list?.filter((quote) =>
    quote.toLowerCase().includes(value.toLowerCase())
  );

  function handleChange(newValue: string) {
    setValue(newValue);
    // const filteredQuotes = quotes.filter((quote) =>
    //   quotes.toLowerCase().includes(newValue.toLowerCase())
    // );
    // setQuotes(filteredQuotes);
  }
  return (
    <div className="wrapper">
      <SearchBar value={value} onCustomChange={handleChange} />
      <Items items={quotes} />
    </div>
  );
}
type searchbarProps = {
  value: string;
  onCustomChange: (newValue: string) => void;
};

function SearchBar({ value, onCustomChange }: searchbarProps) {
  return (
    <input
      value={value}
      name="search"
      type="text"
      onChange={(e) => onCustomChange(e.target.value)}
    />
  );
}

type ItemProps = {
  items: string[];
};

function Items({ items }: ItemProps) {
  if (items.length === 0) {
    return <p>"No items found"</p>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item} </li>
      ))}
    </ul>
  );
}

// import { useState } from 'react';

// type Props = {
//   list: string[];
// };

// export function SearchableList({ list }: Props) {
//   const [value, setValue] = useState('');

//   // Filter the original list based on search value
//   const filteredQuotes = list.filter((quote) =>
//     quote.toLowerCase().includes(value.toLowerCase())
//   );

//   function handleChange(newValue: string) {
//     setValue(newValue);
//   }

//   return (
//     <div className="wrapper">
//       <SearchBar value={value} onCustomChange={handleChange} />
//       <Items items={filteredQuotes} />
//     </div>
//   );
// }

// type SearchBarProps = {
//   value: string;
//   onCustomChange: (newValue: string) => void;
// };

// function SearchBar({ value, onCustomChange }: SearchBarProps) {
//   return (
//     <input
//       value={value}
//       name="search"
//       type="text"
//       onChange={(e) => onCustomChange(e.target.value)}
//       placeholder="Search quotes..."
//     />
//   );
// }

// type ItemProps = {
//   items: string[];
// };

// function Items({ items }: ItemProps) {
//   if (items.length === 0) {
//     return <p>No items found</p>;
//   }
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }
