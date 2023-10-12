import React, { useEffect, useState } from 'react'
import VehicleModelsDetails from './vehicleModelsDetails/vehicleModelsDetails.js';

const VehicleModels = () => {
    const [carModelDetails, setCarModelDetails] = useState({});
    const { ac, doors, fuel, image, mark, model, rent_per_day, transmission, year } = carModelDetails;
    const [activeModelDetails, setActiveModelDetails] = useState("audi");

    const clickHandler = (e) => {
        const model = e.target.innerHTML.toLowerCase();
        const modelDetail = VehicleModelsDetails.filter(ele => (
            model.includes(ele.model.toLowerCase())
        ))[0];
        setCarModelDetails(modelDetail);
        setActiveModelDetails(modelDetail.model)
    }

    useEffect(() => {
        const model = "audi";
        const modelDetail = VehicleModelsDetails.filter(ele => (
            model.includes(ele.model.toLowerCase())
        ))[0];
        setCarModelDetails(modelDetail);
        setActiveModelDetails(modelDetail.model)
    }, [])
    console.log(activeModelDetails);
    return (
        <div className='sm:mx-20'>

            <div className='flex flex-col items-center my-16 text-center space-y-3'>
                <h2 className='text-2xl font-bold font-[sans-serif]'>Vehicle Models</h2>
                <h1 className='font-bold text-4xl'>Our rental fleet</h1>
                <p className='text-xl'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className='md:flex md:items-start md:justify-between'>
                <div className='flex flex-col'>

                    <button onClick={clickHandler} className={`px-5 py-3 text-left text-2xl font-bold 
                    ${activeModelDetails === "audi" ?
                            'bg-orange-600 text-white' :
                            'bg-white text-black'
                        } 
                    hover:bg-orange-600 hover:text-white hover:transition-all hover:duration-700`}>Audi A1 S-Line</button>

                    <button onClick={clickHandler} className={`${activeModelDetails === "gold 6" ?
                        'bg-orange-600 text-white' :
                        'bg-white text-black'
                        } 
                    px-5 py-3 text-left bg-white text-2xl font-bold hover:bg-orange-600 hover:text-white hover:transition-all hover:duration-700`}>VW Golf 6</button>

                    <button onClick={clickHandler} className={`${activeModelDetails === "camry" ?
                        'bg-orange-600 text-white' :
                        'bg-white text-black'
                        } 
                        px-5 py-3 text-left text-2xl font-bold hover:bg-orange-600 hover:text-white hover:transition-all hover:duration-700`}>Toyota Camry</button>

                    <button onClick={clickHandler} className={`px-5 py-3 text-left text-2xl font-bold ${activeModelDetails === "320" ?
                        'bg-orange-600 text-white' :
                        'bg-white text-black'
                        } 
                        hover:bg-orange-600 hover:text-white hover:transition-all hover:duration-700`}>BMW 320 ModernLine</button>

                    <button onClick={clickHandler} className={`${activeModelDetails === "benz GLK" ?
                        'bg-orange-600 text-white' :
                        'bg-white text-black'
                        } 
                        px-5 py-3 text-left text-2xl font-bold hover:bg-orange-600 hover:text-white hover:transition-all hover:duration-700`}>Mercedes-Benz GLK</button>

                    <button onClick={clickHandler} className={`${activeModelDetails === "passat CC" ?
                        'bg-orange-600 text-white' :
                        'bg-white text-black'
                        } 
                        px-5 py-3 text-left text-2xl font-bold hover:bg-orange-600 hover:text-white hover:transition-all hover:duration-700`}>VW Passat CC</button>

                </div>

                <div className='flex flex-col text-center my-10 border border-orange-500 md:my-0 md:mx-3'>

                    <h2 className='text-2xl font-bold bg-orange-400 text-white p-3'>${rent_per_day} / rent per day</h2>
                    
                    <div className="px-10 flex justify-center">
                        <img src={image} alt="car_image" />
                    </div>

                    <div className='px-10 pb-5 border'>

                        <div className="capitalize flex justify-between items-center">
                            <span className='text-2xl font-bold italic'>Model</span>
                            <span>{model}</span>
                        </div>
                        <div className="capitalize flex justify-between items-center">
                            <span className='text-2xl font-bold italic'>Mark</span>
                            <span>{mark}</span>
                        </div>
                        <div className="capitalize flex justify-between items-center">
                            <span className='font-bold text-2xl italic'>Year</span>
                            <span>{year}</span>
                        </div>
                        <div className="capitalize flex justify-between items-center">
                            <span className='text-2xl font-bold italic'>Doors</span>
                            <span>{doors}</span>
                        </div>
                        <div className="capitalize flex justify-between items-center">
                            <span className='text-2xl font-bold italic'>AC</span>
                            <span>{ac}</span>
                        </div>
                        <div className="capitalize flex justify-between items-center">
                            <span className='text-2xl font-bold italic'>Transmission</span>
                            <span>{transmission}</span>
                        </div>
                        <div className="capitalize flex justify-between items-center">
                            <span className='text-2xl font-bold italic'>Fuel</span>
                            <span>{fuel}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VehicleModels