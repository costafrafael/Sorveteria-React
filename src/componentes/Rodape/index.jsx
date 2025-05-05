import Image from "next/image";

import estilos from './Rodape.module.css';
import Logo from "../../../public/logo.png";

export default function Rodape() {
    return (
        <footer className={estilos.containerrodape}>
            <div className={estilos.containerinfo}>
                <Image className={estilos.img} src={Logo} alt="logomarca" />
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP</p>
                    <p>CEP: 12345-678</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p><a href="https://wa.me/5581996343413" target="_blank">WA: (81) 99634-3413</a></p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className={estilos.criador}>
                <p>Gelateria. Desenvolvido por Rafael Costa</p>
            </div>
        </footer>

    )
}