import Item from "./Item";

function List() {
	return (
		<>
			<h1>Minha Lista</h1>
			<ul>
				<Item
					marca="Ferrari"
					ano_lancamento={1985}
					cor="Vermelho"
					// number em propriedades deve ser escrito com {}
				/>
				<Item
					marca="Fiat"
					cor="Azul"
				/>
				<Item marca="Renault" />
			</ul>
		</>
	);
}

export default List;
