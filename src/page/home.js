import { seo } from "../main";
import { header } from "./header";

export function home() {
    seo({
        // Keep titles between 50-60 characters
        title: "Stanley Dev | Master Web Development & Modern Design", 
        
        // Keep description between 150-160 characters for Google snippets
        description: "Learn web development basics to advanced logistics-grade design. Master HTML, CSS, and JavaScript with Stanley's easy-to-follow guides. Start building today!",
        
        // Focus on high-intent long-tail keywords
        keywords: "Web Development Tutorial, Learn HTML CSS Arabic, Bootstrap 5 Logistics Design, Frontend Developer Roadmap, Vite JS Guide",
        
        author: "Stanley",
        
        // Ensure this is an absolute URL for Open Graph (Facebook/LinkedIn)
        image: "https://yourdomain.com/assets/og-preview.jpg", 
        
        url: "https://yourdomain.com",
        icon: "/favicon.png",
        
        // DHL Red for browser address bar on mobile
        themeColor: "#d40511" 
    });
    return /*html*/`
    <style>
        :root {
            --dhl-yellow: #ffcc00;
            --dhl-red: #d40511;
            --dhl-dark: #333333;
        }
        .bg-dhl-yellow { background-color: var(--dhl-yellow); }
        .text-dhl-red { color: var(--dhl-red); }
        
        .hero-section {
            background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), 
                        url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=2070');
            background-size: cover;
            min-height: 500px;
            display: flex;
            align-items: center;
        }

        .tracking-card {
            background: white;
            border-radius: 0;
            border-top: 5px solid var(--dhl-red);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .btn-dhl {
            background-color: var(--dhl-red);
            color: white;
            font-weight: bold;
            border-radius: 0;
            padding: 12px 30px;
            text-transform: uppercase;
        }

        .btn-dhl:hover { background-color: #b3040e; color: white; }
    </style>

    <div class="main-wrapper">
        ${header()}

        <section class="hero-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="tracking-card p-5">
                            <h1 class="fw-bold mb-4">Track Your Shipment</h1>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg border-2" placeholder="Tracking ID (e.g. 123456789)">
                                <button class="btn btn-dhl" type="button">Track</button>
                            </div>
                            <p class="small text-muted">Separate multiple IDs with commas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
        .about-image-stack {
            position: relative;
            height: 450px;
            background: url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000') center/cover;
        }
        .stat-box {
            background-color: var(--dhl-yellow);
            padding: 2rem;
            position: absolute;
            bottom: -30px;
            right: -30px;
            max-width: 250px;
            box-shadow: 10px 10px 0px var(--dhl-red);
        }
    </style>

    <section class="py-5 bg-light overflow-hidden">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <h6 class="text-dhl-red fw-bold text-uppercase">About Our Network</h6>
                    <h2 class="display-5 fw-bold mb-4">Excellence. Simply Delivered.</h2>
                    <p class="lead text-dark">We are the world's leading logistics company, present in over 220 countries and territories worldwide.</p>
                    <p class="text-muted mb-4">Our mission is to connect people and improve their lives. With a workforce exceeding 400,000 employees, we provide solutions for an almost infinite number of logistics needs.</p>
                    
                    <div class="row g-4 mb-4">
                        <div class="col-6">
                            <h3 class="fw-bold mb-0">220+</h3>
                            <small class="text-uppercase fw-semibold">Countries Covered</small>
                        </div>
                        <div class="col-6">
                            <h3 class="fw-bold mb-0">1.5Bn</h3>
                            <small class="text-uppercase fw-semibold">Parcels Per Year</small>
                        </div>
                    </div>
                    
                    <button class="btn btn-dhl">Our History</button>
                </div>

                <div class="col-lg-6 mt-5 mt-lg-0">
                    <div class="about-image-stack">
                        <div class="stat-box d-none d-md-block">
                            <h4 class="fw-bold m-0">50+ Years</h4>
                            <p class="small m-0 text-dark">Of Logistics Innovation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


        <style>
        .service-card {
            transition: all 0.3s ease;
            border: 1px solid #eee;
            border-radius: 0;
        }
        .service-card:hover {
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            border-color: var(--dhl-yellow);
        }
        .service-icon {
            font-size: 2.5rem;
            color: var(--dhl-red);
            margin-bottom: 1.5rem;
        }
    </style>

    <section class="py-5 bg-white">
        <div class="container py-4">
            <div class="row mb-5">
                <div class="col-lg-6">
                    <h6 class="text-dhl-red fw-bold text-uppercase">What We Do</h6>
                    <h2 class="display-6 fw-bold">Logistics Solutions for a Connected World</h2>
                </div>
            </div>
            
            <div class="row g-0"> <div class="col-md-6 col-lg-3">
                    <div class="service-card p-4 h-100">
                        <div class="service-icon"><i class="bi bi-box-seam"></i> 📦</div>
                        <h4 class="fw-bold">Express Delivery</h4>
                        <p class="text-muted small">Time-critical international shipping for parcels and documents.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="service-card p-4 h-100">
                        <div class="service-icon"><i class="bi bi-truck"></i> 🚛</div>
                        <h4 class="fw-bold">Road Freight</h4>
                        <p class="text-muted small">Flexible overland transportation across entire continents.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="service-card p-4 h-100">
                        <div class="service-icon"><i class="bi bi-tsunami"></i> 🚢</div>
                        <h4 class="fw-bold">Ocean Freight</h4>
                        <p class="text-muted small">Cost-effective shipping for large volumes with global port coverage.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="service-card p-4 h-100">
                        <div class="service-icon"><i class="bi bi-airplane"></i> ✈️</div>
                        <h4 class="fw-bold">Air Freight</h4>
                        <p class="text-muted small">High-speed air transport for your most urgent global shipments.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <style>
        .team-card {
            border: none;
            background: none;
            text-align: left;
            group: hover;
        }

        .member-img-container {
            position: relative;
            overflow: hidden;
            background-color: var(--dhl-dark);
            margin-bottom: 1.5rem;
        }

        .member-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            filter: grayscale(100%);
            transition: all 0.5s ease;
            opacity: 0.9;
        }

        .team-card:hover .member-img {
            filter: grayscale(0%);
            transform: scale(1.05);
            opacity: 1;
        }

        .member-role {
            color: var(--dhl-red);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
            display: block;
        }

        .member-name {
            font-weight: 800;
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }

        .team-divider {
            width: 40px;
            height: 4px;
            background-color: var(--dhl-yellow);
            transition: width 0.3s ease;
        }

        .team-card:hover .team-divider {
            width: 100%;
        }
    </style>

    <section class="py-5 bg-white">
        <div class="container py-5">
            <div class="row align-items-end mb-5">
                <div class="col-lg-7">
                    <h6 class="text-dhl-red fw-bold text-uppercase">Leadership</h6>
                    <h2 class="display-5 fw-bold">The Experts Behind <br>Your Global Logistics</h2>
                </div>
                <div class="col-lg-5 text-lg-end d-none d-lg-block">
                    <p class="text-muted">Our leadership team combines decades of experience in supply chain management, technology, and international trade.</p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="team-card">
                        <div class="member-img-container">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="CEO" class="member-img">
                        </div>
                        <span class="member-role">Chief Executive Officer</span>
                        <h4 class="member-name">Marcus Sterling</h4>
                        <div class="team-divider"></div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="team-card">
                        <div class="member-img-container">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="COO" class="member-img">
                        </div>
                        <span class="member-role">Global Operations</span>
                        <h4 class="member-name">Sarah Jenkins</h4>
                        <div class="team-divider"></div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="team-card">
                        <div class="member-img-container">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" alt="CTO" class="member-img">
                        </div>
                        <span class="member-role">Technology Officer</span>
                        <h4 class="member-name">David Chen</h4>
                        <div class="team-divider"></div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="team-card">
                        <div class="member-img-container">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" alt="CSO" class="member-img">
                        </div>
                        <span class="member-role">Sustainability Lead</span>
                        <h4 class="member-name">Elena Rodriguez</h4>
                        <div class="team-divider"></div>
                    </div>
                </div>
            </div>
            
            <div class="mt-5 pt-4 border-top">
                <p class="text-center fw-bold">
                    Interested in joining the team? 
                    <a href="#" class="text-dhl-red text-decoration-none ms-2">View Career Opportunities &rarr;</a>
                </p>
            </div>
        </div>
    </section>

    <style>
        .contact-header {
            background-color: var(--dhl-dark);
            color: white;
            padding: 60px 0;
            border-bottom: 10px solid var(--dhl-yellow);
        }
        .contact-card {
            border: 1px solid #eee;
            border-radius: 0;
            transition: transform 0.3s ease;
        }
        .contact-card:hover {
            border-color: var(--dhl-red);
        }
        .form-control {
            border-radius: 0;
            border: 2px solid #f0f0f0;
            padding: 12px;
        }
        .form-control:focus {
            border-color: var(--dhl-yellow);
            box-shadow: none;
        }
        .contact-icon-circle {
            width: 60px;
            height: 60px;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--dhl-red);
            margin-bottom: 20px;
        }
    </style>

    <div class="contact-wrapper">
        <header class="contact-header">
            <div class="container">
                <h1 class="display-4 fw-bold">Contact Our Experts</h1>
                <p class="lead opacity-75">We’re here to help you navigate the world of global logistics.</p>
            </div>
        </header>

        <section class="py-5 mt-n5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-7">
                        <div class="bg-white p-5 shadow-sm border">
                            <h3 class="fw-bold mb-4">Send us a Message</h3>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="small fw-bold text-uppercase">Full Name</label>
                                        <input type="text" class="form-control" placeholder="John Doe">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small fw-bold text-uppercase">Email Address</label>
                                        <input type="email" class="form-control" placeholder="john@company.com">
                                    </div>
                                    <div class="col-12">
                                        <label class="small fw-bold text-uppercase">Inquiry Type</label>
                                        <select class="form-select rounded-0 border-2 p-2">
                                            <option>General Inquiry</option>
                                            <option>Tracking Support</option>
                                            <option>Sales & Partnerships</option>
                                            <option>Careers</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label class="small fw-bold text-uppercase">Message</label>
                                        <textarea class="form-control" rows="5" placeholder="How can we help?"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-dhl w-100 py-3">Submit Inquiry</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="contact-card p-4 bg-white">
                                    <div class="contact-icon-circle">📞</div>
                                    <h5 class="fw-bold">Customer Service</h5>
                                    <p class="text-muted small">Available 24/7 for tracking and general shipping assistance.</p>
                                    <a href="tel:1-800-CALL-DHL" class="text-dhl-red fw-bold text-decoration-none">+1 (800) CALL-DHL</a>
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <div class="contact-card p-4 bg-white border-start border-4 border-warning">
                                    <div class="contact-icon-circle">🏢</div>
                                    <h5 class="fw-bold">Global Headquarters</h5>
                                    <p class="text-muted small">Bonn, Germany<br>Charles-de-Gaulle-Straße 20, 53113</p>
                                    <a href="#" class="text-dark fw-bold text-decoration-none small">View on Maps →</a>
                                </div>
                            </div>

                            <div class="col-12 text-center p-4">
                                <h6 class="fw-bold text-uppercase mb-3">Connect With Us</h6>
                                <div class="d-flex justify-content-center gap-3">
                                    <a href="#" class="btn btn-outline-dark rounded-circle px-3"><i class="bi bi-linkedin">In</i></a>
                                    <a href="#" class="btn btn-outline-dark rounded-circle px-3"><i class="bi bi-twitter-x">X</i></a>
                                    <a href="#" class="btn btn-outline-dark rounded-circle px-3"><i class="bi bi-facebook">Fb</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


    <style>
    .main-footer {
        background-color: #333;
        color: #fff;
        padding-top: 60px;
    }
    .footer-logo {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--dhl-red);
        letter-spacing: -2px;
    }
    .footer-heading {
        font-size: 0.9rem;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 25px;
        color: var(--dhl-yellow);
        letter-spacing: 1px;
    }
    .footer-link {
        color: #ccc;
        text-decoration: none;
        display: block;
        margin-bottom: 12px;
        font-size: 0.9rem;
        transition: color 0.2s ease;
    }
    .footer-link:hover {
        color: var(--dhl-yellow);
    }
    .footer-bottom {
        background-color: #222;
        padding: 25px 0;
        margin-top: 50px;
    }
    .social-icon {
        width: 35px;
        height: 35px;
        background: #444;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        color: #fff;
        text-decoration: none;
        transition: background 0.3s ease;
    }
    .social-icon:hover {
        background: var(--dhl-red);
        color: #fff;
    }
</style>

<footer class="main-footer">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-3">
                <div class="footer-logo mb-3">DHL</div>
                <p class="small text-secondary mb-4">
                    Connecting People, Improving Lives. The global leader in logistics and international shipping.
                </p>
                <div class="d-flex mb-4">
                    <a href="#" class="social-icon">F</a>
                    <a href="#" class="social-icon">X</a>
                    <a href="#" class="social-icon">L</a>
                    <a href="#" class="social-icon">I</a>
                </div>
            </div>

            <div class="col-6 col-lg-2 offset-lg-1">
                <h6 class="footer-heading">Help Center</h6>
                <nav>
                    <a href="#" class="footer-link">Customer Service</a>
                    <a href="#" class="footer-link">Digital Tools</a>
                    <a href="#" class="footer-link">Tracking Support</a>
                    <a href="#" class="footer-link">Find Location</a>
                </nav>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="footer-heading">Our Business</h6>
                <nav>
                    <a href="#" class="footer-link">Express</a>
                    <a href="#" class="footer-link">Freight</a>
                    <a href="#" class="footer-link">Supply Chain</a>
                    <a href="#" class="footer-link">Global Forwarding</a>
                </nav>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="footer-heading">Company</h6>
                <nav>
                    <a href="#" class="footer-link">About Us</a>
                    <a href="#" class="footer-link">Careers</a>
                    <a href="#" class="footer-link">Press Center</a>
                    <a href="#" class="footer-link">Sustainability</a>
                </nav>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="footer-heading">Legal</h6>
                <nav>
                    <a href="#" class="footer-link">Fraud Awareness</a>
                    <a href="#" class="footer-link">Terms of Use</a>
                    <a href="#" class="footer-link">Privacy Notice</a>
                    <a href="#" class="footer-link">Dispute Resolution</a>
                </nav>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="small text-secondary mb-0">
                        2026 © DHL International GmbH. All rights reserved.
                    </p>
                </div>
                <div class="col-md-6 text-md-end">
                    <span class="small text-secondary fw-bold text-uppercase">
                        <span class="text-warning">●</span> Global Network: 220 Countries
                    </span>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
    `;
}