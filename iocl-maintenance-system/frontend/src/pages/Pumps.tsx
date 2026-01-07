// src/pages/Pumps.tsx

const Pumps = () => {
  const pumps = [
    {
      name: "Pump A",
      status: "Active",
      location: "Sector 1",
      lastService: "2025-12-01",
      pressure: "120 PSI",
    },
    {
      name: "Pump B",
      status: "Maintenance",
      location: "Sector 3",
      lastService: "2025-11-20",
      pressure: "100 PSI",
    },
    {
      name: "Pump C",
      status: "Offline",
      location: "Sector 5",
      lastService: "2025-10-15",
      pressure: "200 PSI",
    },
    {
      name: "Pump D",
      status: "Active",
      location: "Sector 2",
      lastService: "2025-12-10",
      pressure: "110 PSI",
    },
    {
      name: "Pump E",
      status: "Active",
      location: "Sector 4",
      lastService: "2025-11-30",
      pressure: "130 PSI",
    },
    {
      name: "Pump F",
      status: "Maintenance",
      location: "Sector 6",
      lastService: "2025-12-05",
      pressure: "115 PSI",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Pumps</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-3">Pump</th>
              <th className="p-3">Status</th>
              <th className="p-3">Location</th>
              <th className="p-3">Last Service</th>
              <th className="p-3">Pressure</th>
            </tr>
          </thead>
          <tbody>
            {pumps.map((pump) => (
              <tr key={pump.name} className="border-t hover:bg-gray-500">
                <td className="p-3 font-medium">{pump.name}</td>
                <td className="p-3">{pump.status}</td>
                <td className="p-3">{pump.location}</td>
                <td className="p-3">{pump.lastService}</td>
                <td className="p-3">{pump.pressure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pumps;
