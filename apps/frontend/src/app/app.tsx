// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { useEffect, useState } from 'react';
import { Message, getSharedMessage } from '@nx-ci-demo/shared-util';

export function App() {
  const [m, setM] = useState<Message | null>(null);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setM);
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Direct from lib: {getSharedMessage().message}</p>
      <p>From API: {m?.message}</p>
    </div>
  );
}

export default App;
