import React from 'react'

function Coins({ rank, name, image, symbol, price, volume, priceChange }) {
    return (
        <>
            <section className=" text-center">

                <div className="container-fluid mt-5">

                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-10 col-md-2">

                                    <div className="firstcol d-flex flex-align-center flex-direction-column">

                                        <img className="image" src={image} alt="img" />

                                        <h5>{name}</h5>
                                    </div>
                                </div>
                                <div className="col-10 col-md-2">

                                    <h5>{symbol}</h5>
                                </div>
                                <div className="col-10 col-md-2">
                                    <p>{price}</p>
                                </div>
                                <div className="col-10 col-md-2">
                                    <h6>{`$ ${volume}`}</h6>
                                </div>
                                <div className="col-10 col-md-1">
                                    <h7>{priceChange}</h7>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Coins
