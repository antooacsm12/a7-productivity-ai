export default function App() {
  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{fontSize: "48px"}}>
        A7 AI Assistant
      </h1>

      <p style={{fontSize: "20px", opacity: 0.8}}>
        Inteligência Artificial aplicada à produtividade
      </p>

      <input
        placeholder="Digite sua pergunta..."
        style={{
          marginTop: "30px",
          padding: "15px",
          width: "400px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px"
        }}
      />

      <button style={{
        marginTop: "20px",
        padding: "15px 30px",
        borderRadius: "10px",
        border: "none",
        background: "#2563eb",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Perguntar para IA
      </button>

    </div>
  )
}