# One UI

**The React UI kit that feels alive.** 52 accessible, fully-typed components built on
[Base UI](https://base-ui.com) — Tailwind-native, themeable down to a single OKLCH token,
dark mode out of the box, with a signature jelly bounce.

- **Accessible by default** — keyboard, focus and ARIA inherited from Base UI primitives.
- **Tiny** — the wrappers add ~10.8 kB gzip for *all* 52 components; you only pay for the
  Base UI primitives you actually import.
- **Zero runtime CSS** — plain Tailwind utility layers compiled at build time. No Emotion,
  no style recalculation tax.
- **Fully typed** — props extend the underlying Base UI types.

> Status: pre-release. The package currently lives alongside its docs/Storybook site in
> this repo; see “Publishing” below.

## Install

```bash
npm i one-ui @base-ui/react
```

`react` and `react-dom` (>= 18.3) are peer dependencies.

## Quick start

Import the stylesheet once in your app root, then use components anywhere:

```tsx
// app/layout.tsx (or your root)
import "one-ui/styles.css"
```

```tsx
import { Button, Switch } from "one-ui"

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="primary">Get started</Button>
      <Switch.Root defaultChecked>
        <Switch.Thumb />
      </Switch.Root>
    </div>
  )
}
```

Compound components expose their parts as a namespace (`Switch.Root`, `Switch.Thumb`,
`Tabs.List`, `Dialog.Popup`, …), mirroring Base UI’s anatomy.

## Bundle size

Cost of a single component, measured the same way for every library (esbuild,
min + gzip, React excluded — reproduce with `npm run measure`):

| Library | Button | Switch | Dialog | Select |
| --- | --- | --- | --- | --- |
| **One UI** | **3.5** | **6.3** | **24.0** | **45.2** |
| Base UI (foundation) | 3.0 | 6.0 | 22.4 | 43.8 |
| Radix UI | — | 3.4 | 11.6 | 26.8 |
| Mantine | 12.2 | 14.9 | 25.8 | 43.5 |
| Chakra UI | 13.2 | 21.9 | 31.1 | 44.8 |
| MUI | 36.8 | 36.7 | 37.5 | 53.3 |
| Ant Design | 55.9 | 52.4 | 85.4 | 91.7 |

One UI adds only a paper-thin wrapper over Base UI (≈ +0.2–1.7 kB) and ships **zero
runtime CSS**, unlike the Emotion-based kits.

## Components

52 components across Actions, Inputs, Data display, Feedback, Overlays and Navigation —
including Accordion, Autocomplete, Combobox, Dialog, Drawer, Menu, NumberField, OTPField,
Select, Slider, Tabs, Toast, Tooltip and more. Browse them all on the docs site or in
Storybook.

## Theming

Every token is a CSS variable in the OKLCH color space. Override a handful of them to
recolor the whole system; dark mode is a `.dark` class on a parent.

```css
:root {
  --color-info: oklch(0.62 0.19 254); /* your brand accent */
}
```

## Development

```bash
npm install
npm run dev             # docs + landing site (http://localhost:3000, /docs)
npm run storybook       # component explorer (http://localhost:6006)
npm run measure         # reproduce the bundle-size table
```

## Publishing

The library build is configured but the package is marked `private` until release:

```bash
npm run build:pkg       # tsup (ESM + .d.ts) + Tailwind CSS → dist/
```

Before publishing: pick the final package name (the `name` field is a placeholder),
remove `"private": true`, and run `npm publish`.

## License

[MIT](./LICENSE)
