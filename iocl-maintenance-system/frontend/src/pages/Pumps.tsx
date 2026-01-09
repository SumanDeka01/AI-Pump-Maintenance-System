// src/pages/Pumps.tsx

const Pumps = () => {
  const pumps = [
    {
      name: "(ID: 01) TK-101-TRF-P-01A",
      status: "Active",
      location: "Sector 1",
      lastService: "2025-12-01",
      pressure: "120 PSI",
    },
    {
      name: "(ID: 02) TK-101-TRF-P-01B",
      status: "Maintenance",
      location: "Sector 1",
      lastService: "2025-11-20",
      pressure: "100 PSI",
    },
    {
      name: "(ID: 03) TK-205-TRF-P-02A",
      status: "Offline",
      location: "Sector 5",
      lastService: "2025-10-15",
      pressure: "200 PSI",
    },
    {
      name: "(ID: 04) TK-205-TRF-P-02B",
      status: "Active",
      location: "Sector 5",
      lastService: "2025-12-10",
      pressure: "110 PSI",
    },
    {
      name: "(ID: 05) CDU-CPP-P-01A",
      status: "Active",
      location: "Sector 2",
      lastService: "2025-11-28",
      pressure: "150 PSI",
    },
    {
      name: "(ID: 06) CDU-CPP-P-01B",
      status: "Maintenance",
      location: "Sector 2",
      lastService: "2025-11-10",
      pressure: "145 PSI",
    },
    {
      name: "(ID: 07) VDU-CPP-P-02A",
      status: "Active",
      location: "Sector 4",
      lastService: "2025-12-05",
      pressure: "160 PSI",
    },
    {
      name: "(ID: 08) VDU-CPP-P-02B",
      status: "Offline",
      location: "Sector 4",
      lastService: "2025-10-02",
      pressure: "170 PSI",
    },
    {
      name: "(ID: 09) HSD-FDP-P-01A",
      status: "Active",
      location: "Sector 6",
      lastService: "2025-12-08",
      pressure: "130 PSI",
    },
    {
      name: "(ID: 10) HSD-FDP-P-01B",
      status: "Maintenance",
      location: "Sector 6",
      lastService: "2025-11-22",
      pressure: "125 PSI",
    },
    {
      name: "(ID: 11) MS-FDP-P-02A",
      status: "Active",
      location: "Sector 7",
      lastService: "2025-12-03",
      pressure: "135 PSI",
    },
    {
      name: "(ID: 12) MS-FDP-P-02B",
      status: "Offline",
      location: "Sector 7",
      lastService: "2025-09-18",
      pressure: "140 PSI",
    },
    {
      name: "(ID: 13) LPG-TRF-P-01A",
      status: "Active",
      location: "Sector 8",
      lastService: "2025-12-06",
      pressure: "180 PSI",
    },
    {
      name: "(ID: 14) LPG-TRF-P-01B",
      status: "Maintenance",
      location: "Sector 8",
      lastService: "2025-11-15",
      pressure: "175 PSI",
    },
    {
      name: "(ID: 15) UTL-CWP-P-01A",
      status: "Active",
      location: "Utility Area",
      lastService: "2025-12-01",
      pressure: "90 PSI",
    },
    {
      name: "(ID: 16) UTL-CWP-P-01B",
      status: "Active",
      location: "Utility Area",
      lastService: "2025-11-27",
      pressure: "92 PSI",
    },
    {
      name: "(ID: 17) UTL-FWP-P-02A",
      status: "Maintenance",
      location: "Fire Station",
      lastService: "2025-11-05",
      pressure: "210 PSI",
    },
    {
      name: "(ID: 18) PLN-BST-P-01A",
      status: "Active",
      location: "Pipeline Zone",
      lastService: "2025-12-04",
      pressure: "190 PSI",
    },
    {
      name: "(ID: 19) PLN-BST-P-01B",
      status: "Offline",
      location: "Pipeline Zone",
      lastService: "2025-10-01",
      pressure: "195 PSI",
    },
    {
      name: "(ID: 20) SLP-DRN-P-01A",
      status: "Active",
      location: "Slop Section",
      lastService: "2025-11-29",
      pressure: "85 PSI",
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
