import Foot from './Foot';
import back2 from '../assets/images/Back1.jpg'

export default function Dashboard() {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${back2})` }}>
      <div className="backdrop-blur-sm min-h-screen flex flex-col">
        <div className="mx-auto max-w-7xl py-10 lg:px-2 flex-grow">
          <div className="rounded-3xl overflow-hidden sm:mt-2">
            <div className="sm:p-5 lg:flex lg:flex-col lg:items-center">
              {/* Search Bar */}
              <div className="max-w-3xl mx-auto mb-6">
                <div className="relative flex items-center w-full h-10 ring-1 ring-gray-400 rounded-full focus-within:shadow-xl bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.." />
                </div>
              </div>

              {/* Table */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-lime-400 dark:text-black">
                    <tr>
                      <th scope="col" className="px-6 py-3">URL</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Mail</th>
                      <th scope="col" className="px-6 py-3">SMS</th>
                      <th scope="col" className="px-6 py-3">View Status</th>
                      <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        http//test.com
                      </th>
                      <td className="px-6 py-4">Up</td>
                      <td className="px-6 py-4">Active</td>
                      <td className="px-6 py-4">Non-Active</td>
                      <td></td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                    {/* Add real data or handle empty rows */}
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No data available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Foot />
      </div>
    </div>
  )
}
