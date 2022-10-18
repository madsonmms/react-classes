import styles from "./Pessoa.module.css";

//({nome, idade...}) é utilizado para desestruturar props, para que não seja necessário iniciar props.name,
// props.idade en todas as partes da função
function Pessoa({ nome, idade, profissao, foto }) {
	return (
		<div className="container">
			<div className="row">
				<img
					src={foto}
					alt={nome}
				/>
				<h2>Nome: {nome}</h2>
				<p>Idade: {idade}</p>
				<p>Profissão: {profissao}</p>

				{/* Na intenção de usar classes bootstrap combinadas com classes customizadas no JSX é 
                necessário utilizar a crase (back-ticks) para definir que dentro dessa propriedade className 
                haverá texto comum e variáveis.
                Além disso as variáveis deverão ser acompanhadas de um cifrão e colchetes.  */}
				<button className={`${styles.botao} btn btn-danger`}>Botão</button>
			</div>
		</div>
	);
}

export default Pessoa;
