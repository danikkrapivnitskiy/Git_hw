class Developer extends ITSpecialist{
    #isWritingUnitTests
    constructor() {
        super();
        this.#isWritingUnitTests = true;
    }
    get isWritingUnitTests() {
        return this.#isWritingUnitTests;
    }
}