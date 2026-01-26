import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const navigate = useNavigate();
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-drawer" onClick={e => e.stopPropagation()}>
                <header className="cart-header">
                    <h2 className="text-h3 font-serif italic">Your Bag</h2>
                    <button className="cart-close" onClick={() => setIsCartOpen(false)}>
                        <X size={20} />
                    </button>
                </header>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <p className="text-muted">Your bag is currently empty.</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.imageSrc} alt={item.title} />
                                </div>
                                <div className="cart-item-info">
                                    <h4 className="cart-item-title">{item.title}</h4>
                                    <p className="cart-item-price">{item.price}</p>
                                    <div className="cart-item-controls">
                                        <div className="quantity-toggle">
                                            <button onClick={() => updateQuantity(item.id, -1)}><Minus size={12} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={12} /></button>
                                        </div>
                                        <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <footer className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button
                            className="btn btn-primary w-full"
                            style={{ width: '100%' }}
                            onClick={() => {
                                setIsCartOpen(false);
                                navigate('/checkout');
                            }}
                        >
                            Checkout
                        </button>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
