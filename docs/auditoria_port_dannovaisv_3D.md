# Auditoria Técnica e Visual – port_dannovaisv_3D

> Projeto auditado com base no repositório GitHub e documentos de layout e guia técnico.

## 🔍 Visão Geral

Este relatório contém as etapas de correção, ajustes e organização do projeto Next.js com React Three Fiber. Cada seção apresenta:

- O problema identificado
- Como executar a correção
- O código necessário
- Sugestões adicionais (se houver)

---

## ✅ Etapa 1: Ajuste da ORB no Hero

### Problema
A orb 3D está mal posicionada, aparecendo colada ao topo da tela e sem efeito de vidro translúcido.

### Correção
Reposicionar o elemento no Hero com `absolute`, usando `top` e `transform` para centralização. Aplicar material de refração corretamente.

### Código
```tsx
<div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 z-[-1]">
  <GlassOrb />
</div>
```

---

## ✅ Etapa 2: Material de Refração

### Problema
A orb 3D está com aparência opaca/preta. `MeshRefractionMaterial` não carrega corretamente o `envMap`.

### Correção
Carregar um `CubeTexture` válido usando `useCubeTexture` e passar como prop para `MeshRefractionMaterial`.

### Código
```tsx
const envMap = useCubeTexture(
  ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
  { path: '/media/cubemap/' }
)
```

---

## ✅ Etapa 3: Layout Geral da Home

### Problema
A estrutura da Home está desalinhada em relação ao layout `HOME-PORTFOLIO-LAYOUYT_ESPERADO.jpeg`.

### Correção
Reorganizar os componentes em `Hero.tsx`, `Header.tsx`, e `Footer.tsx`, respeitando a hierarquia visual: orb, título, texto, botão.

### Código (exemplo de ordem):
```tsx
<>
  <Header />
  <Hero>
    <GlassOrb />
    <h1>Danilo Novais</h1>
    <p>Desenvolvedor criativo com foco em experiências imersivas</p>
    <Button>Ver portfólio</Button>
  </Hero>
  <Manifesto />
  <Footer />
</>
```

---

## 🔚 Etapas Futuras

- Revisar uso do `Canvas` e `r3f-perf`
- Verificar responsividade com Tailwind
- Usar `leva` apenas no ambiente de desenvolvimento
- Remover código morto e importar componentes de forma limpa

---

📁 Referência de repositório: [danilonovaisv/port_dannovaisv_3D](https://github.com/danilonovaisv/port_dannovaisv_3D)  
📄 Documentação técnica: [/docs](https://github.com/danilonovaisv/port_dannovaisv_3D/tree/main/docs)  
🖼️ Layout esperado: `HOME-PORTFOLIO-LAYOUYT_ESPERADO.jpeg`

