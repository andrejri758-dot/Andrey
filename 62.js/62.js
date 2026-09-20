const popularBooks = [
  { id: 1, title: 'Snowbound', author: 'Janice Leonard', price: 'Rs. 450/-', img: '62.img/1.jpg' },
  { id: 2, title: 'The half-known life', author: 'Pico Iyer', price: 'Rs. 600/-', img: '62.img/2.jpg' },
  { id: 3, title: 'May it please the court', author: 'Daniel Goldfarb', price: 'Rs. 350/-', img: '62.img/3.jpg' },
  { id: 4, title: 'A promised land', author: 'Barack Obama', price: 'Rs. 1200/-', img: '62.img/4.jpg' },
  { id: 5, title: 'The lean startup', author: 'Eric Ries', price: 'Rs. 500/-', img: '62.img/5.jpg' },
  { id: 6, title: 'To kill a mockingbird', author: 'Harper Lee', price: 'Rs. 370/-', img: '62.img/6.jpg' },
  { id: 7, title: 'The $100 startup', author: 'Chris Guillebeau', price: 'Rs. 450/-', img: '62.img/7.jpg' },
  { id: 8, title: 'Zero to one', author: 'Peter Thiel', price: 'Rs. 400/-', img: '62.img/8.jpg' }
];

const feedbacks = [
  { id: 1, name: 'Emily Thompson', text: 'A treasure trove for book lovers!', avatar: 'https://placehold.co/40x40/6366f1/fff?text=ET' },
  { id: 2, name: 'Michael Chen', text: 'Awesome collection and fast delivery every time.', avatar: 'https://placehold.co/40x40/0ea5e9/fff?text=MC' },
  { id: 3, name: 'Sofia Rodriguez', text: 'Best bookstore experience online!', avatar: 'https://placehold.co/40x40/10b981/fff?text=SR' }
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [toast, setToast] = React.useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const filteredBooks = popularBooks.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

  
 
    <div className="landing-container">
      {toast && <div className="toast-message">{toast}</div>}

      {/* Header & Hero Outer Box */}
      <div className="header-hero-wrapper">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon"></span>
            Book Heaven
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#book">Book</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="btn-signin" onClick={() => showToast('Sign in clicked')}>Sign in</button>
            <button className="btn-join" onClick={() => showToast('Join us clicked')}>Join us</button>
          </div>
        </nav>


 <div className="co">

 </div>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Find your next great read at our online book store</h1>
            <p>Explore thousands of titles easily</p>
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search for a book name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn-search">Search Now</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://placehold.co/380x280/fed7aa/333?text=Reading+Illustration" alt="Books illustration" />
          </div>
        </section>
      </div>
{/* Popular Books Section */}
      <section className="books-section">
        <h2>Popular Books</h2>
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-img-container">
                <img src={book.img} alt={book.title} />
              </div>
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
              <p className="price">{book.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Start your reading journey</h2>
        <p>No subscription needed. Dive into a world of stories today.</p>
        <button className="btn-start" onClick={() => showToast('Starting your reading journey...')}>Start Buying</button>
      </section>

      {/* Buyer's Feedback Section */}
      <section className="feedback-section">
        <h2>Buyer's feedback</h2>
        <div className="feedback-grid">
          {feedbacks.map((item) => (
            <div key={item.id} className="feedback-card">
              <div className="user-info">
                <img src={item.avatar} alt={item.name} className="avatar" />
                <div className="user-details">
                  <h4>{item.name}</h4>
                  <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Footer / Newsletter Section */}
      <footer className="footer-wrapper">
        <div className="newsletter-section">
          <h3>Subscribe for new offers !</h3>
          <form className="newsletter-box" onSubmit={(e) => { e.preventDefault(); showToast('Subscribed!'); setEmail(''); }}>
            <span className="email-icon">✉️</span>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <div className="logo">
            <span className="logo-icon"></span>
            Book Heaven
          </div>
          <ul className="footer-links">
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);