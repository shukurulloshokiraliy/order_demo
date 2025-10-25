import React from 'react'
import burgerjpg from '../../assets/images/burger.jpg'
import grandjpg from '../../assets/images/grand.jpg'
import buterbrodjpg from '../../assets/images/buterbrod.jpg'

const Sales = ({
  title = "Up to -40% 🎊 Order.uk exclusive deals",
  categories = ['Vegan', 'Sushi', 'Pizza & Fast food', 'others'],
  activeCategory = 'Pizza & Fast food',
  deals = [
    {
      image: burgerjpg,
      discount: '-40%',
      restaurant: 'Chef Burgers London'
    },
    {
      image: grandjpg,
      discount: '-20%',
      restaurant: 'Grand Ai Cafe London'
    },
    {
      image: buterbrodjpg,
      discount: '-17%',
      restaurant: 'Butterbrot Cafe London'
    }
  ],
  onCategoryClick = () => {},
  onDealClick = () => {}
}) => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => onCategoryClick(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === activeCategory
                    ? 'text-orange-500 border-2 border-orange-500'
                    : 'text-gray-700 border-2 border-transparent hover:border-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              onClick={() => onDealClick(deal)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={deal.image}
                alt={deal.restaurant}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute top-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-lg">
                {deal.discount}
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-orange-400 text-sm font-medium mb-1">Restaurant</p>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {deal.restaurant}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sales