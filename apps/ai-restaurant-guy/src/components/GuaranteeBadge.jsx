import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const GuaranteeBadge = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 text-secondary text-sm font-semibold tracking-wide"
        >
            <ShieldCheck className="w-4 h-4" />
            <span>60-DAY CONVERSION GUARANTEE</span>
        </motion.div>
    );
};

export default GuaranteeBadge;

