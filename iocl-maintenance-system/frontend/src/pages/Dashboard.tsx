// src/pages/Dashboard.tsx

import { Activity, AlertTriangle, Power, Gauge } from "lucide-react";
import { useEffect, useState } from "react";
import PumpCard from "../components/dashboard/PumpCard";
import { getPumps } from "../services/pumps";
import { predictFailure } from "../services/predict";

type Pump = {
  id: number;
  pump_name: string;
  temperature: number;
  pressure: number;
  status: string;
};

const Dashboard = () => {
  const [pumps, setPumps] = useState<Pump[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch pumps from backend
  useEffect(() => {
    getPumps()
      .then((data) => {
        setPumps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pumps:", err);
        setLoading(false);
      });
  }, []);

  // 🔹 Stats (calculated from backend data)
  const total = pumps.length;
  const active = pumps.filter((p) => p.status === "Running").length;
  const maintenance = pumps.filter((p) => p.status === "Maintenance").length;
  const offline = pumps.filter((p) => p.status === "Failure").length;

  const stats = [
    {
      title: "Total Pumps",
      value: total,
      icon: Gauge,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      percentage: 100,
      trend: "stable" as const,
    },
    {
      title: "Running",
      value: active,
      icon: Activity,
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
      percentage: total ? Math.round((active / total) * 100) : 0,
      trend: "up" as const,
    },
    {
      title: "Maintenance",
      value: maintenance,
      icon: AlertTriangle,
      color: "from-amber-500 to-amber-600",
      textColor: "text-amber-600",
      percentage: total ? Math.round((maintenance / total) * 100) : 0,
      trend: "stable" as const,
    },
    {
      title: "Failure",
      value: offline,
      icon: Power,
      color: "from-red-500 to-red-600",
      textColor: "text-red-600",
      percentage: total ? Math.round((offline / total) * 100) : 0,
      trend: "down" as const,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running":
        return "bg-green-100 text-green-800 border-green-200";
      case "Maintenance":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Failure":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading pumps...</div>;
  }

  return (
    <div className="space-y-6">
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <PumpCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                color={stat.color}
                percentage={stat.percentage}
                trend={stat.trend}
                icon={<Icon className={`w-6 h-6 ${stat.textColor}`} />}
              />
            );
          })}
        </div>
      }
      {/* 🔹 Pump Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Pump Details</h2>
          <p className="text-sm text-gray-500 mt-1">
            Data coming live from backend database
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pumps.map((pump) => (
              <div
                key={pump.id}
                className="bg-gradient-to-br from-gray-50 to-white p-5 border border-gray-200 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {pump.pump_name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                      pump.status
                    )}`}
                  >
                    {pump.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Temperature</span>
                    <span className="font-medium">{pump.temperature} °C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pressure</span>
                    <span className="font-medium">{pump.pressure} PSI</span>
                  </div>

                  <button
                    className="mt-3 w-full text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    onClick={async () => {
                      const res = await predictFailure(pump);
                      alert(`Failure Risk: ${res.risk}`);
                    }}
                  >
                    Predict Failure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
