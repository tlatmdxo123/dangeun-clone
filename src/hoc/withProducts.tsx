import { NextPage, NextPageContext } from 'next';
import React from 'react';


function withProducts<T>(Compoenent:NextPage<T>){
    const hoc:NextPage = (props:any ) => <Compoenent {...props}/>;

    hoc.getInitialProps = async (ctx:NextPageContext) => {
      const comprops = Compoenent.getInitialProps ? await (Compoenent.getInitialProps(ctx)) : {}
      const products = await fetch(
        "http://localhost:3000/api/product"
      ).then((res) => res.json());
      return { ...comprops,products }
    };

    return hoc;
}



export default withProducts;