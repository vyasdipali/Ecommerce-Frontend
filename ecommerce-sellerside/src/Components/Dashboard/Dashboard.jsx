import React from 'react'
import './Dashboard.css'
import productImage from '../../assets/Imgs/4053104.jpg';
const Dashboard = () => {
    return (
        <>
            <div className=''>
                <section className='Become-Seller'>
                <div class="row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div className='Seller-div'>
                            <h1 style={{color:"#405D72"}}>Become an Amazon seller
                            </h1>
                            
                        </div>
                        <div className='mt-3'>
                                <h6 style={{color:"#758694"}}>Start your selling journey on Amazon.in and become a part <br/> of our 14 Lakh+ seller community</h6>
                            </div>
                            <div className='Start-Selling-btn-div mt-5'>
                                <button className='Start-Selling'><h4>Start Selling</h4></button>
                            </div>
                    </div>
                    <div class="col-lg-5 col-md-4 col-sm-12">
                        <div>
                            <img src={productImage} alt="Product Image" className='img-fluid'  />

                        </div>
                    </div>
                </div>

                </section>
                
            </div>
        </>
    )
}

export default Dashboard
