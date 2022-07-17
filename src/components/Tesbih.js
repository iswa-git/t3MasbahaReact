import React from 'react'
import Card  from 'react-bootstrap/Card'


const Tesbih = ({ text }) => {
    return (        
        <div>
            <div class="col-12 col-md-6 col-lg-4 col-xlg-3">
                <div class="card border-primary mb-3">
                    <div class="card-header counter-text"> { text } </div>
                    <div class="card-body text-primary">
                        <button onclick="resetCounter('counter-1')" class="btn btn-danger clear-counter btn-sm">
                            <i class="fs-4 mb-3 bi bi-repeat"></i>
                        </button>
                        <div id="counter-1" onClick="incrementClick('counter-1')" class="mycounter counter-btn">0</div>
                    </div>
                </div>
            </div>
            <Card>test Card</Card>
        </div>        
    );
}
 
export default Tesbih;