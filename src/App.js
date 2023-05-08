
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* passing in 2 attributes to the Header component through the default props object which will look like this:
      {
        "firstName":"Bill",
        "lastName":"Justice"
      }  */}
      <Header firstName={ "Bill" } lastName={ "Justice" } />
      {/* <SomeComponent someProp="test" someOtherProp={ 67 } /> // Valid. We can send normal strings, numbers need curly braces
      <SomeComponent someProp={ "test" } someOtherProp={ 67 } /> // Valid. A String is still a Javascript expression
      <SomeComponent someProp="test" someOtherProp=67 /> // Invalid. Numbers need curly braces */}

    </div>
  );
}

export default App;
