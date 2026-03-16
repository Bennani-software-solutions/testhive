import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Video, Calendar, ArrowLeft, Copy, Check } from 'lucide-react';
import { generateICS } from '../utils/calendar';

export default function Meeting() {
  const { room } = useParams();
  const [phase, setPhase] = useState('lobby'); // lobby | meeting | ended
  const [copied, setCopied] = useState(false);
  const jitsiContainer = useRef(null);
  const apiRef = useRef(null);

  const meetingUrl = `${window.location.origin}/meeting/${room}`;
  const jitsiRoom = room;

  useEffect(() => {
    if (phase !== 'meeting') return;

    let api = null;

    const initJitsi = () => {
      if (!jitsiContainer.current) return;

      api = new window.JitsiMeetExternalAPI('meet.jit.si', {
        roomName: jitsiRoom,
        parentNode: jitsiContainer.current,
        width: '100%',
        height: '100%',
        configOverwrite: {
          prejoinPageEnabled: false,
          startWithAudioMuted: true,
          startWithVideoMuted: false,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_BRAND_WATERMARK: false,
          BRAND_WATERMARK_LINK: '',
          SHOW_POWERED_BY: false,
        },
      });

      apiRef.current = api;

      api.addEventListener('readyToClose', () => {
        setPhase('ended');
      });
    };

    if (window.JitsiMeetExternalAPI) {
      initJitsi();
    } else {
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      script.onload = initJitsi;
      document.head.appendChild(script);
    }

    return () => {
      if (api) {
        api.dispose();
        apiRef.current = null;
      }
    };
  }, [phase, jitsiRoom]);

  const handleJoin = () => setPhase('meeting');

  const handleCopy = () => {
    navigator.clipboard.writeText(meetingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCalendarDownload = () => {
    generateICS({
      title: 'TestHive Consultation',
      description: `Join the meeting at: ${meetingUrl}`,
      location: meetingUrl,
      startDate: new Date(),
      durationMinutes: 30,
    });
  };

  // Lobby
  if (phase === 'lobby') {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
            <Video className="h-8 w-8 text-indigo-600" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">TestHive Consultation</h1>
          <p className="mt-2 text-sm text-slate-500">You're about to join a video meeting</p>

          <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">
              Meeting Room
            </p>
            <p className="text-sm font-mono text-slate-700 break-all">{room}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleJoin}
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white transition active:scale-95"
            >
              Join Meeting
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleCalendarDownload}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                <Calendar className="h-4 w-4" />
                Add to Calendar
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? 'Copied' : 'Copy Link'}
              </button>
            </div>
          </div>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Meeting ended
  if (phase === 'ended') {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
            <Check className="h-8 w-8 text-emerald-600" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">Meeting Ended</h1>
          <p className="mt-2 text-sm text-slate-500">
            Thank you for joining the consultation. We'll follow up with next steps via email.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Active meeting
  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
      <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 border-b border-slate-800">
        <Video className="h-4 w-4 text-indigo-400" />
        <span className="text-sm font-medium text-white">TestHive Consultation</span>
        <span className="text-xs text-slate-400 font-mono ml-auto">{room}</span>
      </div>
      <div ref={jitsiContainer} className="flex-1" />
    </div>
  );
}
