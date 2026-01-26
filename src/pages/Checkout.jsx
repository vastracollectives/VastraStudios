import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, CreditCard, ShoppingBag, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const [step, setStep] = useState(1);
    const { cart, cartTotal } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        region: 'Edison, NJ'
    });
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;

        // Per user request: number can only be numbers
        if (name === 'phone') {
            const digitOnly = value.replace(/\D/g, '');
            setFormData({ ...formData, [name]: digitOnly });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateStep1 = () => {
        const newErrors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (already restricted to numbers, just check length/existence)
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.length < 10) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleContinue = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="container section-lg text-center">
                <h2 className="text-h2 mb-md font-serif italic">Your bag is empty.</h2>
                <Link to="/collections" className="btn btn-primary">Return to the Drop</Link>
            </div>
        );
    }

    return (
        <section className="section-lg">
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Header */}
                    <header className="mb-xl text-center">
                        <span className="tag">Checkout</span>
                        <h1 className="text-h1 font-serif italic">
                            {step === 1 && "Information"}
                            {step === 2 && "Payment & Review"}
                            {step === 3 && "Success"}
                        </h1>
                    </header>

                    {/* Step 1: Information */}
                    {step === 1 && (
                        <div className="checkout-step fade-up">
                            <div className="grid grid-2 mb-lg" style={{ gap: '24px' }}>
                                <div className="form-group">
                                    <label className="text-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInput}
                                        placeholder="name@example.com"
                                        autoComplete="email"
                                    />
                                    {errors.email && <span className="text-small italic" style={{ color: 'var(--accent-clay)', marginTop: '4px' }}>{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label className="text-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInput}
                                        placeholder="5550000000"
                                        autoComplete="tel"
                                    />
                                    {errors.phone && <span className="text-small italic" style={{ color: 'var(--accent-clay)', marginTop: '4px' }}>{errors.phone}</span>}
                                </div>
                                <div className="form-group">
                                    <label className="text-label">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInput}
                                        autoComplete="given-name"
                                    />
                                    {errors.firstName && <span className="text-small italic" style={{ color: 'var(--accent-clay)', marginTop: '4px' }}>{errors.firstName}</span>}
                                </div>
                                <div className="form-group">
                                    <label className="text-label">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInput}
                                        autoComplete="family-name"
                                    />
                                    {errors.lastName && <span className="text-small italic" style={{ color: 'var(--accent-clay)', marginTop: '4px' }}>{errors.lastName}</span>}
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label className="text-label">Collection Region</label>
                                    <select name="region" value={formData.region} onChange={handleInput}>
                                        <option value="Edison, NJ">Edison, NJ (United States)</option>
                                        <option value="Hyderabad, India">Hyderabad, India</option>
                                    </select>
                                    <p className="text-small text-muted mt-xs italic">
                                        <MapPin size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                                        Collection only. We will contact you at {formData.phone || 'your number'} for pickup details.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '48px' }}>
                                <Link to="/collections" className="featured-link">
                                    <ArrowLeft size={16} /> Return to Shop
                                </Link>
                                <button className="btn btn-primary" onClick={handleContinue}>
                                    Continue to Payment
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Payment/Review */}
                    {step === 2 && (
                        <div className="checkout-step fade-up">
                            <div className="grid grid-2" style={{ gap: '64px' }}>
                                <div>
                                    <h3 className="text-h3 mb-md font-serif italic">Order Summary</h3>
                                    <div className="mb-lg" style={{ borderTop: '1px solid var(--border-color)' }}>
                                        {cart.map(item => (
                                            <div key={item.id} className="pdp-detail-item">
                                                <span>{item.title} (x{item.quantity})</span>
                                                <span>{item.price}</span>
                                            </div>
                                        ))}
                                        <div className="pdp-detail-item" style={{ borderTop: '1px solid var(--text-charcoal)', fontWeight: '600' }}>
                                            <span>Total</span>
                                            <span>${cartTotal.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="distribution-notice">
                                        <span className="text-label block mb-xs">Pickup Location</span>
                                        <p className="text-body">{formData.region}</p>
                                        <p className="text-small text-muted">{formData.firstName} {formData.lastName} • {formData.phone}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-h3 mb-md font-serif italic">Simulated Payment</h3>
                                    <div className="form-group mb-md">
                                        <label className="text-label">Card Details</label>
                                        <div className="input-with-icon">
                                            <CreditCard size={18} />
                                            <input type="text" placeholder="#### #### #### ####" disabled />
                                        </div>
                                    </div>
                                    <p className="text-small text-muted mb-lg">
                                        This is a simulated checkout. No real payment will be processed at this stage.
                                        Clicking "Complete Order" will notify the Collective.
                                    </p>
                                    <button className="btn btn-primary w-full" style={{ width: '100%' }} onClick={() => setStep(3)}>
                                        Complete Order
                                    </button>
                                    <button className="btn btn-outline w-full mt-md" style={{ width: '100%' }} onClick={() => setStep(1)}>
                                        Back to Information
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Success */}
                    {step === 3 && (
                        <div className="checkout-success text-center fade-up" style={{ padding: '80px 0' }}>
                            <CheckCircle size={80} style={{ color: 'var(--text-charcoal)', marginBottom: '40px' }} />
                            <h2 className="text-h2 mb-md font-serif italic">Your order has been received.</h2>
                            <p className="text-body text-muted mb-xl" style={{ maxWidth: '500px', margin: '0 auto 48px' }}>
                                Welcome to the Collective. We have sent a confirmation to <strong>{formData.email}</strong>.
                                Our regional handler will contact you shortly to coordinate your pickup in <strong>{formData.region}</strong>.
                            </p>
                            <Link to="/" className="btn btn-primary">Return Home</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Checkout;
