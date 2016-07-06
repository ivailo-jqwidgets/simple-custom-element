﻿var jqxHoyProto = Object.create(HTMLElement.prototype);

jqxHoyProto.createdCallback = function () {
    var imgSrc = this.getAttribute('imgSrc'),
        imgLabel = this.getAttribute('imgLabel');

    this.innerHTML = "<img src='"+imgSrc+"'><br/><span>"+imgLabel+"</span>";
};

var jqxHoy = document.registerElement('jqx-hoy', {
    prototype: jqxHoyProto
});

