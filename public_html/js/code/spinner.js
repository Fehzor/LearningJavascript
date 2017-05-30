/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var i = 0;

function spinLoop(){
    i = i + .1;
    postMessage(i);
    setTimeout("spinLoop()", 100);
};

spinLoop();