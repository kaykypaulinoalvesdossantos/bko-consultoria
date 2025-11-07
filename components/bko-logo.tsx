'use client';

import React from 'react';

interface BKOLogoProps {
  width?: number;
  compact?: boolean;
  className?: string;
}

export const BKOLogo: React.FC<BKOLogoProps> = React.memo(({
  width = 180,
  compact = false,
  className = '',
}) => {
  const height = compact ? width * 0.4 : width * 0.6;
  const fontSize = width * 0.35;
  const subtitleFontSize = width * 0.075;

  return (
    <div
      className={`bko-logo ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // ✅ Alinhamento à esquerda
        justifyContent: 'center',
        userSelect: 'none',
      }}
      role="img"
      aria-label="BKO Consultoria & Gestão"
    >
      {/* Container das letras BKO */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline', // ✅ Alinhamento baseline para letras
          justifyContent: 'flex-start',
          gap: `${width * 0.005}px`,
          lineHeight: 1,
          width: '100%',
        }}
      >
        {/* Letra B - Azul */}
        <span
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            color: '#2E3192',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          B
        </span>

        {/* Letra K - Cinza */}
        <span
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            color: '#808285',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          K
        </span>

        {/* Letra O - Azul */}
        <span
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            color: '#2E3192',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          O
        </span>
      </div>

      {/* Subtítulo: CONSULTORIA & GESTÃO */}
      {!compact && (
        <div
          style={{
            marginTop: `${width * 0.04}px`,
            marginLeft: `${fontSize * 0.285}px`, // ✅ Offset para alinhar com a letra K
            fontSize: `${subtitleFontSize}px`,
            fontWeight: 600,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            color: '#808285',
            letterSpacing: `${width * 0.018}px`, // ✅ Espaçamento entre letras
            textTransform: 'uppercase',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            textAlign: 'left', // ✅ Alinhamento à esquerda
          }}
        >
          CONSULTORIA & GESTÃO
        </div>
      )}
    </div>
  );
});

BKOLogo.displayName = 'BKOLogo';

export default BKOLogo;
