import Colaborador from "../Colaborador";
import "./Time.css"

const Time = (props) => {
    const css = {backgroundColor:props.corSecundaria};
    const css2 = {borderColor:props.corPrimaria};

    return(
        props.colaboradores.length > 0 ? <section className="time" style={css}>
            <h3 style={css2}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} idade={colaborador.idade} imagem={colaborador.imagem}/> )}
            </div>
        </section>
        : ''
    );
}

export default Time