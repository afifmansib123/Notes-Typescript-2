import Head from 'next/head'
import Image from 'next/image'
import { Coda, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { CardType } from '@/type/types'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [coffee, changecoffee] = useState([])

  useEffect(()=>{
    const fetchdata = async() => {
    const response = await fetch("https://api.sampleapis.com/coffee/hot")
    if(!response){
      console.log('error fetching')
    }
    const coffee = await response.json()
    changecoffee(coffee)
    }
    fetchdata()
  },[])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {coffee.map((x : CardType)=>( 
        <h1 className="text-3xl font-bold underline">
          <Card {...x}/>
        </h1>
        ))}
      </main>
    </>
  )
}
