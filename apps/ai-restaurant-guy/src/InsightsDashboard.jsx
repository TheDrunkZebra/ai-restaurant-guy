import React, { useState, useEffect } from 'react';

/**
 * Market Intelligence Suite
 * Displays menu trends and chef promotions using Manilla Paper table style
 * All tables wrapped in .manilla-table container
 */
const InsightsDashboard = () => {
  const [trends, setTrends] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/insights');
      
      if (!response.ok) {
        throw new Error('Failed to fetch insights');
      }

      const data = await response.json();
      setTrends(data.trends || []);
      setPromotions(data.promotions || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching insights:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#0B0F14] border-t border-[#27272a]" id="market-intelligence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Market Intelligence Suite
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Real-time trends and promotions from the Zebra Intelligence Database
            <br />
            <span className="text-[#E7C9A9] font-mono text-sm">Updated daily via autonomous agents</span>
          </p>
        </div>

        {/* Menu Trends Table - Manilla Paper Style */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 font-mono">
            {'>'} 2026 Menu Trends
          </h3>
          <div className="manilla-table overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 font-bold">Trend Name</th>
                  <th className="text-left p-4 font-bold">Margin Potential</th>
                  <th className="text-left p-4 font-bold">Description</th>
                  <th className="text-left p-4 font-bold">Source</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center">
                      Loading trends...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-red-600">
                      Error: {error}
                    </td>
                  </tr>
                ) : trends.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center">
                      No trends available. Check back later.
                    </td>
                  </tr>
                ) : (
                  trends.map((trend, index) => (
                    <tr key={trend.id || index}>
                      <td className="p-4 font-bold">{trend.trend_name}</td>
                      <td className="p-4 font-bold text-green-700">{trend.margin_potential}</td>
                      <td className="p-4">{trend.description}</td>
                      <td className="p-4 text-sm">{trend.source || 'N/A'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chef Promotions Table - Manilla Paper Style */}
        <div>
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 font-mono">
            {'>'} Chef Promotions
          </h3>
          <div className="manilla-table overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 font-bold">Promotion Name</th>
                  <th className="text-left p-4 font-bold">Type</th>
                  <th className="text-left p-4 font-bold">Target Audience</th>
                  <th className="text-left p-4 font-bold">Content Preview</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center">
                      Loading promotions...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-red-600">
                      Error: {error}
                    </td>
                  </tr>
                ) : promotions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center">
                      No promotions available. Check back later.
                    </td>
                  </tr>
                ) : (
                  promotions.map((promo, index) => (
                    <tr key={promo.id || index}>
                      <td className="p-4 font-bold">{promo.promotion_name}</td>
                      <td className="p-4">{promo.promotion_type || 'N/A'}</td>
                      <td className="p-4">{promo.target_audience || 'N/A'}</td>
                      <td className="p-4 text-sm max-w-md truncate">
                        {promo.content?.substring(0, 100) || 'N/A'}...
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsDashboard;
