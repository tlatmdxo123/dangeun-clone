export const redirect = (destination:string) => {
    return {
            redirect:{
                destination,
                permanent: false,
            }
        }
}