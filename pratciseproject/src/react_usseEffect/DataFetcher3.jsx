import { useState, useEffect } from "react"
import React from 'react'
import './DataFetcher1.css'

function DataFetcher3() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let response = await fetch('https://fakestoreapi.com/products')
                let result = await response.json()
                setData(result)
            } catch (error) {
                console.log("Error while fetching ", error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading amazing products...</p>
            </div>
        )
    }

    return (
        <div className="app-container">
            <div className="header">
                <h1 className="title">🌟 Premium Products</h1>
                <p className="subtitle">Discover quality items at great prices</p>
            </div>
            
            {error && (
                <div className="error-card">
                    <div className="error-icon">⚠️</div>
                    <h3>Oops! Something went wrong</h3>
                    <p>We're having trouble loading the products. Please try again later.</p>
                    <button className="retry-btn" onClick={() => window.location.reload()}>
                        Try Again
                    </button>
                </div>
            )}
            
            {!error && data && (
                <div className="cards-grid">
                    {data.map((product) => (
                        <div key={product.id} className="product-card">
                            {/* Product Image with Badge */}
                            <div className="card-image-section">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    className="product-img"
                                />
                                <div className="category-badge">
                                    {product.category}
                                </div>
                                <div className="discount-badge">
                                    -{Math.round((1 - product.price/100) * 20)}%
                                </div>
                            </div>
                            
                            {/* Card Content */}
                            <div className="card-content">
                                <div className="card-header">
                                    <h3 className="product-name">{product.title}</h3>
                                    <div className="price-section">
                                        <span className="current-price">${product.price}</span>
                                        <span className="original-price">${(product.price * 1.2).toFixed(2)}</span>
                                    </div>
                                </div>
                                
                                <p className="product-desc">
                                    {product.description.length > 100 
                                        ? `${product.description.substring(0, 100)}...` 
                                        : product.description
                                    }
                                </p>
                                
                                {/* Rating Section */}
                                <div className="rating-section">
                                    <div className="stars">
                                        {[...Array(5)].map((_, index) => (
                                            <span 
                                                key={index}
                                                className={`star ${index < Math.floor(product.rating.rate) ? 'filled' : ''} ${
                                                    index === Math.floor(product.rating.rate) && product.rating.rate % 1 >= 0.5 ? 'half-filled' : ''
                                                }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="rating-text">
                                        {product.rating.rate} ({product.rating.count} reviews)
                                    </span>
                                </div>
                                
                                {/* Card Actions */}
                                <div className="card-actions">
                                    <button className="primary-btn">
                                        <span className="btn-icon">🛒</span>
                                        Add to Cart
                                    </button>
                                    <button className="secondary-btn">
                                        <span className="btn-icon">❤️</span>
                                        Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DataFetcher3