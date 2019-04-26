function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

$(document).ready(function() {
	$('input.colorpicker').each(function(idx, el) {
		var picker = new CP(el);
		function change(color) {
			
			$(el).val('rgb(' + hexToRgb(color) + ')');
		}
		picker.on('change', change);
	});
});
