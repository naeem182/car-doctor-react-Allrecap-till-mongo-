import { useEffect, useState } from "react"
import ServicesCard from "./ServicesCard"


const Services = () => {

    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-opal-ten.vercel.app/services')
            .then(res => res.json())
            .then(data => setservices(data))


    }, [])

    return (
        <div>
            <div className="text-center max-w-md mx-auto my-4">
                <h3 className="mb-4 text-2xl text-orange-600 font-bold">Services</h3>
                <h1 className=" text-4xl font-bold my-1">Our Service Area</h1>

                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }

            </div>
        </div>
    )
}

export default Services
