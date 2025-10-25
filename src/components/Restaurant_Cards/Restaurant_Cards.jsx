import React from 'react'
import res1 from '../../assets/images/res1.svg'
import res2 from '../../assets/images/res2.svg'
import res3 from '../../assets/images/res3.svg'
import res4 from '../../assets/images/res4.svg'
import res5 from '../../assets/images/res5.svg'
import res6 from '../../assets/images/res6.svg'

const Restaurant_Cards = () => {
  const restaurants = [
    {
      image: res1,
      name: "McDonald's London"
    },
    {
      image: res2,
      name: 'Papa Johns'
    },
    {
      image: res3,
      name: 'KFC West London'
    },
    {
      image: res4,
      name: 'Texas Chicken'
    },
    {
      image: res5,
      name: 'Burger King'
    },
    {
      image: res6,
      name: 'Shaurma 1'
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Popular Restaurants
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-orange-500 text-white p-4 text-center">
                <h3 className="font-bold text-sm md:text-base">
                  {restaurant.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Restaurant_Cards