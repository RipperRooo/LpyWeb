/**
 * @file main.js
 * @author Renan Berruex <renan.berruex@epitech.eu>
 * @version 0.1
cd C:\Users\Renan\Documents\Stage INRIA\lpyWEB
actiate lpy
set FLASK_APP=communication.py
flask run
 */

function Init()
{
	var LString = document.getElementById("htmlLString").innerHTML;		
	console.log(LString);
    var dTurtle = new drawTurtle();
    var wTurtle = new webTurtle(dTurtle);		

	if (LString == "Syntax error")
		console.log("Syntax error");
	else {
		var lstrParser = new LStringParser();
		//ATTENTION PROBLEME AVEC LES SYMBOLES VIRUGULES (dans le lstring parser)
		lstrParser.lstr = LString;
		lstrParser.ParseLString();
		console.log(lstrParser.result);
		wTurtle.Start(lstrParser.result);
	}

    // Compteur de FPS
    //var fpsDiv = document.getElementById("fpsCounter");

    // Render loop
    dTurtle.engine.runRenderLoop(function()
    {
        //UpdateFPS();
        dTurtle.scene.render();
    });

    // Resize event
    window.addEventListener("resize", function()
    {
        dTurtle.engine.resize();
    });
}