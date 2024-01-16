import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';
import EmptyGif from '../assets/empty-cart1.gif';
import GooglePayButton from '@google-pay/button-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const Cart = () => {

    const productCartItem = useSelector((state: any) => state.product.cartItem)
    console.log(productCartItem);

    // /get t0toal price
    const totalPrice = productCartItem.reduce((acc: any, curr: any) => acc + parseInt(curr.total), 0)
    //get qty
    const totalQty = productCartItem.reduce((acc: any, curr: any) => acc + parseInt(curr.qty), 0)

    const OrderHandler = async (e: any) => {
        e.preventDefault();
        fetch("http://localhost:8080/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                totalQty: totalQty,
                totalPrice: totalPrice,
                productCartItem: productCartItem
            })
        })
            .then((res: any) => {
                console.log(res);
            })
            .then((err)=>{
                console.log(err);
            })
    };



    return (

        <>


            <div className="p-2 md:p-4">
                <h2 className="text-lg md:text-2xl font-bold text-slate-800 font-mono">Your Cart Items 🛒</h2>

                {/* calculate items */}

                {
                    // if product exist it show cart else it didnt show cart
                    productCartItem[0] ?

                        <div className="my-2 gap-3 flex">
                            {/* display cart items */}
                            <div className="w-full max-w-3xl ">
                                {
                                    productCartItem.map((el: any) => {
                                        return (
                                            <CartProduct
                                                key={el._id}
                                                id={el._id}
                                                image={el.image}
                                                name={el.name}
                                                price={el.price}
                                                category={el.category}
                                                qty={el.qty}
                                                total={el.total}
                                            />
                                        )
                                    })
                                }
                            </div>

                            {/* total cart items */}
                            <div className="w-full max-w-md bg-slate-400 ml-auto">
                                <h2 className="bg-blue-600 text-white p-2 text-lg ">Summery</h2>
                                <div className="flex w-full py-2 text-lg border-b">
                                    <p>Total Qty</p>
                                    <p className="ml-auto w-24 font-bold">{totalQty}</p>
                                </div>

                                <div className="flex w-full py-2 text-lg border-b">
                                    <p>Total Price</p>
                                    <p className="ml-auto w-24 font-bold"> <span className="text-red-500">Rs. </span>{totalPrice}</p>
                                </div>

                                <button className="bg-red-600 w-full text-lg font-mono py-2 text-white "
                                    onClick={OrderHandler}
                                >Payment
                                </button>




                                <div className="flex justify-center items-start gap-3 m-3">
                                    <GooglePayButton
                                        environment='TEST'
                                        paymentRequest={{
                                            apiVersion: 2,
                                            apiVersionMinor: 0,
                                            allowedPaymentMethods: [
                                                {
                                                    type: 'CARD',
                                                    parameters: {
                                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                    },
                                                    tokenizationSpecification: {
                                                        type: 'PAYMENT_GATEWAY',
                                                        parameters: {
                                                            gateway: 'example',
                                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                                        },
                                                    },
                                                },
                                            ],
                                            merchantInfo: {
                                                merchantId: '12345678901234567890',
                                                merchantName: 'Demo Merchant',
                                            },
                                            transactionInfo: {
                                                totalPriceStatus: 'FINAL',
                                                totalPriceLabel: 'Total',
                                                totalPrice: '' + totalPrice,
                                                currencyCode: 'LKR',
                                                countryCode: 'LK',
                                            },
                                            shippingAddressRequired: true,
                                            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                                        }}
                                        onLoadPaymentData={paymentRequest => {
                                            console.log('Success', paymentRequest);

                                        }}
                                        onPaymentAuthorized={paymentData => {
                                            console.log('Payment Authorised Success', paymentData);
                                            return { transactionState: 'SUCCESS' }

                                        }}
                                        onPaymentDataChanged={paymentData => {
                                            console.log(' on Payment Data Changed', paymentData);
                                            return {}

                                        }}

                                        // existingPaymentMethodRequired='false'
                                        buttonColor='black'
                                        buttonType='buy'
                                    />
                                </div>



                            </div>

                        </div>
                        :
                        <>
                            <div className="flex justify-center items-center m-40 flex-col">
                                <img src={EmptyGif} alt="" className="bg-slate-400 w-full max-w-sm" />
                                <p className="text-slate-700 text-4xl font-mono">Cart is Empty </p>
                            </div>
                        </>
                }
            </div>
            <Footer />
        </>
    )
}

export default Cart;