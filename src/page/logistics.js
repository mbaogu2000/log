import { footer, header } from "./header";

export function logistics() {
    return /*html*/`
    <style>
        .logistic-feature-card {
            background-color: white;
            border: none;
            border-radius: 0;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            height: 100%;
        }

        .logistic-feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }

        .logistic-img-wrapper {
            height: 240px;
            overflow: hidden;
            position: relative;
        }

        .logistic-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .logistic-feature-card:hover .logistic-img-wrapper img {
            transform: scale(1.1);
        }

        .sector-tag {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: var(--dhl-red);
            color: white;
            padding: 5px 12px;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .logistic-content {
            padding: 2rem;
            border-bottom: 4px solid #eee;
            transition: border-color 0.3s ease;
        }

        .logistic-feature-card:hover .logistic-content {
            border-color: var(--dhl-yellow);
        }

        .logistic-icon {
            width: 50px;
            height: 50px;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
    </style>
    ${header()}

    <section class="py-5 bg-light">
        <div class="container py-5">
            <div class="row mb-5 align-items-center">
                <div class="col-lg-6">
                    <h6 class="text-dhl-red fw-bold text-uppercase">Industry Solutions</h6>
                    <h2 class="display-5 fw-bold">Logistics Tailored to <br>Your Specific Sector</h2>
                </div>
                <div class="col-lg-6">
                    <p class="lead text-muted">We combine specialized experience with global scale to solve the unique supply chain challenges of the world's most demanding industries.</p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="logistic-feature-card shadow-sm">
                        <div class="logistic-img-wrapper">
                            <span class="sector-tag">Smart Storage</span>
                            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" alt="Warehouse">
                        </div>
                        <div class="logistic-content">
                            <div class="logistic-icon">🏢</div>
                            <h4 class="fw-bold">Warehousing & Fulfillment</h4>
                            <p class="text-muted small">Scalable storage solutions with real-time inventory management and global distribution reach.</p>
                            <a href="#" class="btn btn-link text-dhl-red fw-bold p-0 text-decoration-none">View Solutions →</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="logistic-feature-card shadow-sm">
                        <div class="logistic-img-wrapper">
                            <span class="sector-tag">Temperature Controlled</span>
                            <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800" alt="Healthcare Logistics">
                        </div>
                        <div class="logistic-content">
                            <div class="logistic-icon">💊</div>
                            <h4 class="fw-bold">Life Sciences & Healthcare</h4>
                            <p class="text-muted small">Cold-chain expertise ensuring the safe, compliant delivery of sensitive medical supplies.</p>
                            <a href="#" class="btn btn-link text-dhl-red fw-bold p-0 text-decoration-none">Explore Tech →</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="logistic-feature-card shadow-sm">
                        <div class="logistic-img-wrapper">
                            <span class="sector-tag">High Security</span>
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Tech Logistics">
                        </div>
                        <div class="logistic-content">
                            <div class="logistic-icon">🛡️</div>
                            <h4 class="fw-bold">Technology & Electronics</h4>
                            <p class="text-muted small">High-security transport and white-glove delivery for expensive or fragile electronic assets.</p>
                            <a href="#" class="btn btn-link text-dhl-red fw-bold p-0 text-decoration-none">Security Details →</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-5 bg-dhl-yellow text-center d-flex flex-column flex-md-row align-items-center justify-content-between">
                <h3 class="fw-bold m-0 mb-3 mb-md-0">Need a Custom Logistics Plan for Your Business?</h3>
                <button class="btn btn-dhl btn-lg">Consult an Expert</button>
            </div>
        </div>
    </section>
    ${footer()}
    `;
}