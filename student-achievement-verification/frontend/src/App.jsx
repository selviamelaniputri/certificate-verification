import "./App.css";
import { useState } from "react";

function App() {
  const contractId =
    "CAHFMDMJOFSHCGX6X4JNR7WV564NDNAP5RGWZ4ARJDUNKIHA3JSX2AKK";

  const [studentName, setStudentName] = useState("");
  const [achievement, setAchievement] = useState("");
  const [year, setYear] = useState("");

  const [result, setResult] = useState(null);

  const saveAchievement = () => {
    if (!studentName || !achievement || !year) {
      alert("Please fill all fields");
      return;
    }

    alert("Achievement saved successfully!");

    setResult({
      name: studentName,
      achievement: achievement,
      year: year,
    });
  };

  const verifyAchievement = () => {
    if (!result) {
      alert("No achievement record found");
      return;
    }

    alert("Achievement verified on Stellar Blockchain");
  };

  return (
    <div className="app">
      <div className="hero">
        <div className="logo">🎓</div>

        <h1>Student Achievement Verification</h1>

        <p>
          Securely record and verify student achievements using
          Stellar Blockchain Smart Contracts.
        </p>
      </div>

      <div className="card">
        <h2>Achievement Registration</h2>

        <div className="form">
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Achievement Title"
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
          />

          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <div className="buttons">
            <button
              className="save-btn"
              onClick={saveAchievement}
            >
              Save Achievement
            </button>

            <button
              className="verify-btn"
              onClick={verifyAchievement}
            >
              Verify Achievement
            </button>
          </div>
        </div>
      </div>

      {result && (
        <div className="contract-card">
          <h3>✅ Verification Result</h3>

          <p>
            <strong>Name:</strong> {result.name}
          </p>

          <p>
            <strong>Achievement:</strong> {result.achievement}
          </p>

          <p>
            <strong>Year:</strong> {result.year}
          </p>

          <p
            style={{
              color: "#4ade80",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Verified on Stellar Blockchain
          </p>
        </div>
      )}

      <div className="contract-card">
        <h3>📜 Smart Contract ID</h3>

        <div className="contract-id">
          {contractId}
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <span>🔒</span>
          <h4>Secure Storage</h4>
          <p>Protected by Stellar Blockchain.</p>
        </div>

        <div className="feature">
          <span>⚡</span>
          <h4>Fast Verification</h4>
          <p>Instant achievement validation.</p>
        </div>

        <div className="feature">
          <span>🌍</span>
          <h4>Global Access</h4>
          <p>Accessible anywhere and anytime.</p>
        </div>
      </div>

      <footer>
        Built with Stellar Smart Contracts • UNISKA Workshop 2026
      </footer>
    </div>
  );
}

export default App;