import styles from './App.module.css';
import NameInput from './NameInput';
import { nameShared } from './NameInput';
import { createSignal, createEffect } from 'solid-js';

function App() {
  const  [ nameRef ] = nameShared;
  const [ data, setData] = createSignal('');
  createEffect(async () => { try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL);
      const jsonData = await response.text()
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  return (
    <div class={styles.App}>
      <h1>{data()}</h1>
      <NameInput />
      {/* Todo: implement a backend call to return a name from the server */}
      <button type="button" onClick={() => console.log(nameRef())}>Generate Name</button>
    </div>
  );
}

export default App;
