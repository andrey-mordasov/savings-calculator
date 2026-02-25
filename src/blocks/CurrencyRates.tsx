export function CurrencyRates() {
  return (
    <>
      <h2 className="h5">History and currency rates forecast</h2>
      <div>
        <svg width={400} height={300} xmlns="http://www.w3.org/2000/svg">
          <line
            x1={0}
            y1={1}
            x2={400}
            y2={1}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />
          <line
            x1={0}
            y1={60}
            x2={400}
            y2={60}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />
          <line
            x1={0}
            y1={120}
            x2={400}
            y2={120}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />
          <line
            x1={0}
            y1={180}
            x2={400}
            y2={180}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={0}
            y1={240}
            x2={400}
            y2={240}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={0}
            y1={299}
            x2={400}
            y2={299}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={1}
            y1={0}
            x2={1}
            y2={300}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={100}
            y1={0}
            x2={100}
            y2={300}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={200}
            y1={0}
            x2={200}
            y2={300}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={300}
            y1={0}
            x2={300}
            y2={300}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />

          <line
            x1={399}
            y1={0}
            x2={399}
            y2={300}
            style={{ stroke: "lightgray", strokeWidth: "1" }}
          />
        </svg>

        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 0 }}>last year</span>
          <span
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            today
          </span>
          <span style={{ position: "absolute", right: 15 }}>next year</span>
        </div>
      </div>
    </>
  );
}
