 export const getOrders = async ()=>{
    try{
       const response = await fetch("http://localhost:8080/orders")
       const orders = await response.json()
       return orders
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
