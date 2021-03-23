import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PricingScreen from "./screens/PricingScreen";
import ServiceScreen from "./screens/ServiceScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-2">
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />

        <Route path="/services" exact component={PricingScreen} />
        <Route path="/services/:id" component={ServiceScreen} />
        <Route path="/cart/:id" component={CartScreen} />
        <Route path="/" exact component={HomeScreen} />
      </main>
    </Router>
  );
};

export default App;
