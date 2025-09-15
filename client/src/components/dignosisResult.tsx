  interface Props {
  diagnosis: string;
}

function DiagnosisResult({ diagnosis }: Props) {
  return (
    <div style={{ marginTop: "2rem", background: "#f9f9f9", padding: "1rem" }}>
      <h2>🧠 AI Suggestion</h2>
      <p>{diagnosis}</p>
    </div>
  );
}

export default DiagnosisResult;
