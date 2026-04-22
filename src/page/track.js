import { footer, header } from "./header";

export function tracking() {
    return /*html*/`
    <style>
        .track-status-header {
            background-color: var(--dhl-yellow);
            padding: 40px 0;
            border-bottom: 5px solid var(--dhl-red);
        }
        
        /* Progress Bar Styles */
        .track-container {
            position: relative;
            padding: 40px 0;
        }
        .track-line {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: 4px;
            background: #dee2e6;
            z-index: 1;
        }
        .track-line-progress {
            position: absolute;
            top: 60px;
            left: 0;
            width: 66%; /* Adjust based on status */
            height: 4px;
            background: var(--dhl-red);
            z-index: 2;
        }
        .track-step {
            position: relative;
            z-index: 3;
            text-align: center;
        }
        .step-icon {
            width: 45px;
            height: 45px;
            background: white;
            border: 4px solid #dee2e6;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 10px;
            font-weight: bold;
            transition: 0.3s;
        }
        .step-active .step-icon {
            border-color: var(--dhl-red);
            background: var(--dhl-red);
            color: white;
        }
        .step-complete .step-icon {
            border-color: var(--dhl-red);
            color: var(--dhl-red);
        }

        .shipment-card {
            border-radius: 0;
            border: 1px solid #eee;
            border-left: 5px solid var(--dhl-dark);
        }

        .log-table thead {
            background-color: var(--dhl-dark);
            color: white;
            text-transform: uppercase;
            font-size: 0.8rem;
        }
    </style>

    <div class="tracking-page">
      ${header()}
        <section class="track-status-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h6 class="text-uppercase fw-bold m-0">Shipment ID: #982341054</h6>
                        <h1 class="display-5 fw-bold">Arriving Tomorrow</h1>
                        <p class="mb-0 fw-semibold text-dark">Currently in Transit: <span class="text-dhl-red">Dubai, United Arab Emirates</span></p>
                    </div>
                    <div class="col-md-4 text-md-end mt-3 mt-md-0">
                        <button class="btn btn-outline-dark rounded-0 fw-bold px-4">GET UPDATES</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-white">
            <div class="container">
                <div class="track-container">
                    <div class="track-line"></div>
                    <div class="track-line-progress"></div>
                    <div class="row">
                        <div class="col-3 track-step step-complete">
                            <div class="step-icon">✓</div>
                            <span class="small fw-bold text-uppercase">Picked Up</span>
                            <div class="text-muted x-small">Oct 20, 09:00</div>
                        </div>
                        <div class="col-3 track-step step-complete">
                            <div class="step-icon">✓</div>
                            <span class="small fw-bold text-uppercase">Processed</span>
                            <div class="text-muted x-small">Oct 21, 14:30</div>
                        </div>
                        <div class="col-3 track-step step-active">
                            <div class="step-icon">3</div>
                            <span class="small fw-bold text-uppercase">In Transit</span>
                            <div class="text-muted x-small">In Progress</div>
                        </div>
                        <div class="col-3 track-step">
                            <div class="step-icon">4</div>
                            <span class="small fw-bold text-uppercase">Delivered</span>
                            <div class="text-muted x-small">Pending</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-light">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-8">
                        <h4 class="fw-bold mb-4">Detailed Activity</h4>
                        <div class="table-responsive bg-white shadow-sm">
                            <table class="table log-table mb-0">
                                <thead>
                                    <tr>
                                        <th class="p-3">Date/Time</th>
                                        <th class="p-3">Location</th>
                                        <th class="p-3">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-3">Oct 22, 2026 - 10:15</td>
                                        <td class="p-3">Dubai, UAE</td>
                                        <td class="p-3 fw-bold">Arrived at Sort Facility</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3">Oct 21, 2026 - 22:40</td>
                                        <td class="p-3">Hong Kong</td>
                                        <td class="p-3">Processed at Transit Hub</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3">Oct 20, 2026 - 18:00</td>
                                        <td class="p-3">Shenzhen, China</td>
                                        <td class="p-3">Shipment Picked Up</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="shipment-card bg-white p-4 shadow-sm h-100">
                            <h5 class="fw-bold border-bottom pb-3 mb-3">Shipment Facts</h5>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Weight</span>
                                <span class="fw-bold">2.50 kg</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Dimensions</span>
                                <span class="fw-bold">30 x 20 x 15 cm</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Service</span>
                                <span class="fw-bold text-dhl-red">EXPRESS WORLDWIDE</span>
                            </div>
                            <hr>
                            <h6 class="fw-bold small">Shipped From:</h6>
                            <p class="small text-muted">Shenzhen Tech Park, Tower A<br>Shenzhen, China</p>
                            
                            <h6 class="fw-bold small">Delivering To:</h6>
                            <p class="small text-muted">Business District, Office 402<br>Dubai, United Arab Emirates</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    ${footer()}
    `;
}