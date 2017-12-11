
$(function () {

    var toolboxText = document.getElementById('toolbox').outerHTML;
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);

    Blockly.inject('workspce_block', {
        grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        media:'media/',
        toolbox: toolboxXml,
        trashcan: true,
        zoom: {
            controls: true,
            wheel: false
        }
    });

});