// @TODO хочу подключить плавное удаление анимацией!


const myApp = angular.module('myApp', ['ngAnimate']);
// пустой массив для создания нового модуля myApp (не просто получение)
myApp.controller('studController', function($scope, $http) {
	let storage;
	$http({method: 'GET', url: './index.json'})
		.then(function(data, status) {
			$scope.students = data.data;
			storage = Object.assign({}, $scope.students);
			//вернула всех на место с помощью копирования
			//console.log(storage);
		});
		$scope.checkForms = {};
		
		$scope.buttonReturn = function () {
			// debugger;
			storageCopy = Object.assign({}, storage);
			$scope.students = storageCopy;
			//console.log(storage);
			//console.log($scope.students);
		}

		$scope.buttonDelete = function () {
//debugger;
			// console.log($scope.checkForms);
			const finish = Object.keys($scope.students).length;
			//лучшие практики (не работал цикл, пока не вынесла в отдельную константу). Цикл поднимал по индексу
			for ( $scope.id = 1; $scope.id <= finish; $scope.id++) {
			//нашла баг, надо for each, наверное!
				if ($scope.checkForms[$scope.id] == true) {
					delete $scope.students[$scope.id];
				// console.log($scope.students);
				}
			}
			$scope.checkForms = {};
		}
			$scope.mainCheckbox = false;


		    $scope.$watch('mainCheckbox', function() {
		    	// про кнопку selectall 
		    	if ($scope.students === undefined) {
		    		return;
		    	}

		    	 console.log('students') 
		    	console.log($scope.students);

		    	console.log('checkboxes')
		    	console.log($scope.checkForms);

//подумать - лучше ли переделать for each? получаю ключи и для каждого выставляю 
		    	// for (let i = 0; i <= Object.keys($scope.students).length; i++) {
		    	//конвертирую в форич
		    	const studNums = Object.keys($scope.students)
		    	studNums.forEach(function(studNum){

		    		$scope.checkForms[studNum] = $scope.mainCheckbox;
		    	//$scope.mainCheckbox - переключатель на "чекд" выставляю
		    	});
			});

});
 



// fetch('./index.json')
// 	.then(function(response) {
// 		return response.json();
// 	}).then(json => {
// 		studentData = json;
// 		let ol = document.createElement('ol');
// 		let buttonDelete = document.createElement('input');
// 		buttonDelete.type = "button"; 
// 		buttonDelete.name = "DELETE";
// 		buttonDelete.value = "DELETE";
// 		document.body.appendChild(buttonDelete);
// 		buttonDelete.classList.add('buttonDelete');
// //Создана и добавлена кнопка делит
// 		let div = document.getElementById('wrap');
// 		wrap.classList.add('wrap');
// //Создана и добавлена обертка к списку

// 		for (let i = 1; i <= Object.keys(studentData).length; i++) {
// 			// let li = document.createElement('li');
// 			let checkbox = document.createElement('input');

// 			checkbox.type = "checkbox";
// 			checkbox.id = "checkbox"+i; 
// 			checkbox.name = "name"+i; 
// 			checkbox.classList.add('checkbox');
// 			//debugger;
// 			div.appendChild(ol);

// 			ol.appendChild(li);
// 			li.innerHTML = `<label for=checkbox${i}> ${studentData[i]} </label>`;

// 			li.appendChild(checkbox);
// 			}
// //произошел цикл, добавив список на страницу
// 			let checkboxes = document.getElementsByClassName('checkbox');

// 			buttonDelete.onclick = function () {
// 			// если чекбоксы отмечены
// 				for (let i = 0; i < checkboxes.length; i++) {
// 					if(checkboxes[i].checked) {
// 	// происходит их удаление
// 						checkboxes[i].parentNode.style.display = "none"; 
// 					}
// 				}		
// 			}
			

// 	});




// // 1. @TODO: ф-ция для генерации html списка
// // принимает массив юзеров в качестве аргумента и добавляет <li> элементы с текстом в список
// // <div class="line" id="studentOne"></div>
// //<ul> {here goes list items} </ul>

// // 3. и навешивает обработчик нажаития на кнопку Удалить, которое 
// // удалит элемент из массива и вызовет повторную генерацию списка
