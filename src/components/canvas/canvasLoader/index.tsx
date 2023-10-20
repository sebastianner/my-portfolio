import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: -30,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
}

export default CanvasLoader;
