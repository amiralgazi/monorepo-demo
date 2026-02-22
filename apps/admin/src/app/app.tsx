import { Header } from '@demo/header';
import { Button } from '@demo/button';
import { Input } from '@demo/input';

export function App() {
  return (
    <div>
      <Header title="Admin Dashboard" />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Dashboard</h2>
        <div style={{ marginBottom: '1rem' }}>
          <Input placeholder="Search..." />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button label="Save" onClick={() => {}} />
          <Button label="Cancel" variant="secondary" onClick={() => {}} />
        </div>
      </main>
    </div>
  );
}

export default App;
