
/* Merge two sorted javascript array and return sorted array */

function mergeLists(l1, l2) {
	
	var max_iter = (l1.length > l2.length )? l1.length:l2.length;
	var smallList = (l1.length > l2.length )? l2:l1;
	var bigList = (l2.length > l1.length )? l2:l1;
	var s=0, b=0;
	var totalIter = 0;
	while(s < max_iter && b < max_iter) {
		if(smallList[s] < bigList[b]) {
			bigList.splice(b, 0, smallList[s]);
			s++;
		} else {
			b++;
		}

		if(s > smallList.length) {
			break;
		}
		++totalIter;
	}
	console.log("total iterations=", totalIter);
	return bigList;
}

function main() {

	var l1 = [1,3,5,7,98,99,100];
	var l2 = [2,4,6,32,33,102,103,110,111,112,115,119];

	var mergedList = mergeLists(l1, l2);

	console.log('l1=', l1);
	console.log('l2=', l2);
	console.log('mergedList=', mergedList);
}

main();
