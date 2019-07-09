/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyButtons {
    'buttonTitle': string;
  }
  interface MyCard {
    /**
    * The middle name
    */
    'content': string;
    'openModal': () => Promise<void>;
    /**
    * The first name
    */
    'title': string;
  }
  interface MyComponent {
    /**
    * The middle name
    */
    'content': string;
    'openModal': () => Promise<void>;
    /**
    * The first name
    */
    'title': string;
  }
  interface MyFooter {
    'haederTitle': string;
  }
  interface MyHeader {
    'haederTitle': string;
  }
}

declare global {


  interface HTMLMyButtonsElement extends Components.MyButtons, HTMLStencilElement {}
  var HTMLMyButtonsElement: {
    prototype: HTMLMyButtonsElement;
    new (): HTMLMyButtonsElement;
  };

  interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {}
  var HTMLMyCardElement: {
    prototype: HTMLMyCardElement;
    new (): HTMLMyCardElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {}
  var HTMLMyFooterElement: {
    prototype: HTMLMyFooterElement;
    new (): HTMLMyFooterElement;
  };

  interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {}
  var HTMLMyHeaderElement: {
    prototype: HTMLMyHeaderElement;
    new (): HTMLMyHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'my-buttons': HTMLMyButtonsElement;
    'my-card': HTMLMyCardElement;
    'my-component': HTMLMyComponentElement;
    'my-footer': HTMLMyFooterElement;
    'my-header': HTMLMyHeaderElement;
  }
}

declare namespace LocalJSX {
  interface MyButtons extends JSXBase.HTMLAttributes<HTMLMyButtonsElement> {
    'buttonTitle'?: string;
  }
  interface MyCard extends JSXBase.HTMLAttributes<HTMLMyCardElement> {
    /**
    * The middle name
    */
    'content'?: string;
    /**
    * The first name
    */
    'title'?: string;
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The middle name
    */
    'content'?: string;
    /**
    * The first name
    */
    'title'?: string;
  }
  interface MyFooter extends JSXBase.HTMLAttributes<HTMLMyFooterElement> {
    'haederTitle'?: string;
  }
  interface MyHeader extends JSXBase.HTMLAttributes<HTMLMyHeaderElement> {
    'haederTitle'?: string;
  }

  interface IntrinsicElements {
    'my-buttons': MyButtons;
    'my-card': MyCard;
    'my-component': MyComponent;
    'my-footer': MyFooter;
    'my-header': MyHeader;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

