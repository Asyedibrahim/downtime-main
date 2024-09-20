import { useEffect, useState } from 'react';
import back2 from '../assets/images/Back1.jpg';
import Foot from './Foot';

export default function Logs() {

  const [urlLogs, setUrlLogs] = useState([]);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/website/checkStatus');
        const data = await res.json();
        if (res.ok) {
          setUrlLogs(data);
        } else {
          console.error('Failed to fetch URL statuses:', data);
        }
      } catch (error) {
        console.error('Error fetching URL statuses:', error);
      }
    };

    fetchStatus();

    const interval = setInterval(fetchStatus, 1800000);
    return () => clearInterval(interval);
  }, []);

  const downUrls = urlLogs.filter((log) => log.status.toLowerCase() === 'down')
  
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${back2})` }}>
      <div className="backdrop-blur-sm min-h-screen flex flex-col">
        <div className="flex-grow">
          <p className="text-center font-bold text-2xl pt-8 font-sans text-green-500">Downtimes Logs</p>
          <div className="relative mx-4 my-10 overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-lime-200 dark:text-black">
                <tr>
                  <th scope="col" className="px-6 py-3">URL</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Checked At</th>
                  <th scope="col" className="px-6 py-3">HTTP</th>
                </tr>
              </thead>
              <tbody>
                {downUrls.length > 0 ? (
                  downUrls.map((log, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <a href={log.url} target='_blank' rel="noopener noreferrer">{log.url}</a>
                      </th>
                      <td className="px-6 py-4">{log.status}</td>
                      <td className="px-6 py-4">{log.startAt}</td>
                      <td className="px-6 py-4">{log.httpCode}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-6 py-4 text-center" colSpan="6">No logs available!!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Foot />
      </div>
    </div>
  );
}
