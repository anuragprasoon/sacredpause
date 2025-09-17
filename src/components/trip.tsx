import React, { useState, useEffect } from "react";
import Image from "next/image";

const Trips: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState("essential");
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showInclusions, setShowInclusions] = useState(false);
    const [spotsRemaining, setSpotsRemaining] = useState(8);
    const [scrollY, setScrollY] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroImages = [
    {
        src: "https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg",
        alt: "Ladakh Mountain Yoga"
    },
    {
        src: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg", 
        alt: "Monastery Meditation"
    },
    {
        src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
        alt: "Sunrise Practice"
    }
];


useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
}, [heroImages.length]);

// Add these navigation functions
const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
};

const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
};

const goToSlide = (index: number) => {
    setCurrentSlide(index);
};

    const packages = [
        {
            id: "lite",
            name: "Lite",
            tagline: "Perfect Start",
            price: "₹12,999",
            duration: "5 Days",
            popular: false,
            features: [
                "Shared accommodation",
                "Daily yoga sessions", 
                "Breakfast + 4 dinners",
                "Airport transfers",
                "Welcome ceremony"
            ]
        },
        {
            id: "essential",
            name: "Essential", 
            tagline: "Complete Experience",
            price: "₹19,999",
            duration: "5 Days",
            popular: true,
            features: [
                "Private room",
                "All meals included",
                "2 guided excursions", 
                "1 spa treatment",
                "Meditation workshop",
                "Yoga props included"
            ]
        },
        {
            id: "premium",
            name: "Premium",
            tagline: "Ultimate Luxury", 
            price: "₹26,999",
            duration: "5 Days",
            popular: false,
            features: [
                "Luxury villa",
                "2 private sessions",
                "Daily spa treatments",
                "All excursions + private tour", 
                "Personal consultation",
                "Professional photoshoot"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Sarah M.",
            rating: 5,
            text: "Life-changing experience in the most beautiful setting. The combination of yoga and Ladakh's spiritual energy was incredible.",
            avatar: "S"
        },
        {
            name: "Raj K.", 
            rating: 5,
            text: "Perfect blend of adventure and inner peace. The instructors were amazing and the group became like family.",
            avatar: "R"
        }
    ];

    const galleryImages = [
        "https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg", 
        "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
        "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg"
    ];

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState('');
    const [showBookingForm, setShowBookingForm] = useState(false);
const [selectedPlan, setSelectedPlan] = useState("");
const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripStartingDate: "2025-03-15", // Default to retreat date
    referralCode: "",
    tripName: "Ladakh Yoga Retreat", // Hidden field
    plan: "" // Will be set when form opens
});

const openBookingForm = (planName: string) => {
    setSelectedPlan(planName);
    setFormData(prev => ({ ...prev, plan: planName }));
    setShowBookingForm(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeBookingForm = () => {
    setShowBookingForm(false);
    document.body.style.overflow = 'unset';
};

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
        try {
        // Prepare the data for API
        const bookingData = {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim().toLowerCase(),
            trip_name: formData.tripName,
            plan: formData.plan,
            trip_starting_date: formData.tripStartingDate,
            referral_code: formData.referralCode.trim() || null,
            booking_status: 'pending',
            payment_status: 'pending'
        };
        
        console.log('Submitting booking data:', bookingData);
        
        // Make API call to your backend
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Booking created successfully:', result);
        
        // Show success message
        alert(`Thank you ${formData.name}! Your booking for ${formData.plan} has been submitted successfully. Booking ID: ${result.id}. We'll contact you shortly.`);
        
        // Reset form and close
        setFormData({
            name: "",
            phone: "",
            email: "",
            tripStartingDate: "2025-03-15",
            referralCode: "",
            tripName: "Ladakh Yoga Retreat",
            plan: ""
        });
        closeBookingForm();
        
        // Optional: Track the conversion for analytics
        // trackEvent('booking_submitted', { plan: formData.plan, booking_id: result.id });
        
    } catch (error) {
        console.error('Error submitting booking:', error);
        setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
};



    return (



        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
           {/* Hero Section */}
<div className="relative h-screen overflow-hidden">
    {/* Carousel Images */}
    <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
            <img
                key={index}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ transform: index === currentSlide ? `translateY(${scrollY * 0.5}px)` : 'translateY(0)' }}
                src={image.src}
                alt={image.alt}
            />
        ))}
    </div>
    
    <div className="absolute inset-0 bg-black/40"></div>
    
    {/* Navigation Arrows */}
    <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
    >
        <span className="text-[14px]">‹</span>
    </button>
    
    <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
    >
        <span className="text-[14px]">›</span>
    </button>

    {/* Slide Indicators */}
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/70'
                }`}
            />
        ))}
    </div>
    
    {/* Limited Spots Badge */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 z-20">
        <span className="text-[16px] font-semibold text-red-600">Only {spotsRemaining} spots left</span>
    </div>

    {/* Hero Content */}
    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 p-4">
        <div className="max-w-lg">
            <h1 className="text-[32px] sm:text-[48px] font-bold mb-4 leading-tight">
                Awaken in Ladakh
            </h1>
            <p className="text-[16px] sm:text-[18px] mb-6 opacity-90">
                7 days of transformation in the Himalayas
            </p>
            
            {/* Hero Details */}
            <div className="flex justify-center gap-6 mb-8 text-[14px]">
                {/*<div className="text-center">
                    <div className="opacity-70 uppercase tracking-wide">Dates</div>
                    <div className="font-semibold">Mar 15-22, 2025</div>
                </div>*/}
                <div className="text-center">
                    <div className="opacity-70 uppercase tracking-wide">Location</div>
                    <div className="font-semibold">Leh, Ladakh</div>
                </div>
                <div className="text-center">
                    <div className="opacity-70 uppercase tracking-wide">Duration</div>
                    <div className="font-semibold">7 Days</div>
                </div>
            </div>

            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#172525] text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg"
            >
                Book Your Spot →
            </button><br/>
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg mt-2"
            >
                Watch Our Video
            </button>
        </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-10">
        <div className="text-[24px]">↓</div>
    </div>
</div>

            {/* Value Props Section */}
            <div className="p-4 sm:p-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[28px] sm:text-[36px] font-bold text-[#172525] mb-6">
                        Discover Your True Self in Paradise
                    </h2>
                    
                    {/* Main Description */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
                        <p className="text-[16px] leading-relaxed text-gray-700 mb-4">
                            Escape to Ladakh's sacred mountains where ancient wisdom meets breathtaking beauty. Our 7-day immersive retreat takes you beyond typical yoga vacations into a profound journey of self-discovery.
                        </p>
                        
                        {showFullDescription && (
                            <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
                                <p>
                                    Wake each morning to crisp mountain air and golden sunrise over snow-capped peaks. Practice yoga in ancient monasteries where Buddhist monks have meditated for centuries. Explore hidden valleys and sacred sites that few travelers ever see.
                                </p>
                                <p>
                                    This isn't just about perfecting your asanas—it's about returning home with tools for lifelong peace, clarity, and joy. Our expert teachers blend traditional practices with Himalayan wisdom and healing rituals.
                                </p>
                            </div>
                        )}
                        
                        <button 
                            onClick={() => setShowFullDescription(!showFullDescription)}
                            className="text-[#172525] font-semibold text-[14px] mt-3 hover:underline"
                        >
                            {showFullDescription ? "Show Less" : "Read More"} 
                        </button>
                    </div>

                    {/* Value Props Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[40px] mb-3">🏔️</div>
                            <h3 className="text-[18px] font-semibold text-[#172525] mb-2">Himalayan Setting</h3>
                            <p className="text-[14px] text-gray-600">Practice surrounded by the world's highest peaks and ancient Buddhist energy</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[40px] mb-3">🧘‍♀️</div>
                            <h3 className="text-[18px] font-semibold text-[#172525] mb-2">Expert Guidance</h3>
                            <p className="text-[14px] text-gray-600">Learn from world-class instructors in intimate, personalized settings</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-[40px] mb-3">✨</div>
                            <h3 className="text-[18px] font-semibold text-[#172525] mb-2">Real Transformation</h3>
                            <p className="text-[14px] text-gray-600">Return home with lasting peace, clarity and tools for mindful living</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="p-4 sm:p-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#172525] mb-3">
                            Choose Your Experience
                        </h2>
                        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
                            Each path offers transformation, pick what feels right for your journey
                        </p>
                    </div>

                    {/* Mobile Package Selector */}
                    <div className="block sm:hidden mb-6">
                        <div className="flex justify-between overflow-x-auto pb-2">
                            {packages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    onClick={() => setSelectedPackage(pkg.id)}
                                    className={`flex-shrink-0 px-4 py-2 rounded-lg border-2 transition-all w-[33%] ${
                                        selectedPackage === pkg.id
                                            ? "border-[#172525] bg-[#172525] text-white"
                                            : "border-gray-200 bg-white text-gray-700"
                                    }`}
                                >
                                    <div className="text-[14px] font-semibold">{pkg.name}</div>
                                    <div className="text-[12px] opacity-80">{pkg.price}</div>
                                    {pkg.popular && (
                                        <div className="text-[10px] bg-orange-500 text-white px-1 rounded mt-1">Popular</div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Selected Package Details */}
                        {selectedPkg && (
                            <div className="bg-white border-2 border-[#172525] rounded-2xl p-6">
                                <div className="text-center mb-4">
                                    {selectedPkg.popular && (
                                        <div className="inline-block bg-orange-500 text-white text-[12px] px-3 py-1 rounded-full font-semibold mb-2">
                                            ⭐ Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-[24px] font-bold text-[#172525]">{selectedPkg.name}</h3>
                                    <p className="text-[14px] text-gray-600 mb-2">{selectedPkg.tagline}</p>
                                    <div className="text-[32px] font-bold text-[#172525] mb-4">{selectedPkg.price}</div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {selectedPkg.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[14px]">
                                            <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full bg-[#172525] text-white py-4 rounded-xl font-semibold text-[16px] hover:bg-[#2a3a3a] transition-colors" onClick={() => openBookingForm(selectedPkg.name)}>
                                    Book Your Spot
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Desktop Pricing Cards */}
                    <div className="hidden sm:grid sm:grid-cols-3 gap-6 mb-8">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                                    pkg.popular 
                                        ? "border-2 border-[#172525] shadow-lg transform scale-105" 
                                        : "border border-gray-200 shadow-sm"
                                }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[12px] px-4 py-1 rounded-full font-semibold">
                                        ⭐ Most Popular
                                    </div>
                                )}
                                
                                <div className="text-center mb-6">
                                    <h3 className="text-[24px] font-bold text-[#172525] mb-1">{pkg.name}</h3>
                                    <p className="text-[14px] text-gray-600 mb-4">{pkg.tagline}</p>
                                    <div className="text-[36px] font-bold text-[#172525]">{pkg.price}</div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[14px]">
                                            <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-xl font-semibold text-[16px] transition-all ${
                                    pkg.popular
                                        ? "bg-[#172525] text-white hover:bg-[#2a3a3a]"
                                        : "border-2 border-[#172525] text-[#172525] hover:bg-[#172525] hover:text-white"
                                }`} onClick={() => openBookingForm(pkg.name)}>
                                    Book Your Spot
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

                    {showBookingForm && (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 rounded-t-2xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-[20px] font-bold text-[#172525]">Book Your Spot</h3>
                        <p className="text-[14px] text-gray-600">{selectedPlan} Plan</p>
                    </div>
                    <button
                        onClick={closeBookingForm}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                        ×
                    </button>
                </div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleFormSubmit} className="p-6">
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-[14px] font-semibold text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#172525] focus:border-transparent text-[14px]"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    
                    {/* Phone */}
                    <div>
                        <label className="block text-[14px] font-semibold text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#172525] focus:border-transparent text-[14px]"
                            placeholder="10-digit mobile number"
                            required
                        />
                    </div>
                    
                    {/* Email */}
                    <div>
                        <label className="block text-[14px] font-semibold text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#172525] focus:border-transparent text-[14px]"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    
                    {/* Trip Starting Date */}
                    <div>
                        <label className="block text-[14px] font-semibold text-gray-700 mb-2">
                            Preferred Start Date
                        </label>
                        <input
                            type="date"
                            name="tripStartingDate"
                            value={formData.tripStartingDate}
                            onChange={handleInputChange}
                            min="2025-03-15"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#172525] focus:border-transparent text-[14px]"
                        />
                        <p className="text-[12px] text-gray-500 mt-1">Default: March 15, 2025</p>
                    </div>
                    
                    {/* Referral Code */}
                    <div>
                        <label className="block text-[14px] font-semibold text-gray-700 mb-2">
                            Referral Code (Optional)
                        </label>
                        <input
                            type="text"
                            name="referralCode"
                            value={formData.referralCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#172525] focus:border-transparent text-[14px]"
                            placeholder="Enter referral code for discount"
                        />
                    </div>
                    
                    {/* Hidden Fields - Just for reference, these won't be visible */}
                    <input type="hidden" name="tripName" value={formData.tripName} />
                    <input type="hidden" name="plan" value={formData.plan} />
                </div>
                
                {/* Selected Plan Summary */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[14px] font-semibold text-gray-700">Selected Plan</div>
                            <div className="text-[16px] font-bold text-[#172525]">{selectedPlan}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[14px] text-gray-600">Ladakh Yoga Retreat</div>
                            <div className="text-[12px] text-gray-500">7 Days • Mar 15-22, 2025</div>
                        </div>
                    </div>
                </div>
                
                {/* Form Actions */}
                <div className="flex gap-3 mt-6">
                    <button
                        type="button"
                        onClick={closeBookingForm}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-[#172525] text-white rounded-lg font-semibold hover:bg-[#2a3a3a] transition-colors"
                    >
                        Submit Booking
                    </button>
                </div>
                
                <p className="text-[11px] text-gray-500 text-center mt-4">
                    By submitting, you agree to our terms and conditions. We'll contact you within 24 hours to confirm your booking.
                </p>
            </form>
        </div>
    </div>
)}

            {/* What's Included */}
            <div className="p-4 sm:p-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setShowInclusions(!showInclusions)}
                        className="flex items-center justify-between w-full text-left mb-4"
                    >
                        <h3 className="text-[20px] sm:text-[24px] font-bold text-[#172525]">What's Included</h3>
                        <span className={`text-[24px] text-[#172525] transition-transform ${showInclusions ? 'rotate-180' : ''}`}>
                            ↓
                        </span>
                    </button>
                        <div className="bg-white rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                            {[
                                "Airport transfers",
                                "All accommodations", 
                                "Daily yoga sessions",
                                "Meditation workshops",
                                "Cultural excursions",
                                "Professional instruction",
                                "Welcome & closing ceremonies",
                                "Group photos",
                                "Certificate of completion",
                                "Post-retreat integration support"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 text-[16px]">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                
                </div>
            </div>

            {/* Social Proof */}
            <div className="p-4 sm:p-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <div className="text-[32px] sm:text-[48px] font-bold text-[#172525]">500+</div>
                            <div className="text-[12px] sm:text-[14px] text-gray-600">Lives Transformed</div>
                        </div>
                        <div>
                            <div className="text-[32px] sm:text-[48px] font-bold text-[#172525]">4.9</div>
                            <div className="text-[12px] sm:text-[14px] text-gray-600">Average Rating</div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <h3 className="text-[24px] font-bold text-[#172525] mb-6">What People Say</h3>
                    <div className="space-y-4 mb-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 text-left">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-[#172525] text-white rounded-full flex items-center justify-center font-semibold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold text-gray-800">{testimonial.name}</div>
                                        <div className="text-[12px] text-yellow-500">
                                            {"⭐".repeat(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[14px] text-gray-700 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>

            {/* Gallery */}
            <div className="p-4 sm:p-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-[20px] sm:text-[24px] font-bold text-[#172525] mb-6">Gallery</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {galleryImages.map((image, index) => (
                            <img
                                key={index}
                                className="w-full h-32 sm:h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm"
                                src={image}
                                alt={`Gallery ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trips;