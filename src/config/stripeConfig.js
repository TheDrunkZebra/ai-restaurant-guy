// Stripe Price IDs for AI Restaurant Guy
// These are LIVE price IDs

export const STRIPE_PRICES = {
    // Discovery Audit
    discoveryAudit: 'price_1SslliP3EaCiegZ8fIDZaHiQ', // $1,000 one-time

    // Essentials Package
    essentialsSetup: 'price_1SslnLP3EaCiegZ8tqVvmfX1', // $2,500 one-time
    essentialsMonthly: 'price_1SslnLP3EaCiegZ8uJxZ8kmf', // $1,500/month

    // Growth Package
    growthSetup: 'price_1Ssm95P3EaCiegZ8X1JgjbQF', // $4,000 one-time
    growthMonthly: 'price_1Ssm96P3EaCiegZ8DP4FbDZU', // $2,500/month

    // Scale Package
    scaleSetup: 'price_1Ssm96P3EaCiegZ8SOWuZ4iI', // $6,000 one-time
    scaleMonthly: 'price_1Ssm96P3EaCiegZ85YgKEXMe', // $4,000/month

    // Add-ons (monthly)
    googleAds: 'price_1Ssm96P3EaCiegZ8SoQ4aX86', // $500/month
    priorityResponse: 'price_1Ssm97P3EaCiegZ8Wdu9J3Q4', // $300/month
    strategyCall: 'price_1Ssm97P3EaCiegZ8kxY6M55A', // $200/month
};

// Package configurations
export const PACKAGES = {
    essentials: {
        name: 'Essentials',
        setupPrice: STRIPE_PRICES.essentialsSetup,
        monthlyPrice: STRIPE_PRICES.essentialsMonthly,
        setupAmount: 2500,
        monthlyAmount: 1500,
    },
    growth: {
        name: 'Growth',
        setupPrice: STRIPE_PRICES.growthSetup,
        monthlyPrice: STRIPE_PRICES.growthMonthly,
        setupAmount: 4000,
        monthlyAmount: 2500,
    },
    scale: {
        name: 'Scale',
        setupPrice: STRIPE_PRICES.scaleSetup,
        monthlyPrice: STRIPE_PRICES.scaleMonthly,
        setupAmount: 6000,
        monthlyAmount: 4000,
    },
};

// Add-on configurations
export const ADDONS = {
    googleAds: {
        name: 'Google Ads Management',
        priceId: STRIPE_PRICES.googleAds,
        amount: 500,
    },
    priorityResponse: {
        name: 'Priority Response',
        priceId: STRIPE_PRICES.priorityResponse,
        amount: 300,
    },
    strategyCall: {
        name: 'Monthly Strategy Call',
        priceId: STRIPE_PRICES.strategyCall,
        amount: 200,
    },
};
