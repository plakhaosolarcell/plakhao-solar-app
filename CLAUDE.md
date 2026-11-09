# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page product-selection web app for ห้างหุ้นส่วนจำกัด ปลาขาว โซล่าร์เซลล์ (Plakhao Solar Cell, an official Handuro dealer). Customers tick the product groups they want (on-grid, hybrid off-grid, solar water pumps, etc.), drill down to a specific pump model, then get a Thai-language text summary they can copy to LINE OA or download as a PDF quote.

All UI text, form values and generated summaries are in **Thai**. Keep new copy in Thai and match the existing tone.

## Running

Plain static site: no build step, package manager, linter or tests. Open `index.html` in a browser, or serve the folder (for example `python -m http.server`) so the Clipboard API and the PDF logo load work. External dependencies come from CDNs: Noto Sans Thai (Google Fonts), `html2pdf.js` 0.10.2 (cdnjs), and an Unsplash background image in `style.css`.

## Architecture

- `index.html`: all markup, including the **full product catalog**. Every pump model is a hard-coded `<input type="radio">` whose `value` is the model code and whose `data-outlet`, `data-impeller` and `data-price` attributes carry the specs used in the summary. The visible price text (`.pump-model-price-inline`) is duplicated by hand, so update both the attribute and the label when prices change.
- `app.js`: vanilla JS, no modules. It does three things:
  1. **Progressive disclosure**: a chain of `update*()` functions shows or hides nested fieldsets and toggles `required`/`checked` on their inputs. Chain: interest → pump type → motor type → (DC Brushless → size `submersibleSize` → `submersibleModel`) or (AC/DC → series `submersibleAcDcSeries` → `submersibleAcDcModel`). On-grid: phase → watt.
  2. **Submit handler**: validates each level (with explicit per-series checks and Thai error messages) and builds the summary string in `#selection-summary`.
  3. **Order actions**: copies the summary to the clipboard before opening LINE OA (`https://lin.ee/wcWW3oN`), and builds the PDF from an off-screen `.pdf-render-stage` element through `html2pdf` (shop name, address, tax ID and phone are hard-coded there).
- `style.css`: dark green theme driven by `:root` variables; it includes the `.pdf-*` styles for the generated PDF.

### Adding a new pump series or model group

Each model group is wired by hand in several places, so a new group needs all of these:
1. A `<div id="submersible-…-models" class="pump-model" hidden>` container plus a series radio in `index.html`.
2. Element and option constants at the top of `app.js`.
3. A show/hide branch in `updateSubmersibleModel()` or `updateSubmersibleAcDcModels()`.
4. A validation block in the submit handler.
5. A branch in the nested ternary that resolves `selectedModel` / `selectedAcDcModel`.

Quirk: the 2SC model's price ("5,500 บาท") is hard-coded in `app.js` rather than read from `data-price`.

## Assets

- `price 2026 web app DC blushless.xlsx`: the source price list for pump models and prices.
- `552065.jpg`: the shop logo (header and PDF). `logo handuro th.png`: the Handuro logo (header and background watermark). Some filenames contain spaces, so quote or URL-encode them.
