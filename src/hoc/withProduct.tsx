import { NextPage, NextPageContext } from "next";

function withProduct<T>(Component:NextPage<T>){
    const hoc:NextPage = (props:any) => <Component {...props}/>

    hoc.getInitialProps = async (ctx:NextPageContext) => {
        const comprops = Component.getInitialProps ? await (Component.getInitialProps(ctx)) : {}
        const productId = ctx.query.id
        const product = await fetch(`http://localhost:3000/api/product/${productId}`)
            .then(res => res.json())

        return {...comprops,product}
    }

    return hoc
}

export default withProduct

