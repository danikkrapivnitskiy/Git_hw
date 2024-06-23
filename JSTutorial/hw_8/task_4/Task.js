class Task extends ITSpecialist {
    #featureName
    #userStoryNumber
    #estimations

    constructor(featureName, userStoryNumber, estimations) {
        super();
        this.featureName = featureName
        this.userStoryNumber = userStoryNumber
        this.#estimations = estimations
    }

    get featureName() {
        return this.#featureName
    }
}