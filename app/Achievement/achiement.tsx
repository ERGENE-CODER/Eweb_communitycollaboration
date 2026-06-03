export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-full p-10">
      <div style={{ 
        display: "flex",
        flexDirection: "column", 
        gap: "20px", 
        alignItems: "center" }}>
        <div style={{
           display: "flex", 
           width: "300px", 
           height: "50px", 
           border: "1px solid #ccc", 
           borderRadius: "10px", 
           overflow: "hidden" }}>
          <input type="text" placeholder="Search..." className="placeholder-black" style={{ 
            flex: 1, 
            padding: "10px", 
            border: "none", 
            outline: "none" }} />
          <button style={{ 
            background: "linear-gradient(to bottom, #10b981, #3b82f6)", 
            width: "60px", 
            border: "none", 
            color: "white", 
            cursor: "pointer" }}>🔍</button>
        </div>
        <div style={{ 
          display: "flex", 
          width: "300px", 
          height: "50px", 
          border: "1px solid #ccc", 
          borderRadius: "25px", 
          overflow: "hidden" }}>
          <input type="text" placeholder="Search..." className="placeholder-black" style={{ 
            flex: 1, 
            paddingLeft: "20px", 
            border: "none", 
            outline: "none" }} />
          <button style={{ 
            background: "linear-gradient(to bottom, #10b981, #3b82f6)", 
            width: "60px", 
            border: "none", 
            color: "white", 
            cursor: "pointer" }}>🔍</button>
        </div>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          width: "300px", height: "50px", 
          border: "1px solid #ccc", 
          borderRadius: "5px", 
          padding: "0 10px", 
          background: "white" }}>
          <input type="text" placeholder="Search..." className="placeholder-black" style={{ 
            flex: 1, 
            padding: "10px", 
            border: "none", 
            outline: "none" }} />
            <span style={{ color: "#888" }}>🔍</span>
          <div style={{ 
            borderLeft: "1px solid #ccc", 
            height: "30px",
            marginLeft: "5px" }}></div>
        </div>
        <div style={{ 
          display: "flex", 
          width: "300px", 
          height: "50px", 
          border: "1px solid #ccc", 
          borderRadius: "25px", 
          overflow: "hidden" }}>
          <input type="text" placeholder="Search..." className="placeholder-black" style={{ 
            flex: 1, 
            paddingLeft: "20px", 
            border: "none", 
            outline: "none" }} />
          <button style={{ 
            background: "linear-gradient(to bottom, #10b981, #3b82f6)", 
            padding: "0 15px", 
            border: "none", 
            color: "white", 
            cursor: "pointer", 
            fontSize: "14px" }}>Search</button>
        </div>

      </div>
    </main>
  );
}