import React, { useState, useEffect } from 'react';

/**
 * Budget Architect Dashboard
 * "The Blueprint for Predictable Profits"
 * Fiscal Command Center - War Room Aesthetic
 */

const BudgetDashboard = () => {
  // Mock data - replace with real API calls
  const [dashboardData, setDashboardData] = useState({
    breakEvenTarget: 15000, // Daily break-even point
    currentSales: 8750, // Current daily sales
    primeCost: 58.5, // Prime cost percentage
    laborCost: 32.1, // Labor cost percentage
    foodCost: 26.4, // Food cost percentage
    netMargin: 18.2, // Net margin percentage
    aiDirective: "Directive: Labor is at 34%. Shift 2 hourly prep slots to evening service to optimize ticket times."
  });

  // Calculate break-even progress (0-100%)
  const breakEvenProgress = Math.min((dashboardData.currentSales / dashboardData.breakEvenTarget) * 100, 100);
  
  // Determine if prime cost is critical (>60%)
  const isPrimeCostCritical = dashboardData.primeCost > 60;

  // Break-Even Meter - Circular Radial Gauge
  const BreakEvenMeter = ({ progress, target, current }) => {
    const circumference = 2 * Math.PI * 90; // radius = 90
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    
    return (
      <div className="relative w-64 h-64 mx-auto">
        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#1A1F2C"
            strokeWidth="12"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={progress >= 100 ? "#9EF01A" : progress >= 75 ? "#00E0FF" : "#F87171"}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-[#9EF01A] font-mono">
            {Math.round(progress)}%
          </div>
          <div className="text-xs text-[#94A3B8] font-mono mt-1">
            Break-Even
          </div>
          <div className="text-xs text-[#64748B] font-mono mt-2">
            ${Math.round(current).toLocaleString()} / ${Math.round(target).toLocaleString()}
          </div>
        </div>
      </div>
    );
  };

  // Prime Cost Card Component
  const PrimeCostCard = ({ title, value, label, isCritical = false }) => {
    return (
      <div className={`bg-[#0E131B] border-2 rounded-xl p-6 transition-all ${
        isCritical 
          ? 'border-red-500 animate-pulse' 
          : 'border-[#1F2937] hover:border-[#00E0FF]/30'
      }`}>
        <div className="text-sm text-[#94A3B8] mb-2 font-mono uppercase tracking-wider">
          {title}
        </div>
        <div className="text-4xl font-bold font-mono mb-1" style={{
          color: isCritical ? '#F87171' : value < 60 ? '#9EF01A' : '#00E0FF'
        }}>
          {value.toFixed(1)}%
        </div>
        <div className="text-xs text-[#64748B] font-mono">
          {label}
        </div>
      </div>
    );
  };

  // AI Strategist Typewriter Component
  const AIStrategist = ({ directive }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
      if (!directive) return;
      
      setIsTyping(true);
      setDisplayedText('');
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < directive.length) {
          setDisplayedText(directive.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 30); // Typing speed

      return () => clearInterval(typeInterval);
    }, [directive]);

    return (
      <div className="bg-[#E7C9A9] rounded-xl p-6 border-2 border-black shadow-lg">
        <div className="text-xs text-black font-mono uppercase tracking-wider mb-3 font-bold">
          {'>'} AI Strategist Directive
        </div>
        <div className="text-black font-mono text-sm leading-relaxed min-h-[60px]">
          {displayedText}
          {isTyping && <span className="animate-pulse">|</span>}
        </div>
      </div>
    );
  };

  return (
    <section id="budget-architect" className="py-20 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            The Budget Architect
          </h2>
          <p className="text-xl text-[#94A3B8] mb-2">
            Blueprint for Predictable Profits
          </p>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Your Strategic Command Center for long-term survival and scale. Real-time break-even analysis, prime cost mapping, and AI-powered variance detection.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Break-Even Meter */}
          <div className="lg:col-span-1">
            <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-6 text-center font-mono uppercase tracking-wider">
                Break-Even Meter
              </h3>
              <BreakEvenMeter 
                progress={breakEvenProgress}
                target={dashboardData.breakEvenTarget}
                current={dashboardData.currentSales}
              />
              <div className="mt-6 text-center">
                <div className="text-sm text-[#94A3B8] font-mono">
                  Daily Sales Progress
                </div>
              </div>
            </div>
          </div>

          {/* Center: Prime Cost Cards */}
          <div className="lg:col-span-2">
            <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-6 font-mono uppercase tracking-wider">
                Prime Cost Dashboard
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <PrimeCostCard
                  title="Total Labor"
                  value={dashboardData.laborCost}
                  label="Of Revenue"
                />
                <PrimeCostCard
                  title="Total COGS"
                  value={dashboardData.foodCost}
                  label="Of Revenue"
                />
                <PrimeCostCard
                  title="Prime Cost"
                  value={dashboardData.primeCost}
                  label="Labor + COGS"
                  isCritical={isPrimeCostCritical}
                />
              </div>
              <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#94A3B8] font-mono text-sm">Net Margin</span>
                  <span className="text-2xl font-bold text-[#9EF01A] font-mono">
                    {dashboardData.netMargin.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Strategist Section */}
        <div className="mb-12">
          <AIStrategist directive={dashboardData.aiDirective} />
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h4 className="text-lg font-bold text-[#F8FAFC] mb-2">Real-Time Break-Even</h4>
            <p className="text-sm text-[#94A3B8]">
              Dynamically calculates exact covers or average guest spend needed.
            </p>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h4 className="text-lg font-bold text-[#F8FAFC] mb-2">Prime Cost Mapping</h4>
            <p className="text-sm text-[#94A3B8]">
              Live KPI dashboard aggregating labor and food costs.
            </p>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6">
            <div className="text-2xl mb-3">🤖</div>
            <h4 className="text-lg font-bold text-[#F8FAFC] mb-2">AI Variance Detection</h4>
            <p className="text-sm text-[#94A3B8]">
              Flags deviations from ideal budget before P&L closes.
            </p>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6">
            <div className="text-2xl mb-3">🔮</div>
            <h4 className="text-lg font-bold text-[#F8FAFC] mb-2">Scenario Modeling</h4>
            <p className="text-sm text-[#94A3B8]">
              Simulate financial impact of menu or hiring changes.
            </p>
          </div>
        </div>

        {/* Monetization Tiers */}
        <div className="bg-[#0E131B] border border-[#00E0FF]/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-8 text-center">
            Choose Your Strategic Tier
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier I: The Blueprint */}
            <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-sm text-[#94A3B8] font-mono uppercase tracking-wider mb-2">
                  Tier I
                </div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">The Blueprint</h4>
                <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-1">
                  2997
                </div>
                <div className="text-sm text-[#94A3B8]">One-Time Setup</div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-[#94A3B8]">
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Master budget installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Data cleaning & setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  First year configured
                </li>
              </ul>
              <a
                href="#blueprint-setup"
                className="block w-full bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-bold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Get The Blueprint
              </a>
            </div>

            {/* Tier II: The Sentinel */}
            <div className="bg-[#111827] border-2 border-[#9EF01A] rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#9EF01A] text-[#0B0F14] px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="text-center mb-4">
                <div className="text-sm text-[#94A3B8] font-mono uppercase tracking-wider mb-2">
                  Tier II
                </div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">The Sentinel</h4>
                <div className="text-3xl font-bold text-[#9EF01A] font-mono mb-1">
                  299
                </div>
                <div className="text-sm text-[#94A3B8]">Per Month</div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-[#94A3B8]">
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Full app access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  AI alerts & monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Real-time vendor syncing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Ongoing updates
                </li>
              </ul>
              <a
                href="#sentinel-signup"
                className="block w-full bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-bold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Start Sentinel
              </a>
            </div>

            {/* Tier III: The Architect */}
            <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-sm text-[#94A3B8] font-mono uppercase tracking-wider mb-2">
                  Tier III
                </div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">The Architect</h4>
                <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-1">
                  1500
                </div>
                <div className="text-sm text-[#94A3B8]">Per Month</div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-[#94A3B8]">
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Everything in Sentinel
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Monthly Fiscal War Room
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Strategic budget adjustments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#9EF01A]">✓</span>
                  Priority support
                </li>
              </ul>
              <a
                href="#architect-advisory"
                className="block w-full bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-bold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Book Architect Call
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Footer CTA */}
        <div className="sticky bottom-4 bg-[#0E131B] border-2 border-[#9EF01A] rounded-xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-[#F8FAFC] mb-1">
                Scale Your Strategy
              </div>
              <div className="text-sm text-[#94A3B8]">
                Unlock the Full Architect Suite for <span className="text-[#9EF01A] font-bold font-mono">299/mo</span>
              </div>
            </div>
            <a
              href="#sentinel-signup"
              className="bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
            >
              Start Sentinel →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetDashboard;









