import { footer, header } from "./header";

export function about() {
    return /*html*/`
    <style>
        .about-header-pill {
            display: inline-block;
            padding: 5px 15px;
            background-color: rgba(212, 5, 17, 0.1);
            color: var(--dhl-red);
            font-weight: 700;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 1.5rem;
        }

        .about-feature-box {
            border-left: 4px solid var(--dhl-yellow);
            padding-left: 20px;
            margin-bottom: 2rem;
        }

        .impact-stats {
            background-color: var(--dhl-dark);
            color: white;
            padding: 40px;
            margin-top: -50px;
            position: relative;
            z-index: 10;
        }

        .about-image-grid {
            position: relative;
            height: 100%;
            min-height: 400px;
        }

        .main-img {
            width: 90%;
            height: 500px;
            object-fit: cover;
            border-bottom: 15px solid var(--dhl-yellow);
        }

        .floating-img {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 250px;
            height: 200px;
            object-fit: cover;
            border: 10px solid white;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
    </style>
    ${header()}

    <section class="py-5 bg-white overflow-hidden">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                
                <div class="col-lg-6">
                    <span class="about-header-pill">Established 1969</span>
                    <h2 class="display-4 fw-bold mb-4">Connecting People, <br><span class="text-dhl-red">Improving Lives.</span></h2>
                    
                    <p class="lead text-muted mb-4">
                        We are more than just a delivery company. We are a team of 400,000 global specialists working across 220 countries to make the world a smaller, more connected place.
                    </p>

                    <div class="about-feature-box">
                        <h5 class="fw-bold">Global Leader in Logistics</h5>
                        <p class="small text-secondary m-0">Our network covers everything from local document delivery to complex supply chain management for global enterprises.</p>
                    </div>

                    <div class="about-feature-box">
                        <h5 class="fw-bold">Sustainability First</h5>
                        <p class="small text-secondary m-0">Committed to zero-emissions logistics by 2050, we are leading the industry toward a greener future.</p>
                    </div>

                    <div class="d-flex gap-3 mt-4">
                        <button class="btn btn-dhl px-4">Our Mission</button>
                        <button class="btn btn-outline-dark rounded-0 fw-bold px-4">Annual Report</button>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="about-image-grid">
                        <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1000" 
                             alt="DHL Cargo Plane" class="main-img">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
                             alt="Logistics Specialist" class="floating-img d-none d-md-block">
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="impact-stats shadow">
                <div class="row text-center g-4">
                    <div class="col-6 col-md-3 border-end border-secondary">
                        <h2 class="fw-bold m-0 text-dhl-yellow">220+</h2>
                        <p class="small text-uppercase mb-0 opacity-75">Countries</p>
                    </div>
                    <div class="col-6 col-md-3 border-md-end border-secondary">
                        <h2 class="fw-bold m-0 text-dhl-yellow">400k+</h2>
                        <p class="small text-uppercase mb-0 opacity-75">Employees</p>
                    </div>
                    <div class="col-6 col-md-3 border-end border-secondary">
                        <h2 class="fw-bold m-0 text-dhl-yellow">1.6Bn</h2>
                        <p class="small text-uppercase mb-0 opacity-75">Parcels/Year</p>
                    </div>
                    <div class="col-6 col-md-3">
                        <h2 class="fw-bold m-0 text-dhl-yellow">Zero</h2>
                        <p class="small text-uppercase mb-0 opacity-75">Net Emissions Goal</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ${footer()}
    `;
}