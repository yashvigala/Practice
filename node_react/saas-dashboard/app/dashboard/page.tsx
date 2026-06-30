async function getStats() {
  const res = await fetch("https://dummyjson.com/users?limit=5");
  const data = await res.json();
  return data;
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default async function DashboardPage() {
  const data = await getStats();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Users" value={data.total} />
        <StatCard title="Loaded" value={data.users.length} />
        <StatCard title="Revenue" value="$12,400" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Recent Users</h3>
        <ul className="flex flex-col gap-2">
          {data.users.map((user: any) => (
            <li key={user.id} className="border-b pb-2">
              {user.firstName} {user.lastName} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}