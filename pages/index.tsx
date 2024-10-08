import Head from 'next/head'
import { Coda, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useContext, useReducer, useState } from 'react'
import Products from '@/utils/data'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'
import { CartFunctionality, State, Statecontext } from '@/utils/Store'
import { ProductType } from '@/type/types'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { state, dispatch } = useContext(Statecontext)

  const AddtoCart = (ObjectToSend: ProductType) => {

    const SendItemOrQuantity = state.Cart.cartItems.find((x: ProductType) => x.slug === ObjectToSend.slug)

    const SendingQuantity = SendItemOrQuantity ? SendItemOrQuantity.quantity + 1 : 1;

    dispatch({
      type: "Add_To_Cart",
      payload: {
        ...ObjectToSend,
        quantity: SendingQuantity,
      }
    })

  }

  const ReducefromCart = (ObjectToSend: ProductType) => {

    const SendItemOrQuantity = state.Cart.cartItems.find((x: ProductType) => x.slug === ObjectToSend.slug)

    const SendingQuantity = SendItemOrQuantity
      ? (SendItemOrQuantity.quantity >= 1) ? SendItemOrQuantity.quantity - 1 : 0
      : 0;

    dispatch({
      type: "ReducefromCar",
      payload: {
        ...ObjectToSend,
        quantity: SendingQuantity,
      }
    })

  }

  useEffect(() => {
    console.log('Cart state:', JSON.stringify(state.Cart));
  }, [state.Cart]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Navbar />
      </Head>
      <main className={styles.main}>
        {/* Code for cards */}
        {Products.map((x) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={x.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {x.price}</p>
              <a onClick={() => { AddtoCart(x) }} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                +
              </a>
              <span>{state.Cart.cartItems.find((x1: ProductType) => x1.slug === x.slug)?.quantity || 0}</span>
              <a onClick={() => { ReducefromCart(x) }} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                -
              </a>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}
