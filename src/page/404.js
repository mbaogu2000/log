import { seo } from "../main";

export function error404() {
    seo({
        title:"error page"
    })
    return /*html*/`
    <style>
        .error-container {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
        }
        .error-code {
            font-size: 10rem;
            font-weight: 900;
            line-height: 1;
            color: #d40511; /* DHL Red */
            letter-spacing: -5px;
        }
        .error-yellow-bar {
            height: 8px;
            width: 80px;
            background-color: #ffcc00; /* DHL Yellow */
            margin: 20px 0;
        }
        .search-box {
            max-width: 500px;
            border: 2px solid #dee2e6;
            border-radius: 0;
        }
        .btn-dhl-dark {
            background-color: #333;
            color: white;
            border-radius: 0;
            font-weight: bold;
            padding: 12px 25px;
        }
        .btn-dhl-dark:hover {
            background-color: #000;
            color: white;
        }
    </style>

    <div class="error-container">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="error-code">404</h1>
                    <div class="error-yellow-bar mx-auto mx-lg-0"></div>
                    <h2 class="display-5 fw-bold text-dark">Shipment Not Found</h2>
                    <p class="lead text-muted mb-4">
                        The page you are looking for has been moved, deleted, or perhaps never existed. 
                        Let’s get you back on the right track.
                    </p>
                    
                    <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                        <a href="/" class="btn btn-dhl-dark text-uppercase">Go to Homepage</a>
                        <a href="/contact" class="btn btn-outline-dark rounded-0 fw-bold px-4 py-2 text-uppercase">Contact Support</a>
                    </div>
                </div>

                <div class="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                    <div class="bg-white p-4 border shadow-sm">
                        <h4 class="fw-bold mb-3">Quick Navigation</h4>
                        <ul class="list-unstyled mb-0">
                            <li class="py-2 border-bottom">
                                <a href="#" class="text-decoration-none text-dark d-flex justify-content-between">
                                    Track a Shipment <span class="text-danger">→</span>
                                </a>
                            </li>
                            <li class="py-2 border-bottom">
                                <a href="#" class="text-decoration-none text-dark d-flex justify-content-between">
                                    Find a Location <span class="text-danger">→</span>
                                </a>
                            </li>
                            <li class="py-2 border-bottom">
                                <a href="#" class="text-decoration-none text-dark d-flex justify-content-between">
                                    Shipping Rates <span class="text-danger">→</span>
                                </a>
                            </li>
                            <li class="py-2">
                                <a href="#" class="text-decoration-none text-dark d-flex justify-content-between">
                                    Customer Service <span class="text-danger">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}