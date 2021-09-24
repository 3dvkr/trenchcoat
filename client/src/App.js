import './App.css';
import NavBar from './components/NavBar';
import { Form } from './components/Form';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="container p-6">
        <h1 className="text-xl font-bold">Hello</h1>
        <p>
          When applying for jobs, do you sometimes feel like three corgis
          stuffed into a trenchcoat?
        </p>
        <p>
          If so, answer the following questions to find out if you are actually
          three corgis, or if you're ready to apply
        </p>
      </div>
      <Form />
    </div>
  );
}
export default App;
