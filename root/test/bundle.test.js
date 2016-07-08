/**
 * For more detail, you could see here:
 * @see http://api.qunitjs.com/
 */
QUnit.test("$.clone test", function( assert ) {
    var obj = {name: 'codemarker',age: 23};
    var cloneObj = $.clone(obj);
    assert.equal(cloneObj.name, 'codemarker', 'Passed!');
});


QUnit.test("$.inArray test", function( assert ) {
    var arr = [1, 2, 3];
    assert.equal($.inArray(arr, 1),  true, 'Passed!');
});

