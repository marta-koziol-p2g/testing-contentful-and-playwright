/// <reference types ="cypress"/>

context("Home Page", () => {
    beforeEach(() => {
        cy.visit("https://parcel2go.github.io")
    })

    it("should find welcome page", () => {
        cy.get("h1").contains("Blog")
    })
})

context("Blog", () => {
    beforeEach(() => {
        cy.visit("https://parcel2go.github.io/ui-static/homepage")
    })

    it("should find welcome page", () => {
        cy.get("h1").contains("Learning Playwright Workflows")
    })
})