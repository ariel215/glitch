class XPDot extends HTMLElement{
    constructor(){
        super();
    }

    Mark(){
    this.style.backgroundColor='black';
    }
}

class ProgressGridBlock extends HTMLElement {
    constructor(){
    super();
    this.marked = 0;
    const root = this.attachShadow({mode: 'open'});
    const style = document.createElement('link');
    style.setAttribute("href", "css/progress.css");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    root.appendChild(style);

    for (let i = 0; i < 5; i++){
        let dot = document.createElement('div');
        dot.setAttribute('class', "xp-dot");
        dot.style.gridColumn = i+1;
        console.log('adding dot ' + i);
        root.appendChild(dot)
        }
    }

    Mark() {
    dots = this.getElementsByTagName('div');
    dots[this.marked].style.backgroundColor = 'black';
    this.marked += 1;
    }
}

class ProgressGrid extends HTMLElement {
    constructor() {
    super();
    const root = this.attachShadow({mode: 'open'});
    const style = document.createElement('link');
    style.setAttribute("href", "css/progress.css");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    root.appendChild(style);
    title = document.createElement("h2");
    title.innerHTML = "Quest XP";
    this.div = document.createElement("div");

    console.debug("Set Style");
    }

    connectedCallback(){
        let root = this.shadowRoot;
        let ndots = parseInt(this.getAttribute('dots'));
        let nblocks = ndots  / 5;
        if (ndots % 5 > 0) {nblocks += 1;}
        console.debug(`${nblocks} dots`);
        const dim = Math.ceil(Math.sqrt(nblocks));
        this.style.display = "grid";
        this.style.GridTemplateColumns=`repeat( ${dim}, 1fr);`;
        this.style.GridTemplateRows = `repeat(${dim}, 1fr);`;
        console.debug(`Making ${nblocks} blocks`);
        for (let i = 0; i < nblocks; i++){
            let block = document.createElement('progress-grid-block');
            block.style.gridColumn = i % dim + 1;
            block.style.gridRow = i / dim + 1;
            root.appendChild(block);
            }
    }
}


customElements.define('xp-dot', XPDot)
customElements.define('progress-grid-block', ProgressGridBlock);
customElements.define('progress-grid', ProgressGrid)