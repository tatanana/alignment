test("getSequences()", function(){
	var mySequences1 = new Object();
	mySequences1.value = "";
	var mySequences2 = new Object();
	mySequences2.value = "gagagc";
	var mySequences3 = new Object();
	mySequences3.value = "TROLOL";
	equal(getSequences(mySequences1), 0, "Empty string object");
	equal(getSequences(mySequences2), "GAGAGC", "Small letters");
	equal(getSequences(mySequences3), "TROLOL", "Capital letters");
})