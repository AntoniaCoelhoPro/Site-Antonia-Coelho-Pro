import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Logos3 } from '@/components/ui/logos3'
import { useContactPopup } from '@/components/ContactPopupProvider'
import { LazyImage } from '@/components/LazyImage'
import { cn } from '@/lib/utils'
import logoImage from '/logo.png'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    const { openContactPopup } = useContactPopup();
    
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section id="hero">
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <LazyImage
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width={3276}
                                height={4095}
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <a
                                        href="#contato"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Transforme seu negócio com Tráfego Pago</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                                        <div className="leading-tight">
                                            <div className="sm:whitespace-nowrap">Você pode estar perdendo</div>
                                            <div className="sm:whitespace-nowrap">clientes por não ter uma</div>
                                            <div className="sm:whitespace-nowrap">estratégia de tráfego certa.</div>
                                        </div>
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        Ganhe uma consultoria de tráfego gratuita e descubra como otimizar seus anúncios, atrair o público certo e aumentar seu faturamento com campanhas que realmente funcionam.
                                        <br /><br />
                                        🚀 Vagas limitadas para diagnósticos individuais.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            onClick={openContactPopup}
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <span className="text-nowrap">Consultoria Gratuita</span>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link to="#cases">
                                            <span className="text-nowrap">Ver Cases</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <img
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://i.ibb.co/gLfsR1Ky/GERENCIADOR.png"
                                        alt="Dashboard de Gerenciamento"
                                        width="2700"
                                        height="1440"
                                        loading="eager"
                                    />
                                    <img
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="https://i.ibb.co/gLfsR1Ky/GERENCIADOR.png"
                                        alt="Dashboard de Gerenciamento"
                                        width="2700"
                                        height="1440"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <Logos3 
                    heading="Empresas que confiam em nossos serviços"
                    logos={[
                        {
                            id: "logo-1",
                            description: "Dra. GK",
                            image: "/logos/Dra. GK.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                        {
                            id: "logo-2",
                            description: "Dra. Lidiane",
                            image: "/logos/Dra. Lidiane.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                        {
                            id: "logo-3",
                            description: "KNESYS",
                            image: "/logos/KNESYS.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                        {
                            id: "logo-4",
                            description: "Logo PQA",
                            image: "/logos/logo pqa.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                        {
                            id: "logo-5",
                            description: "SCVP",
                            image: "/logos/SCVP.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                        {
                            id: "logo-6",
                            description: "SEV",
                            image: "/logos/SEV.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                        {
                            id: "logo-7",
                            description: "SOU PÓS",
                            image: "/logos/SOU PÓS.png",
                            className: "h-14 sm:h-16 md:h-18 lg:h-20 w-auto",
                        },
                    ]}
                />
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fechar menu ao clicar fora
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element
            if (menuState && !target.closest('.mobile-menu-container')) {
                setMenuState(false)
            }
        }

        if (menuState) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuState])

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-12')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto lg:flex-shrink-0">
                            <button
                                onClick={scrollToTop}
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo isScrolled={isScrolled} />
                            </button>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                {menuState ? (
                                    <X className="m-auto size-6" />
                                ) : (
                                    <Menu className="m-auto size-6" />
                                )}
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => scrollToSection(item.href)}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`mobile-menu-container bg-background mb-6 w-full flex-wrap items-start justify-start space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent ${menuState ? 'flex' : 'hidden'}`}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => {
                                                    scrollToSection(item.href);
                                                    setMenuState(false);
                                                }}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 text-left">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link to="#hero">
                                        <span>Consultoria</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link to="#hero">
                                        <span>Começar</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link to="#hero">
                                        <span>Começar Agora</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className, isScrolled }: { className?: string; isScrolled: boolean }) => {
    return (
        <div className={cn('flex items-center space-x-3', className)}>
            {/* Logo PNG */}
            <div className="relative">
                <img 
                    src={logoImage} 
                    alt="Logo Antonia Coelho" 
                    className="w-12 h-12 object-contain"
                    width="48"
                    height="48"
                    loading="eager"
                />
            </div>
            
            {/* Texto da marca */}
            <div className="flex flex-col">
                <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-foreground tracking-tight">Antonia Coelho</span>
                    <span className={cn(
                        "px-2 py-0.5 text-xs font-bold rounded-md border transition-all duration-300 shadow-sm transform -translate-y-1",
                        isScrolled 
                            ? "bg-blue-600 text-white border-blue-600" 
                            : "bg-white text-blue-600 border-blue-200"
                    )}>PRO</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">tráfego performance e resultados</span>
            </div>
        </div>
    )
}
