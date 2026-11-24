const INTEGRANTES: string[] = ["Pedro", "Amanda", "Marlon", "Erasmo", "Marcos"];

function Footer() {
    // O ano sai da data do computador, então não precisa trocar à mão todo ano.
    const ano = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>Trabalho final de Front-end Frameworks · Análise e Desenvolvimento de Sistemas</p>
            <p>
                {INTEGRANTES.join(", ")} · {ano}
            </p>
        </footer>
    );
}

export default Footer;
