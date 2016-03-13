
/* Merge two sorted javascript array and return sorted array */

function mergeLists(l1, l2) {

	var i=0;
	var j=0;
	var mergeList = [];

	while (i < l1.length && j < l2.length) {
		if(l1[i] < l2[j]) {
			mergeList.push(l1[i++]);
		} else {
			mergeList.push(l2[j++]);
		}
	}

	if(i < l1.length) {
		mergeList.push.apply(mergeList, l1.slice(i));	
	}

	if(j < l2.length) {
		mergeList.push.apply(mergeList, l2.slice(j));
	}

	return mergeList;
}

function main() {

	var l1 = [1,2,3,9]; 
	var l2 = [4,5,6,7,8,99]; 
	console.log('l1=', l1);
	console.log('l2=', l2);
	var mergedList = mergeLists(l2, l1);
	console.log('mergedList=', mergedList);
}

main();
