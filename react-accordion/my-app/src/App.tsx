import './App.css';
import { Accordion } from './Accordion';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

const topics: Topic[] = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  },
  {
    id: 3,
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    id: 9,
    title: 'JavaScript',
    content:
      'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
];

// function App() {
//   const [selectedId, setSelectedId] = useState(null);
//   function display(list: Array<string>) {
//     return (
//       <ul>
//         {list.map((item) => (
//           <li
//             key={item.id}
//             onClick={() => handleClick(item.id)}
//             style={{
//               backgroundColor: 'lightgray',
//               border: '3px solid black',
//               padding: '8px',
//               margin: '4px 0',
//               borderRadius: '3px',
//             }}>
//             {item.title}
//             {selectedId === item.id && (
//               <div className="detail">{item.detail}</div>
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//   const handleClick = (id) => {
//     setSelectedId(selectedId === id ? null : id);
//     console.log(id); // 切换选中状态
//   };

//   return (
//     <>
//       <div>{display(topics)}</div>
//     </>
//   );
// }

function App() {
  // topics is a prop
  return <Accordion myProp={topics} />;
}
export default App;
