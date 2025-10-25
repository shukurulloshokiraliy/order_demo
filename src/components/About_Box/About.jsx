import React, { useState } from 'react'
import box_img1 from '../../assets/images/box_img1.svg'
import box_img2 from '../../assets/images/box_img2.svg'
import box_img3 from '../../assets/images/box_img3.svg'

const About = () => {
  const [activeTab, setActiveTab] = useState('Frequent Questions')

  const tabs = ['Frequent Questions', 'Who we are?', 'Partner Program', 'Help & Support']

  const questions = [
    'How does Order.UK work?',
    'What payment methods are accepted?',
    'Can I track my order in real-time?',
    'Are there any special discounts or promotions available?',
    'Is Order.UK available in my area?'
  ]

  const features = [
    {
      image: box_img1,
      title: 'Place an Order!',
      description: 'Place order through our website or Mobile app'
    },
    {
      image: box_img2,
      title: 'Track Progress',
      description: 'Your can track your order status with delivery time'
    },
    {
      image: box_img3,
      title: 'Get your Order!',
      description: 'Receive your order at a lighting fast speed!'
    }
  ]

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Know more about us!
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {questions.map((question, index) => (
                <button
                  key={index}
                  className={`text-left px-6 font-medium transition-colors ${
                    index === 0
                      ? 'bg-orange-500 text-white'
                      : 'text-white hover:bg-slate-800'
                  }`}
                  style={{
                    width: '346px',
                    height: '62px',
                    borderRadius: '120px'
                  }}
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center"
                  >
                    <div className="mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-20 h-20 mx-auto"
                      />
                    </div>
                    <h3 className="font-bold text-sm mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center text-white text-sm leading-relaxed">
                <p>
                  Order.UK simplifies the food ordering process. Browse through our diverse menu, 
                  select your favorite dishes, and proceed to checkout. Your delicious meal will be 
                  on its way to your doorstep in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About