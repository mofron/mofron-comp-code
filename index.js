/**
 * @file mofron-comp-{@comp-name}/index.js
 * @brief component module template for developper
 * @license MIT
 */
const Text = require("mofron-comp-text");

module.exports = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name("Code");
            
	    /* init config */

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
	    this.rootDom(new mofron.class.Dom("pre",this));

            this.style({ "overflow" : "scroll" });
            
            let code = new mofron.class.Dom("code", this);
            this.childDom().child(code);
            this.childDom(code);
	    
	    this.size("0.16rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
