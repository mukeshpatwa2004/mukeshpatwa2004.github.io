class SankeyWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    font-family: Arial;
                    padding: 10px;
                }
            </style>
            <div>
                ✅ Sankey Widget Loaded Successfully
            </div>
        `;
    }
}

customElements.define("com-mukesh-sankey", SankeyWidget);