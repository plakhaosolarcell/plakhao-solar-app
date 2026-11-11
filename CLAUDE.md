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
The DC Brushless models for ปั๊มจุ่ม are J-300W, J-550W, J-600W, J-750W, J-1100W, J-1300W and J-1500W. J-300W has the model HD-SQD7.5-14-24-300W (Outlet 1.5", BL built-in control), priced at 4,500 baht with a 1-year warranty. J-550W has the model HD-SQD7-18-48-550W (Outlet 1", BL), priced at 6,000 baht with a 1-year warranty. J-600W has the model HD-SQD16-21-48-600W (Outlet 2", BL built-in control), priced at 4,800 baht with a 1-year warranty. J-750W offers HD-SQD17-27-72-750W in BL (7,000 baht) or BL built-in control (5,000 baht), both with a 1-year warranty. J-1100W has the model HD-SQD40-10-110-1100W (Outlet 3", BL built-in control), priced at 6,000 baht with a 1-year warranty. J-1300W has the model HD-SQD83-11-110-1300 (4", Controller with fan), priced at 8,000 baht with a 1-year warranty. J-1500W offers HD-SQD45-19-110-1500W (Outlet 3", BL) at 7,500 baht and HD-SQD100-9-110-1500 (6", Controller with fan) at 8,500 baht, both with a 1-year warranty. The two-system AC/DC sump pump has the model HD-SQD100-9-180-1500-A/D (6"), priced at 10,500 baht with a 1-year warranty.

## Assets

- `price 2026 web app DC blushless.xlsx`: the source price list for pump models and prices.
- `552065.jpg`: the shop logo (header and PDF). `logo handuro th.png`: the Handuro logo (header and background watermark). Some filenames contain spaces, so quote or URL-encode them.
