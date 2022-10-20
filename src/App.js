import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Form from "./components/Form";

function App() {
	const nome = "Maria"; // outra forma de passar uma props

	return (
		<div className="App">
			<HelloWorld />

			{/* passando uma props através do próprio componente */}
			<SayMyName nome="Matheus" />
			{/* passando uma props através de variável */}
			<SayMyName nome={nome} />

			<Pessoa
				foto="https://via.placeholder.com/50"
				nome="Madson"
				idade="26"
				profissao="Front-end developer"
			/>

			<div>
				<List />
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
}

export default App;
