//style
import styleApp from "./App.module.css";

import AppRoutes from "./router/AppRoutes";

export default function App() {
  return <div className={styleApp.container}>
    <AppRoutes/>
  </div>;
}
