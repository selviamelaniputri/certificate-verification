import "./App.css";

function App() {
  const contractId =
    "CDJJXVROLDFE77PX5DR6MPR6TX65RATIRKEXHBE64EQT6COXXU5DOFXW";

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #0F172A, #1E3A8A)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "95%",
          maxWidth: "1200px",
          background: "rgba(30,41,59,0.95)",
          borderRadius: "24px",
          padding: "50px",
          border: "1px solid rgba(251,191,36,0.2)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FBBF24",
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          🎓 UNISKA Certificate Verification
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          Secure academic certificate verification system powered by
          Stellar Blockchain and Smart Contracts.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(251,191,36,0.2)",
            margin: "30px 0",
          }}
        />

        <h2
          style={{
            textAlign: "center",
            color: "#FBBF24",
            marginBottom: "20px",
            fontSize: "28px",
          }}
        >
          📜 Smart Contract ID
        </h2>

        <div
          style={{
            background: "#0F172A",
            border: "1px solid rgba(251,191,36,0.3)",
            padding: "20px",
            borderRadius: "12px",
            wordBreak: "break-all",
            textAlign: "center",
            color: "#F8FAFC",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {contractId}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <button
            style={{
              padding: "14px 32px",
              border: "none",
              borderRadius: "12px",
              background: "#2563EB",
              color: "#FFFFFF",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "16px",
              boxShadow: "0 8px 20px rgba(37,99,235,0.4)",
            }}
            onClick={() =>
              alert(
                "Certificate verification feature will be implemented in the next version."
              )
            }
          >
            Verify Certificate
          </button>
        </div>

        <div
          style={{
            marginTop: "35px",
            padding: "18px",
            background: "rgba(16,185,129,0.15)",
            border: "1px solid rgba(16,185,129,0.4)",
            borderRadius: "12px",
            textAlign: "center",
            color: "#6EE7B7",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          ✅ Smart Contract Successfully Deployed on Stellar Testnet
        </div>
      </div>
    </div>
  );
}

export default App;
