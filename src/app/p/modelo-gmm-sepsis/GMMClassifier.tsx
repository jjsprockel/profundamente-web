'use client';

import { useState } from 'react';

/* ── Paleta ── */
export const C = {
  bg: '#0d1117',
  surface: '#161b22',
  border: '#30363d',
  accent: '#f0a500',
  text: '#e6edf3',
  muted: '#8b949e',
  red: '#e05c5c',
  green: '#3fb950',
  blue: '#58a6ff',
};

/* ── Datos de clústeres ── */
export const CLUSTERS = [
  {
    num: 0,
    label: 'Paciente Mayor · Alta Severidad',
    mortality: 47, mortalityColor: C.red, mortalityLabel: '47%',
    los: 67,
    centroid: [72, 19, 9, 2.04, 3.70, 7.26, 0.95, -0.05],
    stats: [
      ['Edad', '72 ± 11.7'], ['APACHE II', '19 ± 4.8'], ['SOFA', '9 ± 3.3'],
      ['Creatinina', '2.04 mg/dL'], ['Lactato-0', '3.70 mmol/L'], ['pH-0', '7.26'],
    ],
    interp: 'Paciente adulto mayor con alta severidad clínica, acidemia metabólica marcada e hiperlactatemia. Riesgo de mortalidad intrahospitalaria moderado-alto. Vigilancia estrecha de función orgánica recomendada.',
  },
  {
    num: 1,
    label: 'Riesgo Intermedio · Moderado',
    mortality: 25, mortalityColor: C.green, mortalityLabel: '25%',
    los: 66,
    centroid: [67, 12, 8, 0.81, 1.60, 7.31, 0.85, 0.05],
    stats: [
      ['Edad', '67 ± 15.6'], ['APACHE II', '12 ± 4.9'], ['SOFA', '8 ± 2.1'],
      ['Creatinina', '0.81 mg/dL'], ['Lactato-0', '1.60 mmol/L'], ['pH-0', '7.31'],
    ],
    interp: 'Paciente con sepsis de severidad moderada y función renal conservada. Lactato y pH relativamente normales. Perfil de menor riesgo con mejor pronóstico relativo dentro del modelo.',
  },
  {
    num: 2,
    label: 'Disfunción Renal · Alto Riesgo',
    mortality: 57, mortalityColor: C.red, mortalityLabel: '57%',
    los: 71,
    centroid: [62, 20, 10, 4.44, 1.20, 7.22, 0.90, 0.10],
    stats: [
      ['Edad', '62 ± 17.5'], ['APACHE II', '20 ± 8.5'], ['SOFA', '10 ± 2.3'],
      ['Creatinina', '4.44 mg/dL'], ['Lactato-0', '1.20 mmol/L'], ['pH-0', '7.22'],
    ],
    interp: 'Disfunción renal severa con creatinina elevada y acidosis metabólica. Alta puntuación SOFA. Riesgo elevado de mortalidad y estancia hospitalaria prolongada. Considerar soporte renal temprano.',
  },
  {
    num: 3,
    label: 'Choque Séptico · Crítico',
    mortality: 75, mortalityColor: C.red, mortalityLabel: '75%',
    los: 75,
    centroid: [48, 15, 8, 1.52, 3.25, 7.17, 1.25, -0.15],
    stats: [
      ['Edad', '48 ± 12.7'], ['APACHE II', '15 ± 5.4'], ['SOFA', '8 ± 1.3'],
      ['Creatinina', '1.52 mg/dL'], ['Lactato-0', '3.25 mmol/L'], ['pH-0', '7.17'],
    ],
    interp: 'Perfil crítico de choque séptico con hiperlactatemia severa y acidemia profunda. A pesar de ser un paciente más joven, presenta la mayor mortalidad del modelo. Requiere soporte hemodinámico agresivo.',
  },
  {
    num: 4,
    label: 'Paciente Joven · Menor Gravedad',
    mortality: 43, mortalityColor: C.blue, mortalityLabel: '43%',
    los: 57,
    centroid: [42, 14.5, 7, 0.96, 1.60, 7.33, 0.85, 0.02],
    stats: [
      ['Edad', '42 ± 14.8'], ['APACHE II', '14.5 ± 4.6'], ['SOFA', '7 ± 1.3'],
      ['Creatinina', '0.96 mg/dL'], ['Lactato-0', '1.60 mmol/L'], ['pH-0', '7.33'],
    ],
    interp: 'Paciente relativamente joven con función orgánica preservada y parámetros hemodinámicos más estables. Menor estancia hospitalaria esperada comparado con otros clústeres del modelo.',
  },
];

const RANGES = [30, 8, 3, 3.63, 2.50, 0.16, 0.50, 0.30];

const FIELDS = [
  { key: 'edad',       label: 'Edad',          hint: 'años',         ph: 'ej. 65' },
  { key: 'apache',     label: 'APACHE II',      hint: '0 – 71',       ph: 'ej. 15' },
  { key: 'sofa',       label: 'SOFA',           hint: '0 – 24',       ph: 'ej. 9'  },
  { key: 'creatinina', label: 'Creatinina',     hint: 'mg/dL',        ph: 'ej. 1.8' },
  { key: 'lactato',    label: 'Lactato hora 0', hint: 'mmol/L',       ph: 'ej. 2.5' },
  { key: 'ph',         label: 'pH hora 0',      hint: '6.8 – 7.6',    ph: 'ej. 7.28' },
  { key: 'is0',        label: 'IS-0',           hint: 'FC / PAS',     ph: 'ej. 1.0' },
  { key: 'deltais',    label: 'Delta IS',       hint: 'IS-6h − IS-0', ph: 'ej. −0.1' },
];

const METHODS = [
  {
    title: 'Descripción del Modelo',
    text: 'Se aplicó un Modelo de Mezcla Gaussiana (GMM) a una cohorte de 96 pacientes adultos con sepsis. El número óptimo de clústeres se determinó mediante el Criterio Bayesiano de Información (BIC). La visualización se realizó con reducción dimensional por PCA.',
  },
  {
    title: 'Variables de Entrada',
    items: ['Edad (años)', 'APACHE II (puntuación de severidad)', 'SOFA (disfunción orgánica)', 'Creatinina sérica (mg/dL)', 'Lactato en hora 0 (mmol/L)', 'pH arterial en hora 0', 'Índice de choque hora 0 (IS-0)', 'Delta IS (variación del IS)'],
  },
  {
    title: 'Método de Clasificación',
    text: 'El clasificador calcula la distancia euclidiana normalizada entre los valores del paciente y los centroides de cada clúster derivados del modelo GMM entrenado. El paciente se asigna al clúster con menor distancia. Los valores de mortalidad y LOS corresponden a proporciones observadas en la cohorte original.',
  },
  {
    title: 'Desenlaces Principales',
    items: ['Mortalidad intrahospitalaria (25 %–75 % según clúster)', 'Estancia prolongada — LOS > 5 días (57 %–75 %)', 'Clústeres 2 y 3: mayor disfunción metabólica y peor pronóstico', 'Clúster 4: perfil más joven y de menor severidad', 'Clúster 1: mayor proporción de pacientes con menor riesgo'],
  },
];

type Cluster = typeof CLUSTERS[0];
type FormState = Record<string, string>;

/* ── Sub-componentes ── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: C.muted, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
      {children}
      <span style={{ flex: 1, height: 1, background: C.border, display: 'block' }} />
    </div>
  );
}

function Field({ label, hint, ph, value, onChange }: {
  label: string; hint: string; ph: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: C.muted, marginBottom: '.4rem' }}>
        {label}{hint && <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#555', marginLeft: '.4rem' }}>({hint})</span>}
      </label>
      <input
        type="number" step="any"
        placeholder={ph} value={value} onChange={onChange}
        style={{ width: '100%', background: C.bg, border: `1px solid ${C.border}`, color: C.text, fontFamily: 'monospace', fontSize: '.9rem', padding: '.6rem .8rem', borderRadius: '4px', outline: 'none' }}
        onFocus={e => (e.target.style.borderColor = C.accent)}
        onBlur={e => (e.target.style.borderColor = C.border)}
      />
    </div>
  );
}

function RiskBar({ label, pct, color, value }: { label: string; pct: number; color: string; value: string }) {
  return (
    <div style={{ marginBottom: '.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.75rem', color: C.muted, marginBottom: '.25rem' }}>
        <span>{label}</span>
        <span style={{ color, fontFamily: 'monospace' }}>{value}</span>
      </div>
      <div style={{ height: 4, background: C.border, borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2 }} />
      </div>
    </div>
  );
}

function ClusterCard({ cluster }: { cluster: Cluster }) {
  return (
    <div style={{ background: C.surface, padding: '1.25rem' }}>
      <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: C.muted, marginBottom: '.4rem' }}>Clúster {cluster.num}</div>
      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>{cluster.label}</div>
      <RiskBar label="Mortalidad" pct={cluster.mortality} color={cluster.mortalityColor} value={cluster.mortalityLabel} />
      <RiskBar label="LOS > 5 días" pct={cluster.los} color={C.accent} value={`${cluster.los}%`} />
      <div style={{ marginTop: '1rem', paddingTop: '.75rem', borderTop: `1px solid ${C.border}`, fontSize: '.78rem', color: C.muted }}>
        {cluster.stats.map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '.1rem 0' }}>
            <span>{k}</span>
            <span style={{ fontFamily: 'monospace', fontSize: '.75rem', color: C.text }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultBox({ cluster }: { cluster: Cluster }) {
  return (
    <div style={{ marginTop: '1.5rem', borderRadius: 5, overflow: 'hidden', border: `1px solid ${C.border}` }}>
      <div style={{ background: 'rgba(240,165,0,.08)', borderBottom: '1px solid rgba(240,165,0,.2)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.accent, flexShrink: 0 }} />
        <h3 style={{ fontSize: '.95rem', fontWeight: 700, color: C.accent }}>Resultado de Clasificación — Clúster {cluster.num}</h3>
      </div>
      <div style={{ padding: '1.25rem 1.5rem', background: C.bg }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>{cluster.label}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ padding: '1rem', background: C.surface, borderRadius: 4, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.08em', color: C.muted, marginBottom: '.3rem' }}>Mortalidad intrahospitalaria</div>
            <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 700, color: cluster.mortalityColor }}>{cluster.mortalityLabel}</div>
            <div style={{ height: 3, background: C.border, borderRadius: 2, marginTop: '.5rem', overflow: 'hidden' }}>
              <div style={{ width: `${cluster.mortality}%`, height: '100%', background: cluster.mortalityColor, borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ padding: '1rem', background: C.surface, borderRadius: 4, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.08em', color: C.muted, marginBottom: '.3rem' }}>Estancia prolongada (LOS &gt; 5 días)</div>
            <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 700, color: C.accent }}>{cluster.los}%</div>
            <div style={{ height: 3, background: C.border, borderRadius: 2, marginTop: '.5rem', overflow: 'hidden' }}>
              <div style={{ width: `${cluster.los}%`, height: '100%', background: C.accent, borderRadius: 2 }} />
            </div>
          </div>
        </div>
        <div style={{ fontSize: '.85rem', color: C.muted, lineHeight: 1.6, padding: '.9rem 1rem', background: C.surface, borderRadius: 4, borderLeft: `3px solid ${C.accent}` }}>
          {cluster.interp}
        </div>
      </div>
    </div>
  );
}

/* ── Componente principal (solo la parte interactiva + contenido) ── */
export default function GMMClassifier() {
  const [form, setForm] = useState<FormState>(() =>
    Object.fromEntries(FIELDS.map(f => [f.key, '']))
  );
  const [result, setResult] = useState<Cluster | null>(null);
  const [error, setError] = useState('');

  const handle = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [key]: e.target.value }));
    setResult(null);
    setError('');
  };

  const clasificar = () => {
    const vals = FIELDS.map(f => parseFloat(form[f.key]));
    if (vals.some(isNaN)) {
      setError('Complete todos los campos con valores numéricos válidos.');
      return;
    }
    const norm = vals.map((v, i) => v / RANGES[i]);
    let minDist = Infinity;
    let best = CLUSTERS[0];
    for (const c of CLUSTERS) {
      const nc = c.centroid.map((v, i) => v / RANGES[i]);
      const d = Math.sqrt(norm.reduce((s, v, i) => s + (v - nc[i]) ** 2, 0));
      if (d < minDist) { minDist = d; best = c; }
    }
    setResult(best);
    setError('');
  };

  return (
    <>
      {/* ── Header ── */}
      <header style={{ background: 'linear-gradient(135deg,#0d1117 0%,#161b22 60%,#1b2230 100%)', borderBottom: `1px solid ${C.border}`, padding: '2.5rem 2rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, background: 'radial-gradient(circle,rgba(240,165,0,.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: 'rgba(240,165,0,.10)', border: '1px solid rgba(240,165,0,.35)', color: C.accent, fontSize: '.72rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', padding: '.3rem .75rem', borderRadius: 2, marginBottom: '1rem' }}>
            🧬 Modelo Clínico · GMM
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.15, color: '#fff', marginBottom: '.6rem' }}>
            Clasificador de <span style={{ color: C.accent }}>Clústeres en Sepsis</span>
          </h1>
          <p style={{ color: C.muted, fontSize: '1rem', maxWidth: 680, lineHeight: 1.7 }}>
            Modelo de Mezcla Gaussiana (GMM) para estratificación de riesgo en pacientes adultos con diagnóstico de sepsis. Identifica 5 fenotipos clínicos con distintos perfiles de mortalidad y estancia hospitalaria prolongada.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              ['Algoritmo', 'Gaussian Mixture Model (GMM)'],
              ['Clústeres', '5 fenotipos'],
              ['Cohorte', '96 pacientes adultos'],
              ['Variables', '8 características'],
            ].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.08em', color: C.muted }}>{l}</div>
                <div style={{ fontSize: '.9rem', fontWeight: 600, color: C.text }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Contenido ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>

        {/* Clasificador */}
        <SectionTitle>Herramienta de Clasificación</SectionTitle>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: '2.5rem' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(240,165,0,.12)', border: '1px solid rgba(240,165,0,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>⚕</div>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: C.text }}>Ingrese los valores del paciente</h2>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {FIELDS.map(f => (
                <Field key={f.key} label={f.label} hint={f.hint} ph={f.ph} value={form[f.key]} onChange={handle(f.key)} />
              ))}
            </div>
            <button
              onClick={clasificar}
              style={{ width: '100%', padding: '.8rem', background: C.accent, border: 'none', borderRadius: 4, color: '#000', fontSize: '.9rem', fontWeight: 700, letterSpacing: '.04em', cursor: 'pointer', transition: 'background .2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fbb72b')}
              onMouseLeave={e => (e.currentTarget.style.background = C.accent)}
            >
              Clasificar paciente
            </button>
            {error && <p style={{ color: C.red, fontSize: '.85rem', marginTop: '1rem' }}>{error}</p>}
            {result && <ResultBox cluster={result} />}
          </div>
        </div>

        {/* Metodología */}
        <SectionTitle>Modelo y Metodología</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1px', background: C.border, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: '2.5rem' }}>
          {METHODS.map(m => (
            <div key={m.title} style={{ background: C.surface, padding: '1.5rem' }}>
              <h3 style={{ fontSize: '.8rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: C.accent, marginBottom: '.75rem' }}>{m.title}</h3>
              {m.items ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {m.items.map(item => (
                    <li key={item} style={{ fontSize: '.88rem', color: C.muted, padding: '.25rem 0 .25rem 1rem', position: 'relative', lineHeight: 1.6 }}>
                      <span style={{ position: 'absolute', left: 0, color: C.accent, fontSize: '.7rem', top: '50%', transform: 'translateY(-50%)' }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: '.88rem', color: C.muted, lineHeight: 1.65 }}>{m.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Perfiles de clústeres */}
        <SectionTitle>Perfiles de los 5 Clústeres</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '1px', background: C.border, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: '2.5rem' }}>
          {CLUSTERS.map(c => <ClusterCard key={c.num} cluster={c} />)}
        </div>

        {/* Aviso */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '.8rem', color: C.muted, lineHeight: 1.65 }}>
            <strong style={{ color: C.accent }}>Aviso clínico:</strong> Esta herramienta es exclusivamente de apoyo a la decisión clínica con fines educativos y de investigación. No reemplaza el juicio clínico ni constituye una recomendación diagnóstica o terapéutica. Los resultados deben interpretarse en el contexto clínico completo de cada paciente.
          </p>
        </div>

        {/* Créditos */}
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1.5rem', textAlign: 'center', color: C.muted, fontSize: '.78rem' }}>
          <p>Semillero Singularidad · FUCS — Juan José Diaztagle Fernández · John Jaime Sprockel Díaz</p>
          <p style={{ marginTop: '.25rem' }}>Reconocimiento: 2º puesto categoría adultos · Congreso AMCI® 2025</p>
        </div>

      </div>
    </>
  );
}
