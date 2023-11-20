import './App.css';

// Appp component=view+ logic(Declaration)
function App() {
  const users = [
    {
      name: "Pradeep",
      pic: "https://wallpapers.com/naruto"
    },
    {
      name: "srinath",
      pic: "https://wallpapers.com/naruto"
    },

    {
      name: "Balaji",
      pic: "https://wallpapers.com/naruto"
    }
  ];
  return (
    <div className="App">
      {users.map((usr) => (<User name={usr.name} pic={usr.pic} />
      )
      )
      }
    </div>
  );
}
function User(props) {
  return (
    <section>
      <img src={props.pic} alt={props.name} />
      <h1>Hello <span>{props.name}</span>.😂😂😂</h1>;
    </section>
  );
}

export default App;
