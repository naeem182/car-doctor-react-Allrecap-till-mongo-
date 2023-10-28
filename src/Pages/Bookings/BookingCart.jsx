import { useContext, useEffect, useState } from "react"
import { Authcontex } from "../../Provider/Authprovider"
import BookingRow from "./BookingRow";

const BookingCart = () => {
    const { user } = useContext(Authcontex)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {

        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data);
        //     })
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);
    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                            // handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};


export default BookingCart
