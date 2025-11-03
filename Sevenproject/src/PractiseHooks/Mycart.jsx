import React, { useState, useEffect } from 'react';

function Mycart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch('https://fakestoreapi.com/products');
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // CSS styles object
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa'
    },
    header: {
      textAlign: 'center',
      color: '#2c3e50',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    },
    productsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '25px',
      justifyContent: 'center'
    },
    productCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '280px',
      minHeight: '450px',
      transition: 'all 0.3s ease',
      border: '1px solid #e9ecef',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
      }
    },
    productImage: {
      width: '120px',
      height: '120px',
      objectFit: 'contain',
      margin: '0 auto 15px',
      borderRadius: '8px',
      backgroundColor: 'white',
      padding: '10px'
    },
    productId: {
      fontSize: '0.9rem',
      color: '#6c757d',
      margin: '5px 0',
      fontWeight: '500'
    },
    productTitle: {
      fontSize: '1rem',
      color: '#2c3e50',
      margin: '8px 0',
      fontWeight: 'bold',
      lineHeight: '1.3',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    productPrice: {
      fontSize: '1.3rem',
      color: '#e74c3c',
      margin: '8px 0',
      fontWeight: 'bold'
    },
    productCategory: {
      fontSize: '0.9rem',
      color: '#7f8c8d',
      margin: '5px 0',
      textTransform: 'capitalize',
      backgroundColor: '#ecf0f1',
      padding: '4px 8px',
      borderRadius: '12px',
      display: 'inline-block'
    },
    productRating: {
      fontSize: '0.9rem',
      color: '#f39c12',
      margin: '5px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    productCount: {
      fontSize: '0.85rem',
      color: '#95a5a6',
      margin: '5px 0'
    },
    loadingText: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#6c757d',
      margin: '50px 0'
    },
    ratingContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px'
    }
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('★');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('½');
      } else {
        stars.push('☆');
      }
    }
    return stars.join('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🛒 My Cart</h1>
      
      {loading ? (
        <p style={styles.loadingText}>Loading products...</p>
      ) : (
        <div style={styles.productsGrid}>
          {data.map((item) => (
            <div
              key={item.id}
              style={styles.productCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={styles.productImage}
              />
              
              <span style={styles.productId}>#{item.id}</span>
              
              <h4 style={styles.productTitle}>
                {item.title.length > 50 
                  ? `${item.title.substring(0, 50)}...` 
                  : item.title}
              </h4>
              
              <h4 style={styles.productPrice}>${item.price}</h4>
              
              <span style={styles.productCategory}>
                {item.category}
              </span>
              
              <div style={styles.ratingContainer}>
                <span style={styles.productRating}>
                  {renderStars(item.rating.rate)} ({item.rating.rate})
                </span>
                <span style={styles.productCount}>
                  {item.rating.count} reviews
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mycart; 