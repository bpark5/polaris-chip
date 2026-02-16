import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do: 
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://cdn.britannica.com/48/223048-050-3AAA8EB6/Golfer-Tiger-Woods-Masters-Augusta-Georgia-2019.jpg";
    this.alt = "Image information";
    this.information = "Some information";
    this.buttonLink = "https://hax.psu.edu";
    this.buttonDescription = "Click me!";
    this.fancy = false;
    this.topText = "I";
    this.bottomText = "Like golf";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        vertical-align: top;
        margin: 8px;
      }

      :host([fancy]) .card {
        background-color: var(--my-card-fancy-background-color, #da80b4);
        border-color: var(--my-card-fancy-border-color, #f5f5dc);
      }

      :host([fancy]) .information {
        color: var(--my-information-fancy-color, #f5f5dc);
      }
      :host([fancy]) .heading {
        color: var(--my-heading-fancy-color, #f5f5dc);
      }

      :host([fancy]) .button {
        background-color: var(--my-button-fancy-background-color, #f5f5dc);
        color: var(--my-button-fancy-font-color, #da80b4);
      }

      :host([fancy]) .image {
        border-color: var(--my-image-fancy-border-color, #f5f5dc);
      }

      .card {
      width: 350px;
      height: 400px;
      background-color: var(--my-card-background-color, #eeeeee);
      padding: 4px;
      margin: 16px;
      border: 4px var(--my-card-border-color, #000) solid;
      overflow: hidden;
      position: relative;
      }

      .heading {
      font-size: 24px;
      font-family: Arial;
      text-transform: uppercase;
      text-decoration-line: underline;
      text-align: center;
      margin-bottom: 16px;
      color: var(--my-heading-color, #000);
      overflow: auto;
      }

      .image {
      border: 8px var(--my-image-border-color, #000) solid;
      display: block;
      margin: auto;
      margin-bottom: 8px;
      width: 200px;
      max-height: 250px;
      }

      .information {
      font-family: arial;
      margin: 16px;
      font-size: 16px;
      color: var(--my-information-color, #000);
      }

      .button {
      color: var(--my-button-font-color,#fff);
      background-color: var(--my-button-background-color, #000);
      font-size: 16px;
      padding: 4px 8px;
      display: block;
      margin: auto;
      max-width: 100px;
      }

      details {
        height: 80px;
      }
      
      details[open] .information {
        max-height: 48px;
        overflow-y: auto;
        margin: auto 16px;
      }`;
  }

  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class=card>
      <div>
        <h1 class=heading>${this.title}</h1>
      </div>
      <div>
        <meme-maker class=image 
          image-url="${this.image}" 
          alt="${this.alt}" 
          bottom-text="${this.bottomText}" 
          top-text="${this.topText}"> 
        </meme-maker>
      </div>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary class="information" >Description</summary>
        <div class=information>
          <slot>${this.information}</slot>
        </div>
      </details>
      <div class="card-button">
        <a href="${this.buttonLink}">
          <button class=button>${this.buttonDescription}</button>
        </a>
      </div>
    </div>
  `;

  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      information: { type: String },
      buttonLink: { type: String },
      buttonDescription: { type: String },
      fancy: { type: Boolean, reflect: true },
      topText: { type: String },
      bottomText: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
