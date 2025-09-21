import React, { useState, useCallback } from 'react';
import type { Route } from "./+types/ocr";
import { MathpixService } from '../services/mathpixService';
import { useMathpixSettings } from '../contexts/MathpixSettingsContext';
import FileUpload from '../components/FileUpload';
import OCRResults from '../components/OCRResults';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OCR - Mathpix Explorer" },
    { name: "description", content: "Explorador de la API de OCR de Mathpix para reconocimiento de texto y fórmulas matemáticas" },
  ];
}

export default function OCR() {
  const { settings: mathpixSettings } = useMathpixSettings();
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{
    status: number;
    data: any;
    error?: string;
    request?: {
      url: string;
      method: string;
      headers: Record<string, string>;
      body: FormData;
      parameters: Record<string, any>;
    };
  } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processImage = useCallback(async (file: File) => {
    // Validar archivo
    const validation = MathpixService.validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Archivo inválido');
      setIsProcessing(false);
      return;
    }

    // Validar configuración
    if (!mathpixSettings.appId || !mathpixSettings.appKey) {
      setError('Configuración de Mathpix incompleta. Ve a Configuración para agregar tus credenciales.');
      setIsProcessing(false);
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSelectedFile(file);
    setResult(null);

    try {
      const result = await MathpixService.processImage(file, {
        appId: mathpixSettings.appId,
        appKey: mathpixSettings.appKey,
        includeMath: mathpixSettings.includeMath,
        outputFormats: mathpixSettings.outputFormats
      });

      setResult(result);
      setIsProcessing(false);
      setError(result.error || null);
    } catch (error) {
      setIsProcessing(false);
      setError(error instanceof Error ? error.message : 'Error desconocido');
    }
  }, [mathpixSettings]);

  const clearResult = useCallback(() => {
    setResult(null);
    setSelectedFile(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

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
        <FileUpload 
          onFileSelect={processImage}
          isProcessing={isProcessing}
        />

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
        <OCRResults
          result={result}
          isProcessing={isProcessing}
          selectedFile={selectedFile}
          error={error}
          onClearResult={clearResult}
          onClearError={clearError}
        />

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
