module.exports = function(field) {

	let val = field.getValue();
    let value = field.momentizeValue(val);

  	return value.start.isValid() && value.end.isValid() && value.end>=value.start;

}
