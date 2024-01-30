export const formStepImpression = (stepNumber, stepName, formName) => {
  dataLayer.push({
    event: "formStepImpression",
    formStepNum: stepNumber,
    stepName: stepName,
    formName: formName
  });
};

export const formStepSubmit = (stepNumber, stepName, formName) => {
    dataLayer.push({
        event: "formStepSubmit",
        formStepNum: stepNumber,
        stepName: stepName,
        formName: formName
    });
};

export const formStepInteraction = (stepNumber, stepName, interaction, formName) => {
    dataLayer.push({
        event: "formStepInteraction",
        formStepNum: stepNumber,
        stepName: stepName,
        interaction: interaction,
        stepName: stepName,
        formName: formName
    });
}