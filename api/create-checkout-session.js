const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Price IDs
const PRICES = {
    discoveryAudit: 'price_1SslliP3EaCiegZ8fIDZaHiQ',
    essentialsSetup: 'price_1SslnLP3EaCiegZ8tqVvmfX1',
    essentialsMonthly: 'price_1SslnLP3EaCiegZ8uJxZ8kmf',
    growthSetup: 'price_1Ssm95P3EaCiegZ8X1JgjbQF',
    growthMonthly: 'price_1Ssm96P3EaCiegZ8DP4FbDZU',
    scaleSetup: 'price_1Ssm96P3EaCiegZ8SOWuZ4iI',
    scaleMonthly: 'price_1Ssm96P3EaCiegZ85YgKEXMe',
    googleAds: 'price_1Ssm96P3EaCiegZ8SoQ4aX86',
    priorityResponse: 'price_1Ssm97P3EaCiegZ8Wdu9J3Q4',
    strategyCall: 'price_1Ssm97P3EaCiegZ8kxY6M55A',
};

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { type, package: pkg, addOns, customerEmail, customerName, restaurantName } = req.body;

        let lineItems = [];
        let mode = 'payment';

        if (type === 'discovery-audit') {
            // Simple one-time payment for discovery audit
            lineItems = [{ price: PRICES.discoveryAudit, quantity: 1 }];
            mode = 'payment';
        } else if (type === 'package') {
            // Package purchase: setup fee + subscription
            const packagePrices = {
                essentials: { setup: PRICES.essentialsSetup, monthly: PRICES.essentialsMonthly },
                growth: { setup: PRICES.growthSetup, monthly: PRICES.growthMonthly },
                scale: { setup: PRICES.scaleSetup, monthly: PRICES.scaleMonthly },
            };

            const selectedPackage = packagePrices[pkg];
            if (!selectedPackage) {
                return res.status(400).json({ error: 'Invalid package selected' });
            }

            // For subscription mode, we include setup as a one-time add-on
            lineItems = [
                { price: selectedPackage.setup, quantity: 1 },
                { price: selectedPackage.monthly, quantity: 1 },
            ];

            // Add selected add-ons
            if (addOns?.googleAds) {
                lineItems.push({ price: PRICES.googleAds, quantity: 1 });
            }
            if (addOns?.priorityResponse) {
                lineItems.push({ price: PRICES.priorityResponse, quantity: 1 });
            }
            if (addOns?.strategyCall) {
                lineItems.push({ price: PRICES.strategyCall, quantity: 1 });
            }

            mode = 'subscription';
        } else {
            return res.status(400).json({ error: 'Invalid checkout type' });
        }

        const sessionConfig = {
            mode,
            line_items: lineItems,
            success_url: `${req.headers.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/?checkout=cancelled`,
            customer_email: customerEmail,
            metadata: {
                customerName,
                restaurantName,
                package: pkg || 'discovery-audit',
            },
        };

        // For subscriptions, allow promotion codes
        if (mode === 'subscription') {
            sessionConfig.allow_promotion_codes = true;
            sessionConfig.subscription_data = {
                metadata: {
                    customerName,
                    restaurantName,
                    package: pkg,
                },
            };
        }

        const session = await stripe.checkout.sessions.create(sessionConfig);

        res.status(200).json({ sessionId: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
};
