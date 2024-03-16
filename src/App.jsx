import styles from './App.module.css';
import NameInput from './NameInput';
import { nameShared } from './NameInput';

function App() {
  const  [ nameRef ] = nameShared;
  return (
    <div class={styles.App}>
      <NameInput />
      {/* Todo: implement a backend call to return a name from the server */}
      <button type="button" onClick={() => console.log(nameRef())}>Generate Name</button>
    </div>
  );
}

export default App;
