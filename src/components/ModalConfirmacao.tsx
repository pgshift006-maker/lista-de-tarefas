type ModalConfirmacaoProps = {
    aberto: boolean;
    mensagem: string;
    onConfirmar: () => void;
    onCancelar: () => void;
};

// Janela de confirmação reutilizável: quem usa decide a mensagem e o que fazer.
function ModalConfirmacao({
    aberto,
    mensagem,
    onConfirmar,
    onCancelar,
}: ModalConfirmacaoProps) {
    // Fechado: não desenha nada.
    if (!aberto) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
            }}
        >
            <div
                style={{
                    background: "var(--bg)",
                    color: "var(--text-h)",
                    border: "1px solid var(--border)",
                    padding: 24,
                    borderRadius: 8,
                    maxWidth: 360,
                }}
            >
                <p>{mensagem}</p>
                <button type="button" onClick={onConfirmar}>
                    Confirmar
                </button>{" "}
                <button type="button" onClick={onCancelar}>
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default ModalConfirmacao;

