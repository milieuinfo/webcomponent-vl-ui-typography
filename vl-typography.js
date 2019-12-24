import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlTypography extends VlElement(HTMLElement){constructor(){super(`
            <style>
                @import '/node_modules/vl-ui-typography/style.css';
            </style>
            <div class="vl-typography"></div>
        `);this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}connectedCallback(){this.__processSlotElements()}disconnectedCallback(){this._observer.disconnect()}__processSlotElements(){this.__clearChildren();[...this.childNodes].forEach(element=>{this._observer.observe(element,{attributes:true,childList:true,characterData:true,subtree:true});this._element.appendChild(element.cloneNode(true))})}__clearChildren(){while(this._element.hasChildNodes()){this._element.firstChild.remove()}}__observeSlotElements(callback){return new MutationObserver(callback)}};define("vl-typography",VlTypography);