import { useState } from "react";

function Form() {
	//usamos o e para devidir como propriedade o evento que é acionado
	//ao realizar a ção do html
	function cadastrarUsuario(e) {
		//definimos e com .preventDefault() para impedir o comportamento padrão da ação
		//permitindo que a ação realize apenas o que desejamos.
		e.preventDefault();
		console.log("Cadastrou o usuário");
		console.log(`Usuário: ${name} e Senha: ${password}`);
	}

	const [name, setName] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
			<h1>Formulário Exemplo</h1>
			<form onSubmit={cadastrarUsuario}>
				<div>
					<label htmlFor="name">Nome: </label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Digite seu nome"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Senha: </label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Digite sua senha"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="submit"
						value="Cadastrar"
					/>
				</div>
			</form>
		</div>
	);
}

export default Form;
