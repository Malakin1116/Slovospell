function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome to SpellApp</h2>
      <p>Learn and practice English words interactively!</p>
      <a
        href="/practice"
        style={{ color: "#007acc", textDecoration: "underline" }}
      >
        Start Practicing
      </a>
    </div>
  );
}

export default Home;
