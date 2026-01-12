import React, { useState } from 'react';
import { Send, Lock, CheckCircle2, ClipboardCheck } from 'lucide-react';

const ProfitProtocolAudit = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [statusData, setStatusData] = useState({
        currentNode: '',
        status: '',
        progressPercent: 0,
        message: 'Initializing Protocol...'
    });

    const [formData, setFormData] = useState({
        name: '',
        restaurant: '',
        email: '',
        phone: '',
        pos: '',
        revenue: '',
        likelihood: '',
        foodCost: '',
        laborCost: '',
        electricProvider: '',
        electricCost: '',
        gasProvider: '',
        gasCost: '',
        deliveryPlatforms: '',
        deliveryCost: '',
        loanType: '',
        loanPayment: ''
    });

    const pollStatus = async (id) => {
        try {
            const response = await fetch(`https://profit-recovery-api-production.up.railway.app/api/profit-protocol-audit/status/${id}`);
            const data = await response.json();

            setStatusData({
                currentNode: data.currentNode || '',
                status: data.status || '',
                progressPercent: data.progress || 0,
                message: data.message || 'Processing...'
            });

            if (data.status === 'completed') {
                setIsSubmitting(false);
                setIsComplete(true);
            } else if (data.status === 'failed') {
                setIsSubmitting(false);
                alert('Protocol Analysis Failed. Please contact support.');
            } else {
                // Poll again in 2 seconds
                setTimeout(() => pollStatus(id), 2000);
            }
        } catch (error) {
            console.error('Polling error:', error);
            // Retry polling after error
            setTimeout(() => pollStatus(id), 5000);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            name: formData.name,
            email: formData.email,
            restaurantName: formData.restaurant,
            phone: formData.phone,
            qualificationData: {
                electricProvider: formData.electricProvider,
                electricBill: parseFloat(formData.electricCost),
                gasProvider: formData.gasProvider,
                gasBill: parseFloat(formData.gasCost),
                deliveryPlatformFees: {
                    [formData.deliveryPlatforms]: parseFloat(formData.deliveryCost)
                },
                mcaLoans: [
                    {
                        lender: formData.loanType,
                        weeklyPayment: parseFloat(formData.loanPayment)
                    }
                ],
                yearlyRevenue: formData.revenue,
                posSystem: formData.pos,
                likelihoodOfSuccess: formData.likelihood,
                foodCostPercent: parseFloat(formData.foodCost),
                laborCostPercent: parseFloat(formData.laborCost)
            }
        };

        try {
            const response = await fetch('https://profit-recovery-api-production.up.railway.app/api/profit-protocol-audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                setSessionId(data.sessionId);
                pollStatus(data.sessionId);
            } else {
                setIsSubmitting(false);
                alert('Protocol failed to initiate: ' + data.message);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false);
            alert('Critial system error. Protocol deployment failed.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="audit" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-5xl mx-auto bg-surface border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl min-h-[600px]">

                    <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-surface to-background relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <ClipboardCheck size={200} />
                        </div>

                        <h2 className="text-4xl font-black mb-4 italic tracking-tighter uppercase text-primary leading-none">THE PROFIT PROTOCOL</h2>
                        <p className="text-textSecondary mb-8 text-lg font-medium leading-tight">
                            We don't do "consulting." We deploy an automated **Profit Protocol** to audit your vendor contracts, utility bills, and loan schedules for immediate cash recovery.
                        </p>

                        <div className="space-y-4 relative z-10">
                            {[
                                "Utility Rate Arbitrage",
                                "Loan Payment Restructuring",
                                "Delivery Fee Optimization",
                                "AI Recovery Deployment"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-sm bg-primary" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-12 md:w-3/5 bg-surface relative">
                        {isComplete ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.2)] border border-primary/20">
                                    <CheckCircle2 className="w-12 h-12 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white italic tracking-tighter mb-3 uppercase leading-none">Protocol Activated</h3>
                                    <p className="text-textSecondary max-w-sm mx-auto font-medium">
                                        The Profit Protocol is now scanning <span className="text-primary font-bold">{formData.restaurant}</span>.
                                        Watch your inbox for the **Leakage Report**.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsComplete(false)}
                                    className="text-sm text-primary hover:underline font-bold tracking-tight uppercase"
                                >
                                    Activate Another Protocol
                                </button>
                            </div>
                        ) : isSubmitting ? (
                            <div className="h-full flex flex-col items-center justify-center py-20 space-y-10 animate-in fade-in duration-300">
                                <div className="relative">
                                    <div className="w-32 h-32 border-4 border-primary/10 border-t-primary rounded-full animate-spin shadow-[0_0_50px_rgba(16,185,129,0.1)]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ClipboardCheck className="w-10 h-10 text-primary animate-pulse" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-white italic tracking-tighter mb-3 uppercase">Deploying Profit Protocol...</h3>
                                    <p className="text-sm text-textSecondary animate-pulse tracking-widest uppercase font-bold">{statusData.message}</p>
                                </div>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden max-w-sm">
                                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${statusData.progressPercent}%` }} />
                                </div>
                                <div className="grid grid-cols-2 gap-4 w-full max-w-xs text-[10px] text-textSecondary uppercase font-bold text-center px-4 opacity-50">
                                    <div>Status: {statusData.status || 'Active'}</div>
                                    <div>Node: {statusData.currentNode || 'Deployment'}</div>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-500">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase font-black text-textSecondary mb-1 ml-1 tracking-widest italic">Full Name</label>
                                        <input
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full bg-background border border-white/5 rounded px-4 py-3 focus:border-primary focus:outline-none text-white transition-all focus:bg-white/5 font-medium"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-black text-textSecondary mb-1 ml-1 tracking-widest italic">Restaurant Entity</label>
                                        <input
                                            name="restaurant"
                                            placeholder="Main St. Bistro"
                                            className="w-full bg-background border border-white/5 rounded px-4 py-3 focus:border-primary focus:outline-none text-white transition-all focus:bg-white/5 font-medium"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase font-black text-textSecondary mb-1 ml-1 tracking-widest italic">Direct Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@restaurant.com"
                                            className="w-full bg-background border border-white/5 rounded px-4 py-3 focus:border-primary focus:outline-none text-white transition-all focus:bg-white/5 font-medium"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-black text-textSecondary mb-1 ml-1 tracking-widest italic">Point of Sale</label>
                                        <select
                                            name="pos"
                                            className="w-full bg-background border border-white/5 rounded px-4 py-3 focus:border-primary focus:outline-none text-textSecondary text-sm transition-all font-medium"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select POS</option>
                                            <option value="toast">Toast</option>
                                            <option value="square">Square</option>
                                            <option value="aloha">Aloha</option>
                                            <option value="other">Other/Legacy</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Operational Leakage Audit Section */}
                                <div className="space-y-4 pt-6 mt-6 border-t border-white/5">
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-primary font-black italic">Operational Audit Matrix</h4>

                                    {/* Prime Costs Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Food Cost %</label>
                                            <input name="foodCost" type="number" placeholder="28-35%" className="w-full bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Labor Cost %</label>
                                            <input name="laborCost" type="number" placeholder="25-32%" className="w-full bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* Utilities Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Electric Provider + Bill</label>
                                            <div className="flex gap-2">
                                                <input name="electricProvider" placeholder="Provider" className="w-3/5 bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                                <input name="electricCost" type="number" placeholder="$ /mo" className="w-2/5 bg-background border border-white/5 rounded px-2 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Gas Provider + Bill</label>
                                            <div className="flex gap-2">
                                                <input name="gasProvider" placeholder="Provider" className="w-3/5 bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                                <input name="gasCost" type="number" placeholder="$ /mo" className="w-2/5 bg-background border border-white/5 rounded px-2 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Financial Leakage Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Delivery + Fee %</label>
                                            <div className="flex gap-2">
                                                <select name="deliveryPlatforms" className="w-3/5 bg-background border border-white/5 rounded px-2 py-2 text-xs focus:border-primary outline-none text-textSecondary font-medium" onChange={handleChange}>
                                                    <option value="">Platform</option>
                                                    <option value="doordash">DoorDash</option>
                                                    <option value="ubereats">UberEats</option>
                                                    <option value="direct">Direct</option>
                                                </select>
                                                <input name="deliveryCost" type="number" placeholder="%" className="w-2/5 bg-background border border-white/5 rounded px-2 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Debt + Weekly Pmt</label>
                                            <div className="flex gap-2">
                                                <input name="loanType" placeholder="Debt Entity" className="w-3/5 bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                                <input name="loanPayment" type="number" placeholder="$ /wk" className="w-2/5 bg-background border border-white/5 rounded px-2 py-2 text-xs focus:border-primary outline-none font-medium" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Final Qualification Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Yearly Revenue</label>
                                            <select name="revenue" className="w-full bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-secondary outline-none text-textSecondary font-medium" onChange={handleChange} required>
                                                <option value="">Select Revenue</option>
                                                <option value="sub500k">&lt; $500k</option>
                                                <option value="500k-1.5m">$500k - $1.5M</option>
                                                <option value="1.5m-5m">$1.5M - $5M</option>
                                                <option value="5mplus">$5M+</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[9px] uppercase font-black text-textSecondary tracking-widest ml-1 italic">Likelihood of Change</label>
                                            <select name="likelihood" className="w-full bg-background border border-white/5 rounded px-3 py-2 text-xs focus:border-secondary outline-none text-textSecondary font-medium" onChange={handleChange} required>
                                                <option value="">Select Priority</option>
                                                <option value="immediate">Immediate Extraction</option>
                                                <option value="planning">Planning Phase</option>
                                                <option value="researching">Just Researching</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit Row */}
                                    <div className="flex items-end pt-2">
                                        <button type="submit" className="w-full bg-secondary text-background font-black py-4 rounded hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-tighter shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-secondary/20 font-bold">
                                            Deploy Protocol
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-[10px] text-textSecondary mt-8 pt-4 border-t border-white/5 opacity-50 font-black uppercase tracking-widest italic">
                                    <Lock className="w-3 h-3 text-primary" />
                                    <span>Military-Grade Profit Enforcement</span>
                                </div>
                            </form>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfitProtocolAudit;
