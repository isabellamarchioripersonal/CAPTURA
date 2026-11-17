import { useState, type FormEvent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Check, Camera, MessageCircle, ArrowRight, Dumbbell, Flame, HeartPulse } from 'lucide-react'

/* ====== CONFIGURAÇÕES EDITÁVEIS ====== */
const LINK_GRUPO_WHATSAPP = 'https://chat.whatsapp.com/SEU_LINK_AQUI'
const FOTO_URL = '/isabella.png' // Coloque aqui o link/caminho da sua foto
const BIO = [
  'Minha paixão pela musculação começou muito cedo. Treino desde os 13 anos e, hoje, aos 27, continuo tendo a hipertrofia como meu principal foco e uma das minhas maiores paixões.',
  'Foi esse amor pelos treinos que me levou a cursar Educação Física. Desde então, venho construindo minha trajetória profissional, unindo conhecimento, prática e dedicação para ajudar mulheres a alcançarem seus objetivos.',
  'Atualmente, acompanho alunas no treinamento presencial, com atendimentos individuais e aulas coletivas de Glúteo Day, além de mais de 150 alunos na consultoria online.',
  'Acredito em um treinamento bem estruturado, individualizado e pensado nos detalhes. Meu propósito é transmitir, através do meu trabalho, o mesmo amor e dedicação que tenho pela musculação, ajudando cada aluna a evoluir, conquistar resultados e desenvolver sua melhor versão.',
]

const BENEFICIOS = [
  'Mais amplitude de movimento em cada exercício',
  'Mais controle e estímulo muscular na hipertrofia',
  'Melhor qualidade e aproveitamento do treino',
  'Movimentos mais seguros, respeitando seu corpo',
]

// Para usar fotos, preencha 'foto' com o caminho da imagem (ex.: '/quadril.png')
const APRENDER = [
  { t: 'Mobilidade de quadril', d: 'Exercícios para melhorar a amplitude de movimentos como agachamentos e afundos.', foto: '', Icon: Dumbbell },
  { t: 'Ativação e controle muscular', d: 'Como melhorar a percepção e o controle dos glúteos durante os exercícios.', foto: '', Icon: Flame },
  { t: 'Movimentos mais eficientes', d: 'Como executar melhor os exercícios e aproveitar os estímulos de hipertrofia.', foto: '', Icon: HeartPulse },
]

/* Máscara de telefone brasileiro: (11) 99999-9999 */
function mascaraTelefone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const campo =
  'w-full rounded-xl border border-purple-200 bg-white px-4 py-3.5 text-base text-[#3b2a55] placeholder:text-purple-900/40 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-300/50'

function Formulario() {
  const [enviado, setEnviado] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [zap, setZap] = useState('')
  const [erro, setErro] = useState('')

  function enviar(e: FormEvent) {
    e.preventDefault()
    if (nome.trim().length < 2) return setErro('Informe seu nome.')
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErro('Informe um e-mail válido.')
    if (zap.replace(/\D/g, '').length < 10) return setErro('Informe um WhatsApp válido.')
    setErro('')
    // Aqui você pode integrar com sua ferramenta de e-mail/CRM.
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="text-center" role="status">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-green-500/20 text-green-400">
          <Check className="size-7" />
        </div>
        <h3 className="text-2xl font-bold">Cadastro confirmado, {nome.split(' ')[0]}!</h3>
        <p className="mt-2 text-purple-900/70">Entre agora no grupo do WhatsApp para baixar o treino completo de mobilidade.</p>
        <a
          href={LINK_GRUPO_WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400"
        >
          <MessageCircle className="size-6" /> Entrar no grupo do WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={enviar} className="space-y-4" noValidate>
      <h3 className="text-center text-xl font-bold">LIBERE SEU ACESSO AO TREINÃO GRATUITO!</h3>
      <p className="text-sm text-purple-900/70">Preencha seus dados e descubra como a mobilidade pode transformar a qualidade dos seus treinos.</p>
      <input className={campo} placeholder="Seu nome" aria-label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input className={campo} type="email" placeholder="Seu melhor e-mail" aria-label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className={campo} type="tel" inputMode="numeric" placeholder="(11) 99999-9999" aria-label="WhatsApp" value={zap} onChange={(e) => setZap(mascaraTelefone(e.target.value))} />
      {erro && <p className="text-sm text-orange-300" role="alert">{erro}</p>}
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-400 px-3 py-4 text-sm min-[380px]:text-base sm:px-6 sm:text-lg font-bold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110">
        QUERO DESTRAVAR MEUS RESULTADOS 🍑
      </button>
      <p className="text-center text-xs text-purple-900/50">100% gratuito. Vagas limitadas somente se houver limite real de participantes.</p>
    </form>
  )
}

function Pagina() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">

      <header className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 px-4 py-4 sm:px-5 sm:py-6">
        <img src="/logo.png" alt="Isabella Marchiori Personal Trainer" className="h-12 w-auto sm:h-16" />
      </header>

      <main className="relative">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pt-2 pb-12 sm:px-5 sm:gap-10 sm:pb-16 lg:grid-cols-2 lg:items-center lg:pt-12">
          <div className="min-w-0">
            <div className="text-center">
            <span className="inline-block rounded-full border border-purple-300 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700">
              Treinamento gratuito de mobilidade
            </span>
            <h1 className="mt-4 break-words text-[1.6rem] leading-[1.1] font-black uppercase text-balance text-center min-[380px]:text-3xl sm:mt-5 sm:text-5xl lg:text-6xl">
              TREINÃO DE MOBILIDADE <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">PARA GLÚTEOS E INFERIORES</span>
            </h1>
            </div>
            <div className="mt-6 space-y-4 text-center text-[15px] text-[#3b2a55] sm:mt-8 sm:text-base">
              <p className="text-lg font-bold uppercase sm:text-xl">Você treina pesado, mas seus glúteos e pernas não evoluem como deveriam?</p>
              <p className="font-black uppercase text-purple-700">O problema pode não ser a carga, mas a forma como seu corpo se movimenta!</p>
              <p className="text-justify">Eu vou te ensinar de uma vez por todas como melhorar sua mobilidade para executar melhor os exercícios, aumentar o controle muscular e aproveitar muito mais seus treinos de glúteos e inferiores.</p>
            </div>
            <ul className="mt-6 space-y-2.5 text-[15px] sm:space-y-3 sm:text-base">
              {[
                ['Mais amplitude:', 'melhore a execução de agachamentos, afundos e outros exercícios.'],
                ['Mais ativação muscular:', 'aprenda a recrutar melhor glúteos e pernas durante os movimentos.'],
                ['Mais eficiência:', 'pare de desperdiçar repetições com movimentos limitados.'],
                ['Mais potencial de evolução:', 'prepare seu corpo para aproveitar melhor os estímulos de hipertrofia.'],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3 text-[#3b2a55]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-purple-200 text-purple-600"><Check className="size-4" /></span>
                  <span><strong>{t}</strong> {d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-400 px-4 py-4 text-center text-lg font-black uppercase leading-tight text-white shadow-lg shadow-purple-400/40 sm:text-2xl">Seu treino de inferiores pode render muito mais!</p>
            <div className="mt-6 flex flex-wrap justify-center gap-1.5 text-[10px] sm:mt-8 sm:gap-3 sm:text-xs font-bold uppercase tracking-wider text-purple-700">
              <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-purple-100 px-2 py-1.5 sm:px-3 sm:py-2"><Dumbbell className="size-4" />Hipertrofia</span>
              <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-purple-100 px-2 py-1.5 sm:px-3 sm:py-2"><Flame className="size-4" />Performance</span>
              <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-purple-100 px-2 py-1.5 sm:px-3 sm:py-2"><HeartPulse className="size-4" />Resultados</span>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-purple-200 bg-white/90 p-5 shadow-2xl shadow-purple-300/50 backdrop-blur sm:p-8">
            <Formulario />
          </div>
        </section>

        {/* O QUE VOCÊ VAI APRENDER */}
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-5 sm:pb-16">
          <h2 className="text-center text-lg font-extrabold uppercase sm:text-2xl">O que você vai aprender no treinão gratuito?</h2>
          <div className="mt-6 divide-y divide-purple-100">
            {APRENDER.map(({ t, d, foto, Icon }) => (
              <div key={t} className="flex items-center gap-4 py-5">
                <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-200 to-purple-100 text-purple-600 sm:size-28">
                  {foto ? <img src={foto} alt={t} className="size-full object-cover" /> : <Icon className="size-9" />}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#3b2a55]">{t}</h3>
                  <p className="mt-1 text-sm text-[#3b2a55]/80 sm:text-base">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE MIM */}
        <section className="bg-gradient-to-b from-white/70 to-purple-50/60 py-12 sm:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:gap-12 sm:px-5 md:grid-cols-[340px_1fr]">
            <div className="mx-auto flex aspect-[4/5] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br from-purple-100 to-white shadow-2xl shadow-purple-300/60 ring-1 ring-purple-200 sm:max-w-sm">
              {FOTO_URL ? (
                <img src={FOTO_URL} alt="Isabella Marchiori" className="size-full object-cover object-top" />
              ) : (
                <div className="p-6 text-center text-purple-900/70">
                  <Camera className="mx-auto mb-3 size-12 text-purple-500" />
                  <p className="font-semibold">COLOQUE SUA FOTO AQUI</p>
                  <p className="text-sm">Defina FOTO_URL em src/App.tsx</p>
                </div>
              )}
            </div>
            <div className="rounded-3xl border border-purple-100 bg-white/90 p-5 text-center shadow-xl shadow-purple-200/50 sm:p-8">
              <h2 className="text-2xl font-extrabold sm:text-3xl">Sobre <span className="text-purple-500">mim</span></h2>
              <p className="mt-2 inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-bold text-purple-700 sm:text-sm">Isabella Marchiori · CREF 018921-G/GO</p>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-300" />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#3b2a55]/80 sm:text-base">
                {BIO.map((p, i) => <p key={p} className={i === 0 ? 'font-semibold text-[#3b2a55]' : ''}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-5 sm:py-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Por que mobilidade importa para a <span className="text-purple-500">hipertrofia</span></h2>
          <p className="mt-6 leading-relaxed text-[#3b2a55]/80">
            A mobilidade é uma peça fundamental para quem busca hipertrofia. Ter uma boa mobilidade permite executar os exercícios com maior amplitude, mais controle e melhor aproveitamento do movimento, favorecendo o estímulo muscular e a qualidade do treino.
          </p>
          <p className="mt-4 leading-relaxed text-[#3b2a55]/80">
            Quanto melhor você consegue se movimentar, respeitando as capacidades do seu corpo, maiores são as possibilidades de explorar os exercícios de forma eficiente. Não é apenas sobre levantar mais peso, mas sobre fazer seu corpo trabalhar melhor em cada repetição.
          </p>
          <a href="#topo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="mt-8 flex w-full items-center justify-center gap-2 sm:inline-flex sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 to-purple-400 px-8 py-4 font-bold text-white shadow-lg shadow-purple-500/30">
            Quero meu treino gratuito <ArrowRight className="size-5" />
          </a>
        </section>
      </main>

      <footer className="border-t border-purple-200 py-6 text-center text-sm text-purple-900/50">
        © {new Date().getFullYear()} Isabella Marchiori · Personal Trainer
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagina />} />
      </Routes>
    </BrowserRouter>
  )
}
