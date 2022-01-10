import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { Form } from '../components/Form';
import { Partner } from '../components/Partner'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Slider/>
      <Form />
   
   
    </>
  );
}
