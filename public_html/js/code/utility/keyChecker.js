/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var keys = new Map();
var pressFrame = new Map();
var releaseFrame = new Map();

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    keys.set(code, true);
    pressFrame.set(code,true);
};

window.onkeyup= function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    keys.set(code, false);
    releaseFrame.set(code,true);
};

//MUST BE CALLED AT THE END OF EACH FRAME!
function resetKeys(){
    pressFrame = new Map();
    releaseFrame = new Map();
};

//Checks whether a key is pressed
function keyPressed(keycode){
    if(!keys.has(keycode)){
        keys.set(keycode, false);
    }
    return keys.get(keycode);
};

//Checks if this is the first frame a key is pressed
function firstPress(keycode){
    if(!pressFrame.has(keycode)){
        pressFrame.set(keycode, false);
    }
    return pressFrame.get(keycode);
};

//Checks if this is the frame a key was released in.
function firstRelease(keycode){
    if(!releaseFrame.has(keycode)){
        releaseFrame.set(keycode, false);
    }
    return releaseFrame.get(keycode);
};