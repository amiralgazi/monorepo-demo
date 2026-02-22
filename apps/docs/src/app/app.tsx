import { Header } from '@demo/header';
import { Footer } from '@demo/footer';
import { Card } from '@demo/card';

export function App() {
  return (
    <div>
      <Header title="Documentation" />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Getting Started</h2>
        <Card title="Introduction">
          <p>Welcome to the documentation site. This demo uses the shared design system.</p>
        </Card>
        <Card title="Components">
          <p>All UI components are available from the design system libraries.</p>
        </Card>
      </main>
      <Footer copyright="© 2026 Docs Demo" />
    </div>
  );
}

export default App;
