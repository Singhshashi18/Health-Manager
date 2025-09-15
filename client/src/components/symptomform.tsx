    
import { useState } from "react";
import { getDiagnosis } from "../services/api";

interface Props {
  onResult: (diagnosis: string) => void;
}

function SymptomForm({ onResult }: Props) {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await getDiagnosis(symptoms);
    onResult(result);
    setLoading(false);
  };

  return (
    <>
      <textarea
        rows={5}
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading} style={{ marginTop: "1rem" }}>
        {loading ? "Checking..." : "Get Diagnosis"}
      </button>
    </>
  );
}

export default SymptomForm;
