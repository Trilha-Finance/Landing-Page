import Image from "next/image";
import logoFull from "../assets/logos/logo-full.png";

export function FooterSection() {
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
              {['Home', 'Sobre', 'Quem Somos', 'Serviços', 'Blog'].map((item) => (
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
              {['Instagram', 'Linkedin', 'contato@trilhafinance.com.br', '+55 (41) 99937-7006'].map((item) => (
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