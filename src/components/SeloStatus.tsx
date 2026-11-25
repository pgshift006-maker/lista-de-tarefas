
interface SeloStatusProps {
  concluida: boolean;
}

export default function SeloStatus({
  concluida
}: SeloStatusProps) {
  return (
    <span
      style={{
        backgroundColor: concluida ? "#dcfce7" : "#fef3c7",
        color: concluida ? "#166534" : "#92400e",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      {concluida ? "Concluída" : "Pendente"}
    </span>
  );
}

