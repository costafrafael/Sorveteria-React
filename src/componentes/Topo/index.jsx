import Link from "next/link";
import Image from "next/image";

import estilos from './Topo.module.css';
import Logo from "../../../public/logo.png";

export default function Topo() {
    return (
        <header className={estilos.containertopo}>
            <div>
                <Image className={estilos.img} src={Logo} alt="logomarca" />
                <nav>
                    <Link className={estilos.linktopo} href="/">Home</Link>
                    <Link className={estilos.linktopo} href="/sabores">Sabores</Link>
                    <Link className={estilos.linktopo} href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}
