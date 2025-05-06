import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function Dashboard() {
  const [email, setEmail] = useState('')

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(14, 165, 233)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$45,231</p>
          <p className="mt-1 text-sm text-green-600">+20.1% from last month</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">2,342</p>
          <p className="mt-1 text-sm text-green-600">+15% from last month</p>
        </div>
        {/* Add more stat cards as needed */}
      </div>

      {/* Chart Section */}
      <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sales Overview</h3>
        <div className="mt-6">
          <Line data={chartData} />
        </div>
      </div>

      {/* Form Section */}
      <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Newsletter Signup</h3>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-primary mt-1"
              placeholder="you@example.com"
            />
          </div>
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
} 