import "./App.css";

function App() {
  const contractId =
    "CAHFMDMJOFSHCGX6X4JNR7WV564NDNAP5RGWZ4ARJDUNKIHA3JSX2AKK";

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
          <input type="text" placeholder="Student Name" />

          <input type="text" placeholder="Achievement Title" />

          <input type="number" placeholder="Year" />

          <div className="buttons">
            <button className="save-btn">
              Save Achievement
            </button>

            <button className="verify-btn">
              Verify Achievement
            </button>
          </div>
        </div>
      </div>

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
          <p>
            Protected by Stellar Blockchain.
          </p>
        </div>

        <div className="feature">
          <span>⚡</span>
          <h4>Fast Verification</h4>
          <p>
            Instant achievement validation.
          </p>
        </div>

        <div className="feature">
          <span>🌍</span>
          <h4>Global Access</h4>
          <p>
            Accessible anywhere and anytime.
          </p>
        </div>
      </div>

      <footer>
        Built with Stellar Smart Contracts • UNISKA Workshop 2026
      </footer>
    </div>
  );
}

export default App;