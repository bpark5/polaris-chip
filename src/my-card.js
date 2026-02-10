import { LitElement, html, css } from 'lit';

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
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) .card {
        border-color: var(--my-card-fancy-border-color, #000000);
      }
      .card {
      max-width: 400px;
      background-color: var(--my-card-background-color, #eeeeee);
      padding: 4px;
      margin: 16px;
      border: 4px var(--my-card-border-color, #000) solid;
      }

      .heading {
      font-size: 24px;
      font-family: Arial;
      text-transform: uppercase;
      text-decoration-line: underline;
      text-align: center;
      margin-bottom: 16px;
      color: var(--my-heading-color, #000);
      }

      .tiger-image {
      border: 8px var(--my-image-border-color, #000) solid;
      display: block;
      margin: auto;
      margin-bottom: 8px;
      width: 200px;
      }

      .information {
      font-family: arial;
      margin: 16px;
      font-size: 16px;
      color: var(--my-information-color, #000);
      }

      .hax-button {
      color: var(--my-button-font-color,#fff);
      background-color: var(--my-button-background-color, #000);
      font-size: 16px;
      padding: 4px;
      display: block;
      margin: auto;
      }
      
      .card-container {
        display: flex;
      }`;
  }

  render() {
    return html`
    <div class=card>
    <div>
      <h1 class=heading>${this.title}</h1>
    </div>
    <div>
      <img class=tiger-image src="${this.image}" alt="${this.alt}">
    </div>
    <div class=information>
      <p><slot>${this.information}</slot></p>
    </div>
    <div class="card-button">
      <a href="${this.buttonLink}">
        <button class=hax-button>${this.buttonDescription}</button>
      </a>
    </div>
    </div>
    
    <details ?open="${this.fancy}">
      <summary>Description</summary>
      <div>
        <slot>${this.description}</slot>
      </div>
    </details>`;

  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      information: { type: String },
      buttonLink: { type: String },
      buttonDescription: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
