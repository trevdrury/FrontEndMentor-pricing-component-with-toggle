import './App.css';
import { PriceFeatureContainer, Headline } from './app.styles'
import PriceToggle from './components/price-toggle/price-toggle.component'
import PriceCard from './components/price-card/price-card.component'

const productDetails = {
  planType: "basic",
  price: "19.99",
  maxStorage: "500",
  maxUsers: "2",
  maxSend: "3"
}

function App() {
  return (
    <div className="App">
      <PriceFeatureContainer>
        <Headline>Our Pricing</Headline>
        <PriceToggle />
        <PriceCard productDetails={productDetails} />
      </PriceFeatureContainer>
    </div>
  );
}

export default App;
