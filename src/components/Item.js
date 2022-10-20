import PropTypes from "prop-types";

function Item({ marca, ano_lancamento, cor }) {
	return (
		<>
			<li>
				{marca} - {ano_lancamento} - {cor}
			</li>
		</>
	);
}

//validação a nível de usuário para checar o tipo da propriedade
// propTypes está escrito em minúsculo por ser, nesta declaração,
// uma propriedade do componente
Item.propTypes = {
	//define que a propriedade marca tem que ser uma string
	//e que é obrigatória.
	//Nest caso PropTypes é escrito com maísculo pois está invocando o
	//componente PropTypes para executar sua lógica
	marca: PropTypes.string.isRequired,
	ano_lancamento: PropTypes.number.isRequired,
	cor: PropTypes.string.isRequired,
};

Item.defaultProps = {
	//O valor de marca nesse caso mata o .isRequired já que será
	//setado um valor para que a propriedade não fique vazia
	marca: "Faltou a marca",
	ano_lancamento: 0,
};

export default Item;
