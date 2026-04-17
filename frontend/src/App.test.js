import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock child components to isolate App testing
jest.mock('./components/Navbar', () => () => <nav data-testid="navbar">Navbar</nav>);
jest.mock('./components/Footer', () => () => <footer data-testid="footer">Footer</footer>);
jest.mock('./components/WhatsappButton', () => () => <div data-testid="whatsapp-button">WhatsApp</div>);

// Mock page components
jest.mock('./pages/Home', () => () => <div data-testid="home-page">Home Page</div>);
jest.mock('./pages/Products', () => () => <div data-testid="products-page">Products Page</div>);
jest.mock('./pages/Contact', () => () => <div data-testid="contact-page">Contact Page</div>);

describe('App Component', () => {
  const renderWithRouter = (initialRoute = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    );
  };

  test('renders Navbar, Footer, and WhatsAppButton on every page', () => {
    renderWithRouter('/');
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument();
  });

  test('renders Home page for default route "/"', () => {
    renderWithRouter('/');
    
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.queryByTestId('products-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('contact-page')).not.toBeInTheDocument();
  });

  test('renders Products page for route "/products"', () => {
    renderWithRouter('/products');
    
    expect(screen.getByTestId('products-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('contact-page')).not.toBeInTheDocument();
  });

  test('renders Contact page for route "/contact"', () => {
    renderWithRouter('/contact');
    
    expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('products-page')).not.toBeInTheDocument();
  });

  test('shows 404 page for unknown routes', () => {
    renderWithRouter('/unknown-route');
    
    // Assuming you added a NotFound page with text "404"
    // Adjust the query to match your actual NotFound component content
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    
    // Layout components should still be visible
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
