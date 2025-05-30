import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PrimeEdge - Gaming Performance Optimization</title>
        <meta name="description" content="AI-powered optimization tool for EGM floors. Visualize performance, simulate changes, and receive data-backed recommendations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">PrimeEdge</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/features" className="text-gray-700 hover:text-gray-900">Features</a>
              <a href="/documentation" className="text-gray-700 hover:text-gray-900">Documentation</a>
              <a href="/insights" className="text-gray-700 hover:text-gray-900">Insights</a>
              <a href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Login
              </a>
              <a href="/contact" className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Involv PrimeEdge
            </h1>
            <p className="text-xl mb-4 font-medium">
              The science behind high-performance gaming venues.
            </p>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              An AI-powered optimization tool for EGM floors. Visualize performance, simulate changes, and receive data-backed recommendations that drive revenue.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/login" className="bg-white text-green-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Login to PrimeEdge
              </a>
              <a href="/contact" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-green-600 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Proven Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15%</div>
                <p className="text-gray-600">Average revenue increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600">Real-time monitoring</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600">Prediction accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to optimize your gaming floor?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join venues across Australia using data-driven insights to maximize their gaming performance.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/login" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
                Login
              </a>
              <a href="/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <span className="text-xl font-bold text-green-600 mb-4 block">PrimeEdge</span>
                <p className="text-gray-600 text-sm">
                  AI-powered optimization tool for EGM floors.
                </p>
                <p className="text-gray-500 text-xs mt-4">
                  Part of the Involv family
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/features" className="hover:text-gray-900">Features</a></li>
                  <li><a href="/documentation" className="hover:text-gray-900">Documentation</a></li>
                  <li><a href="/faqs" className="hover:text-gray-900">FAQs</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/insights" className="hover:text-gray-900">Insights</a></li>
                  <li><a href="/case-studies" className="hover:text-gray-900">Case Studies</a></li>
                  <li><a href="/contact" className="hover:text-gray-900">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Involv</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://involv.com.au" className="hover:text-gray-900">Main Site</a></li>
                  <li><a href="https://assure.involv.com.au" className="hover:text-gray-900">Assure</a></li>
                  <li><a href="https://lane.involv.com.au" className="hover:text-gray-900">Lane Consulting</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2025 Involv. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</a>
                <a href="/terms-of-use" className="hover:text-gray-700">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

const features = [
  {
    title: 'Floor Visualization',
    description: 'Interactive 3D mapping of your gaming floor with real-time performance data overlay and machine-level insights.',
  },
  {
    title: 'Performance Analytics',
    description: 'Advanced analytics dashboard showing revenue per machine, player engagement metrics, and trend analysis.',
  },
  {
    title: 'AI Recommendations',
    description: 'Machine learning algorithms provide data-backed recommendations for machine placement and floor optimization.',
  },
  {
    title: 'Revenue Forecasting',
    description: 'Predictive models forecast revenue potential based on historical data and market trends.',
  },
  {
    title: 'Real-time Monitoring',
    description: 'Live monitoring of machine performance, player patterns, and revenue generation across your entire floor.',
  },
  {
    title: 'Optimization Simulation',
    description: 'Test different floor layouts and machine configurations before implementation with powerful simulation tools.',
  },
]