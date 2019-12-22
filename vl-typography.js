import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlTypography extends VlElement(HTMLElement){constructor(){super(`
            <style>
                @import '/node_modules/vl-ui-typography/style.css';
            </style>
            <div class="vl-typography"></div>
        `)}connectedCallback(){this.__processSlotElements();this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}disconnectedCallback(){this._observer.disconnect()}__processSlotElements(){this.__clearChildren();[...this.children].forEach(child=>{this._element.appendChild(child.cloneNode(true))})}__clearChildren(){while(this._element.hasChildNodes()){this._element.firstChild.remove()}}__observeSlotElements(callback){const observer=new MutationObserver(callback);observer.observe(this,{attributes:true,childList:true,characterData:true,subtree:true});return observer}};define("vl-typography",VlTypography);