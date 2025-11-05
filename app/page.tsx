'use client'

import { useAppKit } from '@reown/appkit/react'
import { useAppKitAccount } from '@reown/appkit/react'
import { useAccount } from 'wagmi'

export default function Home() {
  const { open } = useAppKit()
  const { isConnected: appkitConnected } = useAppKitAccount()
  const { isConnected: wagmiConnected } = useAccount()
  const isConnected = appkitConnected || wagmiConnected

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ANYWORK
              </span>
            </div>
            <button
              onClick={() => open()}
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Connect with Verified
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                Artisans & Skilled Workers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              The trusted digital marketplace eliminating uncertainty. Where skilled professionals are showcased, verified, and hired directly across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => open()}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold text-lg border-2 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-slate-600 dark:text-slate-300">Verified Artisans</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-slate-600 dark:text-slate-300">Successful Hires</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-300">Trust & Transparency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Why Choose ANYWORK?
          </h2>
          <p className="text-xl text-center text-slate-600 dark:text-slate-300 mb-16">
            Built for transparency, reliability, and flexible payments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Verified Professionals</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Every artisan and skilled worker is thoroughly verified and background-checked for your peace of mind.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Flexible Payments</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Pay securely with traditional methods or cryptocurrencies. Your choice, your convenience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Direct Hiring</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Skip the referrals. Connect directly with skilled professionals and streamline your hiring process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Trusted Network</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Join thousands of clients and artisans building trust in Africa&apos;s service economy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Transparent Pricing</h3>
              <p className="text-slate-600 dark:text-slate-300">
                No hidden fees, no surprises. Clear, upfront pricing for all services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Africa-Wide</h3>
              <p className="text-slate-600 dark:text-slate-300">
                The go-to platform across Africa for connecting skilled professionals with opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join ANYWORK today and experience the future of hiring skilled professionals in Africa.
            </p>
            <button
              onClick={() => open()}
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Connect Your Wallet
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">ANYWORK</span>
            </div>
            <p className="text-slate-400">
              © 2024 ANYWORK. Empowering Africa&apos;s skilled workforce.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
