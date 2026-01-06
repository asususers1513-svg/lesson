import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'





export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-white text-[#1d1d1f]">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <img src="/logo.svg" className="h-6" />
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a className="">Home</a>
          <a>Features</a>
          <a>Pricing</a>
          <a>Blog</a>
        </nav>
        <button className="bg-orange-500 text-white px-5 py-2 ">
          Get Started
        </button>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-20 py-24">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Grow your <br /> subscription <br /> business
          </h1>
          <p className="mt-6 text-gray-500 max-w-md">
            Outcome-centered products that reduce churn, optimize pricing, and
            grow your subscription business end-to-end.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button className="bg-indigo-600 text-white px-6 py-3">
              Get Started
            </button>

          </div>
        </div>

        <img
          src="skate.png" className="w-full"  />
      </section>

      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-16">
        <img src="/Group.svg"/>
        <img src="/Group (1).svg" />
        <img src="/Group (2).svg" />
        <img src="/Group (3).svg" />
        <img src="/Group (4).svg" />

      </div>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center py-28">
        <img src="/Content Image 02.png" className="w-72 mx-auto" />
        <div>
          <h2 className="text-3xl font-bold">Subscription index</h2>
          <p className="mt-4 text-gray-500 max-w-md">
            A daily dataset to keep you up to date on subscription market trends
            and what's happening in your vertical.
          </p>
          <a className=" mt-4 inline-block">Learn more</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center py-28">
        <div>
          <h2 className="text-3xl font-bold">In-depth metrics</h2>
          <p className="mt-4 text-gray-500 max-w-md">
            Accurate, real-time reporting at your fingertips.
          </p>
          <a className=" mt-4 inline-block">Learn more</a>
        </div>
        <img src="/boboy.png" className="w-72 mx-auto" />
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 py-28 text-center">
        <div>
          <img src="/Icon 001.png" className="mx-auto mb-6" />
          <h3 className="font-semibold">Benchmarks</h3>
          <p className="text-sm text-gray-500 mt-2">
            Compare performance with similar companies.
          </p>
        </div>
        <div>
          <img src="/Calculator.png" className="mx-auto mb-6" />
          <h3 className="font-semibold">Pricing Audit</h3>
          <p className="text-sm text-gray-500 mt-2">
            Improve monetization strategy.
          </p>
        </div>
        <div>
          <img src="/Icon 003.png" className="mx-auto mb-6" />
          <h3 className="font-semibold">Retention Audit</h3>
          <p className="text-sm text-gray-500 mt-2">
            Reduce churn and increase retention.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl ">
              Get the right plan <br /> for future product.
            </h2>
            <div className="bg-white flex">
              <button className="px-5 py-2 bg-indigo-600 text-white">
                Yearly
              </button>
              <button className="px-5 py-2 text-gray-600">
                Monthly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white  p-10 text-center">
              <div className="text-gray-500">Starter</div>
              <div className="text-3xl mt-4">Free</div>
              <button className="mt-8 ">Get Started</button>
            </div>

            <div className="bg-orange-600 ] p-10 text-center text-white mt-1">
              <div>Premium</div>
              <div className="text-3xl mt-4">$29/month</div>
              <button className="mt-8 bg-orange-700 px-6 py-2 ">
                Get Started
              </button>
            </div>

            <div className="bg-white  p-10 text-center">
              <div className="text-gray-500">Enterprise</div>
              <div className="text-3xl mt-4">$49/month</div>
              <button className="mt-8 ">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

