import back2 from '../assets/images/Back1.jpg';
import Foot from './Foot';

export default function Logs() {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${back2})` }}>
      <div className="backdrop-blur-sm min-h-screen flex flex-col">
        <div className="flex-grow">
          <p className="text-center font-bold text-2xl pt-8 font-sans text-green-500">Downtimes Logs</p>
          <div className="relative mx-4 my-10 overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-lime-200 dark:text-black">
                <tr>
                  <th scope="col" className="px-6 py-3">URL Status</th>
                  <th scope="col" className="px-6 py-3">Start At</th>
                  <th scope="col" className="px-6 py-3">End At</th>
                  <th scope="col" className="px-6 py-3">Duration</th>
                  <th scope="col" className="px-6 py-3">HTTP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-lime-200">
                    http://example.com
                  </th>
                  <td className="px-6 py-4">2020-08-08 06:46:07</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-lime-200">2020-08-08 06:49:06</td>
                  <td className="px-6 py-4">2min, 59s</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-lime-200">503</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-lime-200">
                    http://another-example.com
                  </th>
                  <td className="px-6 py-4">2020-08-01 05:02:01</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-lime-200">2020-08-01 05:22:43</td>
                  <td className="px-6 py-4">20min, 42s</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-lime-200">404</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <Foot />
      </div>
    </div>
  );
}
