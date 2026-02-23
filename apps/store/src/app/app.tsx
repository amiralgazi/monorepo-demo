import { Header } from '@demo/header';
import { Footer } from '@demo/footer';
import { Button } from '@demo/button';
import { Card } from '@demo/card';

export function App() {
  return (
    <div>
      <Header title="Store" />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Card title="Product 1">
            <p>Description of product 1.</p>
            <p>description of product 2.</p>
            <p>description of product 3.</p>
            <Button label="Add to Cart" onClick={() => {}} />
          </Card>
          <Card title="Product 2">
            <p>Description of product 2.</p>
            <Button label="Add to Cart" onClick={() => {}} />
          </Card>
        </div>
      </main>
      <Footer copyright="© 2026 Store Demo" />
    </div>
  );
}

export default App;
