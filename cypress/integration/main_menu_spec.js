describe("The Main Menu", () => {
  it("should play background music on start", () => {
    const expectBackgroundMusicPlaying = () => {
      cy.window().then((window) => {
        const howlTracks = window.Howler._howls;
        let playing = false;
        howlTracks.forEach((howlTrack) => {
          if (howlTrack.playing() && howlTrack._src.indexOf("solace") >= 0) {
            playing = true;
          }
        });
        expect(playing).to.equal(true);
      });
    };

    cy.visit("/");
    cy.wait(3000);
    expectBackgroundMusicPlaying();
  });

  it("should contain a button that allows me to start a new game", () => {
    cy.findByRole("button", { name: /Neues Spiel starten/i }).click();
    cy.url().should("include", "/game");
  });
});
