import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='m-2'>
            <div className='service-provide '>

                <h1 className=''>special</h1>
            </div>
            <div className='service'>
                <div className="row container">

                    {
                        services.map(pd => (<div className='col-md-4 col-sm-12'>
                            <div className="service border border p-3 ">
                                <div className="images">
                                    <img className='img-fluid' src={pd.image} alt="" />

                                </div>
                                <h6 className='description'>{pd.name}</h6>

                                <p className=' description-project'><span className='text-primary'></span> <br /> {pd.details}</p>
                                <h6 className='price'>price:${pd.price}</h6>
                                <Link to={`/details/${pd._id}`}><button className='p-2 border-0 bg-primary rounded text-white price'>Booking Now</button></Link>
                            </div>

                        </div>
                        ))
                    }

                </div>

            </div>
        </div>

    );
};

export default Shop;