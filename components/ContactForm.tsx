import React, { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<
    'idle' | 'transmitting' | 'success' | 'error'
  >('idle');

  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS Credentials
  const SERVICE_ID = 'service_qmmtwjn';
  const TEMPLATE_ID = 'template_s8synjg';
  const PUBLIC_KEY = 'ogcjElzeQMV0_7oHb';

  useEffect(() => {
    init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('transmitting');
    setErrorMessage('');

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      message: formState.message,
      reply_to: formState.email,
    };

    try {
      const result = await send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');

        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(result.text);
      }
    } catch (error: any) {
      let msg = 'Unable to send message. Please try again later.';

      if (error?.text) {
        msg = error.text;
      } else if (error?.message) {
        msg = error.message;
      }

      setErrorMessage(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center animate-premium">

        <div className="w-20 h-20 bg-emerald-500 text-white flex items-center justify-center mx-auto mb-8 rounded-3xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h3 className="text-3xl font-display font-bold text-white mb-3">
          Message Sent Successfully
        </h3>

        <p className="text-neutral-500 max-w-sm mx-auto mb-10 text-sm leading-relaxed">
          Thank you for reaching out.
          Your message has been successfully delivered and
          Yuvaraj Ramalingam will review your inquiry shortly.
        </p>

        <button
          onClick={() => setStatus('idle')}
          className="px-8 py-3 bg-brand-primary/10 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all"
        >
          Send Another Message
        </button>

      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">

      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-left"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">
              Full Name
            </label>

            <input
              required
              type="text"
              placeholder="Your Full Name"
              value={formState.name}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  name: e.target.value,
                })
              }
              className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">
              Email Address
            </label>

            <input
              required
              type="email"
              placeholder="Your Email Address"
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-700"
            />
          </div>

        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">
            Subject
          </label>

          <input
            required
            type="text"
            placeholder="Project Inquiry"
            value={formState.subject}
            onChange={(e) =>
              setFormState({
                ...formState,
                subject: e.target.value,
              })
            }
            className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-700"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest ml-1">
            Message
          </label>

          <textarea
            required
            rows={6}
            placeholder="Tell me about your business, project, goals or requirements..."
            value={formState.message}
            onChange={(e) =>
              setFormState({
                ...formState,
                message: e.target.value,
              })
            }
            className="w-full bg-neutral-900 border border-brand-border rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-primary transition-all placeholder:text-neutral-700 resize-none"
          />
        </div>

        {status === 'error' && (
          <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-xl">

            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              Message Delivery Failed
            </p>

            <p className="text-red-400 text-xs leading-relaxed">
              {errorMessage}
            </p>

          </div>
        )}

        <button
          type="submit"
          disabled={status === 'transmitting'}
          className="group w-full py-5 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-[0.3em] transition-all hover:bg-brand-primary hover:text-white disabled:opacity-50 active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3"
        >
          {status === 'transmitting'
            ? 'Sending Message...'
            : 'Send Message'}
        </button>

      </form>

    </div>
  );
};

export default ContactForm;
