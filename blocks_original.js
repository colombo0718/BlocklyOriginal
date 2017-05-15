Blockly.Blocks['consloe.log'] = {
	init: function() {
	this.appendValueInput("NAME")
		.appendField("console.log");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(180);
	this.setTooltip('');
	this.setHelpUrl('');
	}
};