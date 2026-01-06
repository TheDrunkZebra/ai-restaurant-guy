import React, { useState, useEffect } from 'react';

/**
 * Infrastructure Section - Manager Agent Dashboard
 * Headless dashboard showing live feed of ticket statuses
 * Refined color-coding with status badges
 */
const ManagerAgentDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTickets();
    const interval = setInterval(fetchTickets, 30000);
    return () => clearInterval(interval);
  }, [filter]);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const url = filter === 'all' 
        ? '/api/tickets' 
        : `/api/tickets?status=${filter}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }

      const data = await response.json();
      setTickets(data.tickets || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'new':
        return 'bg-blue-500 bg-opacity-20 text-blue-400 border-blue-500';
      case 'in-progress':
        return 'bg-yellow-500 bg-opacity-20 text-yellow-400 border-yellow-500';
      case 'escalated':
        return 'bg-red-500 bg-opacity-20 text-red-400 border-red-500';
      case 'resolved':
        return 'bg-green-500 bg-opacity-20 text-green-400 border-green-500';
      default:
        return 'bg-[#27272a] text-[#94A3B8] border-[#27272a]';
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'urgent':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-[#0B0F14]';
      case 'low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-[#27272a] text-[#94A3B8]';
    }
  };

  const statusCounts = tickets.reduce((acc, ticket) => {
    const status = ticket.status?.toLowerCase() || 'unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="py-20 bg-[#0B0F14] border-t border-[#27272a]" id="infrastructure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Infrastructure
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Live ticket status monitoring for consulting clients
            <br />
            <span className="text-[#E7C9A9] font-mono text-sm">Manager Agent • Autonomous Ticket Resolution</span>
          </p>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold font-mono transition-colors ${
              filter === 'all'
                ? 'bg-[#9EF01A] text-[#0B0F14]'
                : 'bg-[#1A1F2C] text-[#94A3B8] hover:bg-[#27272a] border border-[#27272a]'
            }`}
          >
            All ({tickets.length})
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-6 py-3 rounded-lg font-semibold font-mono transition-colors ${
              filter === 'new'
                ? 'bg-[#9EF01A] text-[#0B0F14]'
                : 'bg-[#1A1F2C] text-[#94A3B8] hover:bg-[#27272a] border border-[#27272a]'
            }`}
          >
            New ({statusCounts.new || 0})
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-6 py-3 rounded-lg font-semibold font-mono transition-colors ${
              filter === 'in-progress'
                ? 'bg-[#9EF01A] text-[#0B0F14]'
                : 'bg-[#1A1F2C] text-[#94A3B8] hover:bg-[#27272a] border border-[#27272a]'
            }`}
          >
            In-Progress ({statusCounts['in-progress'] || 0})
          </button>
          <button
            onClick={() => setFilter('escalated')}
            className={`px-6 py-3 rounded-lg font-semibold font-mono transition-colors ${
              filter === 'escalated'
                ? 'bg-[#9EF01A] text-[#0B0F14]'
                : 'bg-[#1A1F2C] text-[#94A3B8] hover:bg-[#27272a] border border-[#27272a]'
            }`}
          >
            Escalated ({statusCounts.escalated || 0})
          </button>
          <button
            onClick={() => setFilter('resolved')}
            className={`px-6 py-3 rounded-lg font-semibold font-mono transition-colors ${
              filter === 'resolved'
                ? 'bg-[#9EF01A] text-[#0B0F14]'
                : 'bg-[#1A1F2C] text-[#94A3B8] hover:bg-[#27272a] border border-[#27272a]'
            }`}
          >
            Resolved ({statusCounts.resolved || 0})
          </button>
        </div>

        {/* Tickets Table - Manilla Paper Style */}
        {!loading && !error && (
          <div className="manilla-table overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 font-bold">Ticket ID</th>
                  <th className="text-left p-4 font-bold">From</th>
                  <th className="text-left p-4 font-bold">Subject</th>
                  <th className="text-left p-4 font-bold">Priority</th>
                  <th className="text-left p-4 font-bold">Status</th>
                  <th className="text-left p-4 font-bold">Category</th>
                  <th className="text-left p-4 font-bold">Created</th>
                </tr>
              </thead>
              <tbody>
                {tickets.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center">
                      No tickets found for this filter.
                    </td>
                  </tr>
                ) : (
                  tickets.map((ticket) => (
                    <tr key={ticket.ticket_id}>
                      <td className="p-4 font-mono text-sm">
                        {ticket.ticket_id?.substring(0, 8)}...
                      </td>
                      <td className="p-4">{ticket.from_email}</td>
                      <td className="p-4 font-bold">{ticket.subject}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-bold font-mono ${getPriorityBadgeColor(
                            ticket.priority
                          )}`}
                        >
                          {ticket.priority?.toUpperCase() || 'N/A'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${getStatusBadgeColor(
                            ticket.status
                          )}`}
                        >
                          {ticket.status?.toUpperCase() || 'UNKNOWN'}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-sm">{ticket.category || 'N/A'}</td>
                      <td className="p-4 font-mono text-sm">
                        {ticket.created_at
                          ? new Date(ticket.created_at).toLocaleDateString()
                          : 'N/A'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center text-[#94A3B8] py-12 font-mono">
            {'>'} Loading ticket feed...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 text-red-400 mb-8 font-mono">
            {'>'} Error: {error}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManagerAgentDashboard;
