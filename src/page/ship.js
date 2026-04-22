import { seo } from "../main";
import { footer, header } from "./header";

export function ship() {
    seo({
        // 50-60 characters: Primary keyword at the front for search engine weight
        title: "Stanley Logistics | Global Tracking & Express Shipping",
        
        // 150-160 characters: Focused on utility and the " DHL-level" service
        description: "Experience world-class logistics. Track shipments in real-time, get express shipping quotes, and manage global freight easily with Stanley Logistics. Excellence, simply delivered.",
        
        // High-volume logistics and tech keywords
        keywords: "International Shipping, Real-time Tracking, Express Delivery, Freight Solutions, Supply Chain Management, Web Dev Logistics Template",
        
        author: "Stanley",
        
        // Use an absolute URL. This is the image shown when you share the link on WhatsApp/Facebook
        image: "https://yourdomain.com/assets/shipment-preview.jpg", 
        
        url: "https://yourdomain.com",
        
        // Path to your high-res favicon
        icon: "/favicon.png",
        
        // DHL Red: This colors the mobile browser's status bar to match your brand
        themeColor: "#d40511" 
    });
    return /*html*/`
    <style>
        .ship-header {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                        url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=2000');
            background-size: cover;
            background-position: center;
            padding: 80px 0;
            color: white;
        }

        .ship-nav-link {
            color: var(--dhl-dark);
            font-weight: 800;
            text-transform: uppercase;
            border-radius: 0;
            padding: 15px 25px;
            border: 1px solid #dee2e6;
            margin-right: -1px;
            background: #f8f9fa;
        }

        .ship-nav-link.active {
            background: var(--dhl-yellow) !important;
            border-color: var(--dhl-yellow) !important;
            color: black !important;
        }

        .ship-form-card {
            border: none;
            border-radius: 0;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .location-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
        }
    </style>
${header()}
    <div class="ship-section">
        <section class="ship-header text-center">
            <div class="container">
                <h1 class="display-3 fw-bold mb-3">Create a Shipment</h1>
                <p class="lead fw-normal">Global shipping made simple. Get your items where they need to go.</p>
            </div>
        </section>

        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center mt-n5">
                    <div class="col-lg-10">
                        
                        <div class="d-flex justify-content-center mb-0">
                            <button class="btn ship-nav-link active">Domestic</button>
                            <button class="btn ship-nav-link">International</button>
                            <button class="btn ship-nav-link">Freight</button>
                        </div>

                        <div class="card ship-form-card p-4 p-md-5">
                            <form>
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <label class="form-label small fw-bold text-uppercase"><span class="location-dot bg-success"></span> From (Origin)</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white rounded-0"><i class="bi bi-geo-alt"></i> 📍</span>
                                            <input type="text" class="form-control rounded-0 p-3" placeholder="City, Zip Code, or Country">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="form-label small fw-bold text-uppercase"><span class="location-dot bg-danger"></span> To (Destination)</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white rounded-0"><i class="bi bi-geo-fill"></i> 🏁</span>
                                            <input type="text" class="form-control rounded-0 p-3" placeholder="City, Zip Code, or Country">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label class="form-label small fw-bold text-uppercase">Shipment Date</label>
                                        <input type="date" class="form-control rounded-0 p-3">
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label small fw-bold text-uppercase">Package Weight</label>
                                        <div class="input-group">
                                            <input type="number" class="form-control rounded-0 p-3" placeholder="0.00">
                                            <span class="input-group-text bg-white rounded-0">KG</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label small fw-bold text-uppercase">Packaging</label>
                                        <select class="form-select rounded-0 p-3">
                                            <option>DHL Express Box</option>
                                            <option>Custom Packaging</option>
                                            <option>Envelope / Flyer</option>
                                        </select>
                                    </div>

                                    <div class="col-12 text-center mt-5">
                                        <button class="btn btn-dhl btn-lg px-5 py-3 fs-5 w-100 w-md-auto">Get Quote & Ship Now</button>
                                        <p class="mt-3 small text-muted">By clicking, you agree to our <a href="#" class="text-dark">Terms of Carriage</a>.</p>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div class="row g-4 mt-5">
                    <div class="col-md-4">
                        <div class="border p-4 h-100 d-flex align-items-center">
                            <div class="fs-1 me-3">📦</div>
                            <div>
                                <h6 class="fw-bold mb-1">Order Supplies</h6>
                                <p class="small text-muted mb-0">Get DHL branded boxes and labels delivered to you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="border p-4 h-100 d-flex align-items-center">
                            <div class="fs-1 me-3">📅</div>
                            <div>
                                <h6 class="fw-bold mb-1">Schedule Pickup</h6>
                                <p class="small text-muted mb-0">Book a courier to collect your shipment from your door.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="border p-4 h-100 d-flex align-items-center">
                            <div class="fs-1 me-3">⚖️</div>
                            <div>
                                <h6 class="fw-bold mb-1">Duty & Tax</h6>
                                <p class="small text-muted mb-0">Calculate customs duties for international shipments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ${footer()}
    </div>
    `;
}