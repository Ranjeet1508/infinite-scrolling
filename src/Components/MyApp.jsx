// App.js
import React, { useState, useEffect, useRef } from 'react';
import ShoppingCard from './ShoppingCard';
import './MyApp.css';

const MyApp = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products?limit=10&offset=${(page - 1) * 10}`);
    const data = await response.json();
    setProducts((prevProducts) => [...prevProducts, ...data]);
    setLoading(false);
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Infinite Scrolling Shopping Cards</h1>
      <div className="grid-container">
        {products.map((product) => (
          <ShoppingCard key={product.id} product={product} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div ref={loaderRef} style={{ height: '50px', backgroundColor: 'transparent' }} />
    </div>
  );
};

export default MyApp;
