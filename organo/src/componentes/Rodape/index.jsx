import "./Rodape.css"

const Rodape = () => {
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="logo facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="logo twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="logo instragram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <p>
                    Desenvolvidor por Luizitus
                </p>
            </section>
        </footer>
    )
}

export default Rodape