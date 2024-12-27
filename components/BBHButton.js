
/* 
    @Author         Eric Dolecki
    @Date           12/26/2024    
    @Copyright      2025 Eric E. Dolecki

    @Class          BBHButton
    @Element        bbh-button
    @Icon Library   https://ionic.io/ionicons
    
    @Description
    A reusable button component with optional data-icon string
    to match the Ionic icon library. Also includes an optional
    data-variant string to match a defined color palette. If 
    no variant is defined, the default color palette is used.
    If a variant is defined but doesn't match any of the 
    available colors, the default color palette is used.
*/
export class BBHButton extends HTMLElement 
{
    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback()
    {
        const icon = this.getAttribute('data-icon');
        const variant = this.getAttribute('data-variant');
        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            <button class="button">
                ${
                    (icon && `<ion-icon name="${icon}"></ion-icon>`) || ""
                }
                <span class="label">
                    <slot></slot>
                </span>
            </button>
        `;
        if(variant) {
            this.shadowRoot.querySelector('.button').classList.add(`variant-${variant}`);
        }
    } 
}

const css = `
    .button {
        font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        gap: 8px;
        background-color: #166df7;
        border-radius: 14px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1em;
        transition: all 200ms linear;
    }
    .button:hover {
        background-color:rgb(8, 77, 190);
    }
    .variant-success { 
        color: #3cba02 !important;
        background-color: white;
        outline: 1px solid #3cba02;
        color: #fff;
    }
    .variant-success:hover {
        color: white !important;
        background-color: #3cba02;
    }
    .variant-error {
        background-color:rgb(255, 34, 0);
        color: #fff;
    }
    .variant-error:hover {
        background-color:rgb(197, 26, 0);
    }
    .variant-cta {
        background-color: #666;
        color: #fff;
    }
    .variant-cta:hover {
        background-color: #888;
        color: #fff;
    }
    .label {
        white-space: nowrap;
    }
`;