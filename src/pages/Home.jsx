import React, { useEffect, useState } from 'react'
import imgSource from '../img/hero-pizza.png'
import Menu from '../components/Menu';
const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const fetchPizzas = async () => {
        try {
            const response = await fetch('https://pizza-mania-23rd.onrender.com/api/v1/auth');
            const data = await response.json();
            setPizzas(data.pizzas)

        } catch (error) {
            console.error('Error fetching pizzas:', error);
        }
    }
    useEffect(() => {
        fetchPizzas()
    }, [])
    return (
        <div>
            <div className="hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Are you hungry?</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary">Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img src={imgSource} />
                    </div>
                </div>
            </div>
            <section className="menu container mx-auto py-8">
                <h1 className="text-xl font-bold mb-8">All Pizzas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16">
                    {
                        pizzas.map((pizza) => {
                            return <Menu key={pizza._id} pizza={pizza} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Home