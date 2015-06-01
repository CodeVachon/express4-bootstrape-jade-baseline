var request = require('supertest'),
    app = require('./../app'),
    fs = require('fs')
;

describe("The Index Page", function() {
    it('Returns a 200 status code', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(done)
        ;
    });

    it('Returns HTML', function(done) {
        request(app)
            .get('/')
            .expect(/html/gi)
            .end(done)
        ;
    });

    it('Returns the Correct JS files', function(done) {
        request(app)
            .get('/')
            .expect(function(reponse) {
                var jsFileArray = app.get('jsFiles');
                if (!Array.isArray(jsFileArray)) { throw new Error("Expected jsFiles to be an [Array], Got: ["+typeof jsFileArray+"]"); }
                for (var i=0,x=jsFileArray.length; i<x; i++) {
                    if (!/.js$/i.test(jsFileArray[i])) { throw new Error("Expected ["+jsFileArray[i]+"] to be a JS file"); }
                    if (!reponse.text.indexOf(jsFileArray[i]) == -1) { throw new Error("Expected to find ["+jsFileArray[i]+"] in the response"); }
                }
            })
            .end(done)
        ;
    });

    it('Returns the Correct CSS files', function(done) {
        request(app)
            .get('/')
            .expect(function(reponse) {
                var cssFileArray = app.get('cssFiles');
                if (!Array.isArray(cssFileArray)) { throw new Error("Expected cssFiles to be an [Array], Got: ["+typeof cssFileArray+"]"); }
                for (var i=0,x=cssFileArray.length; i<x; i++) {
                    if (!/.css$/i.test(cssFileArray[i])) { throw new Error("Expected ["+cssFileArray[i]+"] to be a CSS file"); }
                    if (!reponse.text.indexOf(cssFileArray[i]) == -1) { throw new Error("Expected to find ["+cssFileArray[i]+"] in the response"); }
                }
            })
            .end(done)
        ;
    });
});
