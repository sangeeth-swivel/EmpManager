import type { NextPage } from 'next'
import Router from "next/router";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react';

const Home: NextPage = () => {
  
  useEffect(() => {
    Router.push("/employee/list");
  }, [])
  
  return (
    <></>
  )
}

export default Home