import DesktopView from "./components/DesktopView";
import MobileView from "./components/MobileView";
import useIsMobileWidth from "./hooks/useIsMobileWidth";

function App() {
  const isMobileWidth = useIsMobileWidth();

  return isMobileWidth ? <MobileView /> : <DesktopView />;
}

export default App;
