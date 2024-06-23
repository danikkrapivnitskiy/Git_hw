class QA extends ITSpecialist{
    #isAqa;
    constructor() {
        super();
        this.#isAqa = true;
    }
    get isAqa() {
        return this.#isAqa;
    }
}