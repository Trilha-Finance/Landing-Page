import Image from "next/image";
import logoFull from "../assets/logos/logo-full.png";

export default function Home() {
  return (
    <footer className="w-full bg-white text-[#606C38]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <section className="grid gap-14 border-b border-[#606C38]/15 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-x-20">
          <div className="space-y-6 lg:pr-16">
            <a href="#top" className="inline-flex items-center gap-4">
              <Image
                src={logoFull}
                alt="Trilha Finance"
                width={168}
                height={56}
                priority
                className="h-auto w-[220px]"
              />
            </a>
            <div className="h-24" />
          </div>

          <nav aria-label="Navigation" className="space-y-6">
            <h2 className="text-lg font-bold text-[#283618]">Navegação</h2>
            <ul className="space-y-4">
              {['Home', 'Sobre', 'Quem Somos','Serviços','Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex text-[1rem] font-medium text-[#606C38] transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:text-[#283618]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="space-y-6">
            <h2 className="text-lg font-bold text-[#283618]">Soluções</h2>
            <ul className="space-y-4">
              {['Consultoria Financeira', 'Desenvolvimento de Software', 'Treinamentos', 'Abertura de Empresas'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex text-[1rem] font-medium text-[#606C38] transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:text-[#283618]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        

          <nav aria-label="Social" className="space-y-6">
            <h2 className="text-lg font-bold text-[#283618]">Social</h2>
            <ul className="space-y-4">
              {['Instagram', 'Linkedin', 'E-mail', 'Whatsapp'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex text-[1rem] font-medium text-[#606C38] transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:text-[#283618]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          
        </section>

        <section className="grid gap-10 border-b border-[#606C38]/15 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="space-y-4">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#283618] sm:text-5xl lg:text-6xl">
              Junte-se a nossa newsletter
            </h2>
            <p className="max-w-lg text-base font-normal leading-8 text-[#606C38] sm:text-lg">
              Fique por dentro de todas as novidades do mundo das finanças.
            </p>
          </div>

          <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite o seu email"
              className="h-[58px] w-full rounded-[18px] border border-[#606C38]/20 bg-white px-5 text-[1rem] font-normal text-[#283618] placeholder:text-[#606C38]/55 outline-none transition duration-[250ms] ease-in-out focus:border-[#606C38]/50 focus:ring-4 focus:ring-[#606C38]/15 sm:max-w-[380px]"
            />
            <button
              type="submit"
              className="inline-flex h-[58px] min-w-max items-center justify-center whitespace-nowrap rounded-[18px] bg-[#606C38] px-7 text-[1rem] font-bold text-white transition duration-[250ms] ease-in-out hover:scale-[1.02] hover:bg-[#283618]"
            >
              Inscreva-se
            </button>
          </form>
        </section>

        <section className="flex flex-col gap-4 py-10 text-sm text-[#606C38] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="#"
              className="font-medium transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:text-[#283618]"
            >
              Políticas de Privacidade
            </a>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {['Termos de Uso', 'Cookies', 'LGPD'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-medium transition duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:text-[#283618]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 text-left md:text-right">
            <p className="font-medium text-[#283618]">© 2026 Trilha Finance</p>
            <p className="font-normal text-[#606C38]">CNPJ 67.235.921/0001-04</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
