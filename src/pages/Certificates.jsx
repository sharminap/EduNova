import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Award, Download, CheckCircle2, Share2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Certificates = () => {
  const { user } = useAuth();
  const toast = useToast();

  const certificates = user?.certificates || [];

  const handleDownload = (cert) => {
    confetti({ particleCount: 70, spread: 60 });
    toast.success(`Generated official PDF Certificate for "${cert.courseTitle.substring(0, 25)}..."`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-400" />
          Verified Certificates & Credentials
        </h1>
        <p className="text-xs text-slate-400">Share your achievements directly on LinkedIn or download verifiable PDF credentials.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="glass-panel p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>EduNova Verified Credential</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{cert.verificationCode}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Certificate of Completion</span>
              <h3 className="text-base font-extrabold text-white leading-snug">{cert.courseTitle}</h3>
              <p className="text-xs text-slate-300">Awarded to <strong className="text-amber-300">{user?.name}</strong> on {cert.issueDate}</p>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 text-slate-400">
              <span>Instructor: {cert.instructorName}</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleDownload(cert)}
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-amber-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Certificate</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`https://edunova.com/verify/${cert.verificationCode}`);
                  toast.success('Certificate link copied for LinkedIn!');
                }}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors"
                title="Share to LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
