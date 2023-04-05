import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Logo = ()=>{
    return(
        <Image
            src="/images/annoybot.jpeg"
            height={144}
            width={144}
            alt="annoybot"
        />
    )
}


export default function Main(){
    return(
        <>
        <Head>
          <title>Main</title>
        </Head>
        <main>
            
          <h1>Main</h1>
          <Logo/>
        </main>
        </>
    )
}