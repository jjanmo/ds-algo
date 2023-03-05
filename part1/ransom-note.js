//문제
/*
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

랜섬노트란, 잡지나 신문의 글자를 오려서 만든 글을 뜻한다.
위의 문제는 주어진 매거진이라는 문자열을 단어별로 오려서(잘라내서) 주어진 문자열(str)을 만들 수 있는지에 대한 여부를 리턴하시오
*/

(function () {
	const magazine =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

	//sol1)
	function ransomNote(str, magazine) {
		const strArray = str.split(' ');
		let magazineArray = magazine.split(' ');
		let isExisted = true;

		for (let i = 0; i < strArray.length; i++) {
			if (!magazineArray.includes(strArray[i])) {
				isExisted = false;
				return isExisted;
			}

			const _index = magazineArray.indexOf(strArray[i]);
			magazineArray.splice(_index, 1);
		}

		return isExisted;
	}

	console.log(ransomNote('sit ad est sint', magazine));
	//true
	console.log(ransomNote('sit ad est love', magazine));
	//false
	console.log(ransomNote('sit ad est sint in in', magazine));
	//true
	console.log(ransomNote('sit ad est sint in in in in', magazine));
	//false

	//sol2)
	function _ransomNote(str, magazine) {
		const magazineObj = {};
		const strArray = str.split(' ');
		let isExisted = true;

		magazine.split(' ').forEach((word) => {
			if (!magazineObj[word]) {
				magazineObj[word] = 1;
			} else {
				magazineObj[word]++;
			}
		});

		for (let i = 0; i < strArray.length; i++) {
			if (magazineObj[strArray[i]]) {
				magazineObj[strArray[i]]--;
			} else if (!magazineObj[strArray[i]] || magazineObj[strArray[i]] === 0) {
				isExisted = false;
				return isExisted;
			}
		}

		return isExisted;
	}

	console.log(_ransomNote('sit ad est sint', magazine));
	//true
	console.log(_ransomNote('sit ad est love', magazine));
	//false
	console.log(_ransomNote('sit ad est sint in in', magazine));
	//true
	console.log(_ransomNote('sit ad est sint in in in in', magazine));
	//false
})();
