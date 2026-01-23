import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const GuaranteeBadge = ({ variant = 'default' }) => {
    const variants = {
        default: {
            bg: 'bg-[#39FF14]/10',
            border: 'border-[#39FF14]/30',
            text: 'text-[#39FF14]',
            message: '60-DAY VISIBILITY GUARANTEE'
        },
        hero: {
            bg: 'bg-[#39FF14]/15',
            border: 'border-[#39FF14]/40',
            text: 'text-[#39FF14]',
            message: '60-DAY VISIBILITY GUARANTEE'
        },
        compact: {
            bg: 'bg-[#39FF14]/10',
            border: 'border-[#39FF14]/20',
            text: 'text-[#39FF14]',
            message: '60-DAY GUARANTEE'
        }
    };

    const style = variants[variant] || variants.default;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 ${style.bg} border ${style.border} rounded-full px-4 py-2 ${style.text} text-xs font-bold tracking-wide uppercase`}
        >
            <ShieldCheck className="w-4 h-4" />
            <span>{style.message}</span>
        </motion.div>
    );
};

export default GuaranteeBadge;
