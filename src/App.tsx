import { Bell } from 'lucide-react';

export default function App() {
  // Você pode alterar a cor RGB da barra lateral aqui a qualquer momento
  const sidebarColor = 'rgb(30, 58, 138)'; 

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* BARRA LATERAL (SIDEBAR) */}
      <aside
        className="w-64 flex-shrink-0 shadow-xl flex flex-col"
        style={{ backgroundColor: sidebarColor }}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white tracking-wider">SupplyCast</h1>
        </div>
        
        <nav className="mt-6 flex-1">
          <a href="#" className="block py-3 px-6 text-white/80 hover:bg-white/10 hover:text-white transition-colors">Dashboard</a>
          <a href="#" className="block py-3 px-6 text-white/80 hover:bg-white/10 hover:text-white transition-colors">Estoque</a>
          <a href="#" className="block py-3 px-6 text-white/80 hover:bg-white/10 hover:text-white transition-colors">Previsões de IA</a>
        </nav>
      </aside>

      {/* ÁREA PRINCIPAL (MAIN CONTENT) */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        
        {/* CABEÇALHO (HEADER) - Fundo branco com o Sino na direita */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-end px-8 bg-white">
          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors relative" aria-label="Notificações">
            <Bell size={24} strokeWidth={2} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </header>

        {/* CONTEÚDO CENTRAL (CARDS) */}
        <div className="p-8 flex-1 overflow-y-auto bg-gray-50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Visão Geral da Logística</h2>
            <p className="text-gray-500 text-sm mt-1">Métricas atualizadas pelo modelo preditivo.</p>
          </div>

          {/* Grid contendo os Cards centrais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">SKUs em Risco (7 dias)</h3>
              <span className="text-4xl font-bold text-red-600">14</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">Acurácia da IA</h3>
              <span className="text-4xl font-bold text-green-600">92.4%</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">Custo Mitigado</h3>
              <span className="text-4xl font-bold text-blue-600">R$ 45.200</span>
            </div>

          </div>
        </div>
      </main>
      
    </div>
  );
}