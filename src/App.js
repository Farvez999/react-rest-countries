import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Countries></Countries>
      {/* <Person></Person> */}
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h2>Visiting Every Country In the world...!</h2>
//       <h3>Available Country: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h3>Name : {props.name}</h3>
//       <p>Population : {props.population}</p>
//     </div>
//   )
// }

export default App;
