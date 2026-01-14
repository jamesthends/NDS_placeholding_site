import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Download, RefreshCw, Lock } from 'lucide-react';

interface Registration {
  id: string;
  name: string;
  email: string;
  interest_area: string;
  created_at: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'kyhwa4-W4xkuq';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      fetchRegistrations();
    } else {
      setError('Incorrect password');
    }
  };

  const fetchRegistrations = async () => {
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('interest_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch registrations');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Interest Area', 'Registration Date'];
    const rows = registrations.map(reg => [
      reg.name,
      reg.email,
      reg.interest_area,
      new Date(reg.created_at).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `registrations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-gray-600 text-center mb-6">Enter password to view registrations</p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Contact your administrator if you need access
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Registration Dashboard</h1>
              <p className="text-gray-600 mt-1">View and manage interest form submissions</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchRegistrations}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={exportToCSV}
                disabled={registrations.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-900 font-medium">
              Total Registrations: <span className="text-2xl ml-2">{registrations.length}</span>
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-900">{error}</p>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading registrations...</p>
            </div>
          ) : registrations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No registrations yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Interest Area</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr
                      key={reg.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="py-3 px-4">{reg.name}</td>
                      <td className="py-3 px-4">
                        <a href={`mailto:${reg.email}`} className="text-blue-600 hover:underline">
                          {reg.email}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {reg.interest_area}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600 text-sm">
                        {new Date(reg.created_at).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to main site
          </a>
        </div>
      </div>
    </div>
  );
}
