import { createSignal } from 'solid-js';
export const nameShared = createSignal('Michael');

function NameInput() {
  const [name, setName] = nameShared;
  return (
    <div>
      <input type="text" value={name()} onInput={(e) => setName(e.target.value)}/>
    </div>
  );
}

export default NameInput;
