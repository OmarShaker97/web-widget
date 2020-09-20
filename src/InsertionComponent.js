const template = document.createElement("template");
template.innerHTML = `
  <div>
    <input type="text" id="fname" name="fname">
    <button id="submitbtn">Submit</button> 
  </div>
  `;

class InsertionComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .getElementById("submitbtn")
      .addEventListener("click", () => {
        // jQuery.ajax({
        //   type: "POST",
        //   url: "InsertionComponent.php",
        //   dataType: "json",
        //   data: {
        //     functionname: "insert",
        //     arguments: [this.shadowRoot.getElementById("fname").value],
        //   },

        //   success: function (obj, textstatus) {
        //     if (!("error" in obj)) {
        //       yourVariable = obj.result;
        //     } else {
        //       console.log(obj.error);
        //     }
        //   },
        // });
        alert(this.shadowRoot.getElementById("fname").value);
      });
  }

  disconnectedCallback() {}
}
window.customElements.define("insertion-component", InsertionComponent);
