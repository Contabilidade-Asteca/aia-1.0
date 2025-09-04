

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, XCircle, Target, Compass, Lightbulb, Zap, Users, Clock, TrendingUp, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header/Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">AIA</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#metodo" className="text-slate-300 hover:text-blue-400 transition-colors">O Método</a>
            <a href="#solucoes" className="text-slate-300 hover:text-blue-400 transition-colors">Soluções</a>
            <a href="#resultados" className="text-slate-300 hover:text-blue-400 transition-colors">Resultados</a>
            <a href="#manifesto" className="text-slate-300 hover:text-blue-400 transition-colors">Manifesto</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            IA não é sobre o futuro.<br />
            <span className="text-blue-400">É sobre por que sua empresa ainda depende de improviso.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Aqui começa o seu mapa para transformar complexidade em resultado com clareza estratégica.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            Quero destravar meu negócio com IA prática
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* Visual: Trajectory curve */}
          <div className="mt-16 relative">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mb-2"></div>
                <span className="text-sm text-slate-400">Improviso</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-red-500 to-blue-400"></div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mb-2"></div>
                <span className="text-sm text-slate-400">Transição</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-yellow-500 to-blue-400"></div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full mb-2"></div>
                <span className="text-sm text-slate-400">Autonomia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Invisible Problem */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">O Problema Invisível</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-slate-300 mb-8">
              Você tenta inovar, mas sua rotina te engole. Planilhas, retrabalho, decisões operacionais — 
              tudo consome o tempo que era pra ser estratégico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-red-400">Equipe travada?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Processos manuais que consomem energia criativa em tarefas repetitivas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-yellow-400">Automação só no discurso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Ferramentas que prometem muito e entregam complexidade sem aplicação.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-orange-400">Treinamento que ninguém aplica?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Conhecimento teórico que não se traduz em mudança operacional real.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-semibold text-blue-400">
              "Não é culpa sua. Faltou uma rota confiável. Agora ela existe."
            </p>
          </div>
        </div>
      </section>

      {/* The AIA Method */}
      <section id="metodo" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Método AIA</h2>
            <p className="text-xl text-slate-300">Aprender. Inovar. Adotar.</p>
            <p className="text-lg text-blue-400 mt-4">
              "Você não precisa de mais teoria. Precisa de um sistema que ande com você."
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-400 text-2xl">Aprender</CardTitle>
                <CardDescription className="text-slate-300">
                  O que importa. Na linguagem de quem lidera.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Conceitos estratégicos de IA aplicados ao seu contexto, sem jargão técnico. 
                  Foco em decisões e resultados mensuráveis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-400 text-2xl">Inovar</CardTitle>
                <CardDescription className="text-slate-300">
                  Testes rápidos no seu contexto, com apoio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Implementação guiada de soluções IA em processos críticos. 
                  Validação antes do investimento total.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-400 text-2xl">Adotar</CardTitle>
                <CardDescription className="text-slate-300">
                  Automação e GPTs moldados ao seu fluxo real.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Integração definitiva de IA nos seus processos. 
                  Autonomia total sem dependência de terceiros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section id="resultados" className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resultados e Ganhos Reais</h2>
            <p className="text-xl text-blue-400">
              "Se não for aplicável amanhã. Não serve hoje."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-xl">10h/semana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Reduza tarefas repetitivas e ganhe tempo estratégico</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-xl">GPT Próprio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Crie seu assistente IA personalizado para sua operação</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-xl">7 dias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Atenda com IA implementada e funcionando</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardHeader>
                <Compass className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-xl">Previsibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Use IA para prever falhas sem planilhas complexas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Para quem foi projetado o método AIA</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-900/20 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  É para você se:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Tem metas claras e coragem de assumir protagonismo
                </p>
                <p className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Busca resultados práticos, não teorias abstratas
                </p>
                <p className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Quer autonomia para implementar sem depender de terceiros
                </p>
                <p className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Lidera uma PME ou média empresa em crescimento
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-900/20 border-red-400">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  Não é para você se:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-300 flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Terceiriza todas as decisões estratégicas
                </p>
                <p className="text-slate-300 flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Culpa sempre a equipe pelos resultados
                </p>
                <p className="text-slate-300 flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Busca soluções mágicas sem investir em aprendizado
                </p>
                <p className="text-slate-300 flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Quer apenas mais uma ferramenta, não transformação
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AIA Solutions */}
      <section id="solucoes" className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Soluções AIA</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 hover:border-blue-400 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400">Diagnóstico AIA</CardTitle>
                <CardDescription className="text-slate-300">
                  Mapeamento completo do potencial IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Análise profunda dos seus processos para identificar onde a IA pode gerar 
                  maior impacto imediato.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Quero clareza agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 hover:border-blue-400 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400">IA Interna</CardTitle>
                <CardDescription className="text-slate-300">
                  Customização para sua operação específica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Desenvolvimento de soluções IA personalizadas para seus processos únicos. 
                  Implementação direta na sua empresa.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Vamos projetar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 hover:border-blue-400 transition-all hover:scale-105">
              <CardHeader>
                <Badge className="bg-blue-600 text-white w-fit">Mais Popular</Badge>
                <CardTitle className="text-2xl text-blue-400">Autonomia Artificial</CardTitle>
                <CardDescription className="text-slate-300">
                  Mentoria completa + Toolbox estratégico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Jornada guiada para implementar IA na sua empresa com total autonomia. 
                  Inclui ferramentas, templates e suporte direto.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Quero essa jornada
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Histórias de Transformação</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-slate-300 italic mb-4">
                  "Percebi que o gargalo era eu. Com o método AIA, minha equipe ganhou autonomia 
                  e eu recuperei tempo para pensar no futuro da empresa."
                </blockquote>
                <cite className="text-blue-400 not-italic">
                  — Eduardo S., CEO Industrial
                </cite>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-slate-300 italic mb-4">
                  "Aplicamos a IA sem depender de TI. Em 30 dias, automatizamos processos 
                  que tomavam 15h semanais da nossa operação."
                </blockquote>
                <cite className="text-blue-400 not-italic">
                  — Marina L., Diretora Comercial
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="py-20 px-6 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Manifesto AIA</h2>
          <div className="text-xl text-slate-300 leading-relaxed space-y-6">
            <p>
              <span className="text-blue-400 font-bold text-2xl">"Não existe progresso sem aplicação."</span>
            </p>
            <p>
              Vivemos a era da informação infinita e da execução escassa. 
              Enquanto uns debatem o futuro da IA, outros já a usam para resolver problemas reais.
            </p>
            <p>
              O método AIA nasceu da necessidade de empresários que não têm tempo para experimentos 
              teóricos, mas precisam de resultados práticos hoje.
            </p>
            <p className="text-blue-400 font-semibold">
              Somos a ponte entre o empresário tradicional e a IA aplicada de verdade. 
              Transformamos complexidade em resultado com clareza estratégica.
            </p>
          </div>
          <Button size="lg" variant="outline" className="mt-8 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
            Ver manifesto completo
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Seu concorrente talvez já tenha começado.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            A diferença é que agora você tem um mapa.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Começar agora
            <MapPin className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">AIA</div>
              <p className="text-slate-300 text-sm">
                IA prática. Para quem carrega o negócio nas costas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Método</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Aprender</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Inovar</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Adotar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Autonomia Artificial</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">IA Interna</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Diagnóstico AIA</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Insights AIA</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 AIA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

