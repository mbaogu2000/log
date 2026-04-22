import { footer, header } from "./header";

export function login() {
    return /*html*/`
    <style>
        .login-page-wrapper {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background-color: #f8f9fa;
        }

        .login-card-container {
            background: white;
            box-shadow: 0 30px 60px rgba(0,0,0,0.1);
            overflow: hidden;
            border-top: 6px solid var(--dhl-red);
        }

        .login-brand-side {
            background: linear-gradient(rgba(212, 5, 17, 0.9), rgba(212, 5, 17, 0.9)), 
                        url('https://images.unsplash.com/photo-1590611380053-da6447021fbb?auto=format&fit=crop&q=80&w=1000');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .form-control-login {
            border-radius: 0;
            border: 2px solid #eee;
            padding: 12px 15px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-control-login:focus {
            border-color: var(--dhl-yellow);
            box-shadow: none;
            background-color: #fffef5;
        }

        .login-label {
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            color: #666;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }

        .btn-social-login {
            border: 1px solid #ddd;
            border-radius: 0;
            padding: 10px;
            width: 100%;
            font-weight: 600;
            margin-bottom: 10px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .divider-text {
            display: flex;
            align-items: center;
            text-align: center;
            color: #999;
            margin: 25px 0;
        }

        .divider-text::before, .divider-text::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #eee;
        }

        .divider-text:not(:empty)::before { margin-right: .5em; }
        .divider-text:not(:empty)::after { margin-left: .5em; }
    </style>
    ${header()}

    <div class="login-page-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="login-card-container">
                        <div class="row g-0">
                            
                            <div class="col-lg-5 d-none d-lg-flex login-brand-side">
                                <h1 class="display-5 fw-bold mb-4">MyDHL+</h1>
                                <p class="lead mb-5">Login to manage your shipments, view invoices, and access global logistics tools.</p>
                                
                                <div class="mb-4">
                                    <h6 class="fw-bold text-uppercase small" style="color: var(--dhl-yellow)">Not a customer?</h6>
                                    <p class="small">Join the world's leading logistics network and start shipping immediately.</p>
                                    <button class="btn btn-outline-light rounded-0 fw-bold px-4">REGISTER NOW</button>
                                </div>
                            </div>

                            <div class="col-lg-7 p-4 p-md-5">
                                <div class="text-center text-lg-start mb-5">
                                    <h2 class="fw-bold">Login</h2>
                                    <p class="text-muted">Enter your credentials to access your dashboard.</p>
                                </div>

                                <form>
                                    <div class="mb-4">
                                        <label class="login-label">Email Address</label>
                                        <input type="email" class="form-control form-control-login" placeholder="name@company.com">
                                    </div>

                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label class="login-label">Password</label>
                                            <a href="#" class="small text-dhl-red fw-bold text-decoration-none">Forgot?</a>
                                        </div>
                                        <input type="password" class="form-control form-control-login" placeholder="••••••••">
                                    </div>

                                    <div class="mb-4 form-check">
                                        <input type="checkbox" class="form-check-input rounded-0" id="remember">
                                        <label class="form-check-label small" for="remember">Remember my login ID</label>
                                    </div>

                                    <button class="btn btn-dhl btn-lg w-100 py-3 mb-3">LOGIN</button>

                                    <div class="divider-text small">OR CONTINUE WITH</div>

                                    <div class="row g-2">
                                        <div class="col-6">
                                            <button type="button" class="btn btn-social-login">
                                                <span>G</span> Google
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button type="button" class="btn btn-social-login">
                                                <span>L</span> LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div class="mt-5 pt-4 border-top text-center">
                                    <p class="small text-muted">Need to track a shipment without logging in?</p>
                                    <a href="/track" class="fw-bold text-dark text-decoration-none text-uppercase small">Guest Tracking →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ${footer()}
    `;
}