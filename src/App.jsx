import AppRouter from "./router/AppRouter";
import ColorBackground from "./components/ColorBackground/ColorBackground";

export default function App() {
  return (
    <ColorBackground>
      <AppRouter />
    </ColorBackground>
  );
}
