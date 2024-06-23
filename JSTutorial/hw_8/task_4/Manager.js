class Manager extends ITSpecialist{
    #isScrumMaster
    constructor() {
        super();
        this.#isScrumMaster = true;
    }
    get isScrumMaster() {
        return this.#isScrumMaster;
    }
}