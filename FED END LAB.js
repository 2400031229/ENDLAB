import React, { useState } from "react";

export default function StudentForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <div style={{ width: 300, margin: "50px auto", padding: 20, border: "1px solid #ccc" }}>
      <h3>Student Registration</h3>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ width: "100%", marginTop: 10 }}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ width: "100%", marginTop: 10 }}
          />
          <button
            onClick={() => (form.name && form.email ? setStep(2) : alert("Fill all fields"))}
            style={{ width: "100%", marginTop: 10 }}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <p><b>Name:</b> {form.name}</p>
          <p><b>Email:</b> {form.email}</p>
          <button
            onClick={() => setStep(1)}
            style={{ width: "100%", marginTop: 10 }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}
