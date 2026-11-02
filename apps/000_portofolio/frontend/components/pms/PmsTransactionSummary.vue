 <script setup lang="ts">
 import type { PmsTransactionSummary } from '~/types/pms'
 import { DollarSign, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-vue-next'
 
 defineProps<{
   summary: PmsTransactionSummary
 }>()
 
 const formatCurrency = (amount: number, currency: string = 'USD') => {
   return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
 }
 </script>
 
 <template>
   <div class="space-y-4">
     <div class="flex items-center justify-between">
       <h4 class="font-serif-title text-base font-semibold text-gold-300">Financial Metrics & Analytics</h4>
       <span class="text-xs font-mono-code text-gold-400">CURRENCY: {{ summary.currency }}</span>
     </div>
 
     <!-- Summary Stats Cards -->
     <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
       <div class="glass-card p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
         <div class="flex items-center justify-between text-xs font-mono-code text-emerald-400 mb-1">
           <span>TOTAL INCOME</span>
           <TrendingUp class="w-4 h-4" />
         </div>
         <span class="text-xl font-bold font-mono-code text-ivory-100">
           {{ formatCurrency(summary.total_income, summary.currency) }}
         </span>
       </div>
 
       <div class="glass-card p-4 rounded-xl border border-red-500/20 bg-red-950/10">
         <div class="flex items-center justify-between text-xs font-mono-code text-red-400 mb-1">
           <span>TOTAL EXPENSE</span>
           <TrendingDown class="w-4 h-4" />
         </div>
         <span class="text-xl font-bold font-mono-code text-ivory-100">
           {{ formatCurrency(summary.total_expense, summary.currency) }}
         </span>
       </div>
 
       <div class="glass-card p-4 rounded-xl border border-gold-500/30 bg-gold-500/10">
         <div class="flex items-center justify-between text-xs font-mono-code text-gold-300 mb-1">
           <span>NET BALANCE</span>
           <Wallet class="w-4 h-4 text-gold-400" />
         </div>
         <span class="text-xl font-bold font-mono-code text-gold-300">
           {{ formatCurrency(summary.net_balance, summary.currency) }}
         </span>
       </div>
     </div>
 
     <!-- Recent Transactions List -->
     <div class="glass-card p-4 rounded-xl border border-white/5 space-y-3">
       <span class="text-xs font-mono-code uppercase text-ivory-400 block font-semibold">Recent Ledger Entries</span>
       
       <div class="space-y-2">
         <div
           v-for="tx in summary.recent_transactions"
           :key="tx.id"
           class="p-2.5 rounded-lg bg-navy-900/60 border border-white/5 flex items-center justify-between"
         >
           <div class="flex items-center space-x-3">
             <div
               class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
               :class="tx.type === 'income' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'"
             >
               <component :is="tx.type === 'income' ? ArrowUpRight : ArrowDownRight" class="w-4 h-4" />
             </div>
             <div>
               <span class="text-xs font-semibold text-ivory-100 block leading-none">{{ tx.title }}</span>
               <span class="text-[10px] font-mono-code text-ivory-400 mt-1 block">{{ tx.category }} — {{ tx.date }}</span>
             </div>
           </div>
 
           <span
             class="text-xs font-mono-code font-bold"
             :class="tx.type === 'income' ? 'text-emerald-400' : 'text-red-400'"
           >
             {{ tx.type === 'income' ? '+' : '-' }}{{ formatCurrency(tx.amount, summary.currency) }}
           </span>
         </div>
       </div>
     </div>
   </div>
 </template>