import { useState } from "react";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSymptoms = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:3001/diagnose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });
    const data = await res.json();
    setDiagnosis(data.diagnosis);
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🩺 Symptom Checker</h1>
      <textarea
        rows={5}
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChange={e => setSymptoms(e.target.value)}
      />
      <br />
      <button onClick={checkSymptoms} disabled={loading}>
        {loading ? "Checking..." : "Get Diagnosis"}
      </button>
      {diagnosis && (
        <div style={{ marginTop: "2rem", background: "#f9f9f9", padding: "1rem" }}>
          <h2>🧠 AI Suggestion</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
}

export default App;
