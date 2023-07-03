const stateButton = document.getElementById("oregonButton");
stateButton.addEventListener("click", () =>
  import("./ModuleTest2.js").then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);
