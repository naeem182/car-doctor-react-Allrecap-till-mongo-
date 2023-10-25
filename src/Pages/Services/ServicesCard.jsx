

const ServicesCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ml-2  ">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title text-orange-400">Price: ${price}</h2>


            </div>
        </div>
    )
}

export default ServicesCard
