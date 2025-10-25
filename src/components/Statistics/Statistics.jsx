import React from 'react'

const Statistics = ({
  stats = [
    {
      number: '546+',
      label: 'Registered Riders'
    },
    {
      number: '789,900+',
      label: 'Orders Delivered'
    },
    {
      number: '690+',
      label: 'Restaurants Partnered'
    },
    {
      number: '17,457+',
      label: 'Food Items'
    }
  ],
  bgColor = 'bg-orange-500',
  borderColor = 'border-orange-400',
  textColor = 'text-white'
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4">
        <div className={`${bgColor} rounded-2xl py-8 px-6 md:px-12`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${
                  index < stats.length - 1 ? `md:border-r ${borderColor}` : ''
                }`}
              >
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-2`}>
                  {stat.number}
                </h3>
                <p className={`${textColor} text-sm md:text-base font-medium`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics