/// <reference types ="cypress"/>

context("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("should find welcome page", () => {
        cy.get("h1").contains("Blog")
    })
})

context("Blog", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/posts/learning-playwright-workflows")
    })

    it("should find welcome page", () => {
        cy.get("h1").contains("Learning Playwright Workflows")
    })
})