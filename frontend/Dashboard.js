export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <p>Welcome to GetKhojo Platform</p>

      <a href="/api/ppt/download" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block">
        Download PPT
      </a>

      <a href="/api/excel/download" className="bg-green-500 text-white px-4 py-2 mt-4 ml-3 inline-block">
        Download Excel
      </a>
    </div>
  );
}
