 
export const getDiagnosis = async (symptoms: string): Promise<string> => {
  const res = await fetch("http://localhost:3001/diagnose", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms }),
  });
  const data = await res.json();
  return data.diagnosis;
};
