import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">SaaS App</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/dashboard/profile" className="hover:text-blue-400">
            Profile
          </Link>
          <Link href="/dashboard/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>

        {/* Page content goes here */}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}