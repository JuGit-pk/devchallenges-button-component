import "./App.css";
import Button from "./components/Button/Button";
import Line from "./components/Line/Line";

function App() {
  //add_shopping_cart
  return (
    <div className="App">
      <header className="App-header">
        <h3>Default Button</h3>
        <Line>
          <Button />
        </Line>
        <h3>Button Variants</h3>
        <Line>
          <Button variant="outline" />
        </Line>
        <Line>
          <Button variant="text" />
        </Line>
        <h3>disabled</h3>
        <Line>
          <Button disabled />
        </Line>
        <h3>disabled shadow</h3>

        <Line>
          <Button disabledShadow />
        </Line>

        <h3>Button with Icons</h3>
        <Line>
          <Button startIcon="add_shopping_cart" />
          <Button endIcon="add_shopping_cart" />
        </Line>
        <h3>Button sizes</h3>

        <Line>
          <Button size="sm" />
          <Button size="md" />
          <Button size="lg" />
        </Line>
        <h3>Button colors</h3>

        <Line>
          <Button color="default" />
          <Button color="primary" />
          <Button color="secondary" />
        </Line>
      </header>
    </div>
  );
}

export default App;
