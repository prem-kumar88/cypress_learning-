describe("Anime API  Testing", () => {
     it("fetch random quotes", () => {
      cy.request("/random").as("animeRequest"); // url in config.js
      cy.get("@animeRequest").then((data) => {
        expect(data.status).to.eq(200);
        expect(data.body.status).to.eq("success");
      })
    }) 
   
    it("check for array", () => {
      cy.request("https://api.chucknorris.io/jokes/categories").as("jokes");
      cy.get("@jokes").then(data => {
        expect(data.status).to.eq(200);
        assert.isArray(data.body, "Jokes cat is an Array")
      })
    })
  })

  /*
 status: 200(success), 201(data is created), 404 (not found), 500(internal servver error)
  */