import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

// Extend window interface for Facebook Pixel
declare global {
    interface Window {
        fbq: any;
    }
}

type FormData = {
    faturamento: string;
    investimento: string;
    instagram: string;
    ramo: string;
    faz_trafego: string;
    objetivo: string;
    nome: string;
    email: string;
    telefone: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
};

const LeadQuiz: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 8;
    const [formData, setFormData] = useState<FormData>({
        faturamento: '',
        investimento: '',
        instagram: '',
        ramo: '',
        faz_trafego: '',
        objetivo: '',
        nome: '',
        email: '',
        telefone: '',
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: '',
    });
    const [honeypot, setHoneypot] = useState(''); // Spam honeypot
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Auto-scroll to top when step changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    // Clear error automatically
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    // Capture UTM Parameters
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const utms = {
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_term: params.get('utm_term') || '',
            utm_content: params.get('utm_content') || '',
        };

        // Only update if at least one UTM is present to avoid unnecessary re-renders or overwrites
        if (Object.values(utms).some(val => val !== '')) {
            setFormData(prev => ({ ...prev, ...utms }));
        }
    }, []);

    // Enter key support
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                const currentStepEl = document.querySelector(`.step[data-step="${currentStep}"]`);
                if (currentStepEl) {
                    const inputs = currentStepEl.querySelectorAll('input');
                    if (inputs.length > 0) {
                        const lastInput = inputs[inputs.length - 1] as HTMLInputElement;
                        if (document.activeElement === lastInput || inputs.length === 1) {
                            if (currentStep === 7) {
                                submitForm();
                            } else {
                                nextStep();
                            }
                        }
                    }
                }
            }
        };

        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [currentStep, formData]); // Add dependencies to ensure updated validations

    const updateFormData = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (error) setError(null);
    };

    const selectOption = (field: keyof FormData, value: string) => {
        updateFormData(field, value);
        // Small delay for visual feedback if needed, but immediate is snappier
        nextStep();
    };

    // Validation Helpers
    const validateInstagram = (username: string) => {
        // Remove @, spaces, and common URL prefixes
        const clean = username
            .trim()
            .replace(/^@/, '')
            .replace(/^(https?:\/\/)?(www\.)?instagram\.com\//, '')
            .replace(/\/$/, '');

        // Instagram Rules:
        // - 1-30 chars
        // - Letters, numbers, periods, underscores
        // - No spaces (handled by trim)
        const regex = /^[a-zA-Z0-9._]{1,30}$/;
        return regex.test(clean);
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone: string) => {
        // Remove non-digits
        const digits = phone.replace(/\D/g, '');
        // Check for valid length (10 or 11 digits for Brazil)
        return digits.length >= 10 && digits.length <= 11;
    };



    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only digits and formatting chars, but we'll strip them for masking
        const digits = value.replace(/\D/g, '');
        // Limit to 11 digits
        const limitedDigits = digits.slice(0, 11);

        let formatted = limitedDigits;
        if (limitedDigits.length > 2) {
            formatted = `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2)}`;
        }
        if (limitedDigits.length > 6) {
            formatted = `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2, 7)}${limitedDigits.length > 7 ? '-' + limitedDigits.slice(7) : ''}`;
        }
        // Actually simpler approach for strict "while typing" mask:
        const v = limitedDigits;
        if (v.length > 10) {
            formatted = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
        } else if (v.length > 6) {
            formatted = `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
        } else if (v.length > 2) {
            formatted = `(${v.slice(0, 2)}) ${v.slice(2)}`;
        } else if (v.length > 0) {
            formatted = `(${v}`;
        }

        updateFormData('telefone', formatted);
    };

    const validateStep = (step: number) => {
        if (step === 3) {
            if (!formData.instagram || formData.instagram.length < 3) {
                setError('Por favor, informe seu Instagram.');
                return false;
            }
            if (!validateInstagram(formData.instagram)) {
                setError('Instagram inválido. Use apenas letras, números, ponto (.) e underline (_).');
                return false;
            }
        }
        if (step === 4) {
            if (!formData.ramo || formData.ramo.length < 3) {
                setError('Por favor, informe o ramo da sua empresa.');
                return false;
            }
        }
        if (step === 7) {
            if (!formData.nome || formData.nome.trim().split(' ').length < 2) {
                setError('Por favor, digite seu nome completo (nome e sobrenome).');
                return false;
            }
            if (!validateEmail(formData.email)) {
                setError('Por favor, insira um e-mail válido.');
                return false;
            }
            if (!validatePhone(formData.telefone)) {
                setError('Por favor, insira um WhatsApp válido com DDD (ex: 11 99999-9999).');
                return false;
            }
        }
        return true;
    };

    const nextStep = () => {
        if (!validateStep(currentStep)) return;
        setCurrentStep((prev) => prev + 1);
    };

    const submitForm = async () => {
        if (!validateStep(currentStep)) return;

        // Honeypot check - if filled, silent reject (bot detected)
        if (honeypot) {
            console.log('Spam attempt detected');
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setCurrentStep(8); // Fake success
            }, 1000);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://dev-manager-01-n8n.ekupxt.easypanel.host/webhook/leadssite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                    source: 'quiz-site'
                }),
            });

            if (!response.ok) {
                throw new Error('Falha ao enviar dados.');
            }

            // console.log('Form Submitted Successfully'); // Removed PII log

            // Pixel Event Logic - Fire only after success
            if (typeof window.fbq === 'function') {
                const isRevenueQualified =
                    formData.faturamento === 'R$ 50k - 200k / mês' ||
                    formData.faturamento === 'Acima de R$ 200k / mês';

                // Investimento options are stored as values: '5k', '5k+'
                const isInvestmentQualified =
                    formData.investimento === '5k' ||
                    formData.investimento === '5k+';

                if (isRevenueQualified && isInvestmentQualified) {
                    window.fbq('trackCustom', 'Lead_qualificado', {
                        category: 'Submission',
                        revenue: formData.faturamento,
                        investment: formData.investimento
                    });
                } else {
                    window.fbq('trackCustom', 'Lead_desqualificado', {
                        category: 'Submission',
                        revenue: formData.faturamento,
                        investment: formData.investimento
                    });
                }
            }

            setCurrentStep(8);
        } catch (err) {
            console.error('Submission Error:', err);
            setError('Ocorreu um erro ao enviar. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

    // Animation variants
    const slideVariants = {
        enter: { opacity: 0, x: 20 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative bg-quiz-dark font-sans text-white p-4 md:p-6">
            {/* Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-quiz-primary/20 rounded-full blur-[80px] md:blur-[128px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-quiz-accent/20 rounded-full blur-[80px] md:blur-[128px]"></div>

            {/* Exit Button */}
            <Link
                to="/"
                className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] p-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-full transition-all backdrop-blur-sm shadow-lg border border-white/5"
                aria-label="Voltar ao site"
            >
                <X size={24} />
            </Link>

            {/* Honeypot Field (Hidden) */}
            <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
            />

            {/* Error Toast */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[60] bg-red-500/90 text-white px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm border border-red-400/50 flex items-center gap-3"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{error}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Progress Bar - Fixed Top */}
            {currentStep < 8 && (
                <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-800/50 z-50 backdrop-blur-sm">
                    <div
                        className="h-full bg-gradient-to-r from-quiz-primary to-quiz-accent transition-all duration-500 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}


            {/* Main Container */}
            <div className="w-full max-w-md md:max-w-lg relative z-10">

                {/* Steps */}
                <div className="min-h-[350px] md:min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {/* Step 1: Faturamento */}
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                className="step w-full"
                                data-step="1"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Qual é o <span className="text-quiz-primary">faturamento atual</span> da sua empresa?
                                </h2>
                                <div className="space-y-3">
                                    {['R$ 0 - 10k / mês', 'R$ 10k - 50k / mês', 'R$ 50k - 200k / mês', 'Acima de R$ 200k / mês'].map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            className="option-btn w-full p-3 md:p-4 rounded-xl bg-quiz-secondary/30 border border-quiz-secondary hover:bg-quiz-primary hover:text-white transition-all duration-300 text-left text-base md:text-lg font-medium active:scale-[0.98]"
                                            onClick={() => selectOption('faturamento', opt)}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Investimento */}
                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                className="step w-full"
                                data-step="2"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Quanto pretende <span className="text-quiz-primary">investir</span> em tráfego pago?
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { val: '1k', label: 'Até R$ 1.000 / mês' },
                                        { val: '2k', label: 'R$ 1.000 a R$ 2.000' },
                                        { val: '5k', label: 'R$ 2.000 a R$ 5.000' },
                                        { val: '5k+', label: 'Acima de R$ 5.000' },
                                    ].map((opt) => (
                                        <button
                                            key={opt.val}
                                            type="button"
                                            className="option-btn w-full p-3 md:p-4 rounded-xl bg-quiz-secondary/30 border border-quiz-secondary hover:bg-quiz-primary hover:text-white transition-all duration-300 text-left text-base md:text-lg font-medium active:scale-[0.98]"
                                            onClick={() => selectOption('investimento', opt.val)}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Instagram */}
                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                className="step w-full"
                                data-step="3"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Qual o <span className="text-quiz-primary">Instagram</span> da sua empresa?
                                </h2>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="@seu.perfil"
                                        className="w-full p-3 md:p-4 rounded-xl text-base md:text-lg text-center bg-quiz-secondary/20 border-quiz-secondary focus:ring-2 focus:ring-quiz-primary transition-all text-white border outline-none placeholder:text-gray-400"
                                        value={formData.instagram}
                                        onChange={(e) => updateFormData('instagram', e.target.value)}
                                        autoFocus
                                    />
                                    <button
                                        type="button"
                                        className="w-full p-3 md:p-4 rounded-xl bg-quiz-primary text-white font-bold text-base md:text-lg hover:bg-blue-400 transition-all shadow-lg shadow-quiz-primary/30 transform hover:-translate-y-1 active:scale-[0.98]"
                                        onClick={nextStep}
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Ramo */}
                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                className="step w-full"
                                data-step="4"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Qual é o <span className="text-quiz-primary">ramo</span> da sua empresa?
                                </h2>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Ex: E-commerce, Clínica, Imobiliária..."
                                        className="w-full p-3 md:p-4 rounded-xl text-base md:text-lg text-center bg-quiz-secondary/20 border-quiz-secondary focus:ring-2 focus:ring-quiz-primary transition-all text-white border outline-none placeholder:text-gray-400"
                                        value={formData.ramo}
                                        onChange={(e) => updateFormData('ramo', e.target.value)}
                                        autoFocus
                                    />
                                    <button
                                        type="button"
                                        className="w-full p-3 md:p-4 rounded-xl bg-quiz-primary text-white font-bold text-base md:text-lg hover:bg-blue-400 transition-all shadow-lg shadow-quiz-primary/30 transform hover:-translate-y-1 active:scale-[0.98]"
                                        onClick={nextStep}
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 5: Faz Tráfego? */}
                        {currentStep === 5 && (
                            <motion.div
                                key="step5"
                                className="step w-full"
                                data-step="5"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Você já faz <span className="text-quiz-primary">tráfego pago</span> atualmente?
                                </h2>
                                <div className="space-y-3">
                                    {['Sim, eu mesmo faço', 'Sim, tenho agência/gestor', 'Não, nunca fiz'].map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            className="option-btn w-full p-3 md:p-4 rounded-xl bg-quiz-secondary/30 border border-quiz-secondary hover:bg-quiz-primary hover:text-white transition-all duration-300 text-left text-base md:text-lg font-medium active:scale-[0.98]"
                                            onClick={() => selectOption('faz_trafego', opt)}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 6: Objetivo */}
                        {currentStep === 6 && (
                            <motion.div
                                key="step6"
                                className="step w-full"
                                data-step="6"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Qual seu <span className="text-quiz-primary">objetivo principal</span>?
                                </h2>
                                <div className="space-y-3">
                                    {['Vender mais produtos', 'Captar mais leads', 'Ganhar seguidores/Branding', 'Outro'].map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            className="option-btn w-full p-3 md:p-4 rounded-xl bg-quiz-secondary/30 border border-quiz-secondary hover:bg-quiz-primary hover:text-white transition-all duration-300 text-left text-base md:text-lg font-medium active:scale-[0.98]"
                                            onClick={() => selectOption('objetivo', opt)}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 7: Contato Final */}
                        {currentStep === 7 && (
                            <motion.div
                                key="step7"
                                className="step w-full"
                                data-step="7"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
                                    Para finalizar, <span className="text-quiz-primary">seus dados</span>:
                                </h2>
                                <div className="space-y-3 md:space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Seu Nome Completo"
                                        className="w-full p-3 md:p-4 rounded-xl text-base md:text-lg bg-quiz-secondary/20 border-quiz-secondary focus:ring-2 focus:ring-quiz-primary transition-all text-white border outline-none placeholder:text-gray-400"
                                        value={formData.nome}
                                        onChange={(e) => updateFormData('nome', e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Seu E-mail Profissional"
                                        className="w-full p-3 md:p-4 rounded-xl text-base md:text-lg bg-quiz-secondary/20 border-quiz-secondary focus:ring-2 focus:ring-quiz-primary transition-all text-white border outline-none placeholder:text-gray-400"
                                        value={formData.email}
                                        onChange={(e) => updateFormData('email', e.target.value)}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="WhatsApp (com DDD)"
                                        className="w-full p-3 md:p-4 rounded-xl text-base md:text-lg bg-quiz-secondary/20 border-quiz-secondary focus:ring-2 focus:ring-quiz-primary transition-all text-white border outline-none placeholder:text-gray-400"
                                        value={formData.telefone}
                                        onChange={handlePhoneChange}
                                        maxLength={15}
                                    />

                                    <button
                                        type="button"
                                        className="w-full p-3 md:p-4 rounded-xl bg-gradient-to-r from-quiz-primary to-quiz-accent text-white font-bold text-lg md:text-xl hover:from-blue-400 hover:to-blue-600 transition-all shadow-xl shadow-quiz-primary/30 transform hover:-translate-y-1 mt-4 flex items-center justify-center active:scale-[0.98]"
                                        onClick={submitForm}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span>Analisando...</span>
                                                <span className="animate-spin ml-2">⏳</span>
                                            </>
                                        ) : (
                                            'Receber Análise Gratuita'
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 8: Success */}
                        {currentStep === 8 && (
                            <motion.div
                                key="step8"
                                className="step w-full text-center"
                                data-step="8"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Cadastro Recebido!</h2>
                                <p className="text-gray-300 text-base md:text-lg mb-8">
                                    Nossa IA está analisando seu perfil e entraremos em contato em breve.
                                </p>
                                <Link
                                    to="/"
                                    className="inline-block px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all hover:scale-105 mt-4"
                                >
                                    Voltar ao Início
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 min-h-[48px]">
                    {currentStep < 8 && (
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`
                            px-4 py-2 md:px-6 md:py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm md:text-base
                            ${currentStep === 1
                                    ? 'opacity-0 cursor-default'
                                    : 'bg-gray-700/50 hover:bg-gray-700 text-white'
                                }
                        `}
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar
                        </button>
                    )}

                    {currentStep < 8 && (
                        <button
                            onClick={nextStep}
                            className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-quiz-primary text-white font-medium hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                        >
                            Avançar
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadQuiz;
