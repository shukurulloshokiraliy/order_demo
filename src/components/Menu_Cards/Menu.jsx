import React from 'react'
import food1 from '../../assets/images/food1.svg'
import food2 from '../../assets/images/food2.svg'
import food3 from '../../assets/images/food3.svg'
import food4 from '../../assets/images/food4.svg'
import food5 from '../../assets/images/food5.svg'
import food6 from '../../assets/images/food6.svg'

const Menu = ({
  title = "Order.uk Popular Categories 🍕",
  categories = [
    {
      image: food1,
      title: 'Burgers & Fast food',
      restaurants: 21
    },
    {
      image: food2,
      title: 'Salads',
      restaurants: 32
    },
    {
      image: food3,
      title: 'Pasta & Casuals',
      restaurants: 4
    },
    {
      image: food4,
      title: 'Pizza',
      restaurants: 32
    },
    {
      image: food5,
      title: 'Breakfast',
      restaurants: 4
    },
    {
      image: food6,
      title: 'Soups',
      restaurants: 32
    }
  ],
  onCategoryClick = () => {}
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => onCategoryClick(category)}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-slate-900 text-white p-4 text-center">
                <h3 className="font-bold text-sm md:text-base mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {category.restaurants} Restaurants
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu