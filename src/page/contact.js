import { footer, header } from "./header";

export function contact() {
    return /*html*/`
    <style>
        .contact-section {
            background-color: #fff;
            position: relative;
        }

        .contact-info-tile {
            border: 1px solid #eee;
            transition: all 0.3s ease;
            height: 100%;
            background: #fff;
        }

        .contact-info-tile:hover {
            border-color: var(--dhl-red);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .form-label-dhl {
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--dhl-dark);
            letter-spacing: 0.5px;
        }

        .form-control-dhl {
            border-radius: 0;
            border: 2px solid #f2f2f2;
            padding: 15px;
            font-size: 0.95rem;
        }

        .form-control-dhl:focus {
            border-color: var(--dhl-yellow);
            box-shadow: none;
            background-color: #fffef5;
        }

        .support-icon {
            width: 50px;
            height: 50px;
            background-color: var(--dhl-yellow);
            color: var(--dhl-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            margin-bottom: 20px;
        }

        .map-placeholder {
            height: 250px;
            background: #e9ecef url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000') center/cover;
            filter: grayscale(100%);
            border-bottom: 5px solid var(--dhl-red);
        }
    </style>
    ${header()}

    <section class="contact-section py-5">
        <div class="container py-5">
            <div class="row g-5">
                
                <div class="col-lg-7">
                    <h6 class="text-dhl-red fw-bold text-uppercase mb-3">Get In Touch</h6>
                    <h2 class="display-5 fw-bold mb-5">How Can We Help You?</h2>
                    
                    <form id="contactForm" class="row g-4">
                        <div class="col-md-6">
                            <label class="form-label-dhl">First Name</label>
                            <input type="text" class="form-control form-control-dhl" placeholder="Stanley">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label-dhl">Email Address</label>
                            <input type="email" class="form-control form-control-dhl" placeholder="name@company.com">
                        </div>
                        <div class="col-12">
                            <label class="form-label-dhl">Subject of Inquiry</label>
                            <select class="form-select form-control-dhl">
                                <option selected>General Logistics Inquiry</option>
                                <option>Technical Support</option>
                                <option>Business Partnership</option>
                                <option>Billing & Invoices</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label-dhl">Your Message</label>
                            <textarea class="form-control form-control-dhl" rows="5" placeholder="Please describe your requirements..."></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dhl btn-lg px-5">Send Message</button>
                        </div>
                    </form>
                </div>

                <div class="col-lg-5">
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="contact-info-tile p-4 border-start border-4 border-danger">
                                <div class="support-icon">📞</div>
                                <h5 class="fw-bold">24/7 Global Support</h5>
                                <p class="text-muted small">Our specialists are ready to assist you with urgent shipping needs at any time.</p>
                                <a href="tel:+1800123456" class="text-dhl-red fw-bold text-decoration-none">+1 (800) 123-4567</a>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="contact-info-tile p-4">
                                <div class="support-icon">🏢</div>
                                <h5 class="fw-bold">Regional Headquarters</h5>
                                <p class="text-muted small mb-3">123 Logistics Way, Tech District<br>Dubai, United Arab Emirates</p>
                                <div class="map-placeholder mb-3"></div>
                                <a href="#" class="btn btn-link text-dark fw-bold p-0 text-decoration-none small">GET DIRECTIONS →</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    ${footer()}
    `;
}