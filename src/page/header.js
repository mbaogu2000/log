// export function header(){
//     return /*html*/`
//     <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3">
//             <div class="container">
//                 <a class="navbar-brand fw-bold text-dhl-red fs-2" href="#">DHL</a>
//                 <div class="collapse navbar-collapse">
//                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
//                     <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
//                     <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
//                     <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
//                     <li class="nav-item"><a class="nav-link" href="/track">Track</a></li>
//                         <li class="nav-item"><a class="nav-link" href="/ship">Ship</a></li>
//                         <li class="nav-item"><a class="nav-link" href="/logistics">Logistics</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>`
// }

export function header() {
    return /*html*/`
    <style>
        .navbar-toggler {
            border: none;
            padding: 0;
        }
        .navbar-toggler:focus {
            box-shadow: none;
        }
        .nav-link {
            color: var(--dhl-dark);
            position: relative;
            padding: 0.5rem 1rem !important;
            transition: color 0.2s ease;
        }
        .nav-link:hover {
            color: var(--dhl-red);
        }
        /* The "DHL Underline" Effect */
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: var(--dhl-yellow);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        .nav-link:hover::after {
            width: 80%;
        }
        .btn-search-trigger {
            background: none;
            border: none;
            font-size: 1.2rem;
            color: var(--dhl-dark);
            margin-left: 15px;
        }
        .mobile-menu-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            font-weight: 800;
            display: block;
        }
    </style>

    <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3">
        <div class="container">
            <a class="navbar-brand fw-bold text-dhl-red fs-2" href="/home" style="letter-spacing: -2px;">DHL</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dhlNavbar">
                <span class="mobile-menu-label">Menu</span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="dhlNavbar">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold text-uppercase" style="font-size: 0.85rem;">
                    <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="/track">Track</a></li>
                    <li class="nav-item"><a class="nav-link" href="/ship">Ship</a></li>
                    <li class="nav-item"><a class="nav-link" href="/logistics">Logistics</a></li>
                    
                    
                </ul>

                <div class="d-flex align-items-center ms-lg-4 border-start ps-lg-4">
                    <button class="btn-search-trigger" title="Search">🔍</button>
                    <a href="/login" class="btn btn-outline-dark rounded-0 fw-bold ms-3 px-3 py-1 btn-sm">LOGIN</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}


export function footer(){
    return/*html*/`
    

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
    `
}