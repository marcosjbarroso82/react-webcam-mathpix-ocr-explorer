import type { Route } from "./+types/ocr";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OCR - Mathpix Explorer" },
    { name: "description", content: "Explorador de la API de OCR de Mathpix para reconocimiento de texto y fórmulas matemáticas" },
  ];
}

export default function OCR() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <div className="shadow-sm border-b px-4 py-4" style={{ 
        backgroundColor: 'var(--color-surface)', 
        borderColor: 'var(--color-border)' 
      }}>
        <h1 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>🔍 OCR Explorer</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          Reconocimiento de texto y fórmulas matemáticas con Mathpix API
        </p>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Upload Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Subir Imagen
          </h2>
          
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-lg font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Arrastra una imagen aquí o haz clic para seleccionar
            </p>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Soporta JPG, PNG, PDF y otros formatos
            </p>
            <button 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              disabled
            >
              Seleccionar Archivo
            </button>
          </div>
        </div>

        {/* Camera Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Capturar con Cámara
          </h2>
          
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Usa la cámara para capturar texto o fórmulas matemáticas
            </p>
            <button 
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              disabled
            >
              Abrir Cámara
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Resultados del OCR
          </h2>
          
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Los resultados del reconocimiento aparecerán aquí
            </p>
            <div className="text-xs px-3 py-1 rounded-full inline-block bg-gray-100 dark:bg-gray-700" style={{ color: 'var(--color-text-secondary)' }}>
              Sube una imagen para empezar
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Características de Mathpix OCR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <span className="text-white text-sm">📝</span>
              </div>
              <div>
                <h3 className="font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>Reconocimiento de Texto</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Extrae texto de imágenes con alta precisión</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <span className="text-white text-sm">🧮</span>
              </div>
              <div>
                <h3 className="font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>Fórmulas Matemáticas</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Convierte ecuaciones a LaTeX y MathML</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <span className="text-white text-sm">📊</span>
              </div>
              <div>
                <h3 className="font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>Múltiples Formatos</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Texto, LaTeX, MathML y más</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <span className="text-white text-sm">⚡</span>
              </div>
              <div>
                <h3 className="font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>Procesamiento Rápido</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Resultados en segundos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
