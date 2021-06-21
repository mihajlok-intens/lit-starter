import { html, css, LitElement, customElement, property } from 'lit-element';
import '@material/mwc-button'

@customElement('my-button')
export class MyElement extends LitElement {

    render() {
        return html`
            <mwc-button unelevated label="FOLLOW JANE"></mwc-button>
        `;
    }

}