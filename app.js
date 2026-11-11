const interestForm = document.querySelector("#interest-form");
const onGridInterest = interestForm.querySelector('input[name="interest"][value="ระบบออนกริด"]');
const pumpInterest = interestForm.querySelector('input[name="interest"][value="โซล่าร์ปั๊มน้ำ"]');
const pumpDetailsWrap = document.querySelector("#pump-details-wrap");
const pumpTypeOptions = interestForm.querySelectorAll('input[name="pumpType"]');
const pumpMotorOptions = interestForm.querySelectorAll("[data-pump-motor]");
const centrifugalMotorOptions = interestForm.querySelectorAll('input[name="motor-centrifugal"]');
const centrifugalAcDcWattWrap = document.querySelector("#centrifugal-acdc-watt-wrap");
const centrifugalAcDcWattOptions = interestForm.querySelectorAll('input[name="centrifugalAcDcWatt"]');
const centrifugalAcDc750wModels = document.querySelector("#centrifugal-acdc-750w-models");
const centrifugalAcDc750wModelOptions = centrifugalAcDc750wModels.querySelectorAll('input[name="centrifugalAcDcModel"]');
const centrifugalAcDc1100wModels = document.querySelector("#centrifugal-acdc-1100w-models");
const centrifugalAcDc1100wModelOptions = centrifugalAcDc1100wModels.querySelectorAll('input[name="centrifugalAcDcModel"]');
const centrifugalAcDc1500wModels = document.querySelector("#centrifugal-acdc-1500w-models");
const centrifugalAcDc1500wModelOptions = centrifugalAcDc1500wModels.querySelectorAll('input[name="centrifugalAcDcModel"]');
const centrifugalAcDc2200wModels = document.querySelector("#centrifugal-acdc-2200w-models");
const centrifugalAcDc2200wModelOptions = centrifugalAcDc2200wModels.querySelectorAll('input[name="centrifugalAcDcModel"]');
const centrifugalAcDc3000wModels = document.querySelector("#centrifugal-acdc-3000w-models");
const centrifugalAcDc3000wModelOptions = centrifugalAcDc3000wModels.querySelectorAll('input[name="centrifugalAcDcModel"]');
const centrifugalDcWattWrap = document.querySelector("#centrifugal-dc-watt-wrap");
const centrifugalDcWattOptions = interestForm.querySelectorAll('input[name="centrifugalDcWatt"]');
const centrifugalDc280300Models = document.querySelector("#centrifugal-dc-280-300-models");
const centrifugalDc280300ModelOptions = centrifugalDc280300Models.querySelectorAll('input[name="centrifugalDcModel"]');
const centrifugalDc550wModels = document.querySelector("#centrifugal-dc-550w-models");
const centrifugalDc550wModelOptions = centrifugalDc550wModels.querySelectorAll('input[name="centrifugalDcModel"]');
const centrifugalDc750wModels = document.querySelector("#centrifugal-dc-750w-models");
const centrifugalDc750wModelOptions = centrifugalDc750wModels.querySelectorAll('input[name="centrifugalDcModel"]');
const centrifugalDc1100wModels = document.querySelector("#centrifugal-dc-1100w-models");
const centrifugalDc1100wModelOptions = centrifugalDc1100wModels.querySelectorAll('input[name="centrifugalDcModel"]');
const centrifugalDc1500wModels = document.querySelector("#centrifugal-dc-1500w-models");
const centrifugalDc1500wModelOptions = centrifugalDc1500wModels.querySelectorAll('input[name="centrifugalDcModel"]');
const submersibleSizeWrap = document.querySelector("#submersible-size-wrap");
const submersibleSizeOptions = interestForm.querySelectorAll('input[name="submersibleSize"]');
const submersibleAcDcSeriesWrap = document.querySelector("#submersible-acdc-series-wrap");
const submersibleAcDcSeriesOptions = interestForm.querySelectorAll('input[name="submersibleAcDcSeries"]');
const submersibleAcDc3scModels = document.querySelector("#submersible-acdc-3sc-models");
const submersibleAcDc3scModelOptions = submersibleAcDc3scModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDc4scModels = document.querySelector("#submersible-acdc-4sc-models");
const submersibleAcDc4scModelOptions = submersibleAcDc4scModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDc4sscModels = document.querySelector("#submersible-acdc-4ssc-models");
const submersibleAcDc4sscModelOptions = submersibleAcDc4sscModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDc46sscModels = document.querySelector("#submersible-acdc-46ssc-models");
const submersibleAcDc46sscModelOptions = submersibleAcDc46sscModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDcAppModels = document.querySelector("#submersible-acdc-app-models");
const submersibleAcDcAppModelOptions = submersibleAcDcAppModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDc3000wModels = document.querySelector("#submersible-acdc-3000w-models");
const submersibleAcDc3000wModelOptions = submersibleAcDc3000wModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDc4000wModels = document.querySelector("#submersible-acdc-4000w-models");
const submersibleAcDc4000wModelOptions = submersibleAcDc4000wModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersibleAcDc5500wModels = document.querySelector("#submersible-acdc-5500w-models");
const submersibleAcDc5500wModelOptions = submersibleAcDc5500wModels.querySelectorAll('input[name="submersibleAcDcModel"]');
const submersible2scModel = document.querySelector("#submersible-2sc-model");
const submersible2scModelOption = document.querySelector("#submersible-model-2sc");
const submersible3scModels = document.querySelector("#submersible-3sc-models");
const submersible3scModelOptions = submersible3scModels.querySelectorAll('input[name="submersibleModel"]');
const submersible4scModels = document.querySelector("#submersible-4sc-models");
const submersible4scModelOptions = submersible4scModels.querySelectorAll('input[name="submersibleModel"]');
const submersible4sscModels = document.querySelector("#submersible-4ssc-models");
const submersible4sscModelOptions = submersible4sscModels.querySelectorAll('input[name="submersibleModel"]');
const submersibleMotorOptions = interestForm.querySelectorAll('input[name="motor-submersible"]');
const sumpMotorOptions = interestForm.querySelectorAll('input[name="motor-sump"]');
const sumpAcDcModels = document.querySelector("#sump-acdc-models");
const sumpAcDcModelOptions = sumpAcDcModels.querySelectorAll('input[name="sumpAcDcModel"]');
const sumpDcModels = document.querySelector("#sump-dc-models");
const sumpDcModelOptions = sumpDcModels.querySelectorAll('input[name="sumpDcModel"]');
const sumpJ300wModels = document.querySelector("#sump-j300w-models");
const sumpJ300wModelOptions = sumpJ300wModels.querySelectorAll('input[name="sumpJ300wModel"]');
const sumpJ550wModels = document.querySelector("#sump-j550w-models");
const sumpJ550wModelOptions = sumpJ550wModels.querySelectorAll('input[name="sumpJ550wModel"]');
const sumpJ600wModels = document.querySelector("#sump-j600w-models");
const sumpJ600wModelOptions = sumpJ600wModels.querySelectorAll('input[name="sumpJ600wModel"]');
const sumpJ750wModels = document.querySelector("#sump-j750w-models");
const sumpJ750wModelOptions = sumpJ750wModels.querySelectorAll('input[name="sumpJ750wModel"]');
const sumpJ1100wModels = document.querySelector("#sump-j1100w-models");
const sumpJ1100wModelOptions = sumpJ1100wModels.querySelectorAll('input[name="sumpJ1100wModel"]');
const sumpJ1300wModels = document.querySelector("#sump-j1300w-models");
const sumpJ1300wModelOptions = sumpJ1300wModels.querySelectorAll('input[name="sumpJ1300wModel"]');
const sumpJ1500wModels = document.querySelector("#sump-j1500w-models");
const sumpJ1500wModelOptions = sumpJ1500wModels.querySelectorAll('input[name="sumpJ1500wModel"]');
const onGridDetailsWrap = document.querySelector("#ongrid-details-wrap");
const onGridPhaseOptions = interestForm.querySelectorAll('input[name="ongridPhase"]');
const onGridWattWrap = document.querySelector("#ongrid-watt-wrap");
const onGridWattOptions = interestForm.querySelectorAll('input[name="ongridWatt"]');
const otherInterest = document.querySelector("#other-interest");
const otherDetailsWrap = document.querySelector("#other-details-wrap");
const otherDetails = document.querySelector("#other-details");
const selectionSummary = document.querySelector("#selection-summary");
const selectionActions = document.querySelector("#selection-actions");
const orderAction = document.querySelector("#order-action");
const orderHandoffStatus = document.querySelector("#order-handoff-status");
const downloadSummaryPdfButton = document.querySelector("#download-summary-pdf");
const clearSelectionButton = document.querySelector("#clear-selection");

const SELECTION_STORAGE_KEY = "plakhao-selection";

function saveSelection() {
  const state = {};
  interestForm.querySelectorAll("input[name]").forEach((input) => {
    if (input.checked) {
      if (!state[input.name]) state[input.name] = [];
      state[input.name].push(input.value);
    }
  });
  if (otherDetails.value.trim()) state.otherDetails = otherDetails.value.trim();
  try {
    localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify(state));
  } catch {}
  updateClearButton();
}

function restoreSelection() {
  let state;
  try {
    state = JSON.parse(localStorage.getItem(SELECTION_STORAGE_KEY) || "null");
  } catch {
    return;
  }
  if (!state) return;
  Object.entries(state).forEach(([name, values]) => {
    if (name === "otherDetails") {
      otherDetails.value = values;
      return;
    }
    values.forEach((value) => {
      const input = interestForm.querySelector(`input[name="${CSS.escape(name)}"][value="${CSS.escape(value)}"]`);
      if (input) input.checked = true;
    });
  });
  pumpDetailsWrap.hidden = !pumpInterest.checked;
  onGridDetailsWrap.hidden = !onGridInterest.checked;
  otherDetailsWrap.hidden = !otherInterest.checked;
  updatePumpMotorOptions();
  updateOnGridWattOptions();
  updateClearButton();
}

function updateClearButton() {
  const hasSelection = Boolean(interestForm.querySelector("input:checked")) || otherDetails.value.trim() !== "";
  clearSelectionButton.hidden = !hasSelection;
}

clearSelectionButton.addEventListener("click", () => {
  interestForm.querySelectorAll("input:checked").forEach((input) => { input.checked = false; });
  otherDetails.value = "";
  pumpDetailsWrap.hidden = true;
  onGridDetailsWrap.hidden = true;
  otherDetailsWrap.hidden = true;
  updatePumpMotorOptions();
  updateOnGridWattOptions();
  selectionSummary.textContent = "";
  selectionActions.hidden = true;
  orderHandoffStatus.textContent = "";
  try {
    localStorage.removeItem(SELECTION_STORAGE_KEY);
  } catch {}
  updateClearButton();
});

restoreSelection();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

pumpInterest.addEventListener("change", () => {
  pumpDetailsWrap.hidden = !pumpInterest.checked;
  if (!pumpInterest.checked) pumpTypeOptions.forEach((input) => { input.checked = false; });
  updatePumpMotorOptions();
});

pumpTypeOptions.forEach((input) => input.addEventListener("change", updatePumpMotorOptions));
centrifugalMotorOptions.forEach((input) => {
  input.addEventListener("change", updateCentrifugalAcDcWattOptions);
  input.addEventListener("change", updateCentrifugalDcWattOptions);
});
centrifugalAcDcWattOptions.forEach((input) => input.addEventListener("change", updateCentrifugalAcDcWattOptions));
centrifugalDcWattOptions.forEach((input) => input.addEventListener("change", updateCentrifugalDcWattOptions));
submersibleMotorOptions.forEach((input) => input.addEventListener("change", updateSubmersibleSizeOptions));
sumpMotorOptions.forEach((input) => input.addEventListener("change", updateSumpDcModels));
sumpMotorOptions.forEach((input) => input.addEventListener("change", updateSumpAcDcModels));
sumpDcModelOptions.forEach((input) => input.addEventListener("change", updateSumpDcModels));
submersibleSizeOptions.forEach((input) => input.addEventListener("change", updateSubmersibleModel));
submersible2scModelOption.addEventListener("change", updateSubmersibleModel);
submersible3scModelOptions.forEach((input) => input.addEventListener("change", updateSubmersibleModel));
submersible4scModelOptions.forEach((input) => input.addEventListener("change", updateSubmersibleModel));
submersible4sscModelOptions.forEach((input) => input.addEventListener("change", updateSubmersibleModel));
submersibleAcDcSeriesOptions.forEach((input) => input.addEventListener("change", updateSubmersibleAcDcModels));

function updatePumpMotorOptions() {
  pumpMotorOptions.forEach((motorGroup) => {
    const pumpType = Array.from(pumpTypeOptions).find((input) => input.value === motorGroup.dataset.pumpMotor);
    motorGroup.hidden = !pumpInterest.checked || !pumpType.checked;
    const motorInputs = motorGroup.querySelectorAll('input[type="radio"]');
    motorInputs.forEach((input) => {
      input.required = pumpInterest.checked && pumpType.checked;
      if (!pumpInterest.checked || !pumpType.checked) input.checked = false;
    });
  });
  updateSubmersibleSizeOptions();
  updateCentrifugalAcDcWattOptions();
  updateCentrifugalDcWattOptions();
  updateSumpDcModels();
  updateSumpAcDcModels();
}

function updateSumpAcDcModels() {
  const sumpSelected = interestForm.querySelector('input[name="pumpType"][value="ปั๊มจุ่ม"]').checked;
  const acDcSelected = interestForm.querySelector('input[name="motor-sump"][value="สองระบบ AC/DC"]').checked;
  const showModels = pumpInterest.checked && sumpSelected && acDcSelected;
  sumpAcDcModels.hidden = !showModels;
  sumpAcDcModelOptions.forEach((input) => {
    input.required = showModels;
    if (!showModels) input.checked = false;
  });
}

function updateSumpDcModels() {
  const sumpSelected = interestForm.querySelector('input[name="pumpType"][value="ปั๊มจุ่ม"]').checked;
  const dcBrushlessSelected = interestForm.querySelector('input[name="motor-sump"][value="DC Brushless"]').checked;
  const showModels = pumpInterest.checked && sumpSelected && dcBrushlessSelected;
  sumpDcModels.hidden = !showModels;
  sumpDcModelOptions.forEach((input) => {
    input.required = showModels;
    if (!showModels) input.checked = false;
  });
  const j300wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-300W";
  sumpJ300wModels.hidden = !j300wSelected;
  sumpJ300wModelOptions.forEach((input) => {
    input.required = j300wSelected;
    if (!j300wSelected) input.checked = false;
  });
  const j550wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-550W";
  sumpJ550wModels.hidden = !j550wSelected;
  sumpJ550wModelOptions.forEach((input) => {
    input.required = j550wSelected;
    if (!j550wSelected) input.checked = false;
  });
  const j600wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-600W";
  sumpJ600wModels.hidden = !j600wSelected;
  sumpJ600wModelOptions.forEach((input) => {
    input.required = j600wSelected;
    if (!j600wSelected) input.checked = false;
  });
  const j750wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-750W";
  sumpJ750wModels.hidden = !j750wSelected;
  sumpJ750wModelOptions.forEach((input) => {
    input.required = j750wSelected;
    if (!j750wSelected) input.checked = false;
  });
  const j1100wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-1100W";
  sumpJ1100wModels.hidden = !j1100wSelected;
  sumpJ1100wModelOptions.forEach((input) => {
    input.required = j1100wSelected;
    if (!j1100wSelected) input.checked = false;
  });
  const j1300wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-1300W";
  sumpJ1300wModels.hidden = !j1300wSelected;
  sumpJ1300wModelOptions.forEach((input) => {
    input.required = j1300wSelected;
    if (!j1300wSelected) input.checked = false;
  });
  const j1500wSelected = showModels && sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-1500W";
  sumpJ1500wModels.hidden = !j1500wSelected;
  sumpJ1500wModelOptions.forEach((input) => {
    input.required = j1500wSelected;
    if (!j1500wSelected) input.checked = false;
  });
}

function updateCentrifugalAcDcWattOptions() {
  const centrifugalSelected = interestForm.querySelector('input[name="pumpType"][value="ปั๊มหอยโข่ง"]').checked;
  const acDcSelected = interestForm.querySelector('input[name="motor-centrifugal"][value="สองระบบ AC/DC"]').checked;
  const showWattOptions = pumpInterest.checked && centrifugalSelected && acDcSelected;
  const selectedWatt = interestForm.querySelector('input[name="centrifugalAcDcWatt"]:checked');
  const show750wModel = showWattOptions && selectedWatt?.value === "750W A/D";
  const show1100wModel = showWattOptions && selectedWatt?.value === "1100W A/D";
  const show1500wModels = showWattOptions && selectedWatt?.value === "1500W A/D";
  const show2200wModels = showWattOptions && selectedWatt?.value === "2200W A/D";
  const show3000wModels = showWattOptions && selectedWatt?.value === "3000W A/D";
  centrifugalAcDcWattWrap.hidden = !showWattOptions;
  centrifugalAcDcWattOptions.forEach((input) => {
    input.required = showWattOptions;
    if (!showWattOptions) input.checked = false;
  });
  centrifugalAcDc750wModels.hidden = !show750wModel;
  centrifugalAcDc750wModelOptions.forEach((input) => {
    input.required = show750wModel;
    if (!show750wModel) input.checked = false;
  });
  centrifugalAcDc1100wModels.hidden = !show1100wModel;
  centrifugalAcDc1100wModelOptions.forEach((input) => {
    input.required = show1100wModel;
    if (!show1100wModel) input.checked = false;
  });
  centrifugalAcDc1500wModels.hidden = !show1500wModels;
  centrifugalAcDc1500wModelOptions.forEach((input) => {
    input.required = show1500wModels;
    if (!show1500wModels) input.checked = false;
  });
  centrifugalAcDc2200wModels.hidden = !show2200wModels;
  centrifugalAcDc2200wModelOptions.forEach((input) => {
    input.required = show2200wModels;
    if (!show2200wModels) input.checked = false;
  });
  centrifugalAcDc3000wModels.hidden = !show3000wModels;
  centrifugalAcDc3000wModelOptions.forEach((input) => {
    input.required = show3000wModels;
    if (!show3000wModels) input.checked = false;
  });
}

function updateCentrifugalDcWattOptions() {
  const centrifugalSelected = interestForm.querySelector('input[name="pumpType"][value="ปั๊มหอยโข่ง"]').checked;
  const dcBrushlessSelected = interestForm.querySelector('input[name="motor-centrifugal"][value="DC Brushless"]').checked;
  const showWattOptions = pumpInterest.checked && centrifugalSelected && dcBrushlessSelected;
  const selectedWatt = interestForm.querySelector('input[name="centrifugalDcWatt"]:checked');
  const show280300Models = showWattOptions && selectedWatt?.value === "280-300W";
  const show550wModels = showWattOptions && selectedWatt?.value === "550W";
  const show750wModels = showWattOptions && selectedWatt?.value === "750W";
  const show1100wModels = showWattOptions && selectedWatt?.value === "1100W";
  const show1500wModels = showWattOptions && selectedWatt?.value === "1500W";
  centrifugalDcWattWrap.hidden = !showWattOptions;
  centrifugalDcWattOptions.forEach((input) => {
    input.required = showWattOptions;
    if (!showWattOptions) input.checked = false;
  });
  centrifugalDc280300Models.hidden = !show280300Models;
  centrifugalDc280300ModelOptions.forEach((input) => {
    input.required = show280300Models;
    if (!show280300Models) input.checked = false;
  });
  centrifugalDc550wModels.hidden = !show550wModels;
  centrifugalDc550wModelOptions.forEach((input) => {
    input.required = show550wModels;
    if (!show550wModels) input.checked = false;
  });
  centrifugalDc750wModels.hidden = !show750wModels;
  centrifugalDc750wModelOptions.forEach((input) => {
    input.required = show750wModels;
    if (!show750wModels) input.checked = false;
  });
  centrifugalDc1100wModels.hidden = !show1100wModels;
  centrifugalDc1100wModelOptions.forEach((input) => {
    input.required = show1100wModels;
    if (!show1100wModels) input.checked = false;
  });
  centrifugalDc1500wModels.hidden = !show1500wModels;
  centrifugalDc1500wModelOptions.forEach((input) => {
    input.required = show1500wModels;
    if (!show1500wModels) input.checked = false;
  });
}

function updateSubmersibleSizeOptions() {
  const submersibleSelected = interestForm.querySelector('input[name="pumpType"][value="ปั๊มซับเมอร์ส"]').checked;
  const dcBrushlessSelected = interestForm.querySelector('input[name="motor-submersible"][value="DC Brushless"]').checked;
  const showSizeOptions = pumpInterest.checked && submersibleSelected && dcBrushlessSelected;
  submersibleSizeWrap.hidden = !showSizeOptions;
  submersibleSizeOptions.forEach((input) => {
    input.required = showSizeOptions;
    if (!showSizeOptions) input.checked = false;
  });
  updateSubmersibleModel();
  updateSubmersibleAcDcSeries();
}

function updateSubmersibleAcDcSeries() {
  const submersibleSelected = interestForm.querySelector('input[name="pumpType"][value="ปั๊มซับเมอร์ส"]').checked;
  const acDcSelected = interestForm.querySelector('input[name="motor-submersible"][value="สองระบบ AC/DC"]').checked;
  const showSeriesOptions = pumpInterest.checked && submersibleSelected && acDcSelected;
  submersibleAcDcSeriesWrap.hidden = !showSeriesOptions;
  submersibleAcDcSeriesOptions.forEach((input) => {
    input.required = showSeriesOptions;
    if (!showSeriesOptions) input.checked = false;
  });
  updateSubmersibleAcDcModels();
}

function updateSubmersibleAcDcModels() {
  const selectedSeries = interestForm.querySelector('input[name="submersibleAcDcSeries"]:checked');
  const show3scModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "3SC";
  const show4scModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "4SC";
  const show4sscModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "4SSC";
  const show46sscModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "4/6SSC";
  const showAppModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "APP Type";
  const show3000wModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "3000W";
  const show4000wModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "4000W";
  const show5500wModels = !submersibleAcDcSeriesWrap.hidden && selectedSeries?.value === "5500W";
  submersibleAcDc3scModels.hidden = !show3scModels;
  submersibleAcDc4scModels.hidden = !show4scModels;
  submersibleAcDc4sscModels.hidden = !show4sscModels;
  submersibleAcDc46sscModels.hidden = !show46sscModels;
  submersibleAcDcAppModels.hidden = !showAppModels;
  submersibleAcDc3000wModels.hidden = !show3000wModels;
  submersibleAcDc4000wModels.hidden = !show4000wModels;
  submersibleAcDc5500wModels.hidden = !show5500wModels;
  submersibleAcDc3scModelOptions.forEach((input) => {
    input.required = show3scModels;
    if (!show3scModels) input.checked = false;
  });
  submersibleAcDc4scModelOptions.forEach((input) => {
    input.required = show4scModels;
    if (!show4scModels) input.checked = false;
  });
  submersibleAcDc4sscModelOptions.forEach((input) => {
    input.required = show4sscModels;
    if (!show4sscModels) input.checked = false;
  });
  submersibleAcDc46sscModelOptions.forEach((input) => {
    input.required = show46sscModels;
    if (!show46sscModels) input.checked = false;
  });
  submersibleAcDcAppModelOptions.forEach((input) => {
    input.required = showAppModels;
    if (!showAppModels) input.checked = false;
  });
  submersibleAcDc3000wModelOptions.forEach((input) => {
    input.required = show3000wModels;
    if (!show3000wModels) input.checked = false;
  });
  submersibleAcDc4000wModelOptions.forEach((input) => {
    input.required = show4000wModels;
    if (!show4000wModels) input.checked = false;
  });
  submersibleAcDc5500wModelOptions.forEach((input) => {
    input.required = show5500wModels;
    if (!show5500wModels) input.checked = false;
  });
}

function updateSubmersibleModel() {
  const selectedSize = interestForm.querySelector('input[name="submersibleSize"]:checked');
  const show2scModels = selectedSize?.value === "2SC";
  const show3scModels = selectedSize?.value === "3SC";
  const show4scModels = selectedSize?.value === "4SC";
  const show4sscModels = selectedSize?.value === "4SSC";
  submersible2scModel.hidden = !show2scModels;
  submersible3scModels.hidden = !show3scModels;
  submersible4scModels.hidden = !show4scModels;
  submersible4sscModels.hidden = !show4sscModels;
  submersible2scModelOption.required = show2scModels;
  submersible3scModelOptions.forEach((input) => { input.required = show3scModels; });
  submersible4scModelOptions.forEach((input) => { input.required = show4scModels; });
  submersible4sscModelOptions.forEach((input) => { input.required = show4sscModels; });
  if (!show2scModels) submersible2scModelOption.checked = false;
  if (!show3scModels) submersible3scModelOptions.forEach((input) => { input.checked = false; });
  if (!show4scModels) submersible4scModelOptions.forEach((input) => { input.checked = false; });
  if (!show4sscModels) submersible4sscModelOptions.forEach((input) => { input.checked = false; });
}

onGridInterest.addEventListener("change", () => {
  onGridDetailsWrap.hidden = !onGridInterest.checked;
  onGridPhaseOptions.forEach((input) => {
    input.required = onGridInterest.checked;
    if (!onGridInterest.checked) input.checked = false;
  });
  if (!onGridInterest.checked) onGridWattOptions.forEach((input) => { input.checked = false; });
  updateOnGridWattOptions();
});

onGridPhaseOptions.forEach((input) => input.addEventListener("change", updateOnGridWattOptions));

function updateOnGridWattOptions() {
  const phaseSelected = Boolean(interestForm.querySelector('input[name="ongridPhase"]:checked'));
  onGridWattWrap.hidden = !onGridInterest.checked || !phaseSelected;
  onGridWattOptions.forEach((input) => {
    input.required = onGridInterest.checked && phaseSelected;
    if (!onGridInterest.checked) input.checked = false;
  });
}

otherInterest.addEventListener("change", () => {
  otherDetailsWrap.hidden = !otherInterest.checked;
  if (!otherInterest.checked) otherDetails.value = "";
});

interestForm.addEventListener("change", () => {
  selectionSummary.textContent = "";
  selectionActions.hidden = true;
  orderHandoffStatus.textContent = "";
  saveSelection();
});

otherDetails.addEventListener("input", saveSelection);

orderAction.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(selectionSummary.textContent);
    orderHandoffStatus.textContent = "คัดลอกรายการแล้ว เปิด LINE แล้ววางข้อความเพื่อส่งคำสั่งซื้อ";
  } catch {
    orderHandoffStatus.textContent = "เปิด LINE แล้ว สามารถคัดลอกรายการจากสรุปด้านบนเพื่อส่งคำสั่งซื้อ";
  }
});

downloadSummaryPdfButton.addEventListener("click", async () => {
  if (typeof window.html2pdf !== "function") {
    orderHandoffStatus.textContent = "สร้าง PDF ไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตแล้วลองอีกครั้ง";
    return;
  }

  const pdfStage = document.createElement("div");
  pdfStage.className = "pdf-render-stage";
  pdfStage.setAttribute("aria-hidden", "true");

  const pdfDocument = document.createElement("article");
  pdfDocument.className = "pdf-document";

  const createdAt = new Date();
  const pdfHeader = document.createElement("header");
  pdfHeader.className = "pdf-header";

  const shopLogo = document.createElement("img");
  shopLogo.className = "pdf-shop-logo";
  shopLogo.src = "552065.jpg";
  shopLogo.alt = "โลโก้ร้านปลาขาวโซล่าร์เซลล์";

  const shopInfo = document.createElement("div");
  shopInfo.className = "pdf-shop-info";

  const shopName = document.createElement("p");
  shopName.className = "pdf-shop-name";
  shopName.textContent = "ห้างหุ้นส่วนจำกัด ปลาขาว โซล่าร์เซลล์ (สำนักงานใหญ่)";

  const shopAddress = document.createElement("p");
  shopAddress.className = "pdf-company-detail";
  shopAddress.textContent = "115 หมู่ที่ 2 ต.ยาง อ.น้ำยืน จ.อุบลราชธานี 34260";

  const taxId = document.createElement("p");
  taxId.className = "pdf-company-detail";
  taxId.textContent = "เลขประจำตัวผู้เสียภาษี 0343568001061";

  const shopEmail = document.createElement("p");
  shopEmail.className = "pdf-company-detail";
  shopEmail.textContent = "E-mail: Plakhaosolarcell@gmail.com";

  const title = document.createElement("h1");
  title.textContent = "สรุปรายการสินค้าที่เลือก";

  const phone = document.createElement("p");
  phone.className = "pdf-contact";
  phone.textContent = "โทร. 080 527 8985";

  const date = document.createElement("p");
  date.className = "pdf-date";
  date.textContent = `วันที่ ${createdAt.toLocaleDateString("th-TH", { day: "numeric", month: "long", year: "numeric" })}`;

  const time = document.createElement("p");
  time.className = "pdf-time";
  time.textContent = `เวลาที่ดาวน์โหลด ${createdAt.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })} น.`;

  const itemsLabel = document.createElement("h2");
  itemsLabel.textContent = "รายการสินค้า";

  const items = document.createElement("p");
  items.className = "pdf-items";
  items.textContent = selectionSummary.textContent.replace(/^รายการที่คุณเลือก:\s*/, "");

  shopInfo.append(shopName, shopAddress, taxId, phone, shopEmail);
  pdfHeader.append(shopLogo, shopInfo);
  pdfDocument.append(pdfHeader, title, date, time, itemsLabel, items);
  pdfStage.append(pdfDocument);
  document.body.append(pdfStage);
  orderHandoffStatus.textContent = "กำลังจัดเตรียมไฟล์ PDF...";

  try {
    await document.fonts.ready;
    if (!shopLogo.complete) {
      await new Promise((resolve) => {
        shopLogo.addEventListener("load", resolve, { once: true });
        shopLogo.addEventListener("error", resolve, { once: true });
      });
    }
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const filenameTimestamp = [
      createdAt.getFullYear(),
      String(createdAt.getMonth() + 1).padStart(2, "0"),
      String(createdAt.getDate()).padStart(2, "0"),
      String(createdAt.getHours()).padStart(2, "0"),
      String(createdAt.getMinutes()).padStart(2, "0"),
      String(createdAt.getSeconds()).padStart(2, "0"),
    ].join("");
    await window.html2pdf().set({
      margin: 12,
      filename: `Plakhao-SolarCell-${filenameTimestamp}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).from(pdfDocument).save();
    orderHandoffStatus.textContent = "ดาวน์โหลดไฟล์ PDF เรียบร้อยแล้ว";
  } catch {
    orderHandoffStatus.textContent = "สร้าง PDF ไม่สำเร็จ กรุณาลองอีกครั้ง";
  } finally {
    pdfStage.remove();
  }
});

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedInterests = Array.from(
    interestForm.querySelectorAll('input[name="interest"]:checked'),
    (input) => input.value,
  );

  if (selectedInterests.length === 0) {
    selectionSummary.textContent = "กรุณาเลือกกลุ่มสินค้าที่สนใจอย่างน้อย 1 รายการ";
    interestForm.querySelector('input[name="interest"]').focus();
    return;
  }

  if (pumpInterest.checked) {
    const selectedPumpTypes = Array.from(
      interestForm.querySelectorAll('input[name="pumpType"]:checked'),
      (input) => ({ name: input.value, motorGroup: Array.from(pumpMotorOptions).find((group) => group.dataset.pumpMotor === input.value) }),
    );
    if (selectedPumpTypes.length === 0) {
      selectionSummary.textContent = "กรุณาเลือกประเภทปั๊มน้ำอย่างน้อย 1 รายการ";
      pumpTypeOptions[0].focus();
      return;
    }
    const pumpWithoutMotor = selectedPumpTypes.find(({ motorGroup }) => !motorGroup.querySelector('input[type="radio"]:checked'));
    if (pumpWithoutMotor) {
      selectionSummary.textContent = `กรุณาเลือกชนิดมอเตอร์สำหรับ${pumpWithoutMotor.name}`;
      pumpWithoutMotor.motorGroup.querySelector('input[type="radio"]').focus();
      return;
    }
    const centrifugalPump = selectedPumpTypes.find(({ name }) => name === "ปั๊มหอยโข่ง");
    const selectedCentrifugalMotor = centrifugalPump?.motorGroup.querySelector('input[name="motor-centrifugal"]:checked');
    const selectedCentrifugalWatt = interestForm.querySelector('input[name="centrifugalDcWatt"]:checked');
    if (selectedCentrifugalMotor?.value === "DC Brushless" && !selectedCentrifugalWatt) {
      selectionSummary.textContent = "กรุณาเลือกกำลังปั๊มหอยโข่ง DC Brushless";
      centrifugalDcWattOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "DC Brushless" && selectedCentrifugalWatt?.value === "280-300W" && !centrifugalDc280300Models.querySelector('input[name="centrifugalDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง DC Brushless 280-300W";
      centrifugalDc280300ModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "DC Brushless" && selectedCentrifugalWatt?.value === "550W" && !centrifugalDc550wModels.querySelector('input[name="centrifugalDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง DC Brushless 550W";
      centrifugalDc550wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "DC Brushless" && selectedCentrifugalWatt?.value === "750W" && !centrifugalDc750wModels.querySelector('input[name="centrifugalDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง DC Brushless 750W";
      centrifugalDc750wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "DC Brushless" && selectedCentrifugalWatt?.value === "1100W" && !centrifugalDc1100wModels.querySelector('input[name="centrifugalDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง DC Brushless 1100W";
      centrifugalDc1100wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "DC Brushless" && selectedCentrifugalWatt?.value === "1500W" && !centrifugalDc1500wModels.querySelector('input[name="centrifugalDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง DC Brushless 1500W";
      centrifugalDc1500wModelOptions[0].focus();
      return;
    }
    const selectedCentrifugalAcDcWatt = interestForm.querySelector('input[name="centrifugalAcDcWatt"]:checked');
    if (selectedCentrifugalMotor?.value === "สองระบบ AC/DC" && !selectedCentrifugalAcDcWatt) {
      selectionSummary.textContent = "กรุณาเลือกกำลังปั๊มหอยโข่งสำหรับระบบสองระบบ AC/DC";
      centrifugalAcDcWattOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "สองระบบ AC/DC" && selectedCentrifugalAcDcWatt?.value === "750W A/D" && !centrifugalAcDc750wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง 750W A/D";
      centrifugalAcDc750wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "สองระบบ AC/DC" && selectedCentrifugalAcDcWatt?.value === "1100W A/D" && !centrifugalAcDc1100wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง 1100W A/D";
      centrifugalAcDc1100wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "สองระบบ AC/DC" && selectedCentrifugalAcDcWatt?.value === "1500W A/D" && !centrifugalAcDc1500wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง 1500W A/D";
      centrifugalAcDc1500wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "สองระบบ AC/DC" && selectedCentrifugalAcDcWatt?.value === "2200W A/D" && !centrifugalAcDc2200wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง 2200W A/D";
      centrifugalAcDc2200wModelOptions[0].focus();
      return;
    }
    if (selectedCentrifugalMotor?.value === "สองระบบ AC/DC" && selectedCentrifugalAcDcWatt?.value === "3000W A/D" && !centrifugalAcDc3000wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มหอยโข่ง 3000W A/D";
      centrifugalAcDc3000wModelOptions[0].focus();
      return;
    }
    const submersiblePump = selectedPumpTypes.find(({ name }) => name === "ปั๊มซับเมอร์ส");
    const selectedSubmersibleMotor = submersiblePump?.motorGroup.querySelector('input[name="motor-submersible"]:checked');
    const selectedAcDcSeries = interestForm.querySelector('input[name="submersibleAcDcSeries"]:checked');
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && !selectedAcDcSeries) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มสำหรับระบบสองระบบ AC/DC";
      submersibleAcDcSeriesOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "3SC" && !submersibleAcDc3scModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 3SC สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc3scModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "4SC" && !submersibleAcDc4scModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 4SC สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc4scModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "4SSC" && !submersibleAcDc4sscModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 4SSC สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc4sscModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "4/6SSC" && !submersibleAcDc46sscModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 4/6SSC สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc46sscModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "APP Type" && !submersibleAcDcAppModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส APP Type สำหรับระบบสองระบบ AC/DC";
      submersibleAcDcAppModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "3000W" && !submersibleAcDc3000wModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 3000W สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc3000wModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "4000W" && !submersibleAcDc4000wModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 4000W สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc4000wModelOptions[0].focus();
      return;
    }
    if (selectedSubmersibleMotor?.value === "สองระบบ AC/DC" && selectedAcDcSeries?.value === "5500W" && !submersibleAcDc5500wModels.querySelector('input[name="submersibleAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 5500W สำหรับระบบสองระบบ AC/DC";
      submersibleAcDc5500wModelOptions[0].focus();
      return;
    }
    const submersibleSize = interestForm.querySelector('input[name="submersibleSize"]:checked');
    if (submersibleSize?.value === "2SC" && !submersible2scModelOption.checked) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 2SC";
      submersible2scModelOption.focus();
      return;
    }
    if (submersibleSize?.value === "3SC" && !submersible3scModels.querySelector('input[name="submersibleModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 3SC";
      submersible3scModelOptions[0].focus();
      return;
    }
    if (submersibleSize?.value === "4SC" && !submersible4scModels.querySelector('input[name="submersibleModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 4SC";
      submersible4scModelOptions[0].focus();
      return;
    }
    if (submersibleSize?.value === "4SSC" && !submersible4sscModels.querySelector('input[name="submersibleModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มซับเมอร์ส 4SSC";
      submersible4sscModelOptions[0].focus();
      return;
    }
    const sumpPump = selectedPumpTypes.find(({ name }) => name === "ปั๊มจุ่ม");
    const selectedSumpMotor = sumpPump?.motorGroup.querySelector('input[name="motor-sump"]:checked');
    if (selectedSumpMotor?.value === "DC Brushless" && !sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม DC Brushless";
      sumpDcModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-300W" && !sumpJ300wModels.querySelector('input[name="sumpJ300wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-300W";
      sumpJ300wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-550W" && !sumpJ550wModels.querySelector('input[name="sumpJ550wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-550W";
      sumpJ550wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-600W" && !sumpJ600wModels.querySelector('input[name="sumpJ600wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-600W";
      sumpJ600wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-750W" && !sumpJ750wModels.querySelector('input[name="sumpJ750wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-750W";
      sumpJ750wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-1100W" && !sumpJ1100wModels.querySelector('input[name="sumpJ1100wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-1100W";
      sumpJ1100wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-1300W" && !sumpJ1300wModels.querySelector('input[name="sumpJ1300wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-1300W";
      sumpJ1300wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "DC Brushless" && interestForm.querySelector('input[name="sumpDcModel"]:checked')?.value === "J-1500W" && !sumpJ1500wModels.querySelector('input[name="sumpJ1500wModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม J-1500W";
      sumpJ1500wModelOptions[0].focus();
      return;
    }
    if (selectedSumpMotor?.value === "สองระบบ AC/DC" && !sumpAcDcModels.querySelector('input[name="sumpAcDcModel"]:checked')) {
      selectionSummary.textContent = "กรุณาเลือกรุ่นปั๊มจุ่ม สองระบบ AC/DC";
      sumpAcDcModelOptions[0].focus();
      return;
    }
    const pumpIndex = selectedInterests.indexOf("โซล่าร์ปั๊มน้ำ");
    const pumpSummary = selectedPumpTypes.map(({ name, motorGroup }) => {
      const selectedMotor = motorGroup.querySelector('input[type="radio"]:checked');
      const selectedSumpModel = name === "ปั๊มจุ่ม" && selectedMotor.value === "DC Brushless"
        ? sumpDcModels.querySelector('input[name="sumpDcModel"]:checked')
        : null;
      const selectedSumpAcDcModel = name === "ปั๊มจุ่ม" && selectedMotor.value === "สองระบบ AC/DC"
        ? sumpAcDcModels.querySelector('input[name="sumpAcDcModel"]:checked')
        : null;
      const selectedSumpJ300wModel = selectedSumpModel?.value === "J-300W"
        ? sumpJ300wModels.querySelector('input[name="sumpJ300wModel"]:checked')
        : null;
      const selectedSumpJ550wModel = selectedSumpModel?.value === "J-550W"
        ? sumpJ550wModels.querySelector('input[name="sumpJ550wModel"]:checked')
        : null;
      const selectedSumpJ600wModel = selectedSumpModel?.value === "J-600W"
        ? sumpJ600wModels.querySelector('input[name="sumpJ600wModel"]:checked')
        : null;
      const selectedSumpJ750wModel = selectedSumpModel?.value === "J-750W"
        ? sumpJ750wModels.querySelector('input[name="sumpJ750wModel"]:checked')
        : null;
      const selectedSumpJ1100wModel = selectedSumpModel?.value === "J-1100W"
        ? sumpJ1100wModels.querySelector('input[name="sumpJ1100wModel"]:checked')
        : null;
      const selectedSumpJ1300wModel = selectedSumpModel?.value === "J-1300W"
        ? sumpJ1300wModels.querySelector('input[name="sumpJ1300wModel"]:checked')
        : null;
      const selectedSumpJ1500wModel = selectedSumpModel?.value === "J-1500W"
        ? sumpJ1500wModels.querySelector('input[name="sumpJ1500wModel"]:checked')
        : null;
      const selectedSize = name === "ปั๊มซับเมอร์ส" && selectedMotor.value === "DC Brushless"
        ? interestForm.querySelector('input[name="submersibleSize"]:checked')
        : null;
      const selectedAcDcSeries = name === "ปั๊มซับเมอร์ส" && selectedMotor.value === "สองระบบ AC/DC"
        ? interestForm.querySelector('input[name="submersibleAcDcSeries"]:checked')
        : null;
      const selectedCentrifugalWatt = name === "ปั๊มหอยโข่ง" && selectedMotor.value === "DC Brushless"
        ? interestForm.querySelector('input[name="centrifugalDcWatt"]:checked')
        : null;
      const selectedCentrifugalAcDcWatt = name === "ปั๊มหอยโข่ง" && selectedMotor.value === "สองระบบ AC/DC"
        ? interestForm.querySelector('input[name="centrifugalAcDcWatt"]:checked')
        : null;
      const selectedCentrifugalAcDcModel = selectedCentrifugalAcDcWatt?.value === "750W A/D"
        ? centrifugalAcDc750wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')
        : selectedCentrifugalAcDcWatt?.value === "1100W A/D"
          ? centrifugalAcDc1100wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')
          : selectedCentrifugalAcDcWatt?.value === "1500W A/D"
            ? centrifugalAcDc1500wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')
            : selectedCentrifugalAcDcWatt?.value === "2200W A/D"
              ? centrifugalAcDc2200wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')
              : selectedCentrifugalAcDcWatt?.value === "3000W A/D"
                ? centrifugalAcDc3000wModels.querySelector('input[name="centrifugalAcDcModel"]:checked')
                : null;
      const selectedCentrifugalDcModel = selectedCentrifugalWatt?.value === "280-300W"
        ? centrifugalDc280300Models.querySelector('input[name="centrifugalDcModel"]:checked')
        : selectedCentrifugalWatt?.value === "550W"
          ? centrifugalDc550wModels.querySelector('input[name="centrifugalDcModel"]:checked')
          : selectedCentrifugalWatt?.value === "750W"
            ? centrifugalDc750wModels.querySelector('input[name="centrifugalDcModel"]:checked')
            : selectedCentrifugalWatt?.value === "1100W"
              ? centrifugalDc1100wModels.querySelector('input[name="centrifugalDcModel"]:checked')
              : selectedCentrifugalWatt?.value === "1500W"
                ? centrifugalDc1500wModels.querySelector('input[name="centrifugalDcModel"]:checked')
                : null;
      const selectedAcDcModel = selectedAcDcSeries?.value === "3SC"
        ? submersibleAcDc3scModels.querySelector('input[name="submersibleAcDcModel"]:checked')
        : selectedAcDcSeries?.value === "4SC"
          ? submersibleAcDc4scModels.querySelector('input[name="submersibleAcDcModel"]:checked')
          : selectedAcDcSeries?.value === "4SSC"
            ? submersibleAcDc4sscModels.querySelector('input[name="submersibleAcDcModel"]:checked')
            : selectedAcDcSeries?.value === "4/6SSC"
              ? submersibleAcDc46sscModels.querySelector('input[name="submersibleAcDcModel"]:checked')
              : selectedAcDcSeries?.value === "APP Type"
                ? submersibleAcDcAppModels.querySelector('input[name="submersibleAcDcModel"]:checked')
                : selectedAcDcSeries?.value === "3000W"
                  ? submersibleAcDc3000wModels.querySelector('input[name="submersibleAcDcModel"]:checked')
                  : selectedAcDcSeries?.value === "4000W"
                    ? submersibleAcDc4000wModels.querySelector('input[name="submersibleAcDcModel"]:checked')
                    : selectedAcDcSeries?.value === "5500W"
                      ? submersibleAcDc5500wModels.querySelector('input[name="submersibleAcDcModel"]:checked')
                      : null;
      const selectedModel = selectedSize?.value === "2SC"
        ? (submersible2scModelOption.checked ? submersible2scModelOption : null)
        : selectedSize?.value === "3SC"
          ? submersible3scModels.querySelector('input[name="submersibleModel"]:checked')
          : selectedSize?.value === "4SC"
            ? submersible4scModels.querySelector('input[name="submersibleModel"]:checked')
            : selectedSize?.value === "4SSC"
              ? submersible4sscModels.querySelector('input[name="submersibleModel"]:checked')
              : null;
        const modelPrice = selectedSize?.value === "2SC"
          ? "5,500 บาท"
          : selectedModel?.dataset.price
            ? `${Number(selectedModel.dataset.price).toLocaleString("th-TH")} บาท`
            : "";
        const modelDetails = selectedModel
          ? `, ${[selectedModel.value, selectedModel.dataset.outlet, selectedModel.dataset.impeller, modelPrice, "รับประกัน 3 ปี"].filter(Boolean).join(", ")}`
          : "";
      const acDcModelDetails = selectedAcDcModel
        ? `, ${[
            selectedAcDcModel.value,
            selectedAcDcModel.dataset.outlet,
            selectedAcDcModel.dataset.price ? `${Number(selectedAcDcModel.dataset.price).toLocaleString("th-TH")} บาท` : "",
            "รับประกัน 3 ปี",
          ].filter(Boolean).join(", ")}`
        : "";
      const centrifugalDcModelDetails = selectedCentrifugalDcModel
        ? `, ${[
            selectedCentrifugalDcModel.value,
            selectedCentrifugalDcModel.dataset.outlet,
            selectedCentrifugalDcModel.dataset.variant,
            `${Number(selectedCentrifugalDcModel.dataset.price).toLocaleString("th-TH")} บาท`,
            "รับประกัน 1 ปี",
          ].filter(Boolean).join(", ")}`
        : "";
      const centrifugalAcDcModelDetails = selectedCentrifugalAcDcModel
        ? `, ${[
            selectedCentrifugalAcDcModel.value,
            selectedCentrifugalAcDcModel.dataset.outlet,
            selectedCentrifugalAcDcModel.dataset.variant,
            `${Number(selectedCentrifugalAcDcModel.dataset.price).toLocaleString("th-TH")} บาท`,
            "รับประกัน 1 ปี",
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ300wModelDetails = selectedSumpJ300wModel
        ? `, ${[
            selectedSumpJ300wModel.value,
            selectedSumpJ300wModel.dataset.outlet,
            selectedSumpJ300wModel.dataset.variant,
            `${Number(selectedSumpJ300wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ300wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ550wModelDetails = selectedSumpJ550wModel
        ? `, ${[
            selectedSumpJ550wModel.value,
            selectedSumpJ550wModel.dataset.outlet,
            selectedSumpJ550wModel.dataset.variant,
            `${Number(selectedSumpJ550wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ550wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ600wModelDetails = selectedSumpJ600wModel
        ? `, ${[
            selectedSumpJ600wModel.value,
            selectedSumpJ600wModel.dataset.outlet,
            selectedSumpJ600wModel.dataset.variant,
            `${Number(selectedSumpJ600wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ600wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ750wModelDetails = selectedSumpJ750wModel
        ? `, ${[
            selectedSumpJ750wModel.dataset.model,
            selectedSumpJ750wModel.dataset.outlet,
            selectedSumpJ750wModel.dataset.variant,
            `${Number(selectedSumpJ750wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ750wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ1100wModelDetails = selectedSumpJ1100wModel
        ? `, ${[
            selectedSumpJ1100wModel.value,
            selectedSumpJ1100wModel.dataset.outlet,
            selectedSumpJ1100wModel.dataset.variant,
            `${Number(selectedSumpJ1100wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ1100wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ1300wModelDetails = selectedSumpJ1300wModel
        ? `, ${[
            selectedSumpJ1300wModel.value,
            selectedSumpJ1300wModel.dataset.outlet,
            selectedSumpJ1300wModel.dataset.variant,
            `${Number(selectedSumpJ1300wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ1300wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpJ1500wModelDetails = selectedSumpJ1500wModel
        ? `, ${[
            selectedSumpJ1500wModel.value,
            selectedSumpJ1500wModel.dataset.outlet,
            selectedSumpJ1500wModel.dataset.variant,
            `${Number(selectedSumpJ1500wModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpJ1500wModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")}`
        : "";
      const sumpAcDcModelDetails = selectedSumpAcDcModel
        ? [
            selectedSumpAcDcModel.value,
            selectedSumpAcDcModel.dataset.outlet,
            `${Number(selectedSumpAcDcModel.dataset.price).toLocaleString("th-TH")} บาท`,
            `รับประกัน ${selectedSumpAcDcModel.dataset.warranty}`,
          ].filter(Boolean).join(", ")
        : "";
      const pumpVariant = selectedSize
        ? ` (${selectedSize.value}${modelDetails})`
        : selectedAcDcSeries
          ? ` (${selectedAcDcSeries.value}${acDcModelDetails})`
          : selectedSumpAcDcModel
            ? ` (${sumpAcDcModelDetails})`
          : selectedSumpModel
            ? ` (${selectedSumpModel.value}${sumpJ300wModelDetails}${sumpJ550wModelDetails}${sumpJ600wModelDetails}${sumpJ750wModelDetails}${sumpJ1100wModelDetails}${sumpJ1300wModelDetails}${sumpJ1500wModelDetails})`
            : selectedCentrifugalWatt
              ? ` (${selectedCentrifugalWatt.value}${centrifugalDcModelDetails})`
              : selectedCentrifugalAcDcWatt
                ? ` (${selectedCentrifugalAcDcWatt.value}${centrifugalAcDcModelDetails})`
                : "";
      return `${name}: ${selectedMotor.value}${pumpVariant}`;
    });
    selectedInterests[pumpIndex] = `โซล่าร์ปั๊มน้ำ (${pumpSummary.join(", ")})`;
  }

  if (onGridInterest.checked) {
    const selectedPhase = interestForm.querySelector('input[name="ongridPhase"]:checked');
    const selectedWatt = interestForm.querySelector('input[name="ongridWatt"]:checked');
    const onGridIndex = selectedInterests.indexOf("ระบบออนกริด");
    selectedInterests[onGridIndex] = `ระบบออนกริด (${selectedPhase.value}, ${selectedWatt.value})`;
  }

  if (otherInterest.checked && otherDetails.value.trim()) {
    selectedInterests[selectedInterests.indexOf("อื่นๆ")] = `อื่นๆ: ${otherDetails.value.trim()}`;
  }

  selectionSummary.textContent = `รายการที่คุณเลือก: ${selectedInterests.join(", ")}`;
  orderHandoffStatus.textContent = "";
  selectionActions.hidden = false;
});