'use strict';

// ── SVG WEATHER ICONS ─────────────────────────────────────────────────────────
const W_SVG={
  sun:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="2" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.93" y2="5.93"/><line x1="18.07" y1="18.07" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.93" y2="18.07"/><line x1="18.07" y1="5.93" x2="19.78" y2="4.22"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="#cbd5e1"/><g stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.93" y2="5.93"/><line x1="18.07" y1="18.07" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.93" y2="18.07"/><line x1="18.07" y1="5.93" x2="19.78" y2="4.22"/></g></svg>`,
    color:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="#fbbf24"/><g stroke="#f59e0b" stroke-width="2" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.93" y2="5.93"/><line x1="18.07" y1="18.07" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.93" y2="18.07"/><line x1="18.07" y1="5.93" x2="19.78" y2="4.22"/></g></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="#f59e0b"/><g stroke="#fde68a" stroke-width="2" stroke-linecap="round" opacity="0.7"><line x1="12" y1="2" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.93" y2="5.93"/><line x1="18.07" y1="18.07" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.93" y2="18.07"/><line x1="18.07" y1="5.93" x2="19.78" y2="4.22"/></g></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="2" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.93" y2="5.93"/><line x1="18.07" y1="18.07" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.93" y2="18.07"/><line x1="18.07" y1="5.93" x2="19.78" y2="4.22"/></svg>`,
  },
  cloud:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#94a3b8" stroke="#64748b" stroke-width="0.5"/></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#64748b"/><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="url(#cdt)" opacity="0.4"/><defs><linearGradient id="cdt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  },
  sun_cloud:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="7" cy="7" r="2.5"/><line x1="7" y1="3" x2="7" y2="4"/><line x1="7" y1="10" x2="7" y2="11"/><line x1="3" y1="7" x2="4" y2="7"/><line x1="10" y1="7" x2="11" y2="7"/><line x1="4.76" y1="4.76" x2="5.52" y2="5.52"/><line x1="8.48" y1="8.48" x2="9.24" y2="9.24"/><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><circle cx="7" cy="7" r="2.5" fill="#e2e8f0"/><g stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="4"/><line x1="7" y1="10" x2="7" y2="11"/><line x1="3" y1="7" x2="4" y2="7"/><line x1="10" y1="7" x2="11" y2="7"/><line x1="4.76" y1="4.76" x2="5.52" y2="5.52"/><line x1="8.48" y1="8.48" x2="9.24" y2="9.24"/></g><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#94a3b8"/></svg>`,
    color:`<svg viewBox="0 0 24 24"><circle cx="7" cy="7" r="2.5" fill="#fbbf24"/><g stroke="#f59e0b" stroke-width="1.3" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="4"/><line x1="7" y1="10" x2="7" y2="11"/><line x1="3" y1="7" x2="4" y2="7"/><line x1="10" y1="7" x2="11" y2="7"/><line x1="4.76" y1="4.76" x2="5.52" y2="5.52"/><line x1="8.48" y1="8.48" x2="9.24" y2="9.24"/></g><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><circle cx="7" cy="7" r="2.5" fill="#f59e0b"/><g stroke="#fde68a" stroke-width="1.3" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="4"/><line x1="7" y1="10" x2="7" y2="11"/><line x1="3" y1="7" x2="4" y2="7"/><line x1="10" y1="7" x2="11" y2="7"/><line x1="4.76" y1="4.76" x2="5.52" y2="5.52"/><line x1="8.48" y1="8.48" x2="9.24" y2="9.24"/></g><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#475569" opacity="0.9"/></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="7" cy="7" r="2.5" stroke="#f59e0b" stroke-width="1.8"/><g stroke="#f59e0b" stroke-width="1.3"><line x1="7" y1="3" x2="7" y2="4"/><line x1="7" y1="10" x2="7" y2="11"/><line x1="3" y1="7" x2="4" y2="7"/><line x1="10" y1="7" x2="11" y2="7"/><line x1="4.76" y1="4.76" x2="5.52" y2="5.52"/><line x1="8.48" y1="8.48" x2="9.24" y2="9.24"/></g><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#94a3b8" stroke-width="1.8"/></svg>`,
  },
  sun_cloud:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="3"/><line x1="11" y1="6.5" x2="11" y2="7.5"/><line x1="7.1" y1="7.1" x2="7.8" y2="7.8"/><line x1="6.5" y1="11" x2="7.5" y2="11"/><path d="M18.5 15.5h-.6A4 4 0 1 0 13 21h5.5a2 2 0 0 0 0-4z"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="3" fill="#e2e8f0"/><g stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"><line x1="11" y1="6.5" x2="11" y2="7.5"/><line x1="7.1" y1="7.1" x2="7.8" y2="7.8"/><line x1="6.5" y1="11" x2="7.5" y2="11"/></g><path d="M18.5 15.5h-.6A4 4 0 1 0 13 21h5.5a2 2 0 0 0 0-4z" fill="#94a3b8"/></svg>`,
    color:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="3" fill="#fbbf24"/><g stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"><line x1="11" y1="6.5" x2="11" y2="7.5"/><line x1="7.1" y1="7.1" x2="7.8" y2="7.8"/><line x1="6.5" y1="11" x2="7.5" y2="11"/></g><path d="M18.5 15.5h-.6A4 4 0 1 0 13 21h5.5a2 2 0 0 0 0-4z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="3" fill="#f59e0b"/><g stroke="#fde68a" stroke-width="1.5" stroke-linecap="round"><line x1="11" y1="6.5" x2="11" y2="7.5"/><line x1="7.1" y1="7.1" x2="7.8" y2="7.8"/><line x1="6.5" y1="11" x2="7.5" y2="11"/></g><path d="M18.5 15.5h-.6A4 4 0 1 0 13 21h5.5a2 2 0 0 0 0-4z" fill="#475569" opacity="0.9"/></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="3" stroke="#f59e0b" stroke-width="1.8"/><g stroke="#f59e0b" stroke-width="1.5"><line x1="11" y1="6.5" x2="11" y2="7.5"/><line x1="7.1" y1="7.1" x2="7.8" y2="7.8"/><line x1="6.5" y1="11" x2="7.5" y2="11"/></g><path d="M18.5 15.5h-.6A4 4 0 1 0 13 21h5.5a2 2 0 0 0 0-4z" stroke="#94a3b8" stroke-width="1.8"/></svg>`,
  },
  rain:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#94a3b8" stroke="#64748b" stroke-width="0.5" stroke-linecap="round"/><g stroke="#60a5fa" stroke-width="2.2" stroke-linecap="round"><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/><g stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round"><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#475569"/><g stroke="#93c5fd" stroke-width="2.2" stroke-linecap="round" opacity="0.9"><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" stroke="#94a3b8" stroke-width="1.8"/><g stroke="#3b82f6" stroke-width="2.2"><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
  },
  snow:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8" y2="21"/><line x1="8" y1="16" x2="6" y2="18"/><line x1="8" y1="16" x2="10" y2="18"/><line x1="16" y1="16" x2="16" y2="21"/><line x1="16" y1="16" x2="14" y2="18"/><line x1="16" y1="16" x2="18" y2="18"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" fill="#94a3b8" stroke="#64748b" stroke-width="0.5" stroke-linecap="round"/><g stroke="#93c5fd" stroke-width="2" stroke-linecap="round"><line x1="8" y1="16" x2="8" y2="21"/><line x1="8" y1="16" x2="6" y2="18"/><line x1="8" y1="16" x2="10" y2="18"/><line x1="16" y1="16" x2="16" y2="21"/><line x1="16" y1="16" x2="14" y2="18"/><line x1="16" y1="16" x2="18" y2="18"/></g></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" fill="#dbeafe" stroke="#bfdbfe" stroke-width="1.5"/><g stroke="#60a5fa" stroke-width="2" stroke-linecap="round"><line x1="8" y1="16" x2="8" y2="21"/><line x1="8" y1="16" x2="6" y2="18"/><line x1="8" y1="16" x2="10" y2="18"/><line x1="16" y1="16" x2="16" y2="21"/><line x1="16" y1="16" x2="14" y2="18"/><line x1="16" y1="16" x2="18" y2="18"/></g></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" fill="#475569"/><g stroke="#bfdbfe" stroke-width="2" stroke-linecap="round" opacity="0.9"><line x1="8" y1="16" x2="8" y2="21"/><line x1="8" y1="16" x2="6" y2="18"/><line x1="8" y1="16" x2="10" y2="18"/><line x1="16" y1="16" x2="16" y2="21"/><line x1="16" y1="16" x2="14" y2="18"/><line x1="16" y1="16" x2="18" y2="18"/></g></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" stroke="#94a3b8" stroke-width="1.8"/><g stroke="#60a5fa" stroke-width="2"><line x1="8" y1="16" x2="8" y2="21"/><line x1="8" y1="16" x2="6" y2="18"/><line x1="8" y1="16" x2="10" y2="18"/><line x1="16" y1="16" x2="16" y2="21"/><line x1="16" y1="16" x2="14" y2="18"/><line x1="16" y1="16" x2="18" y2="18"/></g></svg>`,
  },
  storm:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/><polyline points="13 11 9 17 15 17 11 23" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#94a3b8" stroke="#64748b" stroke-width="1"/><polyline points="13 11 9 17 15 17 11 23" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#334155"/><polyline points="13 11 9 17 15 17 11 23" fill="none" stroke="#fde68a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" stroke="#64748b" stroke-width="1.8"/><polyline points="13 11 9 17 15 17 11 23" stroke="#f59e0b" stroke-width="2.2"/></svg>`,
  },
  fog:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 5h3m4 0h9M3 10h11m4 0h1M5 15h5m4 0h8M3 20h9m4 0h3"/></svg>`,
    filled:`<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"><path d="M5 5h3m4 0h9M3 10h11m4 0h1M5 15h5m4 0h8M3 20h9m4 0h3"/></svg>`,
    color:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-width="1.8"><path d="M5 5h3m4 0h9M3 10h11m4 0h1" stroke="#94a3b8"/><path d="M5 15h5m4 0h8M3 20h9m4 0h3" stroke="#cbd5e1"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-width="1.8"><path d="M5 5h3m4 0h9M3 10h11m4 0h1" stroke="#64748b"/><path d="M5 15h5m4 0h8M3 20h9m4 0h3" stroke="#94a3b8" opacity="0.5"/></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-width="1.8"><path d="M5 5h3m4 0h9M3 10h11m4 0h1" stroke="#7dd3fc"/><path d="M5 15h5m4 0h8M3 20h9m4 0h3" stroke="#bae6fd" opacity="0.7"/></svg>`,
  },
  moon:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#94a3b8"/></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#fbbf24" stroke="#f59e0b" stroke-width="0.5"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#334155"/><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#mdt)" opacity="0.5"/><defs><linearGradient id="mdt" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  },
  moon_cloud:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M10 4a6.5 6.5 0 0 0 7.5 7.5A6.5 6.5 0 0 1 10 4z"/><path d="M20 13h-.9A5.5 5.5 0 1 0 13 21h7a3.5 3.5 0 0 0 0-7z"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M10 4a6.5 6.5 0 0 0 7.5 7.5A6.5 6.5 0 0 1 10 4z" fill="#94a3b8"/><path d="M20 13h-.9A5.5 5.5 0 1 0 13 21h7a3.5 3.5 0 0 0 0-7z" fill="#64748b"/></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M10 4a6.5 6.5 0 0 0 7.5 7.5A6.5 6.5 0 0 1 10 4z" fill="#fbbf24" stroke="#f59e0b" stroke-width="0.5"/><path d="M20 13h-.9A5.5 5.5 0 1 0 13 21h7a3.5 3.5 0 0 0 0-7z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M10 4a6.5 6.5 0 0 0 7.5 7.5A6.5 6.5 0 0 1 10 4z" fill="#f59e0b"/><path d="M20 13h-.9A5.5 5.5 0 1 0 13 21h7a3.5 3.5 0 0 0 0-7z" fill="#334155" opacity="0.9"/></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M10 4a6.5 6.5 0 0 0 7.5 7.5A6.5 6.5 0 0 1 10 4z" stroke="#a78bfa" stroke-width="1.8"/><path d="M20 13h-.9A5.5 5.5 0 1 0 13 21h7a3.5 3.5 0 0 0 0-7z" stroke="#94a3b8" stroke-width="1.8"/></svg>`,
  },
  drizzle:{
    line:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></svg>`,
    filled:`<svg viewBox="0 0 24 24"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#94a3b8" stroke="#64748b" stroke-width="0.5" stroke-linecap="round"/><g stroke="#93c5fd" stroke-width="2.2" stroke-linecap="round"><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
    color:`<svg viewBox="0 0 24 24"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/><g stroke="#60a5fa" stroke-width="2.2" stroke-linecap="round"><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
    duotone:`<svg viewBox="0 0 24 24"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" fill="#475569"/><g stroke="#93c5fd" stroke-width="2.2" stroke-linecap="round" opacity="0.85"><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
    outcolor:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" stroke="#94a3b8" stroke-width="1.8"/><g stroke="#60a5fa" stroke-width="2.2"><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></g></svg>`,
  },
};
function wmoKey(code,night){if(code===0)return night?'moon':'sun';if(code<=2)return night?'moon_cloud':'sun_cloud';if(code===3)return 'cloud';if(code<=48)return 'fog';if(code<=55)return 'drizzle';if(code<=65)return 'rain';if(code<=77)return 'snow';if(code<=82)return 'rain';if(code<=86)return 'snow';return 'storm';}
function wSVG(code,theme,night){const k=wmoKey(code,night);const t=theme||'color';return(W_SVG[k]?.[t]||W_SVG[k]?.line||W_SVG.cloud.line);}
function isNight(){const h=new Date().getHours();return h<6||h>=20;}

// ── 16 THEMES — all with subtle gradients ─────────────────────────────────────
const THEMES=[
  // LIGHT 8
  {n:'Pearl',    dark:false, bg:'linear-gradient(160deg,#eceef3 0%,#e6e9f0 100%)', sw:'linear-gradient(135deg,#eceef3,#e6e9f0)'},
  {n:'Cream',    dark:false, bg:'linear-gradient(160deg,#f4ede0 0%,#ede5d4 100%)', sw:'linear-gradient(135deg,#f4ede0,#ede5d4)'},
  {n:'Mist',     dark:false, bg:'linear-gradient(135deg,#dfe8f0 0%,#e8eef5 50%,#e2e8f4 100%)', sw:'linear-gradient(135deg,#e0e9f2,#e8eef5)'},
  {n:'Sage',     dark:false, bg:'linear-gradient(160deg,#e4ebe6 0%,#dde6df 100%)', sw:'linear-gradient(135deg,#e4ebe6,#dde6df)'},
  {n:'Mauve',    dark:false, bg:'linear-gradient(135deg,#ece7f4 0%,#e6e2f0 100%)', sw:'linear-gradient(135deg,#ece7f4,#e6e2f0)'},
  {n:'Dusk',     dark:false, bg:'linear-gradient(135deg,#ede8e8 0%,#f0e8ec 100%)', sw:'linear-gradient(135deg,#ede8e8,#f0e8ec)'},
  {n:'Sand',     dark:false, bg:'linear-gradient(160deg,#ede8de 0%,#e8e2d8 100%)', sw:'linear-gradient(135deg,#ede8de,#e8e2d8)'},
  {n:'Silver',   dark:false, bg:'linear-gradient(135deg,#efeff3 0%,#e8eaee 100%)', sw:'linear-gradient(135deg,#efeff3,#e8eaee)'},
  // DARK 8
  {n:'Noir',     dark:true,  bg:'linear-gradient(160deg,#111114 0%,#161618 100%)', sw:'linear-gradient(135deg,#111114,#161618)'},
  {n:'Slate',    dark:true,  bg:'linear-gradient(135deg,#141820 0%,#1a1e28 100%)', sw:'linear-gradient(135deg,#141820,#1a1e28)'},
  {n:'Abyss',    dark:true,  bg:'linear-gradient(160deg,#080c14 0%,#0e1422 100%)', sw:'linear-gradient(135deg,#080c14,#0e1422)'},
  {n:'Ember',    dark:true,  bg:'linear-gradient(135deg,#120a0a 0%,#1e1008 100%)', sw:'linear-gradient(135deg,#120a0a,#1e1008)'},
  {n:'Forest',   dark:true,  bg:'linear-gradient(135deg,#081208 0%,#0e1a10 100%)', sw:'linear-gradient(135deg,#081208,#0e1a10)'},
  {n:'Nebula',   dark:true,  bg:'linear-gradient(135deg,#0e0a1c 0%,#160e28 100%)', sw:'linear-gradient(135deg,#0e0a1c,#160e28)'},
  {n:'Graphite', dark:true,  bg:'linear-gradient(160deg,#1a1a1e 0%,#222226 100%)', sw:'linear-gradient(135deg,#1a1a1e,#222226)'},
  {n:'Midnight', dark:true,  bg:'linear-gradient(135deg,#0a0c14 0%,#10121c 100%)', sw:'linear-gradient(135deg,#0a0c14,#10121c)'},
  // WEATHER DYNAMIC (index 16)
  {n:'Weather',  dark:false, bg:'linear-gradient(160deg,#87ceeb 0%,#4a90d9 100%)', sw:null, isWeather:true},
];

const ACCENTS=[
  {n:'Blue',hex:'#3b82f6'},{n:'Indigo',hex:'#6366f1'},{n:'Purple',hex:'#7c3aed'},{n:'Pink',hex:'#ec4899'},
  {n:'Red',hex:'#e11d48'},{n:'Orange',hex:'#f97316'},{n:'Amber',hex:'#f59e0b'},{n:'Yellow',hex:'#eab308'},
  {n:'Lime',hex:'#84cc16'},{n:'Green',hex:'#16a34a'},{n:'Teal',hex:'#0d9488'},{n:'Cyan',hex:'#06b6d4'},
  {n:'Sky',hex:'#0ea5e9'},
];
const DEFAULTS=[
  {name:'Google Photos',url:'https://photos.google.com'},{name:'YouTube',url:'https://youtube.com'},
  {name:'Autovit',url:'https://autovit.ro'},{name:'OLX',url:'https://olx.ro'},
  {name:'eMAG',url:'https://emag.ro'},{name:'ChatGPT',url:'https://chatgpt.com'},
  {name:'Google Drive',url:'https://drive.google.com'},{name:'Reddit',url:'https://reddit.com'},
  {name:'Claude',url:'https://claude.ai'},{name:'Facebook',url:'https://facebook.com'},
  {name:'OMG Ubuntu',url:'https://omgubuntu.co.uk'},{name:'Yahoo',url:'https://yahoo.com'},
];
const COLORS_FB=['#6c63ff','#e07c5a','#5aade0','#4db8a0','#e05a8a','#d4a040','#5a88e0','#9e5ae0'];
const ENGINES={google:q=>`https://www.google.com/search?q=${encodeURIComponent(q)}`,ddg:q=>`https://duckduckgo.com/?q=${encodeURIComponent(q)}`,brave:q=>`https://search.brave.com/search?q=${encodeURIComponent(q)}`};
const KNOWN_ICONS={'drive.google.com':'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://drive.google.com&size=64','photos.google.com':'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://photos.google.com&size=64'};
const BG_LIGHT_DEFAULT='#eceef3';
const BG_DARK_DEFAULT='#1a1a1e';

let links=[],editMode=false,editingIndex=-1,dragSrcIdx=null,toastTid=null;
let cfg={
  theme:0,darkMode:'system',accent:'#3b82f6',
  bgMode:'auto',
  customBgType:'solid',customBgColor1:'#eceef3',customBgColor2:'#d4dce8',customBgDir:'to bottom right',
  useCustomBg:false,
  labels:true,clock:false,search:false,engine:'google',
  greeting:'',showGreeting:false,
  hover:'lift',newTab:false,cardStyle:'flat',
  cols:8,size:88,gap:36,radius:14,font:10,
  clockFont:72,greetingFont:15,
  weather:true,weatherCity:'',weatherIconTheme:'color',weatherProvider:'accuweather',
  weatherWallpaper:'animated',// 'animated'|'static'|'none'
  scheduleLight:'07:00',scheduleDark:'20:00',
};

function save(){try{localStorage.setItem('sdx_links',JSON.stringify(links));localStorage.setItem('sdx_cfg',JSON.stringify(cfg));}catch(e){}}
function load(){try{const l=localStorage.getItem('sdx_links'),c=localStorage.getItem('sdx_cfg');links=l?JSON.parse(l):DEFAULTS;if(c)cfg={...cfg,...JSON.parse(c)};}catch(e){links=DEFAULTS;}}
const FAV_CACHE_KEY='sdx_fav_cache';let favCache={};
function loadFavCache(){try{const c=localStorage.getItem(FAV_CACHE_KEY);if(c)favCache=JSON.parse(c);}catch(e){}}
function getDomain(url){try{return new URL(url).hostname;}catch{return null;}}

// ── WEATHER WALLPAPER — CSS gradient, no canvas ───────────────────────────────
let animFrame=null; // kept for compatibility, unused
const WEATHER_WP={
  clear_day:{   grad:'linear-gradient(170deg,#87ceeb 0%,#5ba8d4 50%,#2272ba 100%)', dark:false},
  clear_night:{ grad:'linear-gradient(170deg,#0d1b3e 0%,#1a2a5e 60%,#0a1228 100%)', dark:true},
  cloudy:{      grad:'linear-gradient(170deg,#c8d0d8 0%,#a8b4bc 50%,#8a9aa4 100%)', dark:false},
  rain:{        grad:'linear-gradient(170deg,#6b8290 0%,#4a6070 50%,#344a54 100%)', dark:true},
  snow:{        grad:'linear-gradient(170deg,#e8eef2 0%,#d4dde4 50%,#b8c8d0 100%)', dark:false},
  storm:{       grad:'linear-gradient(170deg,#2a2a2e 0%,#3a3a40 50%,#1a1a1e 100%)', dark:true},
  fog:{         grad:'linear-gradient(170deg,#c4ccd4 0%,#d4dce4 50%,#a8b4bc 100%)', dark:false},
};
function wmoWallpaper(code,night){
  if(night&&code===0)return'clear_night';
  if(code<=2)return'clear_day';
  if(code===3||code<=48)return'cloudy';
  if(code<=65)return'rain';
  if(code<=77)return'snow';
  if(code<=82)return'rain';
  if(code<=86)return'snow';
  return'storm';
}
function applyWeatherBg(code){
  const key=wmoWallpaper(code,isNight());
  const wp=WEATHER_WP[key]||WEATHER_WP.clear_day;
  document.body.style.background=wp.grad;
  document.body.classList.toggle('dark',wp.dark);
}
function stopWeatherCanvas(){
  if(animFrame){cancelAnimationFrame(animFrame);animFrame=null;}
  const c=document.getElementById('bg-canvas');if(c)c.classList.remove('show');
}
window.addEventListener('resize',()=>{});// no-op, canvas gone

// ── DARK MODE ─────────────────────────────────────────────────────────────────
function isDarkResolved(){
  if(cfg.darkMode==='dark')return true;if(cfg.darkMode==='light')return false;
  if(cfg.darkMode==='schedule'){const now=new Date(),m=now.getHours()*60+now.getMinutes();const[lh,lm]=cfg.scheduleLight.split(':').map(Number);const[dh,dm]=cfg.scheduleDark.split(':').map(Number);return m<(lh*60+lm)||m>=(dh*60+dm);}
  const t=THEMES[cfg.theme];if(t&&t.dark)return true;
  return window.matchMedia('(prefers-color-scheme:dark)').matches;
}
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>{applyConfig(true);});
setInterval(()=>{if(cfg.darkMode==='schedule')applyConfig(true);},60000);

// ── APPLY CONFIG ──────────────────────────────────────────────────────────────
function accentTintedBg(baseCss,accentHex,isDark){
  // blend 5% accent into bg color
  const a=parseInt(accentHex.slice(1,3),16),b=parseInt(accentHex.slice(3,5),16),c=parseInt(accentHex.slice(5,7),16);
  const mix=0.05;
  const base=isDark?[22,22,28]:[236,238,243];
  const r=Math.round(base[0]*(1-mix)+a*mix),g=Math.round(base[1]*(1-mix)+b*mix),bl=Math.round(base[2]*(1-mix)+c*mix);
  return`rgb(${r},${g},${bl})`;
}
function applyConfig(skipRender){
  const isDark=isDarkResolved();
  // handle weather wallpaper theme
  if(cfg.bgMode==='weather'&&weatherCache){
    applyWeatherBg(weatherCache.code);
    document.body.classList.add('weather-mode');
  } else if(cfg.bgMode==='weather'){
    document.body.style.background='linear-gradient(170deg,#87ceeb 0%,#5ba8d4 50%,#2272ba 100%)';
    document.body.classList.remove('dark');
    document.body.classList.add('weather-mode');
  } else if(cfg.bgMode==='auto'){
    document.body.classList.remove('weather-mode');
    stopWeatherCanvas();
    const sysDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
    document.body.style.background=accentTintedBg(sysDark?BG_DARK_DEFAULT:BG_LIGHT_DEFAULT,cfg.accent,sysDark);
    document.body.classList.toggle('dark',sysDark);
  } else if(cfg.bgMode==='light'||cfg.bgMode==='dark'){
    document.body.classList.remove('weather-mode');
    stopWeatherCanvas();
    const dark=cfg.bgMode==='dark';
    const bg=computeBg();
    document.body.style.background=cfg.customBgType==='solid'?accentTintedBg(bg,cfg.accent,dark):bg;
    document.body.classList.toggle('dark',dark);
  } else {
    document.body.classList.remove('weather-mode');
    stopWeatherCanvas();
    document.body.style.background=computeBg();
    document.body.classList.toggle('dark',isDark);
  }
  document.body.className=document.body.className.replace(/hover-[\w]+/g,'').replace(/card-[\w]+/g,'').trim();
  document.body.classList.add('hover-'+cfg.hover,'card-'+cfg.cardStyle);

  const r=document.documentElement;
  r.style.setProperty('--accent',cfg.accent);
  r.style.setProperty('--accent-soft',hexToRgba(cfg.accent,0.18));
  r.style.setProperty('--cols',cfg.cols);r.style.setProperty('--card-size',cfg.size+'px');
  r.style.setProperty('--gap',cfg.gap+'px');r.style.setProperty('--card-radius',cfg.radius+'px');
  r.style.setProperty('--label-size',cfg.font+'px');r.style.setProperty('--clock-font',cfg.clockFont+'px');
  r.style.setProperty('--greeting-font',cfg.greetingFont+'px');

  document.body.classList.toggle('no-labels',!cfg.labels);
  document.getElementById('clock-wrap').classList.toggle('show',cfg.clock);
  document.getElementById('search-wrap').classList.toggle('show',cfg.search);
  document.getElementById('weather-widget').classList.toggle('show',cfg.weather);
  const tw=document.getElementById('top-widgets');
  if(tw)tw.style.display=(cfg.clock||cfg.search||(cfg.showGreeting&&cfg.greeting))?'':'none';
  const gw=document.getElementById('greeting-wrap'),gt=document.getElementById('greeting-text');
  if(cfg.showGreeting&&cfg.greeting){gw.classList.add('show');gt.textContent=cfg.greeting;}else gw.classList.remove('show');
  showSub('sub-greeting',cfg.showGreeting);showSub('sub-engine',cfg.search);
  showSub('sub-weather-city',cfg.weather);showSub('sub-weather-icons',cfg.weather);showSub('sub-weather-provider',cfg.weather);
  document.getElementById('schedule-row')?.classList.toggle('show',cfg.bgMode==='auto'&&cfg.darkMode==='schedule');
  tg('tog-newtab-on',cfg.newTab);tg('tog-newtab-off',!cfg.newTab);
  ['google','ddg','brave'].forEach(e=>tg('eng-'+e,cfg.engine===e));
  tgFeat('feat-clock',cfg.clock);tgFeat('feat-search',cfg.search);tgFeat('feat-labels',cfg.labels);tgFeat('feat-weather',cfg.weather);tgFeat('feat-greeting',cfg.showGreeting);
  document.querySelectorAll('[data-effect]').forEach(c=>c.classList.toggle('active',c.dataset.effect===cfg.hover));
  document.querySelectorAll('[data-style]').forEach(c=>c.classList.toggle('active',c.dataset.style===cfg.cardStyle));
  ['cols','size','gap','radius'].forEach(k=>updateGroup(k+'-group','data-'+k,cfg[k]));
  sv('rng-cols','val-cols',cfg.cols,'');sv('rng-size','val-size',cfg.size,'px');
  sv('rng-gap','val-gap',cfg.gap,'px');sv('rng-radius','val-radius',cfg.radius,'px');
  sv('rng-font','val-font',cfg.font,'px');sv('rng-clock-font','val-clock-font',cfg.clockFont,'px');
  sv('rng-greeting-font','val-greeting-font',cfg.greetingFont,'px');
  document.querySelectorAll('#weather-icon-group .pill').forEach(b=>b.classList.toggle('active',b.dataset.theme===(cfg.weatherIconTheme||'color')));
  document.querySelectorAll('#weather-provider-group .pill').forEach(b=>b.classList.toggle('active',b.dataset.prov===(cfg.weatherProvider||'accuweather')));
  const ig=document.getElementById('input-greeting');if(ig)ig.value=cfg.greeting||'';
  const wc=document.getElementById('input-weather-city');if(wc)wc.value=cfg.weatherCity||'';
  const sl=document.getElementById('schedule-light');if(sl)sl.value=cfg.scheduleLight;
  const sd=document.getElementById('schedule-dark');if(sd)sd.value=cfg.scheduleDark;
  const si=document.getElementById('search-input');if(si)si.placeholder={google:'🔍  Search Google...',ddg:'🔍  Search DuckDuckGo...',brave:'🔍  Search Brave...'}[cfg.engine]||'🔍  Search...';
  document.querySelectorAll('.accent-dot').forEach(d=>d.classList.toggle('selected',d.dataset.hex===cfg.accent));
  syncBgModeUI();
  if(!skipRender)render();
}
function showSub(id,show){document.getElementById(id)?.classList.toggle('show',show);}
function updateGroup(gid,attr,val){document.querySelectorAll('#'+gid+' ['+attr+']').forEach(b=>b.classList.toggle('active',+b.getAttribute(attr)===+val));}
function sv(rId,vId,val,suf){const r=document.getElementById(rId);if(r)r.value=val;const v=document.getElementById(vId);if(v)v.textContent=val+suf;}
function tg(id,active){document.getElementById(id)?.classList.toggle('active',active);}
function tgMode(id,active){document.getElementById(id)?.classList.toggle('active',active);}
function tgFeat(id,active){document.getElementById(id)?.classList.toggle('active',active);}
function hexToRgba(hex,a){if(!hex||!hex.startsWith('#'))return`rgba(100,120,180,${a})`;const r=parseInt(hex.slice(1,3),16)||0,g=parseInt(hex.slice(3,5),16)||0,b=parseInt(hex.slice(5,7),16)||0;return`rgba(${r},${g},${b},${a})`;}

function buildThemes(){
  const w=document.getElementById('theme-wrap');w.innerHTML='';
  THEMES.forEach((t,i)=>{
    if(i===8){const sep=document.createElement('div');sep.className='theme-sep';w.appendChild(sep);}
    const d=document.createElement('div');
    d.className='theme-swatch'+(!cfg.useCustomBg&&i===cfg.theme?' selected':'');
    d.title=t.n;
    if(t.isWeather){d.classList.add('weather-swatch');}
    else{d.style.background=t.sw;}
    d.addEventListener('click',e=>{
      e.stopPropagation();
      cfg.theme=i;cfg.useCustomBg=false;
      if(!t.isWeather)cfg.darkMode=t.dark?'dark':'light';
      save();buildThemes();applyConfig(false);
    });
    w.appendChild(d);
  });
}
function buildAccents(){
  const w=document.getElementById('accent-wrap');w.innerHTML='';
  ACCENTS.forEach(a=>{
    const d=document.createElement('div');d.className='accent-dot'+(a.hex===cfg.accent?' selected':'');
    d.title=a.n;d.dataset.hex=a.hex;d.style.background=a.hex;
    d.addEventListener('click',()=>{cfg.accent=a.hex;save();applyConfig(true);});
    w.appendChild(d);
  });
}

// ── RENDER ────────────────────────────────────────────────────────────────────
function isEmoji(s){return s&&s.length<=4&&/\p{Emoji}/u.test(s);}
function colorFor(n){let h=0;for(let i=0;i<n.length;i++)h=(h*31+n.charCodeAt(i))&0xffffffff;return COLORS_FB[Math.abs(h)%COLORS_FB.length];}
function makeFallback(name){const el=document.createElement('div');el.className='favicon-fallback';el.style.background=colorFor(name);el.textContent=name.charAt(0).toUpperCase();return el;}
function loadFavicon(link,wrap){
  if(link.emoji&&isEmoji(link.emoji)){const em=document.createElement('span');em.className='favicon-emoji';em.textContent=link.emoji;wrap.appendChild(em);return;}
  const domain=getDomain(link.url);
  if(link.iconUrl||!domain){const img=document.createElement('img');img.alt=link.name;img.onerror=()=>img.replaceWith(makeFallback(link.name));img.src=link.iconUrl||'';wrap.appendChild(img);if(!domain)wrap.replaceChild(makeFallback(link.name),img);return;}
  const src=`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=64`;
  const fb=`https://icons.duckduckgo.com/ip3/${domain}.ico`;
  const img=document.createElement('img');img.alt=link.name;img.src=src;
  img.onerror=function(){if(img.src!==fb)img.src=fb;else img.replaceWith(makeFallback(link.name));};
  wrap.appendChild(img);
}
function render(){
  const grid=document.getElementById('grid'),frag=document.createDocumentFragment();
  links.forEach((link,i)=>{
    if(link.sep){
      const row=document.createElement('div');row.className='card-sep';
      const ll=document.createElement('div');ll.className='sep-line';
      const txt=document.createElement('span');txt.className='sep-label'+(link.label?'':' sep-label-empty');txt.textContent=link.label||'· · ·';
      const lr=document.createElement('div');lr.className='sep-line';
      const del=document.createElement('button');del.className='sep-del';del.textContent='×';
      del.addEventListener('click',e=>{e.stopPropagation();links.splice(i,1);save();render();});
      if(editMode)row.addEventListener('click',()=>openSepModal(i));
      row.appendChild(ll);row.appendChild(txt);row.appendChild(lr);row.appendChild(del);frag.appendChild(row);return;
    }
    const card=document.createElement('a');card.className='card editable';card.href=link.url;
    try{card.dataset.url=new URL(link.url).hostname.replace('www.','');}catch{card.dataset.url=link.url;}
    if(!editMode)card.addEventListener('click',e=>{e.preventDefault();if(cfg.newTab)window.open(link.url,'_blank');else window.location.href=link.url;});
    if(editMode){
      card.draggable=true;card.href='#';
      card.addEventListener('click',e=>{e.preventDefault();openModal(i);});
      card.addEventListener('dragstart',()=>{dragSrcIdx=i;card.classList.add('dragging');});
      card.addEventListener('dragend',()=>card.classList.remove('dragging'));
      card.addEventListener('dragover',e=>{e.preventDefault();card.classList.add('drag-over');});
      card.addEventListener('dragleave',()=>card.classList.remove('drag-over'));
      card.addEventListener('drop',e=>{e.preventDefault();card.classList.remove('drag-over');if(dragSrcIdx!==null&&dragSrcIdx!==i){const m=links.splice(dragSrcIdx,1)[0];links.splice(i,0,m);dragSrcIdx=null;save();render();}});
    }
    if(cfg.hover==='tilt3d'&&!editMode){
      card.addEventListener('mousemove',e=>{const rect=card.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width-0.5,y=(e.clientY-rect.top)/rect.height-0.5;card.style.transform=`translateZ(0) perspective(500px) rotateY(${x*16}deg) rotateX(${-y*10}deg) scale(1.03)`;});
      card.addEventListener('mouseleave',()=>{card.style.transform='translateZ(0)';});
    }
    const wrap=document.createElement('div');wrap.className='favicon-wrap';loadFavicon(link,wrap);card.appendChild(wrap);
    const label=document.createElement('span');label.className='label';label.textContent=link.name;card.appendChild(label);
    if(link.badge){const badge=document.createElement('div');badge.className='card-badge show';badge.textContent='●';card.appendChild(badge);}
    const del=document.createElement('button');del.className='delete-btn';del.textContent='×';
    del.addEventListener('click',e=>{e.stopPropagation();e.preventDefault();links.splice(i,1);save();render();});
    card.appendChild(del);frag.appendChild(card);
  });
  if(editMode){
    const a=document.createElement('div');a.className='card card-add';a.innerHTML='<span style="font-size:22px">+</span><span style="font-size:9px;color:var(--text-muted)">link</span>';a.addEventListener('click',()=>openModal(-1));frag.appendChild(a);
    const s=document.createElement('div');s.className='card card-add';s.innerHTML='<span style="font-size:16px;opacity:.6">—</span><span style="font-size:9px;color:var(--text-muted)">separator</span>';s.addEventListener('click',()=>openSepModal(-1));frag.appendChild(s);
  }
  grid.innerHTML='';grid.appendChild(frag);
}

// ── PANEL — never auto-closes on theme change ─────────────────────────────────
function openPanel(){document.getElementById('settings-panel').classList.add('open');document.getElementById('btn-settings-toggle').classList.add('active-btn');}
function closePanel(){document.getElementById('settings-panel').classList.remove('open');document.getElementById('btn-settings-toggle').classList.remove('active-btn');}
document.getElementById('btn-edit').addEventListener('click',()=>{editMode=true;document.body.classList.add('edit-mode');document.getElementById('btn-edit').classList.add('active-btn');document.getElementById('edit-ok-bar').classList.add('show');closePanel();render();});
document.getElementById('btn-done-bar').addEventListener('click',()=>{editMode=false;document.body.classList.remove('edit-mode');document.getElementById('btn-edit').classList.remove('active-btn');document.getElementById('edit-ok-bar').classList.remove('show');render();});
document.getElementById('btn-settings-toggle').addEventListener('click',e=>{e.stopPropagation();document.getElementById('settings-panel').classList.contains('open')?closePanel():openPanel();});
document.getElementById('btn-panel-close').addEventListener('click',closePanel);
document.addEventListener('click',e=>{const p=document.getElementById('settings-panel'),btn=document.getElementById('btn-settings-toggle');if(p.classList.contains('open')&&!p.contains(e.target)&&!btn.contains(e.target))closePanel();});

// ── EVENTS ────────────────────────────────────────────────────────────────────
// schedule time inputs
document.getElementById('schedule-light')?.addEventListener('change',e=>{cfg.scheduleLight=e.target.value;save();applyConfig(false);});
document.getElementById('schedule-dark')?.addEventListener('change',e=>{cfg.scheduleDark=e.target.value;save();applyConfig(false);});
document.getElementById('feat-clock')?.addEventListener('click',()=>{cfg.clock=!cfg.clock;save();applyConfig(true);if(cfg.clock)startClock();else stopClock();});
document.getElementById('feat-search')?.addEventListener('click',()=>{cfg.search=!cfg.search;save();applyConfig(true);});
document.getElementById('feat-labels')?.addEventListener('click',()=>{cfg.labels=!cfg.labels;save();applyConfig(true);});
document.getElementById('feat-weather')?.addEventListener('click',()=>{cfg.weather=!cfg.weather;save();applyConfig(true);if(cfg.weather){weatherCache=null;fetchWeather();}});
document.getElementById('feat-greeting')?.addEventListener('click',()=>{cfg.showGreeting=!cfg.showGreeting;save();applyConfig(true);});
document.getElementById('tog-newtab-on')?.addEventListener('click',()=>{cfg.newTab=true;save();applyConfig(true);});
document.getElementById('tog-newtab-off')?.addEventListener('click',()=>{cfg.newTab=false;save();applyConfig(true);});
['google','ddg','brave'].forEach(e=>document.getElementById('eng-'+e)?.addEventListener('click',()=>{cfg.engine=e;save();applyConfig(true);}));
document.querySelectorAll('[data-effect]').forEach(c=>c.addEventListener('click',()=>{cfg.hover=c.dataset.effect;save();applyConfig(true);}));
document.querySelectorAll('[data-style]').forEach(c=>c.addEventListener('click',()=>{cfg.cardStyle=c.dataset.style;save();applyConfig(true);}));

function computeBg(){
  if(cfg.bgMode==='weather'||cfg.bgMode==='auto')return'transparent';
  if(cfg.customBgType==='gradient')return`linear-gradient(${cfg.customBgDir||'to bottom right'},${cfg.customBgColor1},${cfg.customBgColor2})`;
  return cfg.customBgColor1||(cfg.bgMode==='dark'?BG_DARK_DEFAULT:BG_LIGHT_DEFAULT);
}
function updateBgPreview(){const p=document.getElementById('bg-preview');if(p)p.style.background=cfg.bgMode==='weather'?'linear-gradient(135deg,#87ceeb,#4a90d9)':computeBg();}
function syncBgModeUI(){
  tg('bg-mode-light',cfg.bgMode==='light');
  tg('bg-mode-dark',cfg.bgMode==='dark');
  tg('bg-mode-weather',cfg.bgMode==='weather');
  tg('bg-mode-auto',cfg.bgMode==='auto');
  const ctrl=document.getElementById('bg-color-controls');
  if(ctrl)ctrl.style.display=(cfg.bgMode==='weather'||cfg.bgMode==='auto')?'none':'flex';
  tg('bg-solid',cfg.customBgType==='solid');
  tg('bg-gradient',cfg.customBgType==='gradient');
  const c2w=document.getElementById('chip2-wrap');
  if(c2w)c2w.style.display=cfg.customBgType==='gradient'?'flex':'none';
  document.getElementById('chip1').style.background=cfg.customBgColor1;
  const c2=document.getElementById('chip2');if(c2)c2.style.background=cfg.customBgColor2;
  document.getElementById('tc-color1').value=cfg.customBgColor1;
  const tc2=document.getElementById('tc-color2');if(tc2)tc2.value=cfg.customBgColor2;
  document.querySelectorAll('.dir-btn').forEach(b=>b.classList.toggle('active',b.dataset.dir===cfg.customBgDir));
  updateBgPreview();
}
document.getElementById('bg-mode-light')?.addEventListener('click',e=>{e.stopPropagation();cfg.bgMode='light';cfg.darkMode='light';stopWeatherCanvas();if(!cfg.customBgColor1||cfg.customBgColor1===BG_DARK_DEFAULT)cfg.customBgColor1=BG_LIGHT_DEFAULT;save();syncBgModeUI();applyConfig(false);});
document.getElementById('bg-mode-dark')?.addEventListener('click',e=>{e.stopPropagation();cfg.bgMode='dark';cfg.darkMode='dark';stopWeatherCanvas();if(!cfg.customBgColor1||cfg.customBgColor1===BG_LIGHT_DEFAULT)cfg.customBgColor1=BG_DARK_DEFAULT;save();syncBgModeUI();applyConfig(false);});
document.getElementById('bg-mode-weather')?.addEventListener('click',e=>{e.stopPropagation();cfg.bgMode='weather';save();syncBgModeUI();applyConfig(false);if(weatherCache)applyWeatherBg(weatherCache.code);});
document.getElementById('bg-mode-auto')?.addEventListener('click',e=>{e.stopPropagation();cfg.bgMode='auto';cfg.darkMode='system';stopWeatherCanvas();save();syncBgModeUI();applyConfig(false);});
document.getElementById('bg-solid')?.addEventListener('click',e=>{e.stopPropagation();cfg.customBgType='solid';save();syncBgModeUI();applyConfig(false);});
document.getElementById('bg-gradient')?.addEventListener('click',e=>{e.stopPropagation();cfg.customBgType='gradient';save();syncBgModeUI();applyConfig(false);});
document.getElementById('tc-color1')?.addEventListener('input',e=>{cfg.customBgColor1=e.target.value;document.getElementById('chip1').style.background=cfg.customBgColor1;document.body.style.background=computeBg();updateBgPreview();save();});
document.getElementById('tc-color2')?.addEventListener('input',e=>{cfg.customBgColor2=e.target.value;const c2=document.getElementById('chip2');if(c2)c2.style.background=cfg.customBgColor2;document.body.style.background=computeBg();updateBgPreview();save();});
document.querySelectorAll('.dir-btn').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();cfg.customBgDir=b.dataset.dir;document.body.style.background=computeBg();updateBgPreview();save();document.querySelectorAll('.dir-btn').forEach(x=>x.classList.toggle('active',x===b));}));
function bindGroup(gid,attr,cfgKey,cssProp,suffix){document.getElementById(gid)?.addEventListener('click',e=>{const btn=e.target.closest('['+attr+']');if(!btn)return;cfg[cfgKey]=+btn.getAttribute(attr);if(cssProp)document.documentElement.style.setProperty(cssProp,cfg[cfgKey]+suffix);save();updateGroup(gid,attr,cfg[cfgKey]);sv('rng-'+cfgKey,'val-'+cfgKey,cfg[cfgKey],suffix);});}
bindGroup('cols-group','data-cols','cols','--cols','');bindGroup('size-group','data-size','size','--card-size','px');bindGroup('gap-group','data-gap','gap','--gap','px');bindGroup('radius-group','data-radius','radius','--card-radius','px');
[['rng-cols','val-cols','cols','--cols',''],['rng-size','val-size','size','--card-size','px'],['rng-gap','val-gap','gap','--gap','px'],['rng-radius','val-radius','radius','--card-radius','px'],['rng-font','val-font','font','--label-size','px'],['rng-clock-font','val-clock-font','clockFont','--clock-font','px'],['rng-greeting-font','val-greeting-font','greetingFont','--greeting-font','px']].forEach(([rid,vid,ck,cp,su])=>{document.getElementById(rid)?.addEventListener('input',e=>{cfg[ck]=+e.target.value;sv(rid,vid,cfg[ck],su);if(cp)document.documentElement.style.setProperty(cp,cfg[ck]+su);save();updateGroup(ck+'-group','data-'+ck,cfg[ck]);});});
document.getElementById('input-greeting')?.addEventListener('input',e=>{cfg.greeting=e.target.value;const gw=document.getElementById('greeting-wrap'),gt=document.getElementById('greeting-text');if(cfg.showGreeting&&cfg.greeting){gw.classList.add('show');gt.textContent=cfg.greeting;}else gw.classList.remove('show');save();applyConfig(true);});
document.getElementById('input-weather-city')?.addEventListener('change',e=>{cfg.weatherCity=e.target.value.trim();weatherCache=null;save();if(cfg.weather)fetchWeather();});
document.getElementById('btn-weather-refresh')?.addEventListener('click',()=>{weatherCache=null;if(cfg.weather)fetchWeather();});
document.getElementById('weather-icon-group')?.addEventListener('click',e=>{const btn=e.target.closest('.pill');if(!btn?.dataset.theme)return;cfg.weatherIconTheme=btn.dataset.theme;save();document.querySelectorAll('#weather-icon-group .pill').forEach(b=>b.classList.toggle('active',b.dataset.theme===cfg.weatherIconTheme));if(weatherCache){renderWeather(weatherCache);renderForecast(weatherCache);}});
document.getElementById('weather-provider-group')?.addEventListener('click',e=>{const btn=e.target.closest('.pill');if(!btn?.dataset.prov)return;cfg.weatherProvider=btn.dataset.prov;save();document.querySelectorAll('#weather-provider-group .pill').forEach(b=>b.classList.toggle('active',b.dataset.prov===cfg.weatherProvider));if(weatherCache)updateProviderLink(weatherCache.city,weatherCache.lat,weatherCache.lon);});
document.getElementById('advanced-toggle')?.addEventListener('click',()=>{document.getElementById('adv-section').classList.toggle('open');document.getElementById('advanced-toggle').classList.toggle('open');});
document.getElementById('btn-export')?.addEventListener('click',()=>{const blob=new Blob([JSON.stringify({links,cfg},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sdx-backup.json';a.click();URL.revokeObjectURL(a.href);showToast('✓ Exported!');});
document.getElementById('btn-import-trigger')?.addEventListener('click',()=>document.getElementById('file-import').click());
document.getElementById('file-import')?.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=ev=>{try{const data=JSON.parse(ev.target.result);if(data.links)links=data.links;if(data.cfg)cfg={...cfg,...data.cfg};save();buildAccents();applyConfig(false);showToast('✓ Imported!');}catch{showToast('⚠ Invalid file');}e.target.value='';};reader.readAsText(file);});

// ── WEATHER ──────────────────────────────────────────────────────────────────
const WEATHER_DESC={0:'Clear sky',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',48:'Freezing fog',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',71:'Light snow',73:'Snow',75:'Heavy snow',77:'Snow grains',80:'Showers',81:'Rain showers',82:'Heavy showers',85:'Snow showers',86:'Heavy snow',95:'Thunderstorm',96:'T-storm',99:'Heavy T-storm'};
const DAYS_SHORT=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let weatherCache=null,weatherCacheTime=0;

function updateProviderLink(city,lat,lon){
  const link=document.getElementById('wp-provider-link');if(!link)return;
  const prov=cfg.weatherProvider||'accuweather';
  let url='';
  if(prov==='wttr')url=`https://wttr.in/${encodeURIComponent(city||'')}`
  else if(prov==='weather')url=`https://weather.com/weather/today/l/${lat},${lon}`
  else url=`https://www.accuweather.com/en/search-locations?query=${encodeURIComponent(city||'')}`
  link.href=url;
}

async function fetchWeather(){
  if(!cfg.weather)return;
  if(weatherCache&&Date.now()-weatherCacheTime<3600000){renderWeather(weatherCache);renderForecast(weatherCache);return;}
  const loadEl=document.getElementById('weather-loading'),contentEl=document.getElementById('weather-content');
  if(loadEl){loadEl.style.display='';loadEl.textContent='⏳';}
  if(contentEl)contentEl.style.display='none';
  try{
    let lat,lon,city=cfg.weatherCity||'';
    if(city){const geo=await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`);const gd=await geo.json();if(!gd.length)throw new Error('Not found');lat=gd[0].lat;lon=gd[0].lon;city=gd[0].display_name.split(',')[0];}
    else{const pos=await new Promise((res,rej)=>navigator.geolocation.getCurrentPosition(res,rej,{timeout:8000}));lat=pos.coords.latitude;lon=pos.coords.longitude;try{const geo=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);const gd=await geo.json();city=gd.address?.city||gd.address?.town||gd.address?.village||'';}catch{}}
    const wr=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,relativehumidity_2m&hourly=temperature_2m,weathercode,precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=celsius&timezone=auto&forecast_days=6`);
    const wData=await wr.json();
    const temp=Math.round(wData.current.temperature_2m),code=wData.current.weathercode;
    const feelsLike=Math.round(wData.current.apparent_temperature??temp);
    const wind=Math.round(wData.current.windspeed_10m??0);
    const humidity=Math.round(wData.current.relativehumidity_2m??0);
    const todayStr=new Date().toISOString().slice(0,10),nowH=new Date().getHours();
    const hi=wData.hourly.time.findIndex(t=>t.startsWith(todayStr)&&new Date(t).getHours()===nowH);
    // 8 slots at 3-hour intervals starting from current
    const hourly=Array.from({length:8},(_,k)=>{const idx=Math.max(0,hi)+k*3;return{time:wData.hourly.time[idx]||'',temp:Math.round(wData.hourly.temperature_2m[idx]??temp),code:wData.hourly.weathercode[idx]??code,rain:wData.hourly.precipitation_probability[idx]??0};});
    const daily=wData.daily.time.slice(1,6).map((d,i)=>({date:d,code:wData.daily.weathercode[i+1],max:Math.round(wData.daily.temperature_2m_max[i+1]),min:Math.round(wData.daily.temperature_2m_min[i+1])}));
    const todayMax=Math.round(wData.daily.temperature_2m_max[0]);
    const todayMin=Math.round(wData.daily.temperature_2m_min[0]);
    const sunrise=wData.daily.sunrise[0]||'';
    const sunset=wData.daily.sunset[0]||'';
    weatherCache={temp,code,city,lat,lon,hourly,daily,todayMax,todayMin,sunrise,sunset,feelsLike,wind,humidity};
    weatherCacheTime=Date.now();
    renderWeather(weatherCache);renderForecast(weatherCache);
    updateProviderLink(city,lat,lon);
    // update weather bg if weather mode active
    if(cfg.bgMode==='weather')applyWeatherBg(code);
  }catch(e){
    if(loadEl){loadEl.style.display='';loadEl.textContent=cfg.weatherCity?'⚠ City not found':'📍 No location';}
    if(contentEl)contentEl.style.display='none';
  }
}

function renderWeather(data){
  const l=document.getElementById('weather-loading'),c=document.getElementById('weather-content');
  if(l)l.style.display='none';if(c)c.style.display='';
  const th=cfg.weatherIconTheme||'color';
  document.getElementById('weather-icon').innerHTML=wSVG(data.code,th,isNight());
  document.getElementById('weather-temp').textContent=`${data.temp}°`;
  document.getElementById('weather-desc').textContent=WEATHER_DESC[data.code]||'';
  document.getElementById('weather-city').textContent=data.city;
}

function renderForecast(data){
  const th=cfg.weatherIconTheme||'color';
  document.getElementById('wp-icon').innerHTML=wSVG(data.code,th,isNight());
  document.getElementById('wp-temp-big').textContent=`${data.temp}°`;
  document.getElementById('wp-desc-big').textContent=WEATHER_DESC[data.code]||'';
  document.getElementById('wp-city-big').textContent=data.city;
  document.getElementById('wp-hi-lo').innerHTML=`<b>↑${data.todayMax}°</b> / <b>↓${data.todayMin}°</b>`;
  // extra stats — compact for right column
  const stats=document.getElementById('wp-stats');
  if(stats){
    const fl=data.feelsLike!=null?`<span>🌡 ${data.feelsLike}°</span>`:'';
    const wi=data.wind!=null?`<span>💨 ${data.wind} km/h</span>`:'';
    const hu=data.humidity!=null?`<span>💧 ${data.humidity}%</span>`:'';
    stats.innerHTML=fl+wi+hu;
  }

  // TEMP PROGRESS BAR — spans from todayMin to todayMax
  // Same color function as 5-day bars
  function barTempColor(t){
    if(t<=0)return'#60a5fa';
    if(t<=15){const r=t/15;return`rgb(${Math.round(96+r*52)},${Math.round(165-r*22)},${Math.round(250-r*66)})`;}
    if(t<=25){const r=(t-15)/10;return`rgb(${Math.round(148+r*103)},${Math.round(143+r*48)},${Math.round(184-r*148)})`;}
    const r=Math.min(1,(t-25)/10);return`rgb(${Math.round(251)},${Math.round(191-r*147)},${Math.round(36-r*36)})`;
  }
  const cTodayMin=barTempColor(data.todayMin),cTodayMax=barTempColor(data.todayMax);
  const todayRange=Math.max(1,data.todayMax-data.todayMin);
  const dotPct=Math.max(0,Math.min(100,(data.temp-data.todayMin)/todayRange*100));
  const fill=document.getElementById('wp-temp-bar-fill');
  const dot=document.getElementById('wp-temp-bar-dot');
  if(fill){
    fill.style.left='0';
    fill.style.width='100%';
    fill.style.background=`linear-gradient(to right,${cTodayMin},${cTodayMax})`;
  }
  if(dot)dot.style.left=dotPct+'%';
  const barMin=document.getElementById('wp-bar-min'),barMax=document.getElementById('wp-bar-max');
  if(barMin)barMin.textContent=data.todayMin+'°';if(barMax)barMax.textContent=data.todayMax+'°';

  // HOURLY CHART
  renderHourlyChart(data.hourly,data.todayMin,data.todayMax,th);

  // SOLAR ARC
  renderSolarArc(data.sunrise,data.sunset);

  // 5-DAY — iOS style: grey track, colored segment positioned relative to all-days range
  const dc=document.getElementById('wp-daily');dc.innerHTML='';
  const allMins=(data.daily||[]).map(d=>d.min);
  const allMaxs=(data.daily||[]).map(d=>d.max);
  const globalMin=Math.min(...allMins);
  const globalMax=Math.max(...allMaxs);
  const globalRange=Math.max(1,globalMax-globalMin);

  // Simple warm/cool color: blue for cold, orange-red for warm
  function tempToColor(t){
    // blue (#60a5fa) at 0°, grey (#94a3b8) at 15°, amber (#fbbf24) at 25°, red (#ef4444) at 35°
    if(t<=0)return'#60a5fa';
    if(t<=15){const r=t/15;return`rgb(${Math.round(96+r*52)},${Math.round(165-r*22)},${Math.round(250-r*66)})`;}
    if(t<=25){const r=(t-15)/10;return`rgb(${Math.round(148+r*103)},${Math.round(143+r*48)},${Math.round(184-r*148)})`;}
    const r=Math.min(1,(t-25)/10);return`rgb(${Math.round(251+r*4)},${Math.round(191-r*147)},${Math.round(36-r*36)})`;
  }

  (data.daily||[]).forEach(day=>{
    const d=document.createElement('div');
    d.style.cssText='display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.05)';
    const dn=DAYS_SHORT[new Date(day.date+'T12:00:00').getDay()];
    // position bar segment relative to global min/max of the 5-day forecast
    const segLeft=((day.min-globalMin)/globalRange*100).toFixed(1);
    const segWidth=((day.max-day.min)/globalRange*100).toFixed(1);
    const cMin=tempToColor(day.min),cMax=tempToColor(day.max);
    const iconSvg=wSVG(day.code,th,false).replace('<svg ','<svg width="20" height="20" ');
    d.innerHTML=`
      <span style="font-size:11px;font-weight:600;color:var(--text);min-width:30px">${dn}</span>
      <span style="flex-shrink:0;display:flex;align-items:center;width:20px;height:20px">${iconSvg}</span>
      <span style="font-size:10px;color:var(--text-muted);min-width:26px;text-align:right">${day.min}°</span>
      <div style="flex:1;height:5px;border-radius:3px;background:rgba(0,0,0,0.08);position:relative">
        <div style="position:absolute;left:${segLeft}%;width:${segWidth}%;height:100%;border-radius:3px;background:linear-gradient(to right,${cMin},${cMax})"></div>
      </div>
      <span style="font-size:10px;color:var(--text-muted);min-width:26px">${day.max}°</span>
    `;
    dc.appendChild(d);
  });

  updateProviderLink(data.city,data.lat,data.lon);
}

function renderHourlyChart(hourly,dayMin,dayMax){
  const svg=document.getElementById('wp-chart-svg');if(!svg||!hourly.length)return;
  const W=320,H=90,pad={top:28,bottom:22,left:4,right:4};
  const th=cfg.weatherIconTheme||'color';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  svg.innerHTML='';
  const usableW=W-pad.left-pad.right,usableH=H-pad.top-pad.bottom;
  const temps=hourly.map(h=>h.temp);
  const mn=Math.min(...temps)-1,mx=Math.max(...temps)+1;
  const xFor=i=>pad.left+i/(hourly.length-1)*usableW;
  const yFor=t=>pad.top+usableH-(t-mn)/(mx-mn)*usableH;
  const pts=hourly.map((h,i)=>({x:xFor(i),y:yFor(h.temp),h}));

  // gradient fill under curve
  const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
  const grad=document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
  grad.setAttribute('id','chartGrad');grad.setAttribute('x1','0');grad.setAttribute('y1','0');grad.setAttribute('x2','0');grad.setAttribute('y2','1');
  const s1=document.createElementNS('http://www.w3.org/2000/svg','stop');s1.setAttribute('offset','0%');s1.setAttribute('stop-color','#3b82f6');s1.setAttribute('stop-opacity','0.15');
  const s2=document.createElementNS('http://www.w3.org/2000/svg','stop');s2.setAttribute('offset','100%');s2.setAttribute('stop-color','#3b82f6');s2.setAttribute('stop-opacity','0');
  grad.appendChild(s1);grad.appendChild(s2);defs.appendChild(grad);svg.appendChild(defs);

  // build smooth bezier path
  let d=`M ${pts[0].x} ${pts[0].y}`;
  for(let i=1;i<pts.length;i++){
    const prev=pts[i-1],cur=pts[i];
    const cpx=(prev.x+cur.x)/2;
    d+=` C ${cpx} ${prev.y} ${cpx} ${cur.y} ${cur.x} ${cur.y}`;
  }
  // fill area
  const fillPath=document.createElementNS('http://www.w3.org/2000/svg','path');
  fillPath.setAttribute('d',d+` L ${pts[pts.length-1].x} ${H} L ${pts[0].x} ${H} Z`);
  fillPath.setAttribute('fill','url(#chartGrad)');svg.appendChild(fillPath);
  // line
  const line=document.createElementNS('http://www.w3.org/2000/svg','path');
  line.setAttribute('d',d);line.setAttribute('fill','none');line.setAttribute('stroke','#3b82f6');line.setAttribute('stroke-width','1.8');line.setAttribute('stroke-linecap','round');
  svg.appendChild(line);

  // points + labels
  pts.forEach((p,i)=>{
    const hr=p.h.time?new Date(p.h.time).getHours():-1;
    const label=i===0?'Now':(hr>=0?hr+':00':'');
    // weather icon (tiny, above temp)
    const fo=document.createElementNS('http://www.w3.org/2000/svg','foreignObject');
    fo.setAttribute('x',p.x-9);fo.setAttribute('y',p.y-46);fo.setAttribute('width','18');fo.setAttribute('height','18');
    const div=document.createElement('div');div.style.cssText='width:18px;height:18px;display:flex;align-items:center;justify-content:center';
    div.innerHTML=wSVG(p.h.code,th,hr<6||hr>=20);svg.appendChild(fo);fo.appendChild(div);
    // temp — raised above icon
    const t=document.createElementNS('http://www.w3.org/2000/svg','text');
    t.setAttribute('x',p.x);t.setAttribute('y',p.y-8);
    t.setAttribute('text-anchor','middle');t.setAttribute('font-size','9');
    t.setAttribute('fill','currentColor');t.setAttribute('font-family','DM Sans,sans-serif');t.setAttribute('font-weight','500');
    t.style.fill='var(--text)';t.textContent=p.h.temp+'°';svg.appendChild(t);
    // dot
    const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx',p.x);circle.setAttribute('cy',p.y);circle.setAttribute('r',i===0?4:3);
    circle.setAttribute('fill',i===0?'#3b82f6':'rgba(59,130,246,0.5)');circle.setAttribute('stroke','white');circle.setAttribute('stroke-width','1.5');
    svg.appendChild(circle);
    // time label bottom
    const tl=document.createElementNS('http://www.w3.org/2000/svg','text');
    tl.setAttribute('x',p.x);tl.setAttribute('y',H-2);
    tl.setAttribute('text-anchor','middle');tl.setAttribute('font-size','8');
    tl.setAttribute('font-family','DM Sans,sans-serif');tl.style.fill='var(--text-muted)';
    tl.textContent=label;svg.appendChild(tl);
  });
}

function renderSolarArc(sunriseStr,sunsetStr){
  const svg=document.getElementById('wp-solar-svg');if(!svg)return;
  const W=320,H=60;svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.innerHTML='';
  const night=isNight();
  const isDark=document.body.classList.contains('dark');
  const lineColor=isDark?'rgba(255,255,255,0.18)':'rgba(0,0,0,0.1)';
  const arcColor=isDark?'rgba(255,255,255,0.14)':'rgba(0,0,0,0.08)';
  const parseTime=str=>{if(!str)return null;const d=new Date(str);return d.getHours()*60+d.getMinutes();};
  const riseMin=parseTime(sunriseStr);const setMin=parseTime(sunsetStr);
  const nowMin=new Date().getHours()*60+new Date().getMinutes();
  const fmt=str=>{if(!str)return'--:--';const d=new Date(str);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');};
  document.getElementById('wp-sunrise-label').querySelector('span').textContent=fmt(sunriseStr);
  document.getElementById('wp-sunset-label').querySelector('span').textContent=fmt(sunsetStr);
  const pad=20,cx=W/2,cy=H-2,rx=(W-pad*2)/2,ry=H-10;
  // Defs + clip
  const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
  const cp=document.createElementNS('http://www.w3.org/2000/svg','clipPath');cp.setAttribute('id','solarClip');
  const crect=document.createElementNS('http://www.w3.org/2000/svg','rect');crect.setAttribute('x',0);crect.setAttribute('y',0);crect.setAttribute('width',W);crect.setAttribute('height',cy);
  cp.appendChild(crect);defs.appendChild(cp);svg.appendChild(defs);
  // BG arc
  const bgArc=document.createElementNS('http://www.w3.org/2000/svg','ellipse');
  bgArc.setAttribute('cx',cx);bgArc.setAttribute('cy',cy);bgArc.setAttribute('rx',rx);bgArc.setAttribute('ry',ry);
  bgArc.setAttribute('fill','none');bgArc.setAttribute('stroke',arcColor);bgArc.setAttribute('stroke-width','2');
  bgArc.setAttribute('stroke-dasharray','4 4');bgArc.setAttribute('clip-path','url(#solarClip)');svg.appendChild(bgArc);
  if(night){
    // Show moon emoji + phase name centered
    const mp=getMoonPhase();
    const moonT=document.createElementNS('http://www.w3.org/2000/svg','text');
    moonT.setAttribute('x',cx);moonT.setAttribute('y',cy-22);moonT.setAttribute('text-anchor','middle');moonT.setAttribute('font-size','24');
    moonT.textContent=mp.icon;svg.appendChild(moonT);
    const moonL=document.createElementNS('http://www.w3.org/2000/svg','text');
    moonL.setAttribute('x',cx);moonL.setAttribute('y',cy-4);moonL.setAttribute('text-anchor','middle');moonL.setAttribute('font-size','9');
    moonL.setAttribute('font-family','DM Sans,sans-serif');moonL.style.fill='var(--text-muted)';
    moonL.textContent=mp.name;svg.appendChild(moonL);
  } else if(riseMin!==null&&setMin!==null){
    let prog=nowMin<riseMin?0:nowMin>setMin?1:(nowMin-riseMin)/(setMin-riseMin);
    const angle=Math.PI*(1-prog);
    const sunX=cx+Math.cos(angle)*rx,sunY=cy-Math.abs(Math.sin(angle))*ry;
    if(prog>0&&prog<1){
      const x1=cx+Math.cos(Math.PI)*rx,y1=cy+Math.sin(Math.PI)*ry;
      const x2=sunX,y2=sunY;
      const pp=document.createElementNS('http://www.w3.org/2000/svg','path');
      pp.setAttribute('d',`M ${x1} ${y1} A ${rx} ${ry} 0 0 1 ${x2} ${y2}`);
      pp.setAttribute('fill','none');pp.setAttribute('stroke','#fbbf24');pp.setAttribute('stroke-width','2');pp.setAttribute('stroke-linecap','round');
      svg.appendChild(pp);
    }
    // Sun glow filter
    const gf=document.createElementNS('http://www.w3.org/2000/svg','filter');gf.setAttribute('id','sg');gf.setAttribute('x','-60%');gf.setAttribute('y','-60%');gf.setAttribute('width','220%');gf.setAttribute('height','220%');
    const fe=document.createElementNS('http://www.w3.org/2000/svg','feGaussianBlur');fe.setAttribute('stdDeviation','3');fe.setAttribute('result','b');gf.appendChild(fe);
    const fm=document.createElementNS('http://www.w3.org/2000/svg','feMerge');
    ['b','SourceGraphic'].forEach(inp=>{const n=document.createElementNS('http://www.w3.org/2000/svg','feMergeNode');n.setAttribute('in',inp);fm.appendChild(n);});
    gf.appendChild(fm);defs.appendChild(gf);
    const sc=document.createElementNS('http://www.w3.org/2000/svg','circle');
    sc.setAttribute('cx',sunX);sc.setAttribute('cy',sunY);sc.setAttribute('r','7');sc.setAttribute('fill','#fbbf24');sc.setAttribute('filter','url(#sg)');svg.appendChild(sc);
  }
  // Horizon line
  const hl=document.createElementNS('http://www.w3.org/2000/svg','line');
  hl.setAttribute('x1',pad);hl.setAttribute('y1',cy);hl.setAttribute('x2',W-pad);hl.setAttribute('y2',cy);
  hl.setAttribute('stroke',lineColor);hl.setAttribute('stroke-width','1');svg.appendChild(hl);
}

// weather popup open
document.getElementById('weather-card')?.addEventListener('click',()=>{
  if(!weatherCache){fetchWeather();return;}
  renderForecast(weatherCache);
  document.getElementById('weather-popup').classList.add('open');
});
let weatherPinned=false;
document.getElementById('wp-pin')?.addEventListener('click',e=>{
  e.stopPropagation();
  weatherPinned=!weatherPinned;
  const btn=document.getElementById('wp-pin');
  if(btn){btn.style.color=weatherPinned?'#ef4444':'rgba(0,0,0,0.2)';}
});
document.getElementById('wp-refresh')?.addEventListener('click',e=>{e.stopPropagation();weatherCache=null;fetchWeather();});
document.getElementById('weather-widget-refresh')?.addEventListener('click',e=>{e.stopPropagation();weatherCache=null;fetchWeather();});
document.getElementById('wp-close')?.addEventListener('click',()=>{weatherPinned=false;const btn=document.getElementById('wp-pin');if(btn){btn.style.color='rgba(0,0,0,0.2)';}document.getElementById('weather-popup').classList.remove('open');});
document.addEventListener('click',e=>{const popup=document.getElementById('weather-popup'),card=document.getElementById('weather-card');if(!weatherPinned&&popup?.classList.contains('open')&&!popup.contains(e.target)&&!card?.contains(e.target))popup.classList.remove('open');});

// ── MODALS ────────────────────────────────────────────────────────────────────
let pickedIconUrl=null;
function showModalIcon(domain,emojiVal){const prev=document.getElementById('modal-fav-preview'),fb=document.getElementById('modal-fav-fallback');if(emojiVal&&isEmoji(emojiVal)){prev.style.display='none';fb.style.display='flex';fb.style.background='transparent';fb.style.fontSize='28px';fb.textContent=emojiVal;return;}if(!domain){prev.style.display='none';fb.style.display='none';return;}const src=pickedIconUrl||`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=64`;prev.onerror=()=>{prev.style.display='none';fb.style.display='flex';fb.textContent=(domain.charAt(0)||'?').toUpperCase();fb.style.background=colorFor(domain);};prev.src=src;prev.style.display='block';fb.style.display='none';}
function buildIconPicker(domain){const picker=document.getElementById('icon-picker');picker.innerHTML='';if(!domain)return;const sources={...(KNOWN_ICONS[domain]?{'Official':KNOWN_ICONS[domain]}:{}),'gstatic':`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=64`,'Google':`https://www.google.com/s2/favicons?sz=64&domain_url=https://${domain}`,'DDG':`https://icons.duckduckgo.com/ip3/${domain}.ico`};Object.entries(sources).forEach(([label,src])=>{const wrap=document.createElement('div');wrap.style.cssText='display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;padding:6px;border-radius:8px;transition:background .15s';const img=document.createElement('img');img.src=src;img.style.cssText='width:32px;height:32px;object-fit:contain;border-radius:6px';img.onerror=()=>wrap.style.display='none';const lbl=document.createElement('span');lbl.textContent=label;lbl.style.cssText='font-size:9px;color:var(--text-muted)';wrap.appendChild(img);wrap.appendChild(lbl);wrap.addEventListener('click',()=>{pickedIconUrl=src;document.getElementById('modal-fav-preview').src=src;document.getElementById('modal-fav-preview').style.display='block';document.getElementById('modal-fav-fallback').style.display='none';document.getElementById('input-emoji').value='';picker.querySelectorAll('div').forEach(d=>{d.style.outline='';});wrap.style.outline='2px solid var(--accent)';});picker.appendChild(wrap);});}
function openModal(idx){editingIndex=idx;pickedIconUrl=null;document.getElementById('modal-title').textContent=idx===-1?'Add link':'Edit link';document.getElementById('input-url').value=idx===-1?'':(links[idx].url||'');document.getElementById('input-name').value=idx===-1?'':(links[idx].name||'');document.getElementById('input-emoji').value=idx===-1?'':(links[idx].emoji||'');document.getElementById('input-badge').checked=idx===-1?false:!!(links[idx].badge);pickedIconUrl=idx===-1?null:(links[idx].iconUrl||null);document.getElementById('icon-picker').style.display='none';showModalIcon(getDomain(document.getElementById('input-url').value),document.getElementById('input-emoji').value);document.getElementById('modal-overlay').classList.add('open');setTimeout(()=>document.getElementById('input-url').focus(),40);}
document.getElementById('btn-pick-icon')?.addEventListener('click',()=>{const p=document.getElementById('icon-picker');if(p.style.display!=='none'){p.style.display='none';return;}buildIconPicker(getDomain(document.getElementById('input-url').value));p.style.display='flex';});
document.getElementById('input-url')?.addEventListener('input',e=>{const n=document.getElementById('input-name');showModalIcon(getDomain(e.target.value),document.getElementById('input-emoji').value);if(!n.value){try{const h=new URL(e.target.value).hostname.replace('www.','').split('.')[0];n.value=h.charAt(0).toUpperCase()+h.slice(1);}catch{}}});
document.getElementById('input-emoji')?.addEventListener('input',e=>{showModalIcon(getDomain(document.getElementById('input-url').value),e.target.value);if(e.target.value)pickedIconUrl=null;});
document.getElementById('btn-cancel')?.addEventListener('click',()=>{document.getElementById('modal-overlay').classList.remove('open');document.getElementById('icon-picker').style.display='none';});
document.getElementById('modal-overlay')?.addEventListener('click',e=>{if(e.target===e.currentTarget){document.getElementById('modal-overlay').classList.remove('open');document.getElementById('icon-picker').style.display='none';}});
document.getElementById('btn-save')?.addEventListener('click',()=>{let url=document.getElementById('input-url').value.trim();const name=document.getElementById('input-name').value.trim(),emoji=document.getElementById('input-emoji').value.trim();const badge=document.getElementById('input-badge').checked;if(!url)return;if(!url.startsWith('http'))url='https://'+url;const fn=name||new URL(url).hostname.replace('www.','');const entry={name:fn,url};if(emoji)entry.emoji=emoji;else if(pickedIconUrl)entry.iconUrl=pickedIconUrl;if(badge)entry.badge=true;if(editingIndex===-1)links.push(entry);else links[editingIndex]=entry;save();render();document.getElementById('modal-overlay').classList.remove('open');document.getElementById('icon-picker').style.display='none';});
let editingSepIndex=-1;
function openSepModal(idx){editingSepIndex=idx;document.getElementById('input-sep-label').value=idx===-1?'':(links[idx].label||'');document.getElementById('sep-modal-overlay').classList.add('open');setTimeout(()=>document.getElementById('input-sep-label').focus(),40);}
document.getElementById('sep-btn-cancel')?.addEventListener('click',()=>document.getElementById('sep-modal-overlay').classList.remove('open'));
document.getElementById('sep-modal-overlay')?.addEventListener('click',e=>{if(e.target===e.currentTarget)document.getElementById('sep-modal-overlay').classList.remove('open');});
document.getElementById('sep-btn-save')?.addEventListener('click',()=>{const label=document.getElementById('input-sep-label').value.trim();if(editingSepIndex===-1)links.push({sep:true,label});else links[editingSepIndex]={sep:true,label};save();render();document.getElementById('sep-modal-overlay').classList.remove('open');});

// ── SEARCH ────────────────────────────────────────────────────────────────────
document.getElementById('search-input')?.addEventListener('keydown',e=>{if(e.key==='Enter'){const q=e.target.value.trim();if(q)window.location.href=ENGINES[cfg.engine](q);}});
document.addEventListener('keydown',e=>{if(!cfg.search)return;const si=document.getElementById('search-input');if(document.activeElement===si)return;if(document.getElementById('modal-overlay').classList.contains('open'))return;const tag=document.activeElement.tagName;if(tag==='INPUT'||tag==='TEXTAREA')return;if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)si.focus();});

// ── CLOCK ─────────────────────────────────────────────────────────────────────
function updateClock(){if(!cfg.clock)return;const now=new Date();document.getElementById('clock-time').textContent=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],months=['January','February','March','April','May','June','July','August','September','October','November','December'];document.getElementById('clock-date').textContent=`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;}
let clockInterval=null;
function startClock(){updateClock();if(clockInterval)clearInterval(clockInterval);clockInterval=setInterval(updateClock,1000);}
function stopClock(){if(clockInterval){clearInterval(clockInterval);clockInterval=null;}}
function getMoonPhase(){
  const now=new Date();
  const d=now.getDate(),m=now.getMonth()+1,y=now.getFullYear();
  // Simple moon age calculation (Meeus)
  const jd=367*y-Math.floor(7*(y+Math.floor((m+9)/12))/4)+Math.floor(275*m/9)+d+1721013.5;
  const age=(jd-2451550.1)%29.530588;
  const phase=age<0?age+29.530588:age;
  if(phase<1.85)return{icon:'🌑',name:'New Moon'};
  if(phase<7.38)return{icon:'🌒',name:'Waxing Crescent'};
  if(phase<9.22)return{icon:'🌓',name:'First Quarter'};
  if(phase<14.77)return{icon:'🌔',name:'Waxing Gibbous'};
  if(phase<16.61)return{icon:'🌕',name:'Full Moon'};
  if(phase<22.15)return{icon:'🌖',name:'Waning Gibbous'};
  if(phase<24.0)return{icon:'🌗',name:'Last Quarter'};
  if(phase<29.53)return{icon:'🌘',name:'Waning Crescent'};
  return{icon:'🌑',name:'New Moon'};
}
function updateMoonPhase(){
  const moonEl=document.getElementById('moon-phase');if(!moonEl)return;
  const night=isNight();
  moonEl.style.display=night&&cfg.clock?'flex':'none';
  if(night){const mp=getMoonPhase();moonEl.title=mp.name;moonEl.textContent=mp.icon;}
}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTid);toastTid=setTimeout(()=>t.classList.remove('show'),2200);}

// ── INIT ──────────────────────────────────────────────────────────────────────
try{if(localStorage.getItem('sdx_fav_ver')!=='15'){localStorage.removeItem(FAV_CACHE_KEY);localStorage.setItem('sdx_fav_ver','15');}}catch(e){}
loadFavCache();load();buildAccents();applyConfig(true);render();
if(cfg.clock)startClock();
if(cfg.weather)fetchWeather();
