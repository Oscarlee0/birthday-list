import List from "./List";
import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h2>{people.length} Birthdays Today</h2>

        <List people={people} />

        <button
          className='btn btn-block'
          type='button'
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
