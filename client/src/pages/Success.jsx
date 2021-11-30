import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {userRequest} from "../requestMethod";

const Success = () => {
    const location = useLocation()
    const data = location.state.stripeData
    const cart = location.state.products
    // console.log(data)

    const currentUser = useSelector(state => state.user.currentUser)
    const [orderId,serOrderId] = useState(null)

    useEffect(() => {

        try {
            const createOrder = async () => {
                const res = await userRequest.post("/orders",{
                    userId: currentUser._id,
                    products: cart.products.map(item => ({
                        productId: item._id,
                        quantity: item.quantity
                    })),
                    amount: cart.total,
                    address: data.billing_details.address

                })
             console.log(res.data._id)
                serOrderId(res.data._id)
            }
          data &&  createOrder()
        }catch (e) {}
    },[cart, data, currentUser])

    return <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
        <Link to="/">
            <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </Link>

    </div>
}

export default Success

//   useEffect(() => {
//     const createOrder = async () => {
//       try {
//         const res = await userRequest.post("/orders", {
//           userId: currentUser._id,
//           products: cart.products.map((item) => ({
//             productId: item._id,
//             quantity: item._quantity,
//           })),
//           amount: cart.total,
//           address: data.billing_details.address,
//         });
//         setOrderId(res.data._id);
//       } catch {}
//     };
//     data && createOrder();
//   }, [cart, data, currentUser]);
//
//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {orderId
//         ? `Order has been created successfully. Your order number is ${orderId}`
//         : `Successfull. Your order is being prepared...`}
//       <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
//     </div>
//   );
// };