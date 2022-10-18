import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
	const nome = "Maria"; // outra forma de passar uma props

	return (
		<div className="App">
			<h1>
				<HelloWorld />

				{/* passando uma props através do próprio componente */}
				<SayMyName nome="Matheus" />
				{/* passando uma props através de variável */}
				<SayMyName nome={nome} />

				<Pessoa
					foto="https://via.placeholder.com/150"
					nome="Madson"
					idade="26"
					profissao="Front-end developer"
				/>
			</h1>
		</div>
	);
}

export default App;
