class Gyemant {
    shortdigInput?: HTMLInputElement | null;
    longdigInput?: HTMLInputElement | null;
    materialAreaInput?: HTMLInputElement | null;
    kiteAreaInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.shortdigInput = document.querySelector('#shortdig');
        this.longdigInput = document.querySelector('#longdig');
        this.materialAreaInput = document.querySelector('#materialArea');
        this.kiteAreaInput = document.querySelector('#kiteArea');
        this.calcButton = document.querySelector('#calcButton');
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const shortdig = Number(this.shortdigInput?.value);
        const longdig = Number(this.longdigInput?.value);
        const endMaterialArea = this.calcMaterialArea(shortdig, longdig)*1.1 * 2;
        const kiteArea = this.calcKiteArea(shortdig, longdig);
        this.renderResult(endMaterialArea, kiteArea);
    }
    calcMaterialArea(shortdig: number, longdig: number):number {
        return shortdig * longdig;
    }
    calcKiteArea(shortdig: number, longdig: number):number {
        return shortdig*longdig/2;
    }
    renderResult(endMaterialArea: number, kiteArea: number): void {
        this.materialAreaInput!.value = String(endMaterialArea);
        this.kiteAreaInput!.value = String(kiteArea);
    }
}

new Gyemant();
