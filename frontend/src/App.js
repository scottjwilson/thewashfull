import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PricingScreen from "./screens/PricingScreen";
import ServiceScreen from "./screens/ServiceScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py">
        <Route path="/" exact component={HomeScreen} />
        <Route path="/services" exact component={PricingScreen} />
        <Route path="/services/:id" component={ServiceScreen} />
        <Route path="/cart/:id" component={CartScreen} />
      </main>
    </Router>
  );
}

export default App;
